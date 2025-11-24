export const metadata = {
  title: "Contact | Bhumika Nautiyal",
};

import { ContactForm } from "@/components/site/ContactForm";

export default function ContactPage() {
  return (
    <section className="py-12">
      <h1 className="mb-8 text-3xl font-semibold tracking-tight">Contact</h1>
      <ContactForm />
    </section>
  );
}
