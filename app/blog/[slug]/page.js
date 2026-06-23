import { client } from "@/lib/sanity";
import { urlFor } from "@/lib/sanityImage";
import { PortableText } from "@portabletext/react";

export const revalidate = 60;

export default async function BlogDetail({ params }) {
  const post = await client.fetch(
    `
    *[_type == "post" && slug.current == $slug][0]{
      title,
      publishedAt,
      mainImage,
      excerpt,
      body
    }
    `,
    {
      slug: params.slug,
    }
  );


  if (!post) {
    return (
      <section className="softles-section-primary">
        <div className="service-page-container">
          <div className="softles-card text-center py-20">
            <h2 className="text-white text-2xl font-bold">
              Article Not Found
            </h2>
          </div>
        </div>
      </section>
    );
  }


  return (
    <section className="softles-section-primary">
      <div className="service-page-container max-w-5xl">

        {/* Header */}
        <div className="mb-10">

          <div className="softles-eyebrow mb-4">
            <span className="softles-eyebrow-line" />
            <span className="softles-eyebrow-text">
              Blog Article
            </span>
          </div>


          <h1 className="text-3xl md:text-5xl font-bold text-[#FFFFFF] leading-tight mb-6">
            {post.title}
          </h1>


          <div className="flex items-center gap-4">

            <time className="text-xs uppercase tracking-wider text-[#BCC1CA] border border-[#2a2e40] rounded-full px-4 py-2">
              {new Date(post.publishedAt).toLocaleDateString(
                "en-US",
                {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                }
              )}
            </time>

          </div>

        </div>


        {/* Featured Image */}
        {post.mainImage && (
          <div className="softles-card overflow-hidden mb-10">

            <img
              src={
                urlFor(post.mainImage)
                  .width(1200)
                  .height(700)
                  .url()
              }
              alt={post.title}
              className="
              w-full
              h-[300px]
              md:h-[550px]
              object-cover
              transition-transform
              duration-500
              hover:scale-105
              "
            />

          </div>
        )}



        {/* Content Card */}
        <div className="softles-card p-6 md:p-10">


          {post.excerpt && (
            <p className="
              text-[#BCC1CA]
              text-lg
              leading-relaxed
              mb-10
              border-l-2
              border-[#DC4242]
              pl-5
            ">
              {post.excerpt}
            </p>
          )} 

        <div className="text-[#BCC1CA] space-y-4 [ &>h2 ]:text-white [ &>h2 ]:text-2xl [ &>h2 ]:font-bold">
        <PortableText value={post.body} />
        </div>


        </div>


      </div>
    </section>
  );
}