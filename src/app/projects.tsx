"use client";

import React, { useState } from "react";
import { Typography, Button } from "@material-tailwind/react";
import {
  CodeBracketIcon,
  MagnifyingGlassIcon,
  ArrowTopRightOnSquareIcon,
  PhotoIcon,
  XMarkIcon,
  SparklesIcon,
  CheckCircleIcon,
  ShieldCheckIcon,
  CpuChipIcon,
  CommandLineIcon,
  GlobeAltIcon,
  DocumentTextIcon,
} from "@heroicons/react/24/solid";
import { PROJECTS_DATA, ProjectItem } from "../data/portfolioData";
import { getImagePrefix } from "../../utils/utils";
import Lightbox from "../components/lightbox";

const CATEGORIES = [
  { id: "all", name: "ทั้งหมด" },
  { id: "Desktop Application", name: "Desktop App (Python Tkinter)" },
  { id: "IoT & Hardware", name: "IoT & ฮาร์ดแวร์" },
  { id: "Cybersecurity", name: "ความมั่นคงปลอดภัยไซเบอร์" },
  { id: "AI & Computer Vision", name: "ปัญญาประดิษฐ์ & คอมพิวเตอร์วิทัศน์" },
  { id: "Web & App", name: "เว็บ & แอปพลิเคชัน" },
];

function getCategoryBadge(category: string) {
  switch (category) {
    case "Desktop Application":
      return {
        bg: "bg-amber-50 text-amber-800 border-amber-300",
        icon: CommandLineIcon,
      };
    case "Cybersecurity":
      return {
        bg: "bg-indigo-50 text-indigo-800 border-indigo-300",
        icon: ShieldCheckIcon,
      };
    case "IoT & Hardware":
      return {
        bg: "bg-blue-50 text-blue-800 border-blue-300",
        icon: CpuChipIcon,
      };
    case "AI & Computer Vision":
      return {
        bg: "bg-purple-50 text-purple-800 border-purple-300",
        icon: SparklesIcon,
      };
    default:
      return {
        bg: "bg-teal-50 text-teal-800 border-teal-300",
        icon: GlobeAltIcon,
      };
  }
}

