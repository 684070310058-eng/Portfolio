"use client";

import React, { useState } from "react";
import { Typography } from "@material-tailwind/react";
import {
  PhotoIcon,
  MagnifyingGlassPlusIcon,
} from "@heroicons/react/24/solid";
import { ALL_GALLERY_IMAGES } from "../data/allImagesData";
import { getImagePrefix } from "../../utils/utils";
import Lightbox from "../components/lightbox";

const ALL_LABEL = "ทั้งหมด";

const UNIQUE_GROUPS = Array.from(
  new Set(ALL_GALLERY_IMAGES.map((img) => img.projectGroup))
);

const GROUPS = [ALL_LABEL, ...UNIQUE_GROUPS];

export function MediaGallery() {
  const [activeGroup, setActiveGroup] = useState(ALL_LABEL);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const filteredImages = activeGroup === ALL_LABEL
    ? ALL_GALLERY_IMAGES
    : ALL_GALLERY_IMAGES.filter((img) => img.projectGroup === activeGroup);

  const lightboxImageList = filteredImages.map((img) => ({
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
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 rounded-full bg-orange-500/10 border border-orange-500/30 px-4 py-1.5 text-xs font-semibold text-orange-400 shadow-sm mb-3">
            <PhotoIcon className="h-4 w-4" />
            <span>Complete Evidence & Media Archive &bull; {ALL_GALLERY_IMAGES.length} Images</span>
          </div>
          <Typography variant="h2" className="text-3xl md:text-4xl font-extrabold text-white mb-3 tracking-tight">
            คลังรูปภาพและหลักฐานผลงานทั้งหมด ({ALL_GALLERY_IMAGES.length} รูป)
          </Typography>
          <Typography variant="lead" className="text-zinc-400 text-sm md:text-base font-normal leading-relaxed">
            รวบรวมรูปภาพผลงานจริงและกิจกรรมทั้งหมด คัดแยกไอคอนโปรแกรมออกและคงตราสัญลักษณ์หลักไว้อย่างเป็นทางการ สามารถคลิกเพื่อดูภาพขนาดใหญ่และเลื่อนดูได้แบบต่อเนื่อง
          </Typography>

          {/* Group Filter Tabs (UI/UX Pro Max) */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {GROUPS.map((group) => {
              const count = group === ALL_LABEL
                ? ALL_GALLERY_IMAGES.length
                : ALL_GALLERY_IMAGES.filter((img) => img.projectGroup === group).length;
              const isActive = activeGroup === group;

              return (
                <button
                  key={group}
                  onClick={() => setActiveGroup(group)}
                  className={`min-h-[40px] rounded-full px-4 py-1.5 text-xs font-semibold transition-all duration-200 cursor-pointer flex items-center gap-1.5 ${
                    isActive
                      ? "bg-gradient-to-r from-orange-500 to-amber-500 text-black font-bold shadow-md shadow-orange-500/20"
                      : "bg-zinc-900 text-zinc-300 hover:bg-zinc-800 border border-zinc-800"
                  }`}
                >
                  <span>{group}</span>
                  <span
                    className={`rounded-full px-1.5 py-0.2 text-[10px] font-mono ${
                      isActive ? "bg-black/30 text-black font-bold" : "bg-zinc-800 text-orange-400 border border-zinc-700"
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Gallery Counter Info */}
        <div className="flex items-center justify-between mb-6 px-2 text-xs text-zinc-400">
          <span>
            กำลังแสดง <strong className="text-white font-bold">{filteredImages.length}</strong> จาก {ALL_GALLERY_IMAGES.length} รูปภาพ
          </span>
          <span className="text-orange-400 font-semibold hidden sm:inline">
            คลิกที่รูปภาพใดก็ได้เพื่อเปิด Fullscreen Lightbox
          </span>
        </div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3.5">
          {filteredImages.map((img, idx) => {
            const imgSrc = `${getImagePrefix()}${img.src.startsWith("/") ? img.src.slice(1) : img.src}`;
            return (
              <div
                key={img.id}
                onClick={() => openLightbox(idx)}
                className="group relative aspect-square overflow-hidden rounded-2xl border border-zinc-800 bg-black cursor-pointer shadow-sm hover:shadow-xl hover:border-orange-500 hover:-translate-y-0.5 transition-all duration-300"
              >
                <img
                  src={imgSrc}
                  alt={img.title}
                  className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />

                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-3">
                  <div className="flex justify-end">
                    <span className="rounded-full bg-white/25 backdrop-blur-md p-1.5 text-white">
                      <MagnifyingGlassPlusIcon className="h-4 w-4" />
                    </span>
                  </div>
                  <div>
                    <span className="inline-block rounded-md bg-gradient-to-r from-orange-500 to-amber-500 px-1.5 py-0.5 text-[9px] font-mono font-bold text-black mb-1">
                      #{img.id}
                    </span>
                    <p className="text-[11px] font-semibold text-white leading-tight line-clamp-2">
                      {img.title}
                    </p>
                  </div>
                </div>

                {/* Bottom subtle index tag on default state */}
                <div className="absolute bottom-1.5 right-1.5 rounded bg-black/60 backdrop-blur-sm px-1.5 py-0.5 text-[9px] font-mono text-white opacity-80 group-hover:opacity-0 transition-opacity">
                  #{img.id}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Lightbox */}
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
