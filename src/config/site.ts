export const siteConfig = {
  name: "Bhumika Nautiyal",
  title: "Full Stack, Blockchain & AI Engineer",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://portfolio.example",
  resumeUrl:
    "https://drive.google.com/file/d/1YKWtnhnoOp24T9zDykEznAZgajcyTdL8/view",
  social: {
    github: "https://github.com/Wuffle1125", // TODO: replace with your GitHub URL
    linkedin: "https://www.linkedin.com/in/bhumika-nautiyal-13294a1b7/", // TODO: replace with your LinkedIn URL
    twitter: "#",
  },
  contact: {
    toEmail: process.env.CONTACT_TO || process.env.RESEND_TO || "",
  },
};
