import { PortableText, type SanityDocument } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { client } from "@/sanity/lib/client";
import Link from "next/link";
import { blogsTypes1 } from "@/sanity/schemaTypes/blogsTypes";

// Query for fetching either a post or a blog based on the slug
const POST_QUERY = `*[_type in ["post", "blogs"] && slug.current == $slug][0]`;

const { projectId, dataset } = client.config();
const urlFor = (source: SanityImageSource) =>
  projectId && dataset
    ? imageUrlBuilder({ projectId, dataset }).image(source)
    : null;

const options = { next: { revalidate: 30 } };

export default async function PostPage({
  params,
}: {
  params: { slug: string };
}) {
  try {
    // Fetch the document (either post or blog)
    const post = await client.fetch<SanityDocument | null>(
      POST_QUERY,
      params,
      options
    );

    // If no document is found, return a 404-like UI
    if (!post) {
      return (
        <main className="container mt-16 mx-auto min-h-screen max-w-4xl p-8">
          <h1 className="text-4xl font-bold mb-8">Post not found</h1>
          <Link href="/" className="hover:underline">
            ← Back to posts
          </Link>
        </main>
      );
    }

    // Construct the image URL if an image is available
    const postImageUrl = post.image
      ? urlFor(post.image)?.width(550).height(310).url()
      : null;

    return (
      <main className="container mt-16 mx-auto min-h-screen max-w-4xl p-8 flex flex-col gap-4">
        <Link href="/" className="hover:underline">
          ← Back to posts
        </Link>
        {postImageUrl && (
          <img
            src={postImageUrl}
            alt={post.title}
            className="aspect-video rounded-xl"
            width="550"
            height="310"
          />
        )}

        <h1 className="text-4xl font-bold mb-8">{post.title}</h1>
        <div className="prose">
          <p>Published: {new Date(post.publishedAt).toLocaleDateString()}</p>
          {Array.isArray(post.body) && <PortableText value={post.body} />}
        </div>
      </main>
    );
  } catch (error) {
    console.error("Error fetching post or blog:", error);

    // Display an error page
    return (
      <main className="container mt-16 mx-auto min-h-screen max-w-4xl p-8">
        <h1 className="text-4xl font-bold mb-8">Something went wrong</h1>
        <p className="text-lg">Please try again later.</p>
        <Link href="/" className="hover:underline">
          ← Back to posts
        </Link>
      </main>
    );
  }
}
