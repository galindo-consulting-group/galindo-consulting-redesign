import { useState, type FormEvent } from "react";
import { useLanguage } from "../context/LanguageContext";

type ContactFormState = {
  name: string;
  email: string;
  company: string;
  message: string;
};

type SubmitStatus = "idle" | "sending" | "success" | "error";

const initialFormState: ContactFormState = {
  name: "",
  email: "",
  company: "",
  message: "",
};

const apiBaseUrl = (import.meta.env.VITE_API_URL as string | undefined)?.replace(/\/$/, "") ?? "";

export default function ContactUs() {
  const { language, t } = useLanguage();
  const [formData, setFormData] = useState<ContactFormState>(initialFormState);
  const [status, setStatus] = useState<SubmitStatus>("idle");
  const [statusMessage, setStatusMessage] = useState("");

  const statusCopy = {
    success: {
      en: "Message sent successfully. We will contact you soon.",
      pt: "Mensagem enviada com sucesso. Entraremos em contato em breve.",
      es: "Mensaje enviado correctamente. Nos pondremos en contacto pronto.",
    },
    error: {
      en: "We could not send your message. Please try again or email us directly.",
      pt: "Não foi possível enviar sua mensagem. Tente novamente ou envie um email direto.",
      es: "No fue posible enviar el mensaje. Intenta nuevamente o envíanos un email directo.",
    },
    sending: {
      en: "Sending...",
      pt: "Enviando...",
      es: "Enviando...",
    },
  } as const;

  const updateField = (field: keyof ContactFormState, value: string) => {
    setFormData((current) => ({ ...current, [field]: value }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("sending");
    setStatusMessage(statusCopy.sending[language]);

    try {
      const response = await fetch(`${apiBaseUrl}/api/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim(),
          project_type: formData.company.trim() || "Website contact form",
          message: formData.message.trim(),
        }),
      });

      if (!response.ok) {
        throw new Error("Contact request failed");
      }

      setFormData(initialFormState);
      setStatus("success");
      setStatusMessage(statusCopy.success[language]);
    } catch {
      setStatus("error");
      setStatusMessage(statusCopy.error[language]);
    }
  };

  return (
    <section id="contact" className="reveal bg-transparent px-5 py-24 text-[#06315f] sm:px-6 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 max-w-3xl">
          <p className="gcg-kicker text-xs font-bold uppercase tracking-[0.2em]">
            {t.contact.eyebrow}
          </p>
          <h2 className="mt-5 font-serif text-5xl font-normal leading-tight tracking-tight text-[#06315f] sm:text-6xl">
            {t.contact.title}
          </h2>
          <p className="mt-5 text-lg leading-8 text-[#1f5f99]">{t.contact.description}</p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-6">
            <div className="gcg-card rounded-[18px] p-7 sm:p-8">
              <h3 className="font-serif text-3xl font-normal text-[#06315f]">{t.contact.helpTitle}</h3>
              <p className="mt-4 text-base leading-7 text-[#1f5f99]">{t.contact.helpText}</p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <a href="mailto:sperey@gcgiglobal.com" className="rounded-2xl border border-[#0080ff]/15 bg-white/[0.04] p-5 transition hover:border-[#00e5ff]/35">
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#4478aa]">
                    {t.contact.emailLabel}
                  </p>
                  <p className="mt-3 break-words text-base font-bold text-[#06315f]">sperey@gcgiglobal.com</p>
                </a>

                <a href="tel:+17038817822" className="rounded-2xl border border-[#0080ff]/15 bg-white/[0.04] p-5 transition hover:border-[#00e5ff]/35">
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#4478aa]">
                    {t.contact.phoneLabel}
                  </p>
                  <p className="mt-3 text-base font-bold text-[#06315f]">+1 703-881-7822</p>
                </a>
              </div>

              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                <a href="#contact" className="inline-flex h-12 items-center justify-center rounded-full bg-white px-5 text-sm font-extrabold uppercase tracking-[0.1em] text-[#0080ff] transition hover:bg-[#eaf5ff]">
                  {t.contact.calendlyLabel}
                </a>
                <a href="mailto:sperey@gcgiglobal.com" className="inline-flex h-12 items-center justify-center rounded-full border border-[#0080ff]/15 px-5 text-sm font-bold uppercase tracking-[0.1em] text-[#06315f] transition hover:border-[#00e5ff] hover:text-[#00e5ff]">
                  {t.contact.messageLabel}
                </a>
              </div>
            </div>

            <div className="gcg-card rounded-[18px] p-7 sm:p-8">
              <h4 className="font-serif text-2xl font-normal text-[#06315f]">{t.contact.noteTitle}</h4>
              <p className="mt-3 text-base leading-7 text-[#1f5f99]">{t.contact.noteText}</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="gcg-card rounded-[18px] p-6 sm:p-8">
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label className="text-xs font-bold uppercase tracking-[0.14em] text-[#4478aa]" htmlFor="name">
                  {t.contact.form.name}
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(event) => updateField("name", event.target.value)}
                  placeholder={t.contact.form.namePlaceholder}
                  className="mt-3 h-12 w-full rounded-xl border border-[#0080ff]/20 bg-white px-4 text-base text-[#06315f] outline-none transition-colors placeholder:text-[#1f5f99]/55 focus:border-[#0080ff]"
                />
              </div>

              <div>
                <label className="text-xs font-bold uppercase tracking-[0.14em] text-[#4478aa]" htmlFor="email">
                  {t.contact.form.email}
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(event) => updateField("email", event.target.value)}
                  placeholder={t.contact.form.emailPlaceholder}
                  className="mt-3 h-12 w-full rounded-xl border border-[#0080ff]/20 bg-white px-4 text-base text-[#06315f] outline-none transition-colors placeholder:text-[#1f5f99]/55 focus:border-[#0080ff]"
                />
              </div>
            </div>

            <div className="mt-5">
              <label className="text-xs font-bold uppercase tracking-[0.14em] text-[#4478aa]" htmlFor="company">
                {t.contact.form.company}
              </label>
              <input
                id="company"
                type="text"
                value={formData.company}
                onChange={(event) => updateField("company", event.target.value)}
                placeholder={t.contact.form.companyPlaceholder}
                className="mt-3 h-12 w-full rounded-xl border border-[#0080ff]/20 bg-white px-4 text-base text-[#06315f] outline-none transition-colors placeholder:text-[#1f5f99]/55 focus:border-[#0080ff]"
              />
            </div>

            <div className="mt-5">
              <label className="text-xs font-bold uppercase tracking-[0.14em] text-[#4478aa]" htmlFor="message">
                {t.contact.form.message}
              </label>
              <textarea
                id="message"
                rows={7}
                required
                value={formData.message}
                onChange={(event) => updateField("message", event.target.value)}
                placeholder={t.contact.form.messagePlaceholder}
                className="mt-3 w-full resize-none rounded-xl border border-[#0080ff]/20 bg-white px-4 py-4 text-base text-[#06315f] outline-none transition-colors placeholder:text-[#1f5f99]/55 focus:border-[#0080ff]"
              />
            </div>

            {statusMessage ? (
              <p className={`mt-5 rounded-2xl border px-4 py-3 text-sm font-bold ${status === "error" ? "border-red-200 bg-red-50 text-red-700" : "border-white/35 bg-white/15 text-white"}`}>
                {statusMessage}
              </p>
            ) : null}

            <button
              type="submit"
              disabled={status === "sending"}
              className="mt-6 inline-flex h-12 w-full items-center justify-center rounded-full bg-white px-8 text-sm font-extrabold uppercase tracking-[0.1em] text-[#0080ff] transition hover:-translate-y-0.5 hover:bg-[#eaf5ff] disabled:cursor-not-allowed disabled:opacity-70"
            >
              {status === "sending" ? statusCopy.sending[language] : t.contact.form.submit}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
