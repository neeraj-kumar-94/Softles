"use client";

export default function WordPressTrust() {
  const advantages = [
    {
      icon: "🧩",
      title: "Flexible CMS",
      desc: "Manage any type of content — from blogs and portfolios to complex product catalogs — with a customisable admin interface your team can actually use.",
    },
    {
      icon: "🔍",
      title: "SEO Friendly",
      desc: "Clean semantic markup, fast page speeds, schema support, and deep SEO plugin integrations make WordPress an ideal foundation for organic search growth.",
    },
    {
      icon: "⚙️",
      title: "Scalable Architecture",
      desc: "Start small and grow without rebuilding. WordPress scales from brochure sites to enterprise platforms with 100k+ products and millions of monthly visitors.",
    },
    {
      icon: "✍️",
      title: "Easy Content Management",
      desc: "Empower your marketing team to publish, edit, and update content without developer involvement — no coding knowledge required after launch.",
    },
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-28 bg-[#12131c] border-t border-b border-[#2a2e40]">
      <div className="service-page-container">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="block w-7 h-0.5 bg-[#FFFFFF]" />
            <span className="text-xs font-semibold uppercase tracking-widest text-[#BCC1CA]">
              Platform Advantages
            </span>
            <span className="block w-7 h-0.5 bg-[#FFFFFF]" />
          </div>
          <h2 className="service-section-heading mb-3">
            Why Businesses Choose WordPress
          </h2>
          <p className="text-[#BCC1CA]/80 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            WordPress powers over 43% of the web for good reason — it&apos;s flexible,
            scalable, and built for long-term growth.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {advantages.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#181B23] border border-[#2a2e40] rounded-2xl p-5 sm:p-8 hover:border-[#3a4052] hover:bg-[#1a1e2a] transition-all duration-300"
            >
              <div className="w-12 h-12 bg-[rgba(220,66,66,0.1)] border border-[rgba(220,66,66,0.25)] rounded-lg flex items-center justify-center mb-4 text-xl">
                {item.icon}
              </div>
              <h3 className="text-[#FFFFFF] font-semibold text-base mb-2">
                {item.title}
              </h3>
              <p className="text-[#BCC1CA]/70 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
