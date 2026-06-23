import apresentationImg from "../assets/apresentation.jpeg";
import clarianaPasseioImg from "../assets/clariana-passeio.webp";
import conferenceImg from "../assets/conference.jpeg";
import globalImg from "../assets/global.jpeg";
import meetingTableImg from "../assets/meeting-table.jpeg";
import { useLanguage } from "../context/LanguageContext";

const galleryItems = [
  globalImg,
  conferenceImg,
  meetingTableImg,
  clarianaPasseioImg,
  apresentationImg
];

export default function Gallery() {
  const { t } = useLanguage();

  return (
    <section id="gallery" className="reveal bg-transparent px-5 py-24 text-[#06315f] sm:px-6 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 max-w-4xl">
          <span className="gcg-kicker text-xs font-bold uppercase tracking-[0.2em]">{t.gallery.eyebrow}</span>
          <h2 className="mt-5 font-serif text-4xl font-normal leading-tight tracking-tight text-[#06315f] sm:text-5xl">{t.gallery.title}</h2>
          
        </div>

        {/* Atualizado para grid-cols-5 em telas grandes para acomodar a quinta foto */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {galleryItems.map((image, index) => (
            <figure key={image} className="gcg-card group relative aspect-[4/3] overflow-hidden rounded-[18px]">
              <img src={image} alt={`Gallery image ${index + 1}`} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#07080c]/35 via-transparent to-transparent" />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}


