"use client";

import React, { useState } from "react";
import { Button, Typography } from "@material-tailwind/react";
import {
  CodeBracketIcon,
  ShieldCheckIcon,
  CpuChipIcon,
  SparklesIcon,
  AcademicCapIcon,
  PhotoIcon,
  CommandLineIcon,
  DocumentChartBarIcon,
  ArrowTopRightOnSquareIcon,
  IdentificationIcon,
  MagnifyingGlassPlusIcon,
} from "@heroicons/react/24/solid";
import { PERSONAL_INFO } from "../data/portfolioData";
import { getImagePrefix } from "../../utils/utils";
import Lightbox from "../components/lightbox";

export function Hero() {
  const [profileLightboxOpen, setProfileLightboxOpen] = useState(false);

  return (
    <header id="hero" className="relative overflow-hidden bg-gradient-to-b from-black via-[#0c0a09] to-[#09090b] py-16 lg:py-24 border-b border-zinc-800/80">
      {/* Decorative ambient background glows (Orange & Amber) */}
      <div className="pointer-events-none absolute top-0 right-1/4 -z-10 h-96 w-96 rounded-full bg-orange-600/15 blur-[120px]" />
      <div className="pointer-events-none absolute top-1/3 left-10 -z-10 h-80 w-80 rounded-full bg-amber-500/10 blur-[100px]" />

      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
          {/* Left Column: Bio & Intro */}
          <div className="lg:col-span-7">
            {/* Live Availability Status Pill (Orange & Black Pro Max) */}
            <div className="inline-flex items-center gap-2.5 rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-1.5 text-xs font-semibold text-orange-300 shadow-sm mb-6 backdrop-blur-md">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-orange-500" />
              </span>
              <span>พร้อมสำหรับการฝึกงาน / สหกิจศึกษา &bull; Open for Internship & Co-op</span>
            </div>

            {/* Main Headline */}
            <Typography
              variant="h1"
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold !leading-[1.15] tracking-tight mb-2 text-white"
            >
              <span className="bg-gradient-to-r from-orange-400 via-amber-300 to-orange-500 bg-clip-text text-transparent">
                Suepsakun senasee
              </span>
            </Typography>
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <span className="text-xl sm:text-2xl font-bold text-white tracking-wide">
                {PERSONAL_INFO.name}
              </span>
              <span className="text-xs font-semibold text-orange-400 border border-orange-500/30 bg-orange-500/10 px-2.5 py-0.5 rounded-full">
                IT Portfolio
              </span>
            </div>

            {/* Academic Track & Year */}
            <div className="flex flex-wrap items-center gap-2 text-base md:text-lg font-medium text-zinc-200 mb-2">
              <AcademicCapIcon className="h-6 w-6 text-orange-500 shrink-0" />
              <span>{PERSONAL_INFO.major}</span>
              <span className="rounded-full bg-orange-500/15 border border-orange-500/30 px-2.5 py-0.5 text-xs font-bold text-orange-400">
                {PERSONAL_INFO.year}
              </span>
            </div>

            {/* Faculty & University Info */}
            <p className="text-sm md:text-base text-zinc-400 mb-6 font-normal flex items-center gap-1.5">
              <IdentificationIcon className="h-4 w-4 text-orange-400 shrink-0" />
              <span>{PERSONAL_INFO.faculty} &bull; {PERSONAL_INFO.university} (รหัสนักศึกษา {PERSONAL_INFO.studentId})</span>
            </p>

            {/* Lead Bio Description */}
            <Typography
              variant="lead"
              className="mb-8 text-zinc-300 font-normal leading-relaxed text-base md:text-lg max-w-2xl"
            >
              มุ่งมั่นพัฒนานวัตกรรมด้าน <strong className="font-semibold text-orange-400">Internet of Things (IoT)</strong>,{" "}
              <strong className="font-semibold text-orange-400">Cybersecurity Research</strong>,{" "}
              <strong className="font-semibold text-orange-400">AI Computer Vision</strong> และ{" "}
              <strong className="font-semibold text-orange-400">Desktop Software & Modern Web</strong> ผ่านการลงมือปฏิบัติจริง ทั้งการออกแบบฮาร์ดแวร์ การวิจัยความปลอดภัย และการพัฒนาซอฟต์แวร์
            </Typography>

            {/* Action Buttons with 44px+ touch targets */}
            <div className="flex flex-wrap items-center gap-4 mb-10">
              <a href="#projects" className="inline-block">
                <Button
                  size="lg"
                  className="min-h-[44px] flex items-center gap-2 font-bold bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 hover:from-orange-600 hover:to-amber-600 text-black shadow-lg shadow-orange-500/25 active:scale-98 capitalize text-sm px-6 py-3 cursor-pointer transition-all duration-200 hover:scale-105"
                >
                  <CodeBracketIcon className="h-5 w-5 fill-current" />
                  <span>ดูผลงานโปรเจกต์ GitHub (9 โครงงาน)</span>
                </Button>
              </a>

              <a href="#research" className="inline-block">
                <Button
                  variant="outlined"
                  size="lg"
                  className="min-h-[44px] flex items-center gap-2 font-semibold capitalize text-sm px-6 py-3 border-zinc-700 text-zinc-200 hover:bg-zinc-800 hover:text-orange-400 hover:border-orange-500 active:scale-98 cursor-pointer transition-all duration-200"
                >
                  <ShieldCheckIcon className="h-5 w-5 text-orange-400" />
                  <span>งานวิจัย & โปสเตอร์วิชาการ</span>
                </Button>
              </a>

              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <Button
                  variant="text"
                  size="lg"
                  className="min-h-[44px] flex items-center gap-2 font-semibold capitalize text-sm px-4 py-3 text-zinc-300 hover:text-orange-400 hover:bg-zinc-850 cursor-pointer transition-all duration-200"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                  </svg>
                  <span>GitHub</span>
                  <ArrowTopRightOnSquareIcon className="h-3.5 w-3.5 text-zinc-500" />
                </Button>
              </a>
            </div>

            {/* Bento Stat Cards (Orange & Black) */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5 border-t border-zinc-800/80 pt-6">
              <a href="#projects" className="group rounded-2xl bg-zinc-900/80 p-3.5 shadow-sm border border-zinc-800/80 hover:border-orange-500/60 hover:shadow-lg hover:shadow-orange-500/10 hover:-translate-y-0.5 transition-all duration-300">
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-2xl font-extrabold text-orange-500 font-mono">9</span>
                  <CodeBracketIcon className="h-4 w-4 text-orange-400 group-hover:scale-110 transition-transform" />
                </div>
                <span className="block text-xs font-semibold text-zinc-100">โปรเจกต์ GitHub</span>
                <span className="block text-[11px] text-zinc-400">Source code พร้อมใช้งาน</span>
              </a>

              <a href="#gallery" className="group rounded-2xl bg-zinc-900/80 p-3.5 shadow-sm border border-zinc-800/80 hover:border-amber-500/60 hover:shadow-lg hover:shadow-amber-500/10 hover:-translate-y-0.5 transition-all duration-300">
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-2xl font-extrabold text-amber-400 font-mono">52</span>
                  <PhotoIcon className="h-4 w-4 text-amber-400 group-hover:scale-110 transition-transform" />
                </div>
                <span className="block text-xs font-semibold text-zinc-100">รูปภาพผลงานจริง</span>
                <span className="block text-[11px] text-zinc-400">ครบทุกรูปไม่มีตัดออก</span>
              </a>

              <a href="#activities" className="group rounded-2xl bg-zinc-900/80 p-3.5 shadow-sm border border-zinc-800/80 hover:border-orange-500/60 hover:shadow-lg hover:shadow-orange-500/10 hover:-translate-y-0.5 transition-all duration-300">
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-2xl font-extrabold text-orange-400 font-mono">10</span>
                  <AcademicCapIcon className="h-4 w-4 text-orange-400 group-hover:scale-110 transition-transform" />
                </div>
                <span className="block text-xs font-semibold text-zinc-100">กิจกรรมมหาวิทยาลัย</span>
                <span className="block text-[11px] text-zinc-400">วิชาการและจิตอาสา</span>
              </a>

              <a href="#research" className="group rounded-2xl bg-zinc-900/80 p-3.5 shadow-sm border border-zinc-800/80 hover:border-amber-500/60 hover:shadow-lg hover:shadow-amber-500/10 hover:-translate-y-0.5 transition-all duration-300">
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-2xl font-extrabold text-amber-500 font-mono">1</span>
                  <DocumentChartBarIcon className="h-4 w-4 text-amber-400 group-hover:scale-110 transition-transform" />
                </div>
                <span className="block text-xs font-semibold text-zinc-100">งานวิจัยวิชาการ</span>
                <span className="block text-[11px] text-zinc-400">โปสเตอร์ & สถาปัตยกรรม</span>
              </a>
            </div>
          </div>

          {/* Right Column: Owner Transparent Portrait Showcase (CIRCULAR ORANGE & BLACK + ZOOM) */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="relative mx-auto w-full max-w-sm lg:max-w-md flex flex-col items-center">
              {/* Radial gradient background halo */}
              <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 sm:w-96 sm:h-96 rounded-full bg-gradient-to-tr from-orange-600/35 via-amber-500/25 to-orange-400/20 blur-3xl -z-10 animate-pulse" />

              {/* Main circular portrait showcase */}
              <div className="relative group my-2">
                {/* Outer Glowing Orange Gradient Ring */}
                <div className="relative p-1.5 sm:p-2 rounded-full bg-gradient-to-tr from-orange-500 via-amber-400 to-orange-600 shadow-[0_0_50px_rgba(249,115,22,0.45)]">
                  {/* Inner Deep Black Spacer Ring */}
                  <div className="p-1.5 sm:p-2 rounded-full bg-black">
                    {/* Circular Image Container (Click to Zoom) */}
                    <div
                      onClick={() => setProfileLightboxOpen(true)}
                      title="คลิกเพื่อขยายดูรูปเต็มและซูมเข้า-ออก (Click to Zoom)"
                      className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-[350px] lg:h-[350px] rounded-full overflow-hidden bg-gradient-to-b from-zinc-800 via-zinc-900 to-black border border-orange-500/40 flex items-center justify-center cursor-pointer"
                    >
                      {/* Subtle orange radial backlight inside the circle */}
                      <div className="absolute inset-0 bg-radial from-orange-500/20 via-transparent to-transparent pointer-events-none" />
                      {/* Portrait Image with Transparent Background */}
                      <img
                        src={`${getImagePrefix()}/portfolio_images/profile/suepsakun_senasee_transparent.png`}
                        alt={PERSONAL_INFO.name}
                        className="w-full h-full object-cover object-top filter contrast-[1.05] brightness-[1.02] drop-shadow-2xl transition-transform duration-500 group-hover:scale-105"
                      />
                      {/* Hover Zoom Hint Overlay */}
                      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center text-white pointer-events-none">
                        <MagnifyingGlassPlusIcon className="w-8 h-8 text-orange-400 mb-1" />
                        <span className="text-[11px] font-bold bg-black/80 px-2.5 py-1 rounded-full border border-orange-500/40 text-orange-300 shadow">
                          คลิกเพื่อซูมดูรูปเต็ม
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Top Badge */}
                <div className="absolute top-2 left-0 sm:-left-3 z-20 flex items-center gap-2 rounded-full bg-zinc-950/95 backdrop-blur-md px-3 py-1.5 text-xs font-semibold text-orange-300 shadow-xl border border-orange-500/30">
                  <span className="h-2 w-2 rounded-full bg-orange-500 animate-pulse" />
                  <span>เจ้าของ Portfolio</span>
                </div>

                {/* Floating Specialization Badge */}
                <div className="absolute top-2 right-0 sm:-right-3 z-20 flex items-center gap-1.5 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 text-black font-bold backdrop-blur-md px-3.5 py-1 text-xs shadow-lg shadow-orange-500/30">
                  <ShieldCheckIcon className="h-3.5 w-3.5 text-black" />
                  <span>Cyber &bull; IoT &bull; AI</span>
                </div>

                {/* Micro floating tech badges around portrait */}
                <div className="absolute bottom-12 -left-3 sm:-left-6 z-20 hidden sm:flex items-center gap-1.5 rounded-full bg-zinc-950/95 backdrop-blur-md px-3 py-1 text-[11px] font-semibold text-zinc-200 shadow-lg border border-orange-500/30">
                  <ShieldCheckIcon className="h-3.5 w-3.5 text-orange-400" />
                  <span>Win32 Hook & Defense</span>
                </div>

                <div className="absolute bottom-12 -right-3 sm:-right-6 z-20 hidden sm:flex items-center gap-1.5 rounded-full bg-zinc-950/95 backdrop-blur-md px-3 py-1 text-[11px] font-semibold text-amber-300 shadow-lg border border-amber-500/30">
                  <CommandLineIcon className="h-3.5 w-3.5 text-amber-400" />
                  <span>Python Tkinter GUI</span>
                </div>
              </div>

              {/* Bottom Overlay Glassmorphism Name Tag */}
              <div className="mt-4 w-full max-w-sm sm:max-w-md rounded-2xl bg-zinc-900/95 backdrop-blur-md p-4 sm:p-5 text-white shadow-2xl border border-orange-500/30 z-20">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-extrabold text-white flex flex-wrap items-center gap-2 mb-1">
                      <span>{PERSONAL_INFO.name}</span>
                      <span className="text-sm font-semibold text-orange-400">({PERSONAL_INFO.nameEn})</span>
                      <span className="text-xs bg-orange-500/20 text-orange-400 border border-orange-500/30 px-2 py-0.5 rounded-full font-mono font-medium">
                        NPU IT
                      </span>
                    </h3>
                    <p className="text-xs sm:text-sm text-zinc-300 font-medium">
                      {PERSONAL_INFO.major}
                    </p>
                  </div>
                  <div className="flex items-center gap-1 shrink-0">
                    <span className="text-xs font-mono text-amber-400 bg-amber-500/10 px-2.5 py-1 rounded border border-amber-500/20 font-semibold">
                      Class 4
                    </span>
                  </div>
                </div>
                <div className="mt-3 pt-2.5 border-t border-zinc-800 flex items-center justify-between text-[11px] sm:text-xs text-zinc-400">
                  <span className="font-mono text-orange-300">Python &bull; Tkinter GUI &bull; C++ &bull; ESP32</span>
                  <a href="#projects" className="text-orange-400 hover:text-orange-300 font-semibold inline-flex items-center gap-1">
                    <span>ดูผลงาน</span>
                    <span>&rarr;</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Profile Zoom Lightbox */}
      <Lightbox
        isOpen={profileLightboxOpen}
        onClose={() => setProfileLightboxOpen(false)}
        images={[
          {
            src: `${getImagePrefix()}/portfolio_images/profile/suepsakun_senasee_transparent.png`,
            caption: `${PERSONAL_INFO.name} (${PERSONAL_INFO.nameEn}) - สาขาเทคโนโลยีสารสนเทศและนวัตกรรมคอมพิวเตอร์ มหาวิทยาลัยนครพนม`,
            category: "Profile Portrait",
          },
        ]}
        currentIndex={0}
        onNavigate={() => {}}
      />
    </header>
  );
}

export default Hero;
