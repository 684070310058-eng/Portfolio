# 🚀 แฟ้มสะสมผลงาน (Portfolio) - นายสืบสกุล เสนาสี (Suebsakul Senasi)

[![Next.js](https://img.shields.io/badge/Next.js-13.4-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.0-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Vercel Ready](https://img.shields.io/badge/Vercel-Ready-black?style=for-the-badge&logo=vercel)](https://vercel.com/)

แฟ้มสะสมผลงานและนำเสนอผลงานทางวิชาการ (Interactive IT Portfolio) ของ **นายสืบสกุล เสนาสี** นักศึกษาสาขาเทคโนโลยีสารสนเทศและนวัตกรรมคอมพิวเตอร์ คณะการจัดการและเทคโนโลยีสารสนเทศ มหาวิทยาลัยนครพนม 

---

## 🌟 จุดเด่นและเนื้อหาในแฟ้มสะสมผลงาน (Highlights)

1. **ธีมดีไซน์ Orange & Black Pro Max**: สไตล์ Dark Modern โทนส้ม-ดำ สวยงาม ดูเป็นมืออาชีพ รองรับ Responsive ทั้งบนมือถือ แท็บเล็ต และคอมพิวเตอร์
2. **ระบบส่งข้อความติดต่อ (Active Contact Form)**:
   - ส่งข้อมูลตรงเข้าสู่อีเมลทางการ: **`mr.suepsakun@gmail.com`**
   - รองรับการส่งผ่าน FormSubmit.co API อัตโนมัติ พร้อมปุ่มสำรองเปิดส่งใน Gmail / Mail App
3. **การนำเสนอผลงานวิจัยความมั่นคงปลอดภัยไซเบอร์ (Cybersecurity Research)**:
   - โครงงาน *Fake Roblox Payload: Phishing Delivery & Keylogger 4-Layer*
   - โปรแกรมตอบโต้และกวาดล้างระบบ *Anti-Keylogger v3 (C++)*
   - มีระบบ Interactive 4-Layer Architecture Tabs และ Fullscreen Lightbox ดูแผ่นโปสเตอร์ความละเอียดสูง (2500x3542 px)
4. **โครงงานฮาร์ดแวร์ IoT & Embedded Systems**:
   - ESP32 Mini Smart Home จำลองระบบสมาร์ทโฮมพร้อมเซนเซอร์และรีเลย์
   - ระบบตรวจวัดความชื้นในดินและสั่งรดน้ำอัตโนมัติผ่าน Blynk IoT Cloud
5. **โครงงานเดสก์ท็อปและซอฟต์แวร์**:
   - Loan Management System ด้วยภาษา Python & Tkinter GUI
   - AI Face Mask Detection ด้วย OpenCV & Deep Learning
   - AI Agent Workflow Automation ด้วย n8n
6. **รายงานการเข้าร่วมกิจกรรม 10 กิจกรรม**: พร้อมหลักฐานภาพถ่ายและคำอธิบายครบถ้วน
7. **คลังภาพและหลักฐานทั้งหมด (Media Archive)**: คัดแยกภาพไอคอนออก พร้อมระบบจัดหมวดหมู่และ Lightbox แสดงภาพขนาดใหญ่

---

## 🛠️ โครงสร้างไฟล์ในโฟลเดอร์สำหรับ Vercel

```text
Portfolio-Vercel/
├── src/
│   ├── app/
│   │   ├── page.tsx               # หน้าแรกของ Portfolio รวบรวมทุก Section
│   │   ├── layout.tsx             # Root Layout, Metadata, ฟอนต์ Prompt
│   │   ├── hero.tsx               # ส่วนหัว ประวัติย่อ และสถานะพร้อมฝึกงาน
│   │   ├── clients.tsx            # สแต็กเทคโนโลยีที่เชี่ยวชาญ
│   │   ├── skills.tsx             # ทักษะความสามารถหลัก
│   │   ├── projects.tsx           # รายการโครงงาน พร้อมตัวกรองและ Search
│   │   ├── research-poster.tsx    # งานวิจัย Fake Roblox Payload & โปสเตอร์
│   │   ├── activities.tsx         # รายงานการเข้าร่วมกิจกรรม 10 กิจกรรม
│   │   ├── media-gallery.tsx      # คลังรูปภาพและหลักฐานผลงาน
│   │   ├── resume.tsx             # ประวัติการศึกษาและผลงานวิชาการ
│   │   ├── contact-form.tsx       # ส่วนติดต่อ ส่งข้อความไปที่ mr.suepsakun@gmail.com
│   │   └── globals.css            # สไตล์ CSS และแอนิเมชัน
│   ├── components/                # คอมโพเนนต์ UI (Navbar, Footer, Lightbox ฯลฯ)
│   └── data/                      # ฐานข้อมูลผลงานและกิจกรรม (portfolioData.ts)
├── public/                        # รูปภาพผลงานทั้งหมด โลโก้ และ Favicon
├── package.json                   # การตั้งค่า Dependencies และ Build Scripts
├── tailwind.config.ts             # การตั้งค่า Tailwind CSS
├── tsconfig.json                  # การตั้งค่า TypeScript
└── next.config.js                 # การตั้งค่า Next.js
```

---

## 🚀 ขั้นตอนการอัปขึ้น GitHub เพื่อเชื่อมต่อ Vercel

คุณสร้าง Repository ไว้รอแล้วที่:  
🔗 **https://github.com/684070310058-eng/Portfolio**

### ขั้นตอนที่ 1: Push โค้ดขึ้น GitHub ผ่าน Terminal / PowerShell

เปิด PowerShell แล้วรันคำสั่งต่อไปนี้:

```bash
# 1. เข้าไปในโฟลเดอร์ Portfolio-Vercel
cd "c:\Users\ssksn\Desktop\New folder (3)\Portfolio-Vercel"

# 2. เริ่มต้น Git
git init

# 3. ตรวจสอบและตั้งชื่อ branch เป็น main
git branch -M main

# 4. เพิ่ม Remote Repository ของคุณ
git remote add origin https://github.com/684070310058-eng/Portfolio.git

# 5. เพิ่มไฟล์ทั้งหมดและ Commit
git add .
git commit -m "feat: Suebsakul Senasi Portfolio ready for Vercel deployment"

# 6. Push ขึ้น GitHub
git push -u origin main --force
```

---

### ขั้นตอนที่ 2: เชื่อมต่อและ Deploy บน Vercel

1. เข้าเว็บไซต์ **[vercel.com](https://vercel.com/)** แล้วเข้าสู่ระบบด้วยบัญชี GitHub
2. กดปุ่ม **"Add New..."** -> เลือก **"Project"**
3. ค้นหาและเลือก Repository: **`Portfolio`** (หรือ `684070310058-eng/Portfolio`) แล้วกด **"Import"**
4. ในหน้าการตั้งค่า:
   - **Framework Preset**: Next.js (ระบบจะเลือกให้อัตโนมัติ)
   - **Root Directory**: `./` (ใช้ค่าเริ่มต้น)
   - **Build Command**: `next build` (ใช้ค่าเริ่มต้น)
   - **Output Directory**: `.next` หรือ `out` (ใช้ค่าเริ่มต้น)
5. กดปุ่ม **"Deploy"**
6. รอ Vercel ดำเนินการ Build ประมาณ 1-2 นาที คุณจะได้ URL เว็บไซต์จริงทันที (เช่น `https://portfolio-xxxx.vercel.app`)

---

## 💻 การทดสอบรันบนเครื่องคอมพิวเตอร์ (Local Development)

```bash
cd Portfolio-Vercel
npm install
npm run dev
```

เปิดเบราว์เซอร์ไปที่: `http://localhost:3000`

---

## 📬 ข้อมูลการติดต่อ

- **เจ้าของผลงาน**: นายสืบสกุล เสนาสี (Suebsakul Senasi)
- **อีเมล**: [mr.suepsakun@gmail.com](mailto:mr.suepsakun@gmail.com)
- **GitHub**: [https://github.com/684070310058-eng](https://github.com/684070310058-eng)
- **สถาบัน**: มหาวิทยาลัยนครพนม (Nakhon Phanom University)
