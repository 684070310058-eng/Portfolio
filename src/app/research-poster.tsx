"use client";

import React, { useState } from "react";
import { Typography, Button } from "@material-tailwind/react";
import {
  ShieldCheckIcon,
  ShieldExclamationIcon,
  EyeIcon,
  MagnifyingGlassPlusIcon,
  CommandLineIcon,
  ArrowsRightLeftIcon,
  CheckBadgeIcon,
  DocumentChartBarIcon,
  LockClosedIcon,
} from "@heroicons/react/24/solid";
import { getImagePrefix } from "../../utils/utils";
import Lightbox from "../components/lightbox";

const LAYERS = [
  {
    id: "layer1",
    num: "Layer 1",
    type: "attack",
    title: "Core Hook (Keyboard Hook)",
    desc: "ดักจับ Keystrokes ในระดับ Low-level ของระบบปฏิบัติการ Windows บันทึกข้อมูลการพิมพ์ทุกปุ่มแป้นพิมพ์",
    tech: "Win32 API SetWindowsHookEx",
    img: "/portfolio_images/poster/img4.png",
  },
  {
    id: "layer2",
    num: "Layer 2",
    type: "attack",
    title: "Focus Filter (UIA Focus Detection)",
    desc: "ตรวจจับช่อง Input กรอกข้อความและช่อง Password ว่าผู้ใช้กำลังโฟกัสหรือพิมพ์ข้อความอยู่ในโปรแกรมใด",
    tech: "UI Automation (UIA)",
    img: "/portfolio_images/poster/img5.png",
  },
  {
    id: "layer3",
    num: "Layer 3",
    type: "attack",
    title: "Logic FSM (State Machine)",
    desc: "จัดลำดับและคัดกรองแยกแยะระหว่าง Username และ Password อย่างชาญฉลาด เพื่อให้ได้ข้อมูลรับรองที่สมบูรณ์",
    tech: "Finite State Machine (FSM)",
    img: "/portfolio_images/roblox_payload/image5.png",
  },
  {
    id: "layer4",
    num: "Layer 4",
    type: "attack",
    title: "In-Browser (Chrome Extension)",
    desc: "ดักอ่านข้อมูลจาก DOM หน้าเว็บเบราว์เซอร์โดยตรงและส่งผ่าน Local HTTP Service ที่แอบเปิดขึ้น",
    tech: "Manifest V3 Extension / Local Port 8888",
    img: "/portfolio_images/roblox_payload/image4.png",
  },
  {
    id: "defense",
    num: "Defense",
    type: "defense",
    title: "Anti-Keylogger v3 Remediation",
    desc: "เครื่องมือภาษา C++ ปิด Process มัลแวร์, คืนค่า Chrome Shortcuts, ล้าง Registry และลบไฟล์ Log",
    tech: "C++ / Registry Remediation",
    img: "/portfolio_images/roblox_payload/image7.png",
  },
];

