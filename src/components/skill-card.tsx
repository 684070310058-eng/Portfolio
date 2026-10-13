import { Card, CardBody, Typography } from "@material-tailwind/react";
import React from "react";

interface SkillCardProps {
  title: string;
  icon: React.ElementType;
  tags?: string[];
  children: React.ReactNode;
}

export function SkillCard({ icon: Icon, title, tags, children }: SkillCardProps) {
  return (
    <Card
      color="transparent"
      shadow={false}
      className="group rounded-3xl border border-zinc-800/90 bg-zinc-900/80 p-7 shadow-sm hover:shadow-xl hover:border-orange-500/50 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
    >
      <CardBody className="p-0">
        <div className="mb-5 inline-grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-tr from-orange-500 to-amber-500 p-2.5 text-black shadow-md shadow-orange-500/20 group-hover:scale-105 transition-transform duration-300">
          <Icon className="h-6 w-6" strokeWidth={2} />
        </div>
        <Typography variant="h5" className="mb-2.5 font-bold text-white text-lg group-hover:text-orange-400 transition-colors">
          {title}
        </Typography>
        <Typography className="font-normal text-zinc-400 text-sm leading-relaxed mb-5">
          {children}
        </Typography>
      </CardBody>

      {tags && tags.length > 0 && (
        <div className="flex flex-wrap gap-1.5 pt-4 border-t border-zinc-800">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-lg bg-zinc-800 border border-zinc-700/80 px-2.5 py-1 text-xs font-semibold text-orange-300 transition-colors"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </Card>
  );
}

export default SkillCard;
