"use client";

import { Typography, Button } from "@material-tailwind/react";
import {
  AcademicCapIcon,
  ShieldCheckIcon,
  CpuChipIcon,
  SparklesIcon,
  ArrowRightIcon,
  BuildingLibraryIcon,
  CommandLineIcon,
} from "@heroicons/react/24/solid";
import { PERSONAL_INFO } from "../data/portfolioData";

const RESUME_ITEMS = [
  {
    icon: AcademicCapIcon,
    title: "การศึกษาระดับปริญญาตรี (กำลังศึกษาชั้นปีที่ 4)",
    desc: `${PERSONAL_INFO.major} ${PERSONAL_INFO.faculty} ${PERSONAL_INFO.university} (รหัส ${PERSONAL_INFO.studentId})`,
  },
  {
    icon: ShieldCheckIcon,
    title: "ผลงานวิจัยความมั่นคงปลอดภัยไซเบอร์ (Information Security)",
    desc: "ศึกษาและพัฒนา Fake Roblox Payload: Phishing Delivery & Keylogger 4-Layer พร้อมโปรแกรมตอบโต้ Anti-Keylogger v3 (C++)",
  },
  {
    icon: CommandLineIcon,
    title: "การพัฒนาซอฟต์แวร์เดสก์ท็อป (Desktop Application & GUI)",
    desc: "พัฒนาระบบบริหารจัดการสินเชื่อ (Loan Management Desktop App) ด้วยภาษา Python และส่วนต่อประสานผู้ใช้ Tkinter GUI พร้อมระบบคำนวณค่างวดและฐานข้อมูล",
  },
  {
    icon: CpuChipIcon,
    title: "การพัฒนาโครงงาน Embedded Systems & IoT",
    desc: "ออกแบบและสร้าง ESP32 Mini Smart Home และระบบตรวจวัดความชื้นดินรดน้ำอัตโนมัติเชื่อมต่อคลาวด์ Blynk IoT",
  },
  {
    icon: SparklesIcon,
    title: "การอบรมเชิงปฏิบัติการขั้นสูง (Specialized Certifications & Workshops)",
    desc: "อบรมการประยุกต์ใช้ Workflow Automation และ AI Agent ในองค์กรด้วย n8n และโครงการส่งเสริมทักษะดิจิทัลสำหรับคนรุ่นใหม่",
  },
];

export function Resume() {
  return (
    <section id="resume" className="px-6 lg:px-8 py-24 bg-black border-t border-zinc-800/80">
      <div className="container mx-auto grid w-full grid-cols-1 items-center gap-16 lg:grid-cols-2">
        <div className="col-span-1">
          <div className="inline-flex items-center gap-2 rounded-full bg-orange-500/10 border border-orange-500/30 px-4 py-1.5 text-xs font-semibold text-orange-400 shadow-sm mb-3">
            <BuildingLibraryIcon className="h-4 w-4" />
            <span>Academic Background & Qualifications</span>
          </div>
          <Typography variant="h2" className="text-3xl md:text-4xl font-extrabold text-white mb-4 tracking-tight">
            ประวัติการศึกษาและผลงานทางวิชาการ
          </Typography>
          <Typography className="mb-6 font-normal text-zinc-300 text-sm md:text-base leading-relaxed">
            นายสืบสกุล เสนาสี นักศึกษาสาขาเทคโนโลยีสารสนเทศและนวัตกรรมคอมพิวเตอร์ มหาวิทยาลัยนครพนม ผู้มีความสนใจและมุ่งมั่นในการผสานศาสตร์ด้านคอมพิวเตอร์ ฮาร์ดแวร์ IoT, การวิเคราะห์ความปลอดภัยทางไซเบอร์, โปรแกรมเดสก์ท็อป Python Tkinter และปัญญาประดิษฐ์ เพื่อสร้างนวัตกรรมที่มีคุณค่า
          </Typography>
          <div className="flex flex-wrap items-center gap-4">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <Button
                color="gray"
                className="min-h-[44px] flex items-center gap-2 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-black font-bold capitalize text-xs px-6 py-3 cursor-pointer shadow-md shadow-orange-500/20"
              >
                <span>ดูโปรไฟล์บน GitHub</span>
                <ArrowRightIcon strokeWidth={3} className="h-3 w-3" />
              </Button>
            </a>
            <a href="#contact" className="inline-block">
              <Button
                variant="outlined"
                color="gray"
                className="min-h-[44px] capitalize text-xs font-semibold border-zinc-700 bg-zinc-900 text-zinc-200 hover:bg-zinc-800 px-6 py-3 cursor-pointer"
              >
                ติดต่อสอบถาม
              </Button>
            </a>
          </div>
        </div>

        <div className="col-span-1 space-y-4">
          {RESUME_ITEMS.map((item, idx) => (
            <div
              key={idx}
              className="flex items-start gap-4 p-5 rounded-2xl border border-zinc-800/90 bg-zinc-900/80 shadow-sm hover:shadow-xl hover:border-orange-500/50 hover:-translate-y-0.5 transition-all duration-300"
            >
              <div className="h-12 w-12 shrink-0 rounded-2xl bg-gradient-to-tr from-orange-500 to-amber-500 flex items-center justify-center text-black shadow-md shadow-orange-500/20">
                <item.icon className="h-6 w-6" strokeWidth={2} />
              </div>
              <div>
                <h4 className="font-bold text-white text-sm md:text-base mb-1">
                  {item.title}
                </h4>
                <p className="font-normal text-zinc-400 text-xs md:text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Resume;
