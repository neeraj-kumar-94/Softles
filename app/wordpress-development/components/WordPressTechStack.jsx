"use client";

export default function WordPressTechStack() {
  const techs = [
    { icon: "🌐", name: "WordPress", desc: "Core CMS Platform" },
    { icon: "🛒", name: "WooCommerce", desc: "E-commerce Engine" },
    { icon: "🐘", name: "PHP", desc: "Server-side Logic" },
    { icon: "🗄️", name: "MySQL", desc: "Database Layer" },
    { icon: "🖼️", name: "Elementor", desc: "Visual Page Builder" },
    { icon: "✏️", name: "Gutenberg", desc: "Block Editor" },
    { icon: "🚀", name: "WP Engine", desc: "Managed Hosting" },
    { icon: "☁️", name: "Cloudflare", desc: "CDN & Security" },
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-28 bg-[#12131c] border-t border-b border-[#2a2e40]">
      <div className="service-page-container">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="block w-7 h-0.5 bg-[#FFFFFF]" />
            <span className="text-xs font-semibold uppercase tracking-widest text-[#BCC1CA]">
              Technology Stack
            </span>
            <span className="block w-7 h-0.5 bg-[#FFFFFF]" />
          </div>
          <h2 className="service-section-heading mb-3">
            Tools & Technologies
          </h2>
          <p className="text-[#BCC1CA]/80 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            We use battle-tested, best-in-class technologies to build WordPress
            solutions that are fast, secure, and future-proof.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {techs.map((tech, idx) => (
            <div
              key={idx}
              className="bg-[#181B23] border border-[#2a2e40] rounded-2xl p-7 text-center hover:border-[rgba(220,66,66,0.4)] hover:bg-[rgba(220,66,66,0.05)] transition-all duration-300"
            >
              <div className="text-3xl mb-3">{tech.icon}</div>
              <h4 className="font-semibold text-[#FFFFFF] text-sm mb-1">
                {tech.name}
              </h4>
              <p className="text-[#BCC1CA]/60 text-xs">{tech.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
