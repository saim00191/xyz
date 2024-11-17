import Link from "next/link";
import { type SanityDocument } from "next-sanity";
import { client } from "@/sanity/lib/client";
import Wreaper from "@/components/Wreaper";

const POSTS_QUERY = `*[
  _type == "post" && defined(slug.current)
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

export default async function BlogPage() {
  const posts = await client.fetch<SanityDocument[]>(POSTS_QUERY, {}, options);

  return (
    <div >
      <Wreaper>
        <main className="container  item relative min-h-screen py-16 flex flex-col gap-8">
          <h1 className=" font-lora  font-bold text-[36px] leading-[46px] text-[#495057] ">
            Popular topics
          </h1>
          <div className="flex flex-col sm:flex-row sm:justify-between font-lora font-bold text-[#495057] text-[12px] leading-[25px]">
            <ul className="flex gap-2 justify-center sm:justify-start mb-2 sm:mb-0">
              <li className="hover:text-[#D4A373] cursor-pointer">All</li>
              <li className="hover:text-[#D4A373] cursor-pointer">Adventure</li>
              <li className="hover:text-[#D4A373] cursor-pointer">Travel</li>
              <li className="hover:text-[#D4A373] cursor-pointer">Fashion</li>
              <li className="hover:text-[#D4A373] cursor-pointer">Technology</li>
              <li className="hover:text-[#D4A373] cursor-pointer">Branding</li>
            </ul>
            <li className="flex justify-center sm:justify-end items-center hover:text-[#D4A373] cursor-pointer">
              View All
            </li>
          </div>

          <ul className="grid   gap-8 sm:grid-cols-2 lg:grid-cols-3 xxl:grid-cols-4">
            {posts.map((post: any) => (
              <li className="hover:underline bg-white rounded-lg w-full" key={post._id}>
                <Link href={`/${post.slug.current}`}>
                  {post.image && post.image.asset?.url && (
                    <img
                      src={post.image.asset.url}
                      alt={post.title}
                      className="mb-4 w-full h-48 object-cover rounded-lg"
                    />
                  )}
                  <h2 className="text-xl py-2 font-semibold">{post.title}</h2>
                  <p className="text-gray-600 ">
                    {new Date(post.publishedAt).toLocaleDateString()}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        </main>
      </Wreaper>
          </div>
          
  );
}


