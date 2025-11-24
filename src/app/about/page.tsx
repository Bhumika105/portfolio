export const metadata = {
  title: "About | Bhumika Nautiyal",
};

export default function AboutPage() {
  return (
    <section className="prose prose-zinc dark:prose-invert py-12">
      {/* eslint-disable @next/next/no-img-element */}
      <img
        src="/avatar.jpg"
        alt="Bhumika Nautiyal avatar"
        className="mb-6 h-28 w-28 rounded-full ring-2 ring-primary/50 object-cover object-[50%_25%]"
      />
      <h1>About</h1>
      <p>
        I’m a creative, calm, and detail-oriented engineer who loves learning and
        building excellent user experiences. I specialize in modern web apps,
        Web3, and AI systems—from idea to production.
      </p>
      <p>
        Outside of work, I enjoy listening to music.
      </p>
    </section>
  );
}
