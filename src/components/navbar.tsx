"use client";

import React from "react";
import {
  Navbar as MTNavbar,
  Collapse,
  Button,
  IconButton,
  Typography,
} from "@material-tailwind/react";
import {
  RectangleStackIcon,
  UserCircleIcon,
  CommandLineIcon,
  AcademicCapIcon,
  PhotoIcon,
  DocumentChartBarIcon,
  XMarkIcon,
  Bars3Icon,
  ArrowTopRightOnSquareIcon,
} from "@heroicons/react/24/solid";
import { PERSONAL_INFO } from "../data/portfolioData";
import { getImagePrefix } from "../../utils/utils";

const NAV_MENU = [
  {
    name: "หน้าแรก",
    href: "#hero",
    icon: RectangleStackIcon,
  },
  {
    name: "ทักษะ",
    href: "#skills",
    icon: CommandLineIcon,
  },
  {
    name: "โปรเจกต์",
    href: "#projects",
    icon: RectangleStackIcon,
  },
  {
    name: "งานวิจัย",
    href: "#research",
    icon: DocumentChartBarIcon,
  },
  {
    name: "กิจกรรม",
    href: "#activities",
    icon: AcademicCapIcon,
  },
  {
    name: "คลังภาพ",
    href: "#gallery",
    icon: PhotoIcon,
  },
  {
    name: "ประวัติการศึกษา",
    href: "#resume",
    icon: UserCircleIcon,
  },
  {
    name: "ติดต่อ",
    href: "#contact",
    icon: UserCircleIcon,
  },
];

interface NavItemProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
}

function NavItem({ children, href, onClick }: NavItemProps) {
  return (
    <li>
      <Typography
        as="a"
        href={href || "#"}
        onClick={onClick}
        variant="small"
        className="flex items-center gap-1.5 font-medium text-zinc-300 hover:text-orange-400 transition-colors cursor-pointer text-sm"
      >
        {children}
      </Typography>
    </li>
  );
}

export function Navbar() {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen((cur) => !cur);

  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 960) setOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <MTNavbar
      shadow={false}
      fullWidth
      className="border-b border-zinc-800/80 bg-black/90 backdrop-blur-md sticky top-0 z-40 py-4 px-4 lg:px-8"
    >
      <div className="container mx-auto flex items-center justify-between">
        <a href="#hero" className="flex items-center gap-3 group">
          <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-gradient-to-tr from-orange-500 via-amber-400 to-orange-600 p-0.5 shadow-md shadow-orange-500/25 overflow-hidden shrink-0 group-hover:scale-105 transition-transform">
            <img
              src={`${getImagePrefix()}/portfolio_images/roblox_payload/image1.png`}
              alt="ตราสัญลักษณ์มหาวิทยาลัยนครพนม (NPU Logo)"
              className="w-full h-full object-contain p-0.5 rounded-full bg-zinc-950"
            />
          </div>
          <div>
            <Typography className="text-lg sm:text-xl font-bold leading-tight text-white group-hover:text-orange-400 transition-colors">
              NPU
            </Typography>
            <Typography variant="small" className="text-xs sm:text-[13px] text-zinc-400 font-normal">
              Portfolio &middot; ม.นครพนม
            </Typography>
          </div>
        </a>

        {/* Desktop Menu */}
        <ul className="ml-6 hidden items-center gap-5 xl:gap-6 lg:flex">
          {NAV_MENU.map(({ name, icon: Icon, href }) => (
            <NavItem key={name} href={href}>
              <Icon className="h-4 w-4 text-orange-400" />
              {name}
            </NavItem>
          ))}
        </ul>

        {/* Desktop GitHub CTA Button */}
        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              size="sm"
              className="flex items-center gap-2 shadow-md normal-case font-bold bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-black hover:scale-105 transition-all"
            >
              <svg className="w-4 h-4 fill-black" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
              <span>GitHub</span>
              <ArrowTopRightOnSquareIcon className="w-3.5 h-3.5 text-black" />
            </Button>
          </a>
        </div>

        {/* Mobile Hamburger */}
        <IconButton
          variant="text"
          onClick={handleOpen}
          aria-label="Toggle menu"
          className="ml-auto inline-block lg:hidden text-zinc-300 hover:text-orange-400"
        >
          {open ? (
            <XMarkIcon strokeWidth={2} className="h-6 w-6" />
          ) : (
            <Bars3Icon strokeWidth={2} className="h-6 w-6" />
          )}
        </IconButton>
      </div>

      {/* Mobile Collapse Menu */}
      <Collapse open={open}>
        <div className="container mx-auto mt-3 border-t border-zinc-800 px-2 pt-4 bg-zinc-950/95">
          <ul className="flex flex-col gap-3">
            {NAV_MENU.map(({ name, icon: Icon, href }) => (
              <li key={name}>
                <a
                  href={href}
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-2 py-1 text-sm font-medium text-zinc-300 hover:text-orange-400"
                >
                  <Icon className="h-4 w-4 text-orange-400" />
                  {name}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-block"
              >
                <Button
                  size="sm"
                  fullWidth
                  className="flex items-center justify-center gap-2 font-bold bg-gradient-to-r from-orange-500 to-amber-500 text-black"
                >
                  <span>GitHub Profile</span>
                  <ArrowTopRightOnSquareIcon className="w-3.5 h-3.5" />
                </Button>
              </a>
            </li>
          </ul>
        </div>
      </Collapse>
    </MTNavbar>
  );
}

export default Navbar;
