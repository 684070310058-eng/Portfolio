import { Typography } from "@material-tailwind/react";
import { PERSONAL_INFO } from "../data/portfolioData";

const LINKS = [
  { name: "หน้าแรก", href: "#hero" },
  { name: "ทักษะ", href: "#skills" },
  { name: "โปรเจกต์ GitHub", href: "#projects" },
  { name: "งานวิจัย & โปสเตอร์", href: "#research" },
  { name: "กิจกรรม", href: "#activities" },
  { name: "คลังภาพ", href: "#gallery" },
  { name: "ประวัติการศึกษา", href: "#resume" },
  { name: "ติดต่อ", href: "#contact" },
];

const CURRENT_YEAR = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="bg-black border-t border-zinc-800/80 py-12 px-6 lg:px-8 text-zinc-400">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-zinc-800">
          <div>
            <h4 className="font-bold text-white text-base">
              {PERSONAL_INFO.name} ({PERSONAL_INFO.nameEn})
            </h4>
            <p className="text-xs text-zinc-400 mt-1">
              {PERSONAL_INFO.major} &bull; {PERSONAL_INFO.faculty} &bull; {PERSONAL_INFO.university}
            </p>
          </div>

          <ul className="flex flex-wrap items-center gap-4 text-xs font-medium text-zinc-300">
            {LINKS.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="hover:text-orange-400 transition-colors"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 text-xs text-zinc-500">
          <p>
            &copy; {CURRENT_YEAR} {PERSONAL_INFO.name}. All rights reserved. (Orange & Black Theme Edition)
          </p>
          <p>
            Design inspired by{" "}
            <a
              href="https://themewagon.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline text-orange-400"
            >
              Next.js Tailwind Portfolio Template
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
