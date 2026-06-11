"use client";

export default function ShopifyTrust() {
  const advantages = [
    {
      icon: "⚡",
      title: "Fast & Reliable Infrastructure",
      desc: "Shopify's global CDN and enterprise-ready uptime keep your store fast and available during every launch and sale.",
    },
    {
      icon: "🔒",
      title: "Secure Payment Ecosystem",
      desc: "PCI-compliant checkout, Shop Pay optimization, and secure payments so customers can buy with confidence.",
    },
    {
      icon: "📈",
      title: "Scalable Commerce Platform",
      desc: "Grow from a single storefront to Shopify Plus, multi-country stores, and headless commerce without a rewrite.",
    },
    {
      icon: "✍️",
      title: "Easy Store Management",
      desc: "A polished admin experience and smart workflows make product, order, and campaign management simple.",
    },
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-28 bg-[#12131c] border-t border-b border-[#2a2e40]">
      <div className="service-page-container">
        <div className="text-center mb-12 lg:mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="block w-7 h-0.5 bg-[#FFFFFF]" />
            <span className="text-xs font-semibold uppercase tracking-widest text-[#BCC1CA]">
              Platform Advantages
            </span>
            <span className="block w-7 h-0.5 bg-[#FFFFFF]" />
          </div>
          <h2 className="service-section-heading mb-3">
            Why Leading Brands Choose Shopify
          </h2>
          <p className="text-[#BCC1CA]/80 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            Shopify powers over 4.6 million stores worldwide. It&apos;s the platform built to convert browsers into buyers — and to scale without friction.
          </p>
        </div>

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
