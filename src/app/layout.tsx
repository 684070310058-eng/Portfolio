/* eslint-disable @next/next/next-script-for-ga */
import "./globals.css";
import type { Metadata } from "next";
import { Prompt } from "next/font/google";
import { Layout, FixedPlugin } from "@/components";

const prompt = Prompt({
  subsets: ["latin", "thai"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "สืบสกุล เสนาสี | IT Portfolio - มหาวิทยาลัยนครพนม",
  description:
    "แฟ้มสะสมผลงาน (Portfolio) นายสืบสกุล เสนาสี สาขาเทคโนโลยีสารสนเทศและนวัตกรรมคอมพิวเตอร์ คณะการจัดการและเทคโนโลยีสารสนเทศ มหาวิทยาลัยนครพนม - โครงงาน IoT, Cybersecurity Research, AI Face Mask Detection, และ 9 โครงงานบน GitHub",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="th" className="scroll-smooth">
      <head>
        <link rel="shortcut icon" href="/favicon.png" type="image/png" />
      </head>
      <body className={prompt.className}>
        <Layout>
          {children}
          <FixedPlugin />
        </Layout>
      </body>
    </html>
  );
}
