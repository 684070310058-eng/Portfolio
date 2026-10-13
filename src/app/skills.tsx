"use client";

import { Typography } from "@material-tailwind/react";
import {
  CpuChipIcon,
  ShieldCheckIcon,
  EyeIcon,
  GlobeAltIcon,
  BoltIcon,
  SpeakerWaveIcon,
  CommandLineIcon,
} from "@heroicons/react/24/solid";
import { SkillCard } from "@/components";
import { SKILLS_DATA } from "../data/portfolioData";

const SKILL_ICONS = [
  CpuChipIcon,
  ShieldCheckIcon,
  EyeIcon,
  GlobeAltIcon,
  BoltIcon,
  SpeakerWaveIcon,
];

export function Skills() {
  return (
    <section id="skills" className="px-6 lg:px-8 py-24 bg-[#09090b]">
      <div className="container mx-auto mb-16 text-center max-w-3xl">
        <div className="inline-flex items-center gap-2 rounded-full bg-orange-500/10 border border-orange-500/30 px-4 py-1.5 text-xs font-semibold text-orange-400 shadow-sm mb-3">
          <BoltIcon className="h-4 w-4" />
          <span>Professional Expertise & Technical Capabilities</span>
        </div>
        <Typography variant="h2" className="mb-4 text-3xl md:text-4xl font-extrabold text-white tracking-tight">
          ทักษะและความเชี่ยวชาญ
        </Typography>
        <Typography
          variant="lead"
          className="mx-auto w-full text-zinc-400 text-sm md:text-base font-normal leading-relaxed"
        >
          ความรู้ความสามารถที่ได้รับการฝึกฝนและประยุกต์ใช้จริงผ่านโครงงานวิชาการ การวิจัย และกิจกรรมเชิงปฏิบัติการในระดับมหาวิทยาลัย
        </Typography>
      </div>
      <div className="container mx-auto grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {SKILLS_DATA.map((skill, idx) => {
          const Icon = SKILL_ICONS[idx % SKILL_ICONS.length];
          return (
            <SkillCard
              key={idx}
              title={skill.title}
              icon={Icon}
              tags={skill.tags}
            >
              {skill.desc}
            </SkillCard>
          );
        })}
      </div>
    </section>
  );
}

export default Skills;
