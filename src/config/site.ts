export const siteConfig = {
  name: "Bhumika Nautiyal",
  title: "Full Stack, Blockchain & AI Engineer",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://portfolio.example",
  resumeUrl:
    "https://drive.google.com/file/d/1YKWtnhnoOp24T9zDykEznAZgajcyTdL8/view",
  social: {
    github: "#", // TODO: replace with your GitHub URL
    linkedin: "#", // TODO: replace with your LinkedIn URL
    twitter: "#",
  },
  contact: {
    toEmail: process.env.RESEND_TO || "",
  },
};
