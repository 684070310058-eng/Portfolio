"use client";

import React, { useState } from "react";
import { Typography } from "@material-tailwind/react";
import {
  CpuChipIcon,
  ShieldCheckIcon,
  SparklesIcon,
  GlobeAltIcon,
  CommandLineIcon,
} from "@heroicons/react/24/solid";

const TECH_CATEGORIES = [
  { id: "all", name: "ทั้งหมด" },
  { id: "iot", name: "IoT & Hardware" },
  { id: "security", name: "Cybersecurity" },
  { id: "ai", name: "AI & Computer Vision" },
  { id: "desktop", name: "Desktop & Web" },
];

const TECHNOLOGIES = [
  {
    name: "ESP32 Microcontroller",
    cat: "iot",
    desc: "บอร์ดประมวลผล IoT Wi-Fi/Bluetooth และเซนเซอร์ฝังตัว",
    color: "from-orange-500 to-amber-400",
  },
  {
    name: "Python & Tkinter GUI",
    cat: "desktop",
    desc: "พัฒนา Desktop Application และระบบคำนวณสินเชื่อ",
    color: "from-amber-500 to-orange-400",
  },
  {
    name: "C++ & Win32 API",
    cat: "security",
    desc: "พัฒนาโปรแกรม AntiKeylogger และควบคุม Windows Internals",
    color: "from-orange-600 to-amber-500",
  },
  {
    name: "TensorFlow & Keras",
    cat: "ai",
    desc: "ฝึกฝนและประเมินผลโมเดล Deep Learning จำแนกภาพ",
    color: "from-orange-500 to-amber-600",
  },
  {
    name: "YOLOv8 & MobileNetV2",
    cat: "ai",
    desc: "โมเดลตรวจจับวัตถุและใบหน้าแบบ Real-time ความแม่นยำสูง",
    color: "from-amber-400 to-orange-500",
  },
  {
    name: "OpenCV",
    cat: "ai",
    desc: "ประมวลผลสตรีมภาพจากกล้อง Webcam และ Video Feed",
    color: "from-orange-500 to-amber-500",
  },
  {
    name: "Blynk IoT Cloud",
    cat: "iot",
    desc: "แพลตฟอร์มคลาวด์มอนิเตอร์และสั่งงานอุปกรณ์สมาร์ทโฮม",
    color: "from-amber-500 to-orange-600",
  },
  {
    name: "Next.js & React",
    cat: "desktop",
    desc: "พัฒนา Modern Web Application ด้วยสถาปัตยกรรม SSR",
    color: "from-orange-500 to-amber-400",
  },
  {
    name: "Tailwind CSS",
    cat: "desktop",
    desc: "ออกแบบ Responsive UI ด้วย Utility-first CSS",
    color: "from-amber-400 to-orange-500",
  },
  {
    name: "n8n Workflow Automation",
    cat: "desktop",
    desc: "เชื่อมต่อ AI Agents และกระบวนการทำงานอัตโนมัติ",
    color: "from-orange-600 to-amber-500",
  },
  {
    name: "VirtualBox Lab",
    cat: "security",
    desc: "สภาพแวดล้อมเสมือนสำหรับทดสอบ Malware เชิงวิชาการอย่างปลอดภัย",
    color: "from-orange-500 to-amber-600",
  },
  {
    name: "Soil Sensors & Relay Modules",
    cat: "iot",
    desc: "เซนเซอร์วัดค่าความชื้นในดินและวงจรรีเลย์ตัดต่อกำลังไฟฟ้า",
    color: "from-amber-500 to-orange-500",
  },
];

export function Clients() {
  const [selectedCat, setSelectedCat] = useState("all");

  const filteredTech = selectedCat === "all"
    ? TECHNOLOGIES
    : TECHNOLOGIES.filter((t) => t.cat === selectedCat);

  return (
    <section className="bg-black py-20 px-6 lg:px-8 border-y border-zinc-800/80">
      <div className="container mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 rounded-full bg-orange-500/10 border border-orange-500/30 px-3.5 py-1 text-xs font-semibold text-orange-400 shadow-sm mb-3">
            <CpuChipIcon className="h-4 w-4" />
            <span>Technologies & Tools Stack</span>
          </div>
          <Typography variant="h2" className="text-2xl md:text-3xl font-extrabold text-white mb-3 tracking-tight">
            เครื่องมือและเทคโนโลยีที่ใช้พัฒนา
          </Typography>
          <Typography variant="paragraph" className="text-zinc-400 text-sm md:text-base leading-relaxed">
            ครอบคลุมตั้งแต่ระดับฮาร์ดแวร์ฝังตัว (Embedded IoT), ระบบความมั่นคงปลอดภัย (Security), ปัญญาประดิษฐ์ (AI Vision) ไปจนถึง Desktop Software (Python Tkinter) และ Modern Web
          </Typography>

          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {TECH_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCat(cat.id)}
                className={`min-h-[40px] rounded-full px-4 py-1.5 text-xs font-semibold transition-all duration-200 cursor-pointer ${
                  selectedCat === cat.id
                    ? "bg-gradient-to-r from-orange-500 to-amber-500 text-black font-bold shadow-md shadow-orange-500/20"
                    : "bg-zinc-900 text-zinc-300 hover:bg-zinc-800 border border-zinc-800"
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        {/* Tech Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {filteredTech.map((tech, idx) => (
            <div
              key={idx}
              className="group relative rounded-2xl bg-zinc-900/80 p-4 shadow-sm border border-zinc-800/80 hover:shadow-lg hover:border-orange-500/50 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className={`h-1.5 w-8 rounded-full bg-gradient-to-r ${tech.color} mb-3`} />
                <h4 className="font-bold text-white text-xs md:text-sm group-hover:text-orange-400 transition-colors">
                  {tech.name}
                </h4>
              </div>
              <p className="text-[11px] text-zinc-400 mt-2 line-clamp-2 leading-relaxed">
                {tech.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Clients;
