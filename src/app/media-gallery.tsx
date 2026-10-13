"use client";

import React, { useState } from "react";
import { Typography } from "@material-tailwind/react";
import {
  PhotoIcon,
  MagnifyingGlassPlusIcon,
  AcademicCapIcon,
  CpuChipIcon,
  EyeIcon,
  ShieldCheckIcon,
  CommandLineIcon,
} from "@heroicons/react/24/solid";
import { ALL_GALLERY_IMAGES, GalleryImageItem } from "../data/allImagesData";
import { getImagePrefix } from "../../utils/utils";
import Lightbox from "../components/lightbox";

interface GalleryCategoryDef {
  key: string;
  title: string;
  subtitle: string;
  icon: React.ElementType;
  badgeCls: string;
}

const GALLERY_CATEGORIES: GalleryCategoryDef[] = [
  {
    key: "กิจกรรม",
    title: "กิจกรรมมหาวิทยาลัย & จิตอาสา",
    subtitle: "MIT Open House, อบรม AI Agent, งานเปิดบ้าน NPU, กีฬาสี และจิตอาสาเพื่อสังคม",
    icon: AcademicCapIcon,
    badgeCls: "bg-orange-500/20 text-orange-300 border-orange-500/30",
  },
  {
    key: "IoT & Hardware",
    title: "IoT & Hardware อัจฉริยะ",
    subtitle: "ESP32 Mini Smart Home โมเดลจำลองบ้านอัจฉริยะ & เซนเซอร์วัดความชื้นดิน Blynk IoT Cloud",
    icon: CpuChipIcon,
    badgeCls: "bg-amber-500/20 text-amber-300 border-amber-500/30",
  },
  {
    key: "AI & Computer Vision",
    title: "AI & Computer Vision",
    subtitle: "ระบบปัญญาประดิษฐ์ตรวจจับการสวมหน้ากากอนามัย Real-time ด้วย MobileNetV2 & YOLOv8n",
    icon: EyeIcon,
    badgeCls: "bg-orange-500/20 text-orange-300 border-orange-500/30",
  },
  {
    key: "Cybersecurity",
    title: "Cybersecurity & งานวิจัยเพย์โหลด",
    subtitle: "การศึกษาและพัฒนา Fake Roblox Payload, การวิเคราะห์ Keylogger 4-Layer และโปสเตอร์วิจัยวิชาการ",
    icon: ShieldCheckIcon,
    badgeCls: "bg-orange-500/20 text-orange-300 border-orange-500/30",
  },
  {
    key: "Desktop Application",
    title: "Desktop Application",
    subtitle: "โปรแกรมเดสก์ท็อปบริหารจัดการสัญญาเงินกู้และคำนวณดอกเบี้ยสินเชื่อ (Python Tkinter GUI)",
    icon: CommandLineIcon,
    badgeCls: "bg-amber-500/20 text-amber-300 border-amber-500/30",
  },
];

