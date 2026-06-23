import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";

const completedJobs = [
  {
    title: "Transfer Beepr Native Application From React to React Native",
    rating: "5.0",
    dates: "Apr 1, 2026 - May 8, 2026",
    quote:
      "I would recommend any client to work with Clariana because she demonstrates expertise in her field, a commitment to excellence, and adaptability to a dynamic project environment. I absolutely plan to work with her team again!",
    amount: "$7,840.00",
    rate: "$35.00 / hr",
    hours: "224 hours",
  },
  {
    title: "Fullstack Developer Needed for Saas Company - REACT + NODE + TS + MONGO",
    dates: "Mar 23, 2026 - Apr 12, 2026",
    amount: "$60.00",
    rate: "$40.00 / hr",
    hours: "2 hours",
  },
  {
    title: "Beepr: Your Cannabis, Your Way | Code Review of MVP Built With AI Tools",
    rating: "5.0",
    dates: "Mar 30, 2026 - Apr 1, 2026",
    quote:
      "Clariana is an excellent software engineer and even better communicator. As a start-up founder with limited technical experience, she explained bottlenecks with my project and efficient + effective solutions. I am already planning to hire her again.",
    amount: "$294.00",
    rate: "$35.00 / hr",
    hours: "8 hours",
  },
  {
    title: "Printing WooCommerce Website Ecommerce",
    dates: "Nov 17, 2025 - Mar 19, 2026",
    amount: "$2,200.00",
    rate: "Fixed Price",
  },
  {
    title: "Golang Backend Developer for Multi-Vendor E-commerce Platform",
    dates: "Dec 10, 2025 - Mar 18, 2026",
    amount: "$5.00",
    rate: "Fixed Price",
  },
  {
    title: "Chrome Extension Developer",
    rating: "5.0",
    dates: "Feb 23, 2026 - Mar 9, 2026",
    quote: "great to work with. highly recommend",
    amount: "$286.67",
    rate: "$40.00 / hr",
    hours: "7 hours",
  },
  {
    title: "SEO specialist",
    dates: "Jun 29, 2014 - Jan 4, 2026",
    amount: "$434.00",
    rate: "$12.00 / hr",
    hours: "36 hours",
  },
  {
    title: "Development Team for Automation Projects",
    rating: "5.0",
    dates: "Dec 1, 2025 - Dec 12, 2025",
    amount: "$26.50",
    rate: "$53.00 / hr",
    hours: "1 hours",
  },
  {
    title: "Web App Development for Travel Challenges",
    rating: "5.0",
    dates: "Jul 29, 2025 - Nov 24, 2025",
    quote:
      "It was great working with Sergio. He and his teams are open to receive feedback throughout the project execution. I will likely have additional jobs for him in the future",
    amount: "$8,000.00",
  },
];

export default function Testimonials() {
  const { t } = useLanguage();
  const [activeIndex, setActiveIndex] = useState(0);
  const activeJob = completedJobs[activeIndex];

  const previous = () => {
    setActiveIndex((current) => (current === 0 ? completedJobs.length - 1 : current - 1));
  };

  const next = () => {
    setActiveIndex((current) => (current === completedJobs.length - 1 ? 0 : current + 1));
  };

  return (
    <section id="testimonials" className="reveal bg-transparent px-5 py-24 text-[#06315f] sm:px-6 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-4xl">
            <span className="gcg-kicker text-xs font-bold uppercase tracking-[0.2em]">{t.testimonials.eyebrow}</span>
            <h2 className="mt-5 font-serif text-4xl font-normal leading-tight tracking-tight text-[#06315f] sm:text-5xl">{t.testimonials.title}</h2>
            <p className="mt-4 text-lg leading-8 text-[#1f5f99]">Completed jobs (3845)</p>
          </div>

          <div className="flex gap-3">
            <button
              type="button"
              onClick={previous}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-[#0080ff]/15 text-2xl font-black text-slate-200 transition hover:border-[#00e5ff] hover:bg-[#00e5ff]/10 hover:text-[#00e5ff]"
              aria-label="Previous testimonial"
            >
              ←
            </button>
            <button
              type="button"
              onClick={next}
              className="flex h-12 w-12 items-center justify-center rounded-full bg-[#00e5ff] text-2xl font-black text-[#07080c] transition hover:bg-[#33ecff]"
              aria-label="Next testimonial"
            >
              →
            </button>
          </div>
        </div>

        <div className="gcg-card overflow-hidden rounded-[18px]">
          <div className="grid gap-0 lg:grid-cols-[0.75fr_1.25fr]">
            <div className="border-b border-[#0080ff]/15 p-6 lg:border-b-0 lg:border-r lg:p-8">
              <p className="font-mono text-sm font-bold uppercase tracking-[0.18em] text-[#00e5ff]">
                {String(activeIndex + 1).padStart(2, "0")} / {String(completedJobs.length).padStart(2, "0")}
              </p>
              <h3 className="mt-6 font-serif text-3xl font-normal leading-tight text-[#06315f]">{activeJob.title}</h3>
              <p className="mt-4 text-sm font-semibold text-[#4478aa]">{activeJob.dates}</p>

              {activeJob.rating ? (
                <div className="mt-6 inline-flex items-center gap-3 rounded-full border border-[#00e5ff]/25 bg-[#00e5ff]/10 px-4 py-2 text-sm font-black text-[#8beeff]">
                  <span>Rating is {activeJob.rating} out of 5</span>
                  <span>5</span>
                </div>
              ) : null}
            </div>

            <div className="p-6 lg:p-8">
              {activeJob.quote ? (
                <blockquote className="text-xl leading-9 text-slate-200">
                  “{activeJob.quote}”
                </blockquote>
              ) : (
                <p className="text-xl leading-9 text-[#1f5f99]">Completed project with verified payment history.</p>
              )}

              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                <div className="rounded-2xl border border-[#0080ff]/15 bg-white/[0.04] p-4">
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#4478aa]">Amount</p>
                  <p className="mt-2 text-xl font-black text-[#06315f]">{activeJob.amount}</p>
                </div>
                {activeJob.rate ? (
                  <div className="rounded-2xl border border-[#0080ff]/15 bg-white/[0.04] p-4">
                    <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#4478aa]">Rate</p>
                    <p className="mt-2 text-xl font-black text-[#06315f]">{activeJob.rate}</p>
                  </div>
                ) : null}
                {activeJob.hours ? (
                  <div className="rounded-2xl border border-[#0080ff]/15 bg-white/[0.04] p-4">
                    <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#4478aa]">Hours</p>
                    <p className="mt-2 text-xl font-black text-[#06315f]">{activeJob.hours}</p>
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 flex flex-wrap gap-2">
          {completedJobs.map((job, index) => (
            <button
              key={job.title}
              type="button"
              onClick={() => setActiveIndex(index)}
              className={`h-2.5 rounded-full transition-all ${activeIndex === index ? "w-10 bg-[#00e5ff]" : "w-2.5 bg-white/20 hover:bg-white/40"}`}
              aria-label={`Show testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}




