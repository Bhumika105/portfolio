import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "Projects | Bhumika Nautiyal",
};

type Project = {
  title: string;
  description: string;
  href: string;
  image: string; // path under /public/projects
};

const projects: Project[] = [
  { title: "HouseBuyersOfAmerica", description: "Real Estate project made by React.js and Node.js", href: "https://www.housebuyersofamerica.com/", image: "/projects/housebuyers.png" },
  { title: "Danapay Customer Side", description: "Danapay financial project for Customers", href: "https://app.danapay.io/", image: "/projects/danapay-customer.png" },
  { title: "Danapay Admin Side", description: "Danapay financial project for Administrators", href: "https://admin.danapay.io/login", image: "/projects/danapay-admin.png" },
  { title: "Koda NFT marketplace", description: "NFT marketplace on KODA", href: "https://kodadot.xyz/", image: "/projects/koda-nft.jpg" },
  { title: "Airdrop Minting project", description: "Best minting page having 3 levels of whitelist", href: "https://airdrophouses.com/", image: "/projects/airdropmint.JPG" },
  { title: "RoosterWars Blockchain Game", description: "Blockchain Game for fighting with roosters", href: "https://roosterwars.io/", image: "/projects/roosterwars.JPG" },
  { title: "Hirepeople Chrome Extension", description: "AI-generated bulk messaging tool for recruiters on Linkedin using GPT-4 model", href: "https://www.youtube.com/watch?v=-33topK5zmk", image: "/projects/hirepeople.png" },
  { title: "Eco Token project", description: "Eco-friendly Marketplace on Regen network", href: "https://ecotoken.earth/", image: "/projects/eco-token.png" },
  { title: "GhostMarket project", description: "NFT Marketplace (The Web3 play-to-own marketplace)", href: "https://ghostmarket.io/", image: "/projects/ghost-market.png" },
  { title: "Talaqqi project", description: "Education project for Arabic Educator", href: "https://talaqqi.app/class/", image: "/projects/talaqqi.png" },
  { title: "Mapbox project", description: "CanterPower System company's generator management mapbox project", href: "#", image: "/projects/mapbox.png" },
  { title: "RFLXT project", description: "RFLXT connects talent & their Digital Doubles to their communities.", href: "https://rflxt.com/", image: "/projects/rflxt.png" },
  { title: "RealTimeFeedback project", description: "Realtimefeedback admin side", href: "https://www.realtimefeedback.com/", image: "/projects/realtime_feedback.png" },
  { title: "RubberFlooring project", description: "R4U shopping project for hi-temp-weights", href: "https://www.rubberflooring4u.com/", image: "/projects/rubberflooring.png" },
  {
    title: "Ericsson — Software Developer Intern",
    description:
      "CRUD apps (Node.js/Express, E-UI, Leaflet.js, SQL); Docker, Kubernetes, Helm; Structurizr PoC auto-generating SVG diagrams into Gitea.",
    href: "https://www.ericsson.com/en",
    image: "/projects/ericsson_2.png",
  },
  {
    title: "CeX — Team Lead",
    description:
      "Customer service and trade-ins, device quality testing, team mentoring, and issue resolution to maintain high service standards.",
    href: "http://webuy.com/",
    image: "/projects/cex.png",
  },
];

export default function ProjectsPage() {
  return (
    <section className="py-12">
      <h1 className="mb-8 text-3xl font-semibold tracking-tight">Projects</h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <Card key={p.title}>
            <CardHeader className="space-y-2">
              <div className="overflow-hidden rounded-md border">
                <Image src={p.image} alt={p.title} width={640} height={360} className="h-40 w-full object-cover" />
              </div>
              <CardTitle>{p.title}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-sm text-muted-foreground">{p.description}</p>
              <Button asChild size="sm" variant="outline">
                <Link href={p.href || "#"} target={p.href && p.href !== "#" ? "_blank" : undefined} rel="noopener noreferrer">
                  View Project
                </Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