export function MediaGallery() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const categoriesToRender =
    activeCategory === "all"
      ? GALLERY_CATEGORIES
      : GALLERY_CATEGORIES.filter((c) => c.key === activeCategory);

  const lightboxImageList = ALL_GALLERY_IMAGES.map((img) => ({
    src: img.src,
    caption: `${img.title} (${img.projectGroup})`,
    category: img.category,
  }));

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  return (
    <section id="gallery" className="py-24 px-6 lg:px-8 bg-[#09090b] border-t border-zinc-800/80">
      <div className="container mx-auto">
        {/* Header (No count in title as requested) */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 rounded-full bg-orange-500/10 border border-orange-500/30 px-4 py-1.5 text-xs font-semibold text-orange-400 shadow-sm mb-3">
            <PhotoIcon className="h-4 w-4" />
            <span>Complete Evidence & Media Archive</span>
          </div>
          <Typography variant="h2" className="text-3xl md:text-4xl font-extrabold text-white mb-3 tracking-tight">
            คลังรูปภาพและหลักฐานผลงานทั้งหมด
          </Typography>
          <Typography variant="lead" className="text-zinc-400 text-sm md:text-base font-normal leading-relaxed">
            รวบรวมรูปภาพผลงานจริงและกิจกรรมทั้งหมด คัดแยกไอคอนโปรแกรมออกและคงตราสัญลักษณ์หลักไว้อย่างเป็นทางการ จัดหมวดหมู่แยกประเภทอย่างเป็นระบบ สามารถคลิกเพื่อดูภาพขนาดใหญ่และเลื่อนดูได้แบบต่อเนื่อง
          </Typography>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            <button
              onClick={() => setActiveCategory("all")}
              className={`min-h-[40px] rounded-full px-5 py-2 text-xs md:text-sm font-semibold transition-all duration-200 cursor-pointer flex items-center gap-1.5 ${
                activeCategory === "all"
                  ? "bg-gradient-to-r from-orange-500 to-amber-500 text-black font-bold shadow-md shadow-orange-500/25"
                  : "bg-zinc-900 text-zinc-300 hover:bg-zinc-800 border border-zinc-800"
              }`}
            >
              <span>ทั้งหมด</span>
            </button>
            {GALLERY_CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat.key;
              return (
                <button
                  key={cat.key}
                  onClick={() => setActiveCategory(cat.key)}
                  className={`min-h-[40px] rounded-full px-5 py-2 text-xs md:text-sm font-semibold transition-all duration-200 cursor-pointer flex items-center gap-1.5 ${
                    isActive
                      ? "bg-gradient-to-r from-orange-500 to-amber-500 text-black font-bold shadow-md shadow-orange-500/25"
                      : "bg-zinc-900 text-zinc-300 hover:bg-zinc-800 border border-zinc-800"
                  }`}
                >
                  <span>{cat.key}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Gallery Counter Info */}
        <div className="flex items-center justify-between mb-6 px-2 text-xs text-zinc-400">
          <span>
            {activeCategory === "all"
              ? "แสดงผลงานครบทุกหมวดหมู่ (แยกประเภทตามโครงงาน)"
              : `หมวดหมู่: ${activeCategory}`}
          </span>
          <span className="text-orange-400 font-semibold hidden sm:inline">
            คลิกที่รูปภาพเพื่อเปิด Fullscreen Lightbox
          </span>
        </div>

        {/* Categorized Gallery Blocks */}
        <div className="space-y-12">
          {categoriesToRender.map((cat) => {
            const catImages = ALL_GALLERY_IMAGES.filter(
              (img) => img.category === cat.key
            );
            if (catImages.length === 0) return null;
            const CatIcon = cat.icon;

            return (
              <div
                key={cat.key}
                className="rounded-3xl bg-zinc-950/70 border border-zinc-800/80 p-6 md:p-8 shadow-xl"
              >
                {/* Category Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 mb-6 border-b border-zinc-800/80">
                  <div className="flex items-center gap-3.5">
                    <div className="w-12 h-12 rounded-2xl bg-orange-500/10 border border-orange-500/30 flex items-center justify-center shrink-0 text-orange-400">
                      <CatIcon className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
                        <span>{cat.title}</span>
                      </h3>
                      <p className="text-xs md:text-sm text-zinc-400 mt-0.5">
                        {cat.subtitle}
                      </p>
                    </div>
                  </div>
                  <span
                    className={`self-start sm:self-center rounded-full border px-3.5 py-1 text-xs font-semibold shrink-0 ${cat.badgeCls}`}
                  >
                    {catImages.length} รูปภาพ
                  </span>
                </div>

                {/* Category Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3.5">
                  {catImages.map((img) => {
                    const globalIdx = ALL_GALLERY_IMAGES.findIndex(
                      (item) => item.id === img.id
                    );
                    const imgSrc = `${getImagePrefix()}${img.src.startsWith("/") ? img.src.slice(1) : img.src}`;

                    return (
                      <div
                        key={img.id}
                        onClick={() => openLightbox(globalIdx >= 0 ? globalIdx : 0)}
                        className="group relative aspect-square overflow-hidden rounded-2xl border border-zinc-800 bg-black cursor-pointer shadow-sm hover:shadow-xl hover:border-orange-500 hover:-translate-y-0.5 transition-all duration-300"
                      >
                        <img
                          src={imgSrc}
                          alt={img.title}
                          className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-500"
                          loading="lazy"
                        />

                        {/* Gradient overlay on hover */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-3">
                          <div className="flex justify-between items-start">
                            <span className="inline-block rounded-md bg-gradient-to-r from-orange-500 to-amber-500 px-1.5 py-0.5 text-[9px] font-mono font-bold text-black">
                              #{img.id}
                            </span>
                            <span className="rounded-full bg-white/20 backdrop-blur-md p-1.5 text-white">
                              <MagnifyingGlassPlusIcon className="h-3.5 w-3.5" />
                            </span>
                          </div>
                          <div>
                            <p className="text-[11px] font-semibold text-white leading-tight line-clamp-2 mb-0.5">
                              {img.title}
                            </p>
                            <p className="text-[9px] text-zinc-400 truncate">
                              {img.projectGroup}
                            </p>
                          </div>
                        </div>

                        <div className="absolute bottom-1 right-1 rounded bg-black/80 border border-zinc-800 px-1.5 py-0.5 text-[9px] font-mono text-orange-400 opacity-80 group-hover:opacity-0 transition-opacity">
                          #{img.id}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Lightbox for continuous view */}
      <Lightbox
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        images={lightboxImageList}
        currentIndex={lightboxIndex}
        onNavigate={(idx) => setLightboxIndex(idx)}
      />
    </section>
  );
}

export default MediaGallery;
