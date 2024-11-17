import Link from "next/link";
import { type SanityDocument } from "next-sanity";
import { client } from "@/sanity/lib/client";
import Wreaper from "@/components/Wreaper";

const POSTS_QUERY = `*[
  _type == "blogs" && defined(slug.current)
]|order(publishedAt desc)[0...12]{
  _id,
  title,
  slug,
  publishedAt,
  image {
    asset -> {
      url
    }
  }
}`;

const options = { next: { revalidate: 30 } };

export default async function BlogPageOne() {
  const posts = await client.fetch<SanityDocument[]>(POSTS_QUERY, {}, options);

  return (
    <div >
      <Wreaper>
              <main className="container item relative  py-16 flex flex-col gap-8">
              <h2 className="font-lora  font-bold text-[36px] leading-[46px] text-[#495057]">
  Editor&rsquo;s Pick
</h2>

  <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
    {posts.map((post: any) => (
      <li
        className="hover:underline relative bg-white  w-full"
        key={post._id}
      >
        <Link href={`/${post.slug.current}`}>
          <div className="relative">
            {post.image && post.image.asset?.url && (
              <img
                src={post.image.asset.url}
                alt={post.title}
                className="w-full h-[350px] object-cover "
              />
            )}
            <div className="absolute justify-end p-9 inset-0 hover:underline bg-black bg-opacity-50 flex flex-col gap-2  text-white rounded-lg">
              <p className="text-sm">
                {new Date(post.publishedAt).toLocaleDateString()}
              </p>
                        <h2 className="text-xl font-lora font-bold">{post.title}</h2>
                        <p className="gap-0 opacity-50  font-lora text-xs font-normal leading-5 text-left underline from-font decoration-none text-[#E5E5E5]">
                        Progressively incentivize cooperative systems through technically sound functionalities. The credibly productivate seamless data.
            </p>
            </div>
          </div>
        </Link>
      </li>
    ))}
  </ul>
</main>

      </Wreaper>
          </div>
          
  );
}

