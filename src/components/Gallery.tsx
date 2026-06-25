import { useState } from "react";
import apresentationImg from "../assets/apresentation.jpeg";
import meetingImg from "../assets/meeting.jpeg";
import clarianaPasseioImg from "../assets/clariana-passeio.webp";
import conferenceImg from "../assets/conference.jpeg";
import globalImg from "../assets/global.jpeg";
import meetingTableImg from "../assets/meeting-table.jpeg";
import { useLanguage } from "../context/LanguageContext";

const galleryItems = [
  globalImg,
  meetingImg,
  conferenceImg,
  meetingTableImg,
  clarianaPasseioImg,
  apresentationImg,
];

const visibleCount = 4;

export default function Gallery() {
  const { t } = useLanguage();
  const [startIndex, setStartIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const visibleItems = Array.from({ length: visibleCount }, (_, offset) => {
    const index = (startIndex + offset) % galleryItems.length;
    return { image: galleryItems[index], index };
  });

  const previous = () => {
    setStartIndex((current) => (current === 0 ? galleryItems.length - 1 : current - 1));
  };

  const next = () => {
    setStartIndex((current) => (current + 1) % galleryItems.length);
  };

  return (
    <section id="gallery" className="reveal bg-transparent px-5 py-24 text-[#06315f] sm:px-6 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-4xl">
            <span className="gcg-kicker text-xs font-bold uppercase tracking-[0.2em]">{t.gallery.eyebrow}</span>
            <h2 className="mt-5 font-serif text-4xl font-normal leading-tight tracking-tight text-[#06315f] sm:text-5xl">{t.gallery.title}</h2>
          </div>

          <div className="flex gap-3">
            <button
              type="button"
              onClick={previous}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-[#0080ff]/20 bg-white text-2xl font-black text-[#0080ff] shadow-[0_12px_34px_rgba(0,86,170,0.12)] transition hover:bg-[#0080ff] hover:text-white"
              aria-label="Previous gallery images"
            >
              ←
            </button>
            <button
              type="button"
              onClick={next}
              className="flex h-12 w-12 items-center justify-center rounded-full bg-[#0080ff] text-2xl font-black text-white shadow-[0_12px_34px_rgba(0,86,170,0.18)] transition hover:bg-[#006edb]"
              aria-label="Next gallery images"
            >
              →
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {visibleItems.map(({ image, index }) => (
            <button
              key={`${image}-${index}`}
              type="button"
              onClick={() => setSelectedImage(image)}
              className="gcg-card group relative aspect-[4/3] overflow-hidden rounded-[18px] p-0 text-left"
              aria-label={`Open gallery image ${index + 1}`}
            >
              <img src={image} alt={`Gallery image ${index + 1}`} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0080ff]/24 via-transparent to-transparent opacity-80 transition group-hover:opacity-40" />
            </button>
          ))}
        </div>

        <div className="mt-6 flex justify-center gap-2">
          {galleryItems.map((image, index) => (
            <button
              key={`${image}-dot`}
              type="button"
              onClick={() => setStartIndex(index)}
              className={`h-2.5 rounded-full transition-all ${startIndex === index ? "w-10 bg-[#0080ff]" : "w-2.5 bg-[#0080ff]/20 hover:bg-[#0080ff]/40"}`}
              aria-label={`Show gallery group starting at image ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {selectedImage ? (
        <div className="fixed inset-0 z-[80] flex items-center justify-center bg-[#06315f]/78 p-5 backdrop-blur-sm" role="dialog" aria-modal="true">
          <button
            type="button"
            className="absolute inset-0 cursor-default"
            onClick={() => setSelectedImage(null)}
            aria-label="Close gallery preview"
          />
          <div className="relative z-10 w-full max-w-6xl overflow-hidden rounded-[18px] border border-white/40 bg-white p-2 shadow-[0_28px_90px_rgba(0,35,80,0.32)]">
            <button
              type="button"
              onClick={() => setSelectedImage(null)}
              className="absolute right-4 top-4 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-white text-2xl font-black text-[#0080ff] shadow-[0_10px_28px_rgba(0,35,80,0.18)] transition hover:bg-[#0080ff] hover:text-white"
              aria-label="Close gallery preview"
            >
              ×
            </button>
            <img src={selectedImage} alt="Selected gallery image" className="max-h-[82vh] w-full rounded-[14px] object-contain" />
          </div>
        </div>
      ) : null}
    </section>
  );
}