export function ResearchPoster() {
  const [activeLayer, setActiveLayer] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const posterImages = [
    {
      src: "/portfolio_images/poster/poster_full_page.png",
      caption: "แผ่นโปสเตอร์งานวิจัยฉบับเต็ม: FAKE ROBLOX PAYLOAD: PHISHING DELIVERY & ICON-SPOOFED KEYLOGGER (ขนาดความละเอียดสูง 2500x3542 px)",
      category: "Research Poster Full Page",
    },
    {
      src: "/portfolio_images/roblox_payload/image3.png",
      caption: "หน้าเว็บไซต์ Phishing หลอกล่อดาวน์โหลดโปรแกรมโกงเกม Roblox (Social Engineering)",
      category: "Social Engineering Delivery",
    },
    {
      src: "/portfolio_images/roblox_payload/image4.png",
      caption: "Terminal แสดง Keylogger Process เบื้องหลังการทำงาน",
      category: "Background Execution",
    },
    {
      src: "/portfolio_images/roblox_payload/image5.png",
      caption: "หน้าทดสอบการดักจับ Keystrokes และข้อมูลรับรอง",
      category: "Credential Capture",
    },
    {
      src: "/portfolio_images/roblox_payload/image6.png",
      caption: "การจัดส่งข้อมูล Credentials ของเหยื่อผ่าน Gmail SMTP",
      category: "Data Exfiltration",
    },
    {
      src: "/portfolio_images/roblox_payload/image7.png",
      caption: "Terminal การทำงานของ Anti-Keylogger v3 ในการกำจัดมัลแวร์และล้าง Registry",
      category: "Remediation Defense",
    },
    {
      src: "/portfolio_images/roblox_payload/image8.png",
      caption: "ผลการสกัดกั้นการส่งข้อมูลออกทางอีเมลสำเร็จอย่างสมบูรณ์",
      category: "Defense Validation",
    },
    {
      src: "/portfolio_images/poster/img4.png",
      caption: "แผนผังสถาปัตยกรรม 4-Layer Attack Mechanism",
      category: "Attack Architecture",
    },
    {
      src: "/portfolio_images/poster/img5.png",
      caption: "แผนผัง Social Engineering Delivery & Icon Spoofing",
      category: "Delivery Flowchart",
    },
    {
      src: "/portfolio_images/poster/img2.png",
      caption: "ตราสัญลักษณ์คณะวิทยาการจัดการและเทคโนโลยีสารสนเทศ",
      category: "Faculty Emblem",
    },
    {
      src: "/portfolio_images/poster/img3.png",
      caption: "แบนเนอร์หัวเรื่องโครงงานวิจัย Fake Roblox Payload",
      category: "Research Banner",
    },
  ];

  const fullPosterPath = `${getImagePrefix()}/portfolio_images/poster/poster_full_page.png`;

  return (
    <section id="research" className="py-24 px-6 lg:px-8 bg-[#0c0a09] border-t border-zinc-800/80">
      <div className="container mx-auto">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 rounded-full bg-orange-500/10 border border-orange-500/30 px-4 py-1.5 text-xs font-semibold text-orange-400 shadow-sm mb-3">
            <ShieldCheckIcon className="h-4 w-4 text-orange-400" />
            <span>Academic Research & Cyber Defense Showcase</span>
          </div>
          <Typography variant="h2" className="text-3xl md:text-4xl font-extrabold text-white mb-4 tracking-tight">
            งานวิจัยเพย์โหลด Roblox & AntiKeylogger
          </Typography>
          <Typography variant="lead" className="text-zinc-400 text-sm md:text-base font-normal leading-relaxed">
            การศึกษาเชิงลึกเรื่อง <strong className="text-white font-semibold">&ldquo;เพย์โหลด Roblox ปลอม: การส่งผ่านฟิชชิ่งและคีย์ล็อกเกอร์พรางไอคอนเพื่อดักจับข้อมูลรับรองแบบหลายชั้น&rdquo;</strong> รายวิชา Information System Security มหาวิทยาลัยนครพนม พร้อมเครื่องมือตอบโต้และกวาดล้างระบบ
          </Typography>
        </div>

        {/* Poster Viewer + 4-Layer Analysis Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Full Poster Visual Preview */}
          <div className="lg:col-span-5">
            <div className="group relative rounded-3xl overflow-hidden border-2 border-orange-500/30 bg-black shadow-2xl transition-all hover:shadow-indigo-500/10 hover:border-orange-500">
              <img
                src={fullPosterPath}
                alt="Research Poster: Fake Roblox Payload & AntiKeylogger"
                className="w-full h-auto object-cover opacity-95 group-hover:scale-[1.02] transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent flex flex-col justify-end p-6">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-orange-400 mb-1">
                  Research Poster &bull; มหาวิทยาลัยนครพนม
                </span>
                <h4 className="text-base sm:text-lg font-bold text-white mb-3">
                  Fake Roblox Payload & AntiKeylogger Poster
                </h4>
                <div className="flex items-center gap-3">
                  <Button
                    size="sm"
                    color="white"
                    onClick={() => {
                      setLightboxIndex(0);
                      setLightboxOpen(true);
                    }}
                    className="min-h-[44px] flex items-center gap-2 text-xs font-bold text-white shadow-lg cursor-pointer hover:bg-slate-100"
                  >
                    <MagnifyingGlassPlusIcon className="h-4 w-4 text-orange-400" />
                    <span>ขยายดูโปสเตอร์ฉบับเต็ม (2500x3542 px)</span>
                  </Button>
                </div>
              </div>
            </div>
            <p className="text-xs text-slate-500 text-center mt-3">
              คลิกเพื่อเปิดโปสเตอร์ฉบับความละเอียดสูงและเลื่อนดูหลักฐานทั้งหมด
            </p>
          </div>

          {/* Right Column: Interactive 4-Layer Architecture Tabs */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                  <CommandLineIcon className="h-5 w-5 text-orange-400" />
                  <span>กลไกการดักจับข้อมูล 4 ชั้น & ระบบป้องกัน</span>
                </h3>
                <span className="text-xs font-semibold text-slate-500">เลือกหัวข้อเพื่อเจาะลึก</span>
              </div>

              {/* Layer Selection Buttons (UI/UX Pro Max) */}
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 mb-6">
                {LAYERS.map((layer, idx) => {
                  const isSelected = activeLayer === idx;
                  const isDefense = layer.type === "defense";

                  return (
                    <button
                      key={layer.id}
                      onClick={() => setActiveLayer(idx)}
                      className={`min-h-[48px] rounded-2xl p-3 text-left transition-all duration-200 border cursor-pointer ${
                        isSelected
                          ? isDefense
                            ? "bg-emerald-600 text-white border-emerald-600 shadow-md shadow-emerald-600/30 font-bold"
                            : "bg-indigo-600 text-white border-indigo-600 shadow-md shadow-indigo-600/30 font-bold"
                          : isDefense
                            ? "bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border-emerald-200"
                            : "bg-zinc-900 hover:bg-zinc-800 text-zinc-300 border-zinc-800/80"
                      }`}
                    >
                      <span className="block text-[10px] font-mono font-bold uppercase opacity-85">
                        {layer.num}
                      </span>
                      <span className="block text-xs font-semibold truncate mt-0.5">
                        {layer.title.split("(")[0]}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Active Layer Details Card */}
              <div className="rounded-3xl border border-zinc-800 bg-zinc-900/90 p-6 shadow-sm mb-6">
                <div className="flex items-center justify-between gap-4 mb-3">
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-bold ${
                      LAYERS[activeLayer].type === "defense"
                        ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30"
                        : "bg-orange-500/20 text-orange-400 border border-orange-500/30"
                    }`}
                  >
                    {LAYERS[activeLayer].num} &bull; {LAYERS[activeLayer].type === "defense" ? "System Defense" : "Attack Vector"}
                  </span>
                  <span className="text-xs font-mono font-semibold text-zinc-300 bg-zinc-800 px-2.5 py-1 rounded-md border border-zinc-700">
                    Tech: {LAYERS[activeLayer].tech}
                  </span>
                </div>

                <h4 className="text-lg font-bold text-white mb-2">
                  {LAYERS[activeLayer].title}
                </h4>
                <p className="text-sm text-zinc-300 leading-relaxed mb-4">
                  {LAYERS[activeLayer].desc}
                </p>

                {/* Preview Image for the Active Layer */}
                <div
                  className="relative aspect-video rounded-2xl overflow-hidden border border-zinc-800 bg-black cursor-pointer group shadow-sm"
                  onClick={() => {
                    const foundIdx = posterImages.findIndex(
                      (p) => p.src === LAYERS[activeLayer].img
                    );
                    setLightboxIndex(foundIdx >= 0 ? foundIdx : 0);
                    setLightboxOpen(true);
                  }}
                >
                  <img
                    src={`${getImagePrefix()}${LAYERS[activeLayer].img.startsWith("/") ? LAYERS[activeLayer].img.slice(1) : LAYERS[activeLayer].img}`}
                    alt={LAYERS[activeLayer].title}
                    className="w-full h-full object-contain p-3 group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="rounded-full bg-gradient-to-r from-orange-500 to-amber-500 px-4 py-1.5 text-xs font-bold text-black shadow-lg flex items-center gap-1.5">
                      <MagnifyingGlassPlusIcon className="h-4 w-4" />
                      <span>คลิกเพื่อขยายดูหลักฐานขนาดใหญ่</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Research Summary Box */}
            <div className="rounded-3xl bg-zinc-950 text-white p-6 shadow-xl border border-zinc-800">
              <div className="flex items-start gap-4">
                <div className="rounded-2xl bg-orange-500/10 p-3 shrink-0 border border-orange-500/20 text-orange-400">
                  <CheckBadgeIcon className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white mb-1.5">
                    บทสรุปการทดลองและการฟื้นฟูระบบ (System Remediation)
                  </h4>
                  <p className="text-xs text-zinc-400 leading-relaxed">
                    โครงงานนี้ได้สาธิตและทดลองในสภาพแวดล้อมเสมือน VirtualBox ที่ปลอดภัย และสามารถพัฒนาโปรแกรม AntiKeylogger v3 ด้วยภาษา C++ ที่สามารถยุติ Process มัลแวร์, ล้างพอร์ต 8888, ฟื้นฟู Registry Startup และทำความสะอาด Shortcut เบราว์เซอร์ได้อย่างสมบูรณ์แบบ
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox */}
      <Lightbox
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        images={posterImages}
        currentIndex={lightboxIndex}
        onNavigate={(idx) => setLightboxIndex(idx)}
      />
    </section>
  );
}

export default ResearchPoster;