export function Projects() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  // Lightbox state
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImages, setLightboxImages] = useState<{ src: string; caption?: string; category?: string }[]>([]);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const filteredProjects = PROJECTS_DATA.filter((proj) => {
    const matchesCategory =
      activeCategory === "all" || proj.category === activeCategory;
    const matchesSearch =
      proj.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      proj.thaiTitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      proj.techStack.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase())) ||
      proj.shortDesc.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const openLightboxForProject = (project: ProjectItem, initialIndex = 0) => {
    if (!project.images || project.images.length === 0) {
      setSelectedProject(project);
      return;
    }
    const imgs = project.images.map((img) => ({
      src: img.src,
      caption: `${project.title}: ${img.caption}`,
      category: project.category,
    }));
    setLightboxImages(imgs);
    setLightboxIndex(initialIndex);
    setLightboxOpen(true);
  };

  return (
    <section id="projects" className="py-24 px-6 lg:px-8 bg-black border-t border-zinc-800/80">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="mb-14 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full bg-orange-500/10 border border-orange-500/30 px-3.5 py-1 text-xs font-semibold text-orange-400 shadow-sm mb-3">
            <CodeBracketIcon className="h-4 w-4 text-orange-400" />
            <span>GitHub Repository Showcase &bull; 9 Projects</span>
          </div>
          <Typography variant="h2" color="blue-gray" className="mb-3 text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            ผลงานโครงงานตามหัวข้อใน GitHub
          </Typography>
          <Typography
            variant="lead"
            className="text-zinc-400 text-sm md:text-base font-normal leading-relaxed"
          >
            รวบรวม 9 ผลงานการพัฒนาโครงงานด้าน IoT ฮาร์ดแวร์, Cybersecurity & Malware Analysis, AI Computer Vision, Desktop Program (Python Tkinter) และ Web Automation พร้อมหลักฐานรูปภาพครบทุกรูป
          </Typography>
        </div>

        {/* Interactive Controls: Search & Category Filter */}
        <div className="mb-10 flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2">
            {CATEGORIES.map((cat) => {
              const count = cat.id === "all"
                ? PROJECTS_DATA.length
                : PROJECTS_DATA.filter((p) => p.category === cat.id).length;
              const isActive = activeCategory === cat.id;

              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`min-h-[40px] rounded-full px-4 py-2 text-xs md:text-sm font-semibold transition-all duration-200 cursor-pointer flex items-center gap-1.5 ${
                    isActive
                      ? "bg-gradient-to-r from-orange-500 to-amber-500 text-black font-bold shadow-md shadow-orange-500/25"
                      : "bg-zinc-900 text-zinc-300 hover:bg-zinc-800 border border-zinc-800"
                  }`}
                >
                  <span>{cat.name}</span>
                  <span
                    className={`rounded-full px-2 py-0.5 text-[10px] font-mono font-bold ${
                      isActive ? "bg-white/20 text-white" : "bg-slate-100 text-zinc-400"
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Search Box with Clear Button */}
          <div className="relative w-full lg:w-80">
            <MagnifyingGlassIcon className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
            <input
              type="text"
              placeholder="ค้นหาโครงงาน, เทคโนโลยี..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full min-h-[44px] rounded-full border border-zinc-800 bg-zinc-900 text-white pl-10 pr-10 py-2.5 text-xs md:text-sm placeholder:text-zinc-500 focus:border-orange-500 focus:outline-none focus:ring-1 focus:ring-orange-500 shadow-sm transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-white p-1"
                aria-label="ล้างคำค้นหา"
              >
                <XMarkIcon className="h-4 w-4" />
              </button>
            )}
          </div>
        </div>

        {/* Project Cards Grid */}
        {filteredProjects.length === 0 ? (
          <div className="text-center py-16 bg-zinc-900 rounded-3xl border border-zinc-800 shadow-sm">
            <MagnifyingGlassIcon className="h-10 w-10 text-orange-400/60 mx-auto mb-3" />
            <p className="text-zinc-400 text-sm font-medium">
              ไม่พบโครงงานที่ตรงกับคำค้นหา &ldquo;{searchQuery}&rdquo;
            </p>
            <button
              onClick={() => {
                setActiveCategory("all");
                setSearchQuery("");
              }}
              className="mt-3 text-xs font-semibold text-orange-400 hover:text-orange-300 underline underline-offset-4 cursor-pointer"
            >
              ล้างตัวกรองทั้งหมด
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => {
              const coverPath = project.coverImage
                ? `${getImagePrefix()}${project.coverImage.startsWith("/") ? project.coverImage.slice(1) : project.coverImage}`
                : null;
              const badge = getCategoryBadge(project.category);
              const BadgeIcon = badge.icon;

              return (
                <div
                  key={project.id}
                  className="group flex flex-col justify-between rounded-3xl bg-zinc-900/80 border border-zinc-800/90 overflow-hidden shadow-sm hover:shadow-2xl hover:border-orange-500/60 hover:-translate-y-1 transition-all duration-300"
                >
                  {/* Card Media Header */}
                  <div>
                    {coverPath ? (
                      <div
                        className="relative h-56 w-full overflow-hidden bg-black cursor-pointer"
                        onClick={() => setSelectedProject(project)}
                      >
                        <img
                          src={coverPath}
                          alt={project.title}
                          className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-black/30" />

                        {/* Top Badges */}
                        <div className="absolute top-3 left-3 flex flex-wrap items-center gap-2">
                          <span className="rounded-lg bg-black/80 backdrop-blur-md px-2.5 py-1 text-xs font-mono font-bold text-orange-400 border border-orange-500/30">
                            #{project.githubId}
                          </span>
                          <span className={`inline-flex items-center gap-1 rounded-lg border backdrop-blur-md px-2.5 py-1 text-xs font-bold ${badge.bg}`}>
                            <BadgeIcon className="h-3.5 w-3.5 shrink-0" />
                            <span>{project.category}</span>
                          </span>
                        </div>

                        {/* Images count trigger badge */}
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            openLightboxForProject(project, 0);
                          }}
                          className="absolute bottom-3 right-3 flex items-center gap-1.5 rounded-full bg-zinc-950/90 backdrop-blur-md px-3 py-1.5 text-xs font-bold text-zinc-200 border border-zinc-700 shadow-md hover:border-orange-500 hover:text-orange-400 transition-all cursor-pointer"
                        >
                          <PhotoIcon className="h-3.5 w-3.5 text-orange-400" />
                          <span>{project.images.length} รูป</span>
                        </button>
                      </div>
                    ) : (
                      <div
                        className="relative h-56 w-full overflow-hidden bg-gradient-to-br from-zinc-950 via-zinc-900 to-black p-5 flex flex-col justify-between border-b border-zinc-800/80 cursor-pointer"
                        onClick={() => setSelectedProject(project)}
                      >
                        <div className="absolute inset-0 bg-[radial-gradient(#f97316_1px,transparent_1px)] [background-size:16px_16px] opacity-10" />
                        <div className="relative z-10 flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <span className="rounded-lg bg-black/80 backdrop-blur-md px-2.5 py-1 text-xs font-mono font-bold text-orange-400 border border-orange-500/30">
                              #{project.githubId}
                            </span>
                            <span className={`inline-flex items-center gap-1 rounded-lg border backdrop-blur-md px-2.5 py-1 text-xs font-bold ${badge.bg}`}>
                              <BadgeIcon className="h-3.5 w-3.5 shrink-0" />
                              <span>{project.category}</span>
                            </span>
                          </div>
                          <div className="w-8 h-8 rounded-full bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-400">
                            <CodeBracketIcon className="w-4 h-4 text-orange-400" />
                          </div>
                        </div>
                        <div className="relative z-10 my-auto text-center py-2">
                          <span className="inline-block text-[11px] font-mono font-medium text-orange-400/90 mb-1">GitHub Repository</span>
                          <p className="text-sm font-semibold text-zinc-200">ซอร์สโค้ดพร้อมใช้งานบน GitHub</p>
                          <p className="text-[11px] text-zinc-500 mt-1">(ไม่มีไฟล์ภาพตัวอย่างแนบในเอกสาร)</p>
                        </div>
                        <div className="relative z-10 flex items-center justify-between text-[11px] text-zinc-400">
                          <span className="flex items-center gap-1.5 text-orange-400/90 font-mono">
                            <span className="w-1.5 h-1.5 rounded-full bg-orange-400 animate-pulse" /> Open Source
                          </span>
                          <span className="text-zinc-500 font-mono">0 รูป</span>
                        </div>
                      </div>
                    )}

                    {/* Card Content Body */}
                    <div className="p-6">
                      <h3
                        onClick={() => setSelectedProject(project)}
                        className="text-lg font-bold text-white group-hover:text-orange-400 transition-colors line-clamp-1 cursor-pointer mb-1"
                      >
                        {project.title}
                      </h3>

                      <p className="text-xs font-semibold text-orange-400 mb-3 line-clamp-1">
                        {project.thaiTitle}
                      </p>

                      <p className="text-xs text-zinc-400 leading-relaxed line-clamp-3 mb-4">
                        {project.shortDesc}
                      </p>

                      {/* Tech Stack Pills */}
                      <div className="flex flex-wrap gap-1.5 mb-2">
                        {project.techStack.slice(0, 3).map((tech) => (
                          <span
                            key={tech}
                            className="rounded-md bg-zinc-800 border border-zinc-700/80 px-2 py-0.5 text-[11px] font-medium text-zinc-300"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.techStack.length > 3 && (
                          <span className="rounded-md bg-zinc-800 px-2 py-0.5 text-[11px] font-semibold text-orange-400">
                            +{project.techStack.length - 3}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Card Actions Footer */}
                  <div className="p-6 pt-0 border-t border-zinc-800 mt-2 flex items-center justify-between gap-3">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="min-h-[44px] text-xs font-bold text-orange-400 hover:text-orange-300 transition-colors flex items-center gap-1 cursor-pointer"
                    >
                      <span>ดูรายละเอียด & สเปก</span>
                      <span>&rarr;</span>
                    </button>

                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="min-h-[40px] inline-flex items-center gap-1.5 rounded-xl border border-zinc-700 bg-zinc-800 px-3.5 py-1.5 text-xs font-semibold text-slate-700 hover:bg-slate-900 hover:text-white hover:border-slate-900 transition-all cursor-pointer"
                    >
                      <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                      </svg>
                      <span>Repository</span>
                      <ArrowTopRightOnSquareIcon className="h-3 w-3 opacity-70" />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* Interactive Project Details Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/75 p-4 backdrop-blur-md overflow-y-auto"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl bg-zinc-900 p-6 md:p-8 shadow-2xl border border-zinc-800 text-white"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-start justify-between border-b border-zinc-800 pb-5 mb-6">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="rounded-md bg-blue-100 px-2.5 py-0.5 text-xs font-mono font-bold text-blue-800">
                    โครงงานที่ #{selectedProject.githubId}
                  </span>
                  <span className={`inline-flex items-center gap-1 rounded-md border px-2.5 py-0.5 text-xs font-bold ${getCategoryBadge(selectedProject.category).bg}`}>
                    {selectedProject.category}
                  </span>
                </div>
                <h3 className="text-2xl font-extrabold text-white tracking-tight">
                  {selectedProject.title}
                </h3>
                <p className="text-sm font-semibold text-orange-400 mt-0.5">
                  {selectedProject.thaiTitle}
                </p>
              </div>

              <button
                onClick={() => setSelectedProject(null)}
                className="rounded-full bg-slate-100 p-2 text-slate-500 hover:bg-slate-200 hover:text-slate-900 transition-colors cursor-pointer"
                aria-label="ปิดหน้าต่าง"
              >
                <XMarkIcon className="h-5 w-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="space-y-6">
              {/* Full Description */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2 flex items-center gap-1.5">
                  <DocumentTextIcon className="h-4 w-4 text-orange-400" />
                  <span>รายละเอียดและเป้าหมายของโครงงาน</span>
                </h4>
                <p className="text-sm md:text-base text-slate-700 leading-relaxed whitespace-pre-line bg-zinc-950 p-4 rounded-2xl border border-zinc-800 text-zinc-300">
                  {selectedProject.fullDesc}
                </p>
              </div>

              {/* Highlights */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2.5 flex items-center gap-1.5">
                  <SparklesIcon className="h-4 w-4 text-emerald-600" />
                  <span>จุดเด่นและความสามารถของระบบ (Key Features)</span>
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
                  {selectedProject.highlights.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2.5 rounded-xl bg-zinc-950 p-3 border border-zinc-800"
                    >
                      <CheckCircleIcon className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                      <span className="text-xs md:text-sm text-zinc-300 font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Stack */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2 flex items-center gap-1.5">
                  <CpuChipIcon className="h-4 w-4 text-indigo-600" />
                  <span>เครื่องมือและเทคโนโลยีที่ใช้พัฒนา (Tech Stack)</span>
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-lg bg-orange-500/15 border border-orange-500/30 px-3 py-1 text-xs font-bold text-orange-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Complete Image Gallery for this Project */}
              <div>
                {selectedProject.images.length > 0 ? (
                  <>
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
                        <PhotoIcon className="h-4 w-4 text-orange-400" />
                        <span>รูปภาพผลงานทั้งหมด ({selectedProject.images.length} รูป) &bull; คลิกเพื่อดูขนาดใหญ่</span>
                      </h4>
                      <button
                        onClick={() => openLightboxForProject(selectedProject, 0)}
                        className="text-xs font-bold text-orange-400 hover:text-orange-300 flex items-center gap-1 cursor-pointer"
                      >
                        <span>เปิดแบบสไลด์โชว์</span>
                        <span>&rarr;</span>
                      </button>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                      {selectedProject.images.map((img, idx) => {
                        const iPath = `${getImagePrefix()}${img.src.startsWith("/") ? img.src.slice(1) : img.src}`;
                        return (
                          <div
                            key={idx}
                            onClick={() => openLightboxForProject(selectedProject, idx)}
                            className="group relative aspect-video overflow-hidden rounded-xl border border-zinc-700 bg-black cursor-pointer shadow-sm hover:shadow-md hover:border-orange-500 transition-all"
                          >
                            <img
                              src={iPath}
                              alt={img.caption}
                              className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                            <div className="absolute inset-0 bg-slate-950/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-2 text-center">
                              <p className="text-[10px] text-white font-medium line-clamp-2">
                                {img.caption}
                              </p>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </>
                ) : (
                  <div className="rounded-2xl border border-dashed border-zinc-800 bg-zinc-950/60 p-8 text-center">
                    <div className="mx-auto w-12 h-12 rounded-2xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-400 mb-3">
                      <CodeBracketIcon className="w-6 h-6 text-orange-400" />
                    </div>
                    <h4 className="text-sm font-bold text-zinc-200 mb-1">คลังโค้ดโปรเจกต์บน GitHub (ไม่มีไฟล์ภาพตัวอย่างแนบในเอกสาร)</h4>
                    <p className="text-xs text-zinc-400 max-w-md mx-auto mb-4">
                      โปรเจกต์นี้ได้รับการพัฒนาและบันทึกซอร์สโค้ดไว้บน GitHub Repository ท่านสามารถคลิกปุ่มด้านล่างเพื่อเข้าดู Code และรายละเอียดฉบับเต็มได้โดยตรง
                    </p>
                    <a
                      href={selectedProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 text-black px-4 py-2 text-xs font-bold shadow-md shadow-orange-500/20 hover:opacity-90"
                    >
                      ดู Source Code บน GitHub
                    </a>
                  </div>
                )}
              </div>
            </div>

            {/* Modal Footer */}
            <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-zinc-800 pt-5">
              <span className="text-xs text-slate-500">
                GitHub: <code className="text-zinc-200 font-mono font-medium">{selectedProject.githubUrl}</code>
              </span>

              <div className="flex items-center gap-3">
                <Button
                  variant="outlined"
                  color="gray"
                  size="sm"
                  onClick={() => setSelectedProject(null)}
                  className="capitalize text-xs cursor-pointer border-slate-300"
                >
                  ปิดหน้าต่าง
                </Button>
                <a
                  href={selectedProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    color="gray"
                    size="sm"
                    className="flex items-center gap-2 bg-slate-900 hover:bg-black capitalize text-xs cursor-pointer shadow-md"
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                    </svg>
                    <span>เปิด GitHub Repository</span>
                    <ArrowTopRightOnSquareIcon className="h-3.5 w-3.5" />
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Lightbox */}
      <Lightbox
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        images={lightboxImages}
        currentIndex={lightboxIndex}
        onNavigate={(idx) => setLightboxIndex(idx)}
      />
    </section>
  );
}

export default Projects;
