import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";

const completedJobs = [
  {
    title: "Transfer Beepr Native Application From React to React Native",
    rating: "5.0",
    dates: "Apr 1, 2026 - May 8, 2026",
    quote:
      "I would recommend any client to work with Clariana because she demonstrates expertise in her field, a commitment to excellence, and adaptability to a dynamic project environment. I absolutely plan to work with her team again!",
    amount: "$11,200.00",
    rate: "$50.00 / hr",
    hours: "224 hours",
  },
  {
    title: "Business Transformation Partnership",
    client: "Thomas Jurasek, CEO, Bearex",
    quote:
      "Partnering with these guys transformed our business. Their innovative solutions have gone above and beyond our expectations. We have seen remarkable improvements across the board.",
  },
  {
    title: "Interviewiz Product Development",
    client: "Richard Zhao, nterviewiz",
    dates: "May 24, 2025",
    quote:
      "I worked with Sergio on my last project and genuinely cannot recommend him enough. His technical skills are top-tier, flawless execution every step of the way. But what truly sets him apart is the care and ownership he brings. He treated my project like his own, constantly going above and beyond with thoughtful, strategic input on product growth. He never just delivered, he added real value.",
  },
  {
    title: "Akta.app Product Delivery",
    client: "Hunor Szep, Akta.app",
    dates: "May 23, 2025",
    quote:
      "I had a fantastic experience working with Sergio and his team. They were consistently punctual, highly professional, and showed a genuine commitment to understanding the unique needs of my project. Their attention to detail and willingness to go the extra mile made a real difference. I truly appreciated their collaborative approach and would not hesitate to work with them again. Highly recommended!",
  },
  {
    title: "Software Developer",
    rating: "5.0",
    dates: "Jul 6, 2021 - Jul 19, 2021",
    quote: "Sergio was able to learn the system and get me a solution in less than a day. Pretty amazing work.",
    amount: "$881.66",
    rate: "$35.00 / hr",
    hours: "22 hours",
  },
  {
    title: "Wordpress Dev & SEO",
    rating: "5.0",
    dates: "Feb 24, 2014 - Mar 15, 2016",
    quote:
      "Sergio has always done excellent on my company's website. He is proficient, efficient, courteous, and professional, which is very much appreciated. He is fantastic and is best at managing other team members and overseeing technical/coding work.",
  },
  {
    title: "SEO specialist",
    rating: "5.0",
    dates: "Jun 10, 2019 - Sep 7, 2020",
    quote:
      "One of the best I have ever hired, he has always delivered more than expected and was very attentive to deadlines and follow-up tasks. I would certainly recommend Sergio for any web development or SEO related project.",
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
    title: "Web App Development for Travel Challenges",
    rating: "5.0",
    dates: "Jul 29, 2025 - Nov 24, 2025",
    quote:
      "It was great working with Sergio. He and his teams are open to receive feedback throughout the project execution. I will likely have additional jobs for him in the future.",
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

  const hasMetrics = Boolean(activeJob.amount || activeJob.rate || activeJob.hours);

  return (
    <section id="testimonials" className="reveal bg-transparent px-4 py-16 text-[#06315f] sm:px-6 sm:py-20 lg:px-10 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex flex-col gap-6 lg:mb-12 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-4xl">
            <span className="gcg-kicker text-xs font-bold uppercase tracking-[0.2em]">{t.testimonials.eyebrow}</span>
            <h2 className="mt-5 font-serif text-3xl font-normal leading-tight tracking-tight text-[#06315f] sm:text-5xl">{t.testimonials.title}</h2>
            <p className="mt-4 text-base leading-7 text-[#1f5f99] sm:text-lg sm:leading-8">Completed jobs (4175)</p>
          </div>

          <div className="flex gap-3 self-start lg:self-auto">
            <button
              type="button"
              onClick={previous}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-[#0080ff]/20 bg-white text-2xl font-black text-[#0080ff] shadow-[0_12px_34px_rgba(0,86,170,0.12)] transition hover:bg-[#0080ff] hover:text-white"
              aria-label="Previous testimonial"
            >
              ←
            </button>
            <button
              type="button"
              onClick={next}
              className="flex h-12 w-12 items-center justify-center rounded-full bg-[#0080ff] text-2xl font-black text-white shadow-[0_12px_34px_rgba(0,86,170,0.18)] transition hover:bg-[#006edb]"
              aria-label="Next testimonial"
            >
              →
            </button>
          </div>
        </div>

        <div className="gcg-card overflow-hidden rounded-[18px]">
          <div className="grid gap-0 lg:grid-cols-[0.75fr_1.25fr]">
            <div className="border-b border-[#0080ff]/15 p-5 sm:p-6 lg:border-b-0 lg:border-r lg:p-8">
              <p className="font-mono text-sm font-bold uppercase tracking-[0.18em] text-[#00e5ff]">
                {String(activeIndex + 1).padStart(2, "0")} / {String(completedJobs.length).padStart(2, "0")}
              </p>
              <h3 className="mt-6 font-serif text-2xl font-normal leading-tight text-[#06315f] sm:text-3xl">{activeJob.title}</h3>
              {activeJob.client ? <p className="mt-3 text-base font-bold text-[#06315f]">{activeJob.client}</p> : null}
              {activeJob.dates ? <p className="mt-4 text-sm font-semibold text-[#4478aa]">{activeJob.dates}</p> : null}

              {activeJob.rating ? (
                <div className="mt-6 inline-flex flex-col gap-2 rounded-2xl border border-[#00e5ff]/25 bg-[#00e5ff]/10 px-4 py-3 text-sm font-black text-[#8beeff] sm:flex-row sm:items-center">
                  <span>Rating is {activeJob.rating} out of 5</span>
                  <span aria-hidden="true">★★★★★</span>
                </div>
              ) : null}
            </div>

            <div className="p-5 sm:p-6 lg:p-8">
              <blockquote className="border-l-4 border-white/35 pl-4 text-lg leading-8 text-slate-200 sm:pl-5 sm:text-xl sm:leading-9">
                “{activeJob.quote}”
              </blockquote>

              {hasMetrics ? (
                <div className="mt-10 grid gap-4 sm:grid-cols-3">
                  {activeJob.amount ? (
                    <div className="rounded-2xl border border-[#0080ff]/15 bg-white/[0.04] p-4">
                      <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#4478aa]">Amount</p>
                      <p className="mt-2 text-xl font-black text-[#06315f]">{activeJob.amount}</p>
                    </div>
                  ) : null}
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
              ) : null}
            </div>
          </div>
        </div>

        <div className="mt-6 flex flex-wrap gap-2">
          {completedJobs.map((job, index) => (
            <button
              key={job.title}
              type="button"
              onClick={() => setActiveIndex(index)}
              className={`h-2.5 rounded-full transition-all ${activeIndex === index ? "w-10 bg-[#0080ff]" : "w-2.5 bg-[#0080ff]/20 hover:bg-[#0080ff]/40"}`}
              aria-label={`Show testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
