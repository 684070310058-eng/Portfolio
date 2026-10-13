"use client";

import React, { useState } from "react";
import { Typography } from "@material-tailwind/react";
import {
  CalendarDaysIcon,
  MapPinIcon,
  AcademicCapIcon,
  MagnifyingGlassPlusIcon,
} from "@heroicons/react/24/solid";
import { ACTIVITIES_DATA } from "../data/portfolioData";
import { getImagePrefix } from "../../utils/utils";
import Lightbox from "../components/lightbox";

const CATEGORIES = [
  { id: "all", name: "กิจกรรมทั้งหมด" },
  { id: "วิชาการ & อบรม", name: "วิชาการ & อบรมสัมมนา" },
  { id: "กิจกรรมคณะ & มหาวิทยาลัย", name: "กิจกรรมคณะ & มหาวิทยาลัย" },
  { id: "กิจกรรมเพื่อสังคม & จิตอาสา", name: "กิจกรรมเพื่อสังคม & จิตอาสา" },
];

export function Activities() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const filteredActivities = activeCategory === "all"
    ? ACTIVITIES_DATA
    : ACTIVITIES_DATA.filter((a) => a.category === activeCategory);

  const activityLightboxImages = ACTIVITIES_DATA.map((act) => ({
    src: act.image,
    caption: `กิจกรรมที่ ${act.id}: ${act.title} - ${act.subtitle} (${act.date} ณ ${act.location})`,
    category: act.category,
  }));

  const openLightbox = (activityId: number) => {
    const idx = ACTIVITIES_DATA.findIndex((a) => a.id === activityId);
    setLightboxIndex(idx >= 0 ? idx : 0);
    setLightboxOpen(true);
  };

  return (
    <section id="activities" className="py-24 px-6 lg:px-8 bg-black border-t border-zinc-800/80">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 border border-emerald-200/80 px-4 py-1.5 text-xs font-semibold text-orange-400 shadow-sm mb-3">
            <AcademicCapIcon className="h-4 w-4 text-orange-400" />
            <span>Activities & University Engagements &bull; 10 Activities</span>
          </div>
          <Typography variant="h2" color="blue-gray" className="text-3xl md:text-4xl font-extrabold text-white mb-3 tracking-tight">
            รายงานการเข้าร่วมกิจกรรม (10 กิจกรรม)
          </Typography>
          <Typography variant="lead" className="text-zinc-400 text-sm md:text-base font-normal leading-relaxed">
            บันทึกการเข้าร่วมกิจกรรมทางวิชาการ การอบรม AI Agent Automation กิจกรรมสร้างสรรค์ และกิจกรรมจิตอาสา ตลอดหลักสูตรการศึกษา ณ มหาวิทยาลัยนครพนม
          </Typography>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {CATEGORIES.map((cat) => {
              const count = cat.id === "all"
                ? ACTIVITIES_DATA.length
                : ACTIVITIES_DATA.filter((a) => a.category === cat.id).length;
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
        </div>

        {/* Activities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredActivities.map((act) => {
            const imgPath = `${getImagePrefix()}${act.image.startsWith("/") ? act.image.slice(1) : act.image}`;
            return (
              <div
                key={act.id}
                className="group flex flex-col justify-between rounded-3xl bg-zinc-900/80 border border-zinc-800 overflow-hidden shadow-sm hover:shadow-2xl hover:border-orange-500/50 hover:-translate-y-1 transition-all duration-300"
              >
                <div>
                  {/* Photo with zoom trigger */}
                  <div
                    className="relative aspect-video w-full overflow-hidden bg-slate-100 cursor-pointer"
                    onClick={() => openLightbox(act.id)}
                  >
                    <img
                      src={imgPath}
                      alt={act.title}
                      className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-black/20" />

                    {/* Number Badge */}
                    <div className="absolute top-3 left-3 flex items-center gap-2">
                      <span className="rounded-lg bg-black/70 backdrop-blur-md px-2.5 py-1 text-xs font-mono font-bold text-white border border-white/20">
                        กิจกรรมที่ {act.id}
                      </span>
                    </div>

                    {/* Category Chip */}
                    <span className="absolute top-3 right-3 rounded-lg bg-emerald-600/90 backdrop-blur-md px-2.5 py-1 text-[11px] font-bold text-white shadow-sm">
                      {act.category}
                    </span>

                    {/* Hover indicator */}
                    <div className="absolute bottom-3 right-3 flex items-center gap-1.5 rounded-full bg-white/95 backdrop-blur-md px-3 py-1 text-xs font-bold text-slate-800 shadow-md opacity-0 group-hover:opacity-100 transition-opacity">
                      <MagnifyingGlassPlusIcon className="h-3.5 w-3.5 text-orange-400" />
                      <span>ขยายรูปภาพ</span>
                    </div>
                  </div>

                  {/* Activity Details */}
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-white group-hover:text-orange-400 transition-colors mb-1 line-clamp-1">
                      {act.title}
                    </h3>
                    <p className="text-xs font-semibold text-orange-400 mb-3 line-clamp-1">
                      {act.subtitle}
                    </p>

                    <div className="space-y-1.5 mb-4 text-xs text-zinc-400">
                      <div className="flex items-center gap-2">
                        <CalendarDaysIcon className="h-4 w-4 text-slate-400 shrink-0" />
                        <span className="font-medium text-zinc-400">{act.date}</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <MapPinIcon className="h-4 w-4 text-slate-400 shrink-0 mt-0.5" />
                        <span className="line-clamp-1 text-zinc-400">{act.location}</span>
                      </div>
                    </div>

                    <p className="text-xs text-zinc-400 leading-relaxed line-clamp-3">
                      {act.description}
                    </p>
                  </div>
                </div>

                {/* Footer Action */}
                <div className="p-6 pt-0 border-t border-zinc-800 mt-2 flex items-center justify-between">
                  <span className="text-[11px] text-slate-400">
                    รูปภาพทางการ &bull; NPU Activity
                  </span>
                  <button
                    onClick={() => openLightbox(act.id)}
                    className="min-h-[44px] text-xs font-bold text-orange-400 hover:text-emerald-800 transition-colors cursor-pointer flex items-center gap-1"
                  >
                    <span>ดูภาพขนาดใหญ่</span>
                    <span>&rarr;</span>
                  </button>
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
        images={activityLightboxImages}
        currentIndex={lightboxIndex}
        onNavigate={(idx) => setLightboxIndex(idx)}
      />
    </section>
  );
}

export default Activities;
