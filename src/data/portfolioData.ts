export interface ProjectItem {
  id: string;
  githubId: number;
  title: string;
  thaiTitle: string;
  category: "IoT & Hardware" | "Cybersecurity" | "AI & Computer Vision" | "Web & App" | "Desktop Application";
  githubUrl: string;
  featured: boolean;
  coverImage: string | null;
  shortDesc: string;
  fullDesc: string;
  highlights: string[];
  techStack: string[];
  images: {
    src: string;
    caption: string;
  }[];
}

export interface ActivityItem {
  id: number;
  title: string;
  subtitle: string;
  date: string;
  location: string;
  description: string;
  image: string;
  category: "วิชาการ & อบรม" | "กิจกรรมคณะ & มหาวิทยาลัย" | "กิจกรรมเพื่อสังคม & จิตอาสา";
}

export const PERSONAL_INFO = {
  name: "นายสืบสกุล เสนาสี",
  nameEn: "Suepsakun senasee",
  studentId: "684070310058",
  faculty: "คณะการจัดการและเทคโนโลยีสารสนเทศ",
  facultyEn: "Faculty of Management and Information Technology",
  university: "มหาวิทยาลัยนครพนม",
  universityEn: "Nakhon Phanom University (NPU)",
  major: "สาขาเทคโนโลยีสารสนเทศและนวัตกรรมคอมพิวเตอร์ (IT)",
  majorEn: "Information Technology and Computer Innovation",
  year: "นักศึกษาชั้นปีที่ 4",
  github: "https://github.com/684070310058-eng",
  githubUsername: "684070310058-eng",
  bio: "นักศึกษาสาขาเทคโนโลยีสารสนเทศและนวัตกรรมคอมพิวเตอร์ มหาวิทยาลัยนครพนม ผู้มีความมุ่งมั่นและเชี่ยวชาญด้าน IoT, Cybersecurity Research, AI & Computer Vision, และ Full-Stack Web Development มุ่งเน้นการสร้างสรรค์นวัตกรรมซอฟต์แวร์และฮาร์ดแวร์ที่ตอบโจทย์การใช้งานจริงและมีความปลอดภัยสูง",
  avatar: "/portfolio_images/profile/suepsakun_senasee_transparent.png",
  contact: {
    email: "mr.suepsakun@gmail.com",
    location: "นครพนม, ประเทศไทย",
    github: "https://github.com/684070310058-eng",
  }
};

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: "esp32-mini-smart-home",
    githubId: 1,
    title: "ESP32 Mini Smart Home",
    thaiTitle: "ระบบสมาร์ทโฮมจำลองด้วย ESP32",
    category: "IoT & Hardware",
    githubUrl: "https://github.com/684070310058-eng/ESP32_MiniSmartHome",
    featured: true,
    coverImage: "/portfolio_images/portfolio_sec2/image1.jpg",
    shortDesc: "ระบบจำลองบ้านอัจฉริยะแบบครบวงจร ควบคุมไฟ อุปกรณ์ไฟฟ้า และระบบความปลอดภัยผ่านไมโครคอนโทรลเลอร์ ESP32",
    fullDesc: "โครงการ ESP32 Mini Smart Home จำลองระบบบ้านอัจฉริยะขนาดเล็ก ออกแบบและติดตั้งวงจรควบคุมอุปกรณ์ไฟฟ้า เซนเซอร์ตรวจวัด และสวิตช์รีเลย์ โดยใช้บอร์ด ESP32 ประมวลผลและเชื่อมต่อระบบเครือข่ายไร้สาย ช่วยให้สามารถสั่งการและติดตามสถานะภายในบ้านได้แบบเรียลไทม์",
    highlights: [
      "ออกแบบและประกอบโมเดลบ้านจำลองพร้อมวางผังสายไฟและอุปกรณ์จริง",
      "ควบคุมรีเลย์หลายช่องสัญญาณเพื่อสั่งเปิด-ปิดหลอดไฟและเครื่องใช้ไฟฟ้า",
      "ติดตั้งเซนเซอร์ตรวจจับและรายงานสถานะสภาพแวดล้อมภายในบ้าน",
      "พัฒนาโปรแกรมควบคุมบนบอร์ด ESP32 ให้ประหยัดพลังงานและตอบสนองฉับไว"
    ],
    techStack: ["ESP32", "C/C++ Arduino", "IoT Sensors", "Relay Control", "Embedded Systems"],
    images: [
      {
        src: "/portfolio_images/portfolio_sec2/image1.jpg",
        caption: "ภาพรวมโครงสร้างโมเดลบ้านจำลอง ESP32 Mini Smart Home"
      },
      {
        src: "/portfolio_images/portfolio_sec2/image2.jpg",
        caption: "การจัดวางโมดูลควบคุมและบอร์ดไมโครคอนโทรลเลอร์ภายในตัวบ้าน"
      },
      {
        src: "/portfolio_images/portfolio_sec2/image3.jpg",
        caption: "ระบบเซนเซอร์ตรวจจับและระบบแสงสว่างจำลองในแต่ละห้อง"
      },
      {
        src: "/portfolio_images/portfolio_sec2/image4.jpg",
        caption: "การทดสอบการทำงานของแผงวงจรและสัญญาณไฟฟ้าควบคุม"
      },
      {
        src: "/portfolio_images/portfolio_sec2/image5.jpg",
        caption: "การประกอบโครงสร้างและการตรวจสอบความเรียบร้อยของระบบสมาร์ทโฮม"
      }
    ]
  },
  {
    id: "antikeylogger",
    githubId: 2,
    title: "AntiKeylogger",
    thaiTitle: "โปรแกรมป้องกันและกวาดล้างการดักจับการพิมพ์ (Anti-Keylogger v3)",
    category: "Cybersecurity",
    githubUrl: "https://github.com/684070310058-eng/AntiKeylogger",
    featured: true,
    coverImage: "/portfolio_images/roblox_payload/image7.png",
    shortDesc: "เครื่องมือตรวจจับ ปิดกั้น และทำความสะอาดมัลแวร์ Keylogger และส่วนขยายบราว์เซอร์ไม่พึงประสงค์ พัฒนาด้วย C++",
    fullDesc: "โปรแกรม Anti-Keylogger v3 พัฒนาด้วยภาษา C++ เพื่อตอบโต้และปกป้องระบบคอมพิวเตอร์จากการถูกคุกคามด้วยมัลแวร์ดักจับแป้นพิมพ์ โดยมีฟังก์ชันการทำงานเชิงลึกครอบคลุม: KillTargetProcesses ตรวจจับและปิด Process ที่ต้องสงสัย, KillPort8888 ตรวจสอบและปิดการเชื่อมต่อพอร์ต 8888, CloseBrowsers สั่งปิดเบราว์เซอร์เพื่อปลดล็อกไฟล์, CleanRegistry ล้างค่า Startup ใน Registry (HKCU Run), RestoreAllChromeShortcuts คืนค่าไฟล์ทางลัดของเบราว์เซอร์, CleanFiles ลบไฟล์ Log และส่วนขยาย Chrome ที่ถูกแฝงตัว และ VerifyClean ตรวจสอบความปลอดภัยซ้ำ",
    highlights: [
      "Process Termination: สั่งยุติ Process มัลแวร์เป้าหมายทันทีที่พบความผิดปกติ",
      "Network Port Cleanup: สั่งปิด Local HTTP Server (Port 8888) ที่มัลแวร์เปิดใช้ดักข้อมูล",
      "Registry & Browser Restoration: ล้างกุญแจรีจิสทรีและแก้ Shortcut ของ Chrome/Edge ให้กลับสู่สภาพเดิม",
      "Log & Extension Remediation: ลบไฟล์ Keystroke Logs และ Extension ปลอม พร้อมทดสอบบล็อกการส่ง Mail"
    ],
    techStack: ["C++", "Win32 API", "Windows Registry", "Process Management", "System Security"],
    images: [
      {
        src: "/portfolio_images/roblox_payload/image7.png",
        caption: "หน้าต่างคอนโซลแสดงการทำงานของ Anti-Keylogger Process ในการปิดโปรแกรมอันตรายและล้าง Registry"
      },
      {
        src: "/portfolio_images/roblox_payload/image8.png",
        caption: "ผลลัพธ์การสกัดกั้นสำเร็จ: มัลแวร์ไม่สามารถส่งอีเมล Credential ออกนอกระบบได้"
      }
    ]
  },
  {
    id: "playload-klg",
    githubId: 3,
    title: "Fake Roblox Payload",
    thaiTitle: "การศึกษาและพัฒนาเพย์โหลด Roblox ปลอม และ Keylogger ดักจับข้อมูลหลายชั้น",
    category: "Cybersecurity",
    githubUrl: "https://github.com/684070310058-eng/Playload_KLG",
    featured: true,
    coverImage: "/portfolio_images/poster/poster_full_page.png",
    shortDesc: "งานวิจัยวิเคราะห์ภัยคุกคามไซเบอร์: Phishing Delivery และ Keylogger พรางไอคอน พร้อมกลไกดักข้อมูล 4 ชั้น",
    fullDesc: "งานวิจัยเชิงวิชาการรายวิชา Information System Security คณะวิทยาการจัดการและเทคโนโลยีสารสนเทศ มหาวิทยาลัยนครพนม ศึกษาและจำลองกลไกภัยคุกคามแบบ Fake Roblox Payload ในสภาพแวดล้อมเสมือนที่ปลอดภัย (VirtualBox) โดยวิเคราะห์การใช้ Social Engineering ร่วมกับเว็บไซต์ Phishing หลอกให้ดาวน์โหลดโปรแกรมแฝง Keylogger ที่พรางไอคอน (Icon-Spoofed) และใช้กลไกดักจับข้อมูลแบบ 4 ชั้น: Layer 1 (Keyboard Hook ดักจับ Keystroke ระดับ Low-level), Layer 2 (UIA Focus Tracker ตรวจจับช่องกรอก Input/Password), Layer 3 (State Machine คัดกรองแยก Username & Password), Layer 4 (Chrome Extension ดักอ่าน DOM บนเว็บ) และส่งข้อมูลออกผ่าน Gmail SMTP",
    highlights: [
      "วิจัยและทดลองในสภาพแวดล้อมควบคุม VirtualBox เพื่อวิเคราะห์พฤติกรรมมัลแวร์อย่างปลอดภัย",
      "สถาปัตยกรรม 4-Layer Attack กลไกดักจับข้อมูลรับรองความแม่นยำสูง",
      "จำลองหน้าเว็บ Phishing เลียนแบบแพลตฟอร์ม Roblox สำหรับศึกษาเทคนิค Social Engineering",
      "นำเสนอผลงานผ่าน Research Poster ทางวิชาการพร้อมเครื่องมือตอบโต้และป้องกัน"
    ],
    techStack: ["Python", "C++", "Win32 API", "UIA Automation", "Chrome Extension", "SMTP", "VirtualBox"],
    images: [
      {
        src: "/portfolio_images/poster/poster_full_page.png",
        caption: "แผ่นโปสเตอร์วิจัยฉบับสมบูรณ์: Fake Roblox Payload: Phishing Delivery & Icon-Spoofed Keylogger"
      },
      {
        src: "/portfolio_images/roblox_payload/image3.png",
        caption: "หน้าเว็บไซต์ Phishing จำลองเพื่อการศึกษา Social Engineering ดาวน์โหลดโปรแกรมโกง Roblox"
      },
      {
        src: "/portfolio_images/roblox_payload/image4.png",
        caption: "หน้า Terminal แสดงการรันซ่อนในพื้นหลังของ Keylogger Process"
      },
      {
        src: "/portfolio_images/roblox_payload/image5.png",
        caption: "การทดสอบดักจับ Keystrokes และข้อมูลบัญชีผู้ใช้จากการพิมพ์บนแป้นพิมพ์"
      },
      {
        src: "/portfolio_images/roblox_payload/image6.png",
        caption: "การจัดรูปแบบข้อมูล Credentials และการแอบส่งออกผ่าน Gmail SMTP"
      },
      {
        src: "/portfolio_images/poster/img3.png",
        caption: "แบนเนอร์ชื่อโครงงานวิจัย Fake Roblox Payload Phishing Delivery"
      },
      {
        src: "/portfolio_images/poster/img4.png",
        caption: "ไดอะแกรมกลไกการโจมตี Multilayer Credential Capture Mechanism (4 Layers)"
      },
      {
        src: "/portfolio_images/poster/img5.png",
        caption: "ไดอะแกรมการส่งผ่านฟิชชิ่งและการพรางไอคอนมัลแวร์ (Social Engineering Delivery)"
      }
    ]
  },
  {
    id: "soil-sensor-esp32",
    githubId: 4,
    title: "soil-sensor-esp32",
    thaiTitle: "ระบบเซนเซอร์วัดความชื้นในดินและรดน้ำอัตโนมัติด้วย ESP32 และ Blynk IoT",
    category: "IoT & Hardware",
    githubUrl: "https://github.com/684070310058-eng/soil-sensor-esp32",
    featured: true,
    coverImage: "/portfolio_images/soil_sensor/page15_img13.png",
    shortDesc: "โครงงาน IoT วัดความชื้นในดินและอุณหภูมิ ควบคุมสปริงเกอร์รดน้ำอัตโนมัติผ่านคลาวด์ Blynk",
    fullDesc: "โครงงาน Internet of Things (IoT) ระบบตรวจวัดอุณหภูมิและความชื้นในดินและระบบรดน้ำอัตโนมัติ ออกแบบและพัฒนาโดยใช้ไมโครคอนโทรลเลอร์ ESP32 เชื่อมต่อกับ Soil Moisture Sensor (Analog Pin D34), Relay 2 Channel สั่งเปิด-ปิดปั๊มน้ำ/สปริงเกอร์ และไฟ LED แจ้งเตือนสถานะ เชื่อมต่อระบบคลาวด์ Blynk IoT รองรับการทำงาน 2 โหมด: Auto Mode (รดน้ำอัตโนมัติเมื่อความชื้นต่ำกว่าเกณฑ์ Slider ที่กำหนด) และ Manual Mode (แตะเปิด-ปิดสปริงเกอร์ได้โดยตรงผ่านแอปพลิเคชันบนสมาร์ตโฟนจากระยะไกล)",
    highlights: [
      "เชื่อมต่อ Blynk.Cloud ควบคุมและติดตามค่าความชื้นได้จากทุกที่ทั่วโลก",
      "ระบบ 2 โหมดการทำงาน: Auto (รดน้ำตามเกณฑ์ Slider อัจฉริยะ) และ Manual (ควบคุมด้วยตนเอง)",
      "ใช้วงจรรีเลย์ 2 ช่อง ควบคุมปั๊มน้ำกำลังสูงได้อย่างปลอดภัยและเสถียร",
      "ทดสอบการอ่านค่าเซนเซอร์แบบเรียลไทม์พร้อมการตอบสนองที่แม่นยำ"
    ],
    techStack: ["ESP32", "Blynk IoT Cloud", "Soil Moisture Sensor", "Relay Module", "C++ Arduino", "IoT Automation"],
    images: [
      {
        src: "/portfolio_images/soil_sensor/page1_img1.jpeg",
        caption: "หน้าปกรายงานโครงงาน IoT ระบบตรวจวัดอุณหภูมิและความชื้น นายสืบสกุล เสนาสี"
      },
      {
        src: "/portfolio_images/soil_sensor/page1_img2.jpeg",
        caption: "การเริ่มต้นติดตั้งและตั้งค่าแอปพลิเคชัน Blynk บนมือถือ"
      },
      {
        src: "/portfolio_images/soil_sensor/page2_img3.png",
        caption: "ขั้นตอนการดาวน์โหลดแอปพลิเคชัน Blynk สำหรับการจัดการ IoT"
      },
      {
        src: "/portfolio_images/soil_sensor/page2_img4.jpeg",
        caption: "ขั้นตอนการลงทะเบียนและยืนยันตัวตนในระบบ Blynk IoT"
      },
      {
        src: "/portfolio_images/soil_sensor/page3_img5.png",
        caption: "การสร้างโปรเจกต์ใหม่และตั้งค่า Device Template ID และ Auth Token"
      },
      {
        src: "/portfolio_images/soil_sensor/page4_img6.jpeg",
        caption: "อุปกรณ์หลัก: บอร์ดไมโครคอนโทรลเลอร์ ESP32 Wi-Fi/Bluetooth"
      },
      {
        src: "/portfolio_images/soil_sensor/page4_img7.jpeg",
        caption: "อุปกรณ์ Relay 2 Channel สำหรับสั่งตัดต่อวงจรสปริงเกอร์และปั๊มน้ำ"
      },
      {
        src: "/portfolio_images/soil_sensor/page5_img8.jpeg",
        caption: "เซนเซอร์ Soil Moisture Sensor สำหรับวัดความชื้นในดินแบบอะนาล็อก"
      },
      {
        src: "/portfolio_images/soil_sensor/page5_img9.jpeg",
        caption: "หลอดไฟ LED แสดงสถานะการทำงานของปั๊มน้ำและระบบเครือข่าย"
      },
      {
        src: "/portfolio_images/soil_sensor/page6_img10.jpeg",
        caption: "แผนผังการต่อวงจรอุปกรณ์ระบบตรวจวัดอุณหภูมิและความชื้น ESP32"
      },
      {
        src: "/portfolio_images/soil_sensor/page6_img11.jpeg",
        caption: "ภาพถ่ายการต่อสายวงจรอุปกรณ์จริงบนบอร์ดทดลอง (Breadboard)"
      },
      {
        src: "/portfolio_images/soil_sensor/page14_img12.png",
        caption: "การทดสอบอ่านค่าความชื้นในโหมด Auto ด้วยทิชชู่เปียกพันรอบเซนเซอร์"
      },
      {
        src: "/portfolio_images/soil_sensor/page15_img13.png",
        caption: "หน้าจอแอปพลิเคชัน Blynk แสดงผลโหมด Manual และปุ่มควบคุมสปริงเกอร์"
      },
      {
        src: "/portfolio_images/soil_sensor/page16_img14.jpeg",
        caption: "ผลการทดสอบการทำงานของรีเลย์เมื่อเซนเซอร์ตรวจพบความชื้นตามเงื่อนไข"
      },
      {
        src: "/portfolio_images/soil_sensor/page17_img15.jpeg",
        caption: "การทดสอบสปริงเกอร์รดน้ำและการควบคุมโหมด Manual ในการใช้งานจริง"
      }
    ]
  },
  {
    id: "face-mask-detection",
    githubId: 5,
    title: "face-mask-detection",
    thaiTitle: "การใช้ปัญญาประดิษฐ์เพื่อตรวจจับการสวมหน้ากากอนามัย (Face Mask Detection System)",
    category: "AI & Computer Vision",
    githubUrl: "https://github.com/684070310058-eng/face-mask-detection",
    featured: true,
    coverImage: "/portfolio_images/face_mask/image9.png",
    shortDesc: "ระบบตรวจจับการสวมหน้ากากอนามัยแบบ Real-time ด้วย Deep Learning (MobileNetV2 & YOLOv8n)",
    fullDesc: "โครงงานวิจัย Artificial Intelligence for Face Mask Detection โดย นายสืบสกุล เสนาสี และ นายปิยะวัฒน์ โพธิ์นาม ที่ปรึกษา อ.ชินาพัฒน์ สกุลราศีสวย สาขาเทคโนโลยีสารสนเทศและนวัตกรรมคอมพิวเตอร์ มหาวิทยาลัยนครพนม มุ่งแก้ปัญหาการคัดกรองบุคคลในพื้นที่สาธารณะโดยใช้ปัญญาประดิษฐ์และคอมพิวเตอร์วิทัศน์ พัฒนาและเปรียบเทียบโมเดล MobileNetV2 และ YOLOv8n เพื่อจำแนกสถานะการสวมหน้ากาก 3 รูปแบบ: สวมหน้ากากถูกต้อง (With Mask - กรอบเขียว), ไม่สวมหน้ากาก (Without Mask - กรอบแดง), และสวมไม่ถูกต้อง (Incorrect Mask - กรอบเหลือง) พร้อมออกแบบหน้าต่าง GUI ด้วย OpenCV และ Tkinter สำหรับใช้งานร่วมกับกล้องเว็บแคมแบบ Real-time",
    highlights: [
      "ตรวจจับและจำแนกได้ 3 คลาส: With Mask, Without Mask, และ Incorrect Mask",
      "เปรียบเทียบประสิทธิภาพระหว่างโมเดล MobileNetV2 และ YOLOv8n เพื่อหาโมเดลที่มี Latency ต่ำที่สุด",
      "พัฒนาหน้าต่างโปรแกรม Graphical User Interface (GUI) ใช้งานง่าย รองรับตรวจจับพร้อมกันหลายคน",
      "ประเมินประสิทธิภาพด้วยค่า Accuracy, Precision, Recall, F1-Score และ Confusion Matrix อย่างละเอียด"
    ],
    techStack: ["Python", "TensorFlow", "YOLOv8", "MobileNetV2", "OpenCV", "Tkinter", "Computer Vision", "Deep Learning"],
    images: [
      {
        src: "/portfolio_images/face_mask/image2.png",
        caption: "ตัวอย่างชุดข้อมูลภาพคลาส With Mask (สวมหน้ากากอนามัยถูกต้อง)"
      },
      {
        src: "/portfolio_images/face_mask/image3.png",
        caption: "ผลการตรวจจับของโมเดลกรณีสวมหน้ากาก: ตรวจจับใบหน้าและแสดงผลกรอบสีเขียวพร้อมค่าความเชื่อมั่น"
      },
      {
        src: "/portfolio_images/face_mask/image4.png",
        caption: "ตัวอย่างชุดข้อมูลภาพคลาส Without Mask (ไม่สวมหน้ากากอนามัย)"
      },
      {
        src: "/portfolio_images/face_mask/image5.png",
        caption: "ผลการตรวจจับกรณีไม่สวมหน้ากาก: แสดงผลกรอบสีแดงแจ้งเตือนทันที"
      },
      {
        src: "/portfolio_images/face_mask/image6.png",
        caption: "ตัวอย่างชุดข้อมูลภาพคลาส Incorrect Mask (สวมหน้ากากอนามัยไม่ถูกต้อง เช่น ใต้คาง/เปิดจมูก)"
      },
      {
        src: "/portfolio_images/face_mask/image7.png",
        caption: "ผลการตรวจจับกรณีสวมหน้ากากไม่ถูกต้อง: แสดงผลกรอบสีเหลืองแจ้งเตือนให้ปรับปรุง"
      },
      {
        src: "/portfolio_images/face_mask/image8.png",
        caption: "กราฟเปรียบเทียบประสิทธิภาพโมเดล Deep Learning: Precision, Recall และ F1-Score"
      },
      {
        src: "/portfolio_images/face_mask/image9.png",
        caption: "หน้าต่างโปรแกรม GUI Face Mask Detection System ใช้งานร่วมกับกล้อง Webcam ตรวจจับแบบ Real-time"
      },
      {
        src: "/portfolio_images/face_mask/image10.png",
        caption: "การทดสอบตรวจจับใบหน้าบุคคลหลายคนพร้อมกันในเฟรมภาพ (Multi-Face Detection)"
      },
      {
        src: "/portfolio_images/face_mask/image11.png",
        caption: "การวิเคราะห์ Confusion Matrix และค่า Loss จากการฝึกอบรมโมเดลตรวจจับ"
      }
    ]
  },
  {
    id: "loan-management-system",
    githubId: 6,
    title: "loan-management-system",
    thaiTitle: "ระบบจัดการและบริหารสินเชื่อ (Loan Management Desktop Program)",
    category: "Desktop Application",
    githubUrl: "https://github.com/684070310058-eng/loan-management-system",
    featured: true,
    coverImage: "/portfolio_images/portfolio_sec2/image6.jpg",
    shortDesc: "โปรแกรมเดสก์ท็อป (Desktop Application) บริหารจัดการสินเชื่อและคำนวณสัญญาเงินกู้ พัฒนาด้วย Python และ Tkinter GUI",
    fullDesc: "โปรแกรมเดสก์ท็อป (Desktop Application) สำหรับบริหารจัดการสัญญาเงินกู้และข้อมูลสินเชื่อ พัฒนาขึ้นด้วยภาษา Python และออกแบบส่วนต่อประสานผู้ใช้ด้วย Tkinter GUI ช่วยให้ผู้ใช้งานสามารถบันทึกข้อมูลผู้กู้ คำนวณอัตราดอกเบี้ย คำนวณตารางผ่อนชำระค่างวดรายเดือนแบบอัตโนมัติ ตัดยอดเงินต้นและดอกเบี้ย บันทึกประวัติการรับชำระเงิน พร้อมหน้า Dashboard แสดงผลสถิติและภาพรวมยอดปล่อยสินเชื่อในรูปแบบ Graphical User Interface บนคอมพิวเตอร์อย่างมีประสิทธิภาพและเสถียรภาพสูง",
    highlights: [
      "พัฒนาเป็นโปรแกรมเดสก์ท็อป (Desktop Application) ด้วย Python และ UI Tkinter รองรับการทำงานแบบ Native OS",
      "ระบบจัดการข้อมูลสัญญาเงินกู้และประวัติลูกหนี้ พร้อมระบบสืบค้นข้อมูลรวดเร็ว",
      "ระบบคำนวณดอกเบี้ยและสร้างตารางผ่อนชำระค่างวดอัตโนมัติ ตัดยอดเงินต้นและดอกเบี้ยแม่นยำ",
      "หน้าต่าง Dashboard สรุปยอดสินเชื่อ ยอดชำระ และรายงานลูกหนี้ค้างชำระแบบเรียลไทม์"
    ],
    techStack: ["Python", "Tkinter GUI", "SQLite / MySQL", "Desktop Application", "CustomTkinter / Python GUI"],
    images: [
      {
        src: "/portfolio_images/portfolio_sec2/image6.jpg",
        caption: "หน้า Dashboard ของโปรแกรมเดสก์ท็อป Loan Management System (Python Tkinter) แสดงสถิติและภาพรวมสินเชื่อ"
      },
      {
        src: "/portfolio_images/portfolio_sec2/image7.jpg",
        caption: "หน้าต่าง GUI บันทึกข้อมูลสัญญาเงินกู้และตารางคำนวณงวดการผ่อนชำระเงินต้นและดอกเบี้ย (Tkinter UI)"
      }
    ]
  },
  {
    id: "voice-authentication",
    githubId: 7,
    title: "VoiceAuthentication",
    thaiTitle: "ระบบยืนยันตัวตนด้วยเสียงชีวมิติ (Voice Biometric Authentication)",
    category: "AI & Computer Vision",
    githubUrl: "https://github.com/684070310058-eng/VoiceAuthentication",
    featured: false,
    coverImage: null,
    shortDesc: "ระบบยืนยันตัวตนความปลอดภัยสูงด้วยเอกลักษณ์เสียงพูดของบุคคล (Voiceprint & MFCC)",
    fullDesc: "โปรเจกต์ VoiceAuthentication ศึกษาระบบความปลอดภัยชีวมิติทางเสียง (Voice Biometrics) ใช้การสกัดคุณลักษณะของคลื่นเสียง (Audio Feature Extraction) เช่น MFCC (Mel-Frequency Cepstral Coefficients), Pitch และ Spectrogram เพื่อสร้าง Voiceprint ประจำตัวของผู้ใช้งานแต่ละคน และทำการเปรียบเทียบความคล้ายคลึงของเสียงเพื่อทำการ Authentication เข้าสู่ระบบได้อย่างปลอดภัยและสะดวกสบาย",
    highlights: [
      "สกัดคุณลักษณะทางเสียงด้วยเทคนิค MFCC และ Spectral Analysis",
      "จำแนกอัตลักษณ์บุคคลด้วยโมเดล Machine Learning ในการจับคู่คลื่นเสียง",
      "เพิ่มชั้นความปลอดภัยสองระดับ (Multi-factor Authentication) ด้วยเสียงชีวมิติ",
      "ทดสอบการรู้จำเสียงในสภาพแวดล้อมที่มีสัญญาณรบกวน (Noise Resilience)"
    ],
    techStack: ["Python", "Librosa", "Audio Processing", "Scikit-Learn", "NumPy", "Voice Biometrics"],
    images: []
  },
  {
    id: "tipjar",
    githubId: 8,
    title: "Tipjar",
    thaiTitle: "แอปพลิเคชันกล่องทิปและระบบรับเงินสนับสนุนออนไลน์",
    category: "Web & App",
    githubUrl: "https://github.com/684070310058-eng/Tipjar",
    featured: false,
    coverImage: null,
    shortDesc: "แพลตฟอร์มรับเงินสนับสนุนและกล่องทิปดิจิทัลสำหรับครีเอเตอร์และร้านค้า",
    fullDesc: "แอปพลิเคชัน Tipjar ออกแบบมาเพื่อให้ผู้ใช้งาน ครีเอเตอร์ หรือร้านค้าสามารถสร้างหน้าเว็บรับทิปหรือรับการสนับสนุนทางการเงินผ่านช่องทางออนไลน์ รองรับการสแกน QR Code พร้อมส่งข้อความและสติกเกอร์ให้กำลังใจ มีระบบจัดการข้อมูลยอดเงิน สรุปสถิติผู้ให้ทิป และการแจ้งเตือนแบบเรียลไทม์",
    highlights: [
      "หน้า Landing Page รับทิปแบบมินิมอล ใช้งานง่ายทั้งบนมือถือและคอมพิวเตอร์",
      "ระบบบันทึกข้อความให้กำลังใจและแสดงรายการทิปล่าสุด",
      "ระบบบริหารจัดการและสรุปยอดเงินสนับสนุนย้อนหลัง",
      "ออกแบบด้วยแนวคิด User-friendly และ Responsive Web Design"
    ],
    techStack: ["React", "JavaScript / TypeScript", "Tailwind CSS", "Web Payments", "Database"],
    images: []
  },
  {
    id: "speech-to-word-app",
    githubId: 9,
    title: "SpeechToWordApp",
    thaiTitle: "แอปพลิเคชันแปลงเสียงพูดเป็นข้อความ (Speech to Word App)",
    category: "AI & Computer Vision",
    githubUrl: "https://github.com/684070310058-eng/SpeechToWordApp",
    featured: false,
    coverImage: null,
    shortDesc: "แอปพลิเคชันถอดความเสียงพูดแบบเรียลไทม์และบันทึกเป็นไฟล์เอกสารข้อความ",
    fullDesc: "แอปพลิเคชัน SpeechToWordApp พัฒนาขึ้นเพื่อช่วยอำนวยความสะดวกในการบันทึกข้อมูลเสียงพูดแปลงเป็นข้อความตัวอักษรแบบ Real-time (Speech-to-Text Transcription) รองรับการรับฟังเสียงผ่านไมโครโฟนสด หรือนำเข้าไฟล์เสียงที่บันทึกไว้ เพื่อถอดความออกมาเป็นเอกสารข้อความ ช่วยเพิ่มประสิทธิภาพในการจดบันทึกการประชุมและการพิมพ์งาน",
    highlights: [
      "ถอดความเสียงพูดเป็นข้อความตัวอักษรแบบทันทีทันใด (Real-time Speech Recognition)",
      "รองรับการส่งออกข้อมูลที่ถอดความได้ไปยังไฟล์เอกสารข้อความ",
      "อินเทอร์เฟซผู้ใช้ที่เรียบง่าย ควบคุมการบันทึกและแก้ไขข้อความได้อย่างสะดวก",
      "ผสานการทำงานกับ Speech Recognition Engine ประสิทธิภาพสูง"
    ],
    techStack: ["Python / JavaScript", "SpeechRecognition", "Natural Language Processing", "Audio API", "UI Framework"],
    images: []
  }
];

export const ACTIVITIES_DATA: ActivityItem[] = [
  {
    id: 1,
    title: "MIT Open House 2569",
    subtitle: "เปิดบ้านสาขา IT คณะการจัดการและเทคโนโลยีสารสนเทศ",
    date: "9 กันยายน 2569",
    location: "คณะการจัดการและเทคโนโลยีสารสนเทศ มหาวิทยาลัยนครพนม",
    description: "ร่วมจัดบูธแนะนำสาขาเทคโนโลยีสารสนเทศและนวัตกรรมคอมพิวเตอร์ (IT) จัดกิจกรรมเล่นเกมสุ่มของรางวัล และแจกของที่ระลึกให้น้อง ๆ นักเรียนและผู้สนใจที่มาเยี่ยมชมบูธ เพื่อประชาสัมพันธ์หลักสูตรและสร้างแรงบันดาลใจด้านเทคโนโลยี",
    image: "/portfolio_images/activities/image1.jpg",
    category: "กิจกรรมคณะ & มหาวิทยาลัย"
  },
  {
    id: 2,
    title: "ประชุมหัวหน้าห้อง",
    subtitle: "การประชุมตัวแทนนักศึกษาและผู้บริหารสาขา",
    date: "30 กันยายน 2569",
    location: "ห้องประชุมชั้น 6 คณะการจัดการและเทคโนโลยีสารสนเทศ",
    description: "เข้าร่วมประชุมหัวหน้าห้องเพื่อแจ้งปัญหาและข้อเสนอแนะที่พบเจอในการเรียนนำเสนอต่อที่ประชุม พร้อมทั้งร่วมพูดคุยปรึกษาหารือเรื่องหลักสูตรและวิธีการเรียนการสอน เพื่อพัฒนาคุณภาพการศึกษาของสาขา",
    image: "/portfolio_images/activities/image2.jpg",
    category: "กิจกรรมคณะ & มหาวิทยาลัย"
  },
  {
    id: 3,
    title: "พิธีทำพานไหว้ครู สาขา IT",
    subtitle: "พิธีไหว้ครูและแสดงมุทิตาจิตแด่อาจารย์",
    date: "17 กรกฎาคม 2568",
    location: "ชั้น 5 คณะการจัดการและเทคโนโลยีสารสนเทศ",
    description: "ร่วมจัดทำพานไหว้ครูของสาขาเทคโนโลยีสารสนเทศ และนำพานไปไหว้อาจารย์ในสาขาทุกท่าน เพื่อสืบสานประเพณีอันดีงามและแสดงความกตัญญูกตเวทิตาต่อครูบาอาจารย์",
    image: "/portfolio_images/activities/image3.jpg",
    category: "กิจกรรมคณะ & มหาวิทยาลัย"
  },
  {
    id: 4,
    title: "สัมมนาวิชาการ AI Agent Automation",
    subtitle: "การสร้าง Workflow Automation ด้วย n8n",
    date: "19 กันยายน 2568",
    location: "ห้อง 109 ชั้น 1 คณะการจัดการและเทคโนโลยีสารสนเทศ",
    description: "เข้าร่วมอบรมเชิงปฏิบัติการการสร้าง Workflow Automation ด้วยเครื่องมือ n8n เรียนรู้การเชื่อมต่อ API การตั้งค่า Webhook และการจัดการกระบวนการทำงานอัตโนมัติเพื่อเพิ่มประสิทธิภาพการประมวลผลงาน",
    image: "/portfolio_images/activities/image4.jpg",
    category: "วิชาการ & อบรม"
  },
  {
    id: 5,
    title: "โครงการอบรม Digital Income for Gen Z",
    subtitle: "การสร้าง Digital Product ด้วย AI และ Canva Pro",
    date: "10 มิถุนายน 2568",
    location: "คณะการจัดการและเทคโนโลยีสารสนเทศ",
    description: "เข้าร่วมอบรมการสร้าง Digital Product ด้วยเครื่องมือ AI และ Canva Pro เพื่อพัฒนาทักษะการออกแบบและสร้างสรรค์ผลงานดิจิทัลที่สามารถต่อยอดเป็นรายได้ในยุคเศรษฐกิจสร้างสรรค์",
    image: "/portfolio_images/activities/image5.jpg",
    category: "วิชาการ & อบรม"
  },
  {
    id: 6,
    title: "การบรรยายพิเศษโดยแม่ทัพภาคที่ 2",
    subtitle: "รับฟังประสบการณ์และแรงบันดาลใจจากผู้นำกองทัพ",
    date: "17 สิงหาคม 2568",
    location: "หอประชุมวชิราพิตร มหาวิทยาลัยนครพนม",
    description: "เข้าร่วมรับฟังการบรรยายพิเศษถ่ายทอดเรื่องราวจากประสบการณ์สนามรบและภาวะผู้นำของแม่ทัพภาคที่ 2 เพื่อปลูกฝังความรักชาติ ความเสียสละ และวินัยในการดำเนินชีวิต",
    image: "/portfolio_images/activities/image6.jpg",
    category: "กิจกรรมคณะ & มหาวิทยาลัย"
  },
  {
    id: 7,
    title: "กีฬาสี คณะการจัดการและเทคโนโลยีสารสนเทศ",
    subtitle: "มหกรรมกีฬาและสร้างความสามัคคีภายในคณะ",
    date: "20 กันยายน 2568",
    location: "สนามกีฬามหาวิทยาลัยนครพนม",
    description: "เข้าร่วมแข่งขันและร่วมเป็นกองเชียร์กีฬาในงานกีฬาสีของคณะการจัดการและเทคโนโลยีสารสนเทศ เพื่อสร้างความสามัคคี ความมีน้ำใจนักกีฬา และความผูกพันระหว่างเพื่อนพี่น้องในคณะ",
    image: "/portfolio_images/activities/image7.jpg",
    category: "กิจกรรมคณะ & มหาวิทยาลัย"
  },
  {
    id: 8,
    title: "NPU Open House 2568",
    subtitle: "งานเปิดบ้านมหาวิทยาลัยนครพนม",
    date: "10 กันยายน 2568",
    location: "คณะการจัดการและเทคโนโลยีสารสนเทศ มหาวิทยาลัยนครพนม",
    description: "ร่วมจัดบูธแนะนำสาขาวิชา จัดกิจกรรมเล่นเกมสุ่มของรางวัล และแจกของที่ระลึกแก่นักเรียนและผู้เข้าร่วมงาน NPU Open House 2568 เพื่อประชาสัมพันธ์ผลงานและนวัตกรรมของนักศึกษา",
    image: "/portfolio_images/activities/image8.jpg",
    category: "กิจกรรมคณะ & มหาวิทยาลัย"
  },
  {
    id: 9,
    title: "เดินขบวนพาเหรด Pride Month LGBTQ+",
    subtitle: "กิจกรรมแสดงออกเชิงสัญลักษณ์สนับสนุนความหลากหลายทางเพศ",
    date: "27 มิถุนายน 2569",
    location: "ลานพญาศรีสัตตนาคราช จังหวัดนครพนม",
    description: "เข้าร่วมเดินขบวนพาเหรดถือธงสีรุ้งในเทศกาล Pride Month เพื่อแสดงออกเชิงสัญลักษณ์ในการสนับสนุนความเท่าเทียม ความหลากหลายทางเพศ (LGBTQ+) และการอยู่ร่วมกันในสังคมอย่างสันติ",
    image: "/portfolio_images/activities/image9.jpg",
    category: "กิจกรรมเพื่อสังคม & จิตอาสา"
  },
  {
    id: 10,
    title: "อบรม Workflow Automation & AI Agent ในองค์กร",
    subtitle: "การประยุกต์ใช้ AI Agent ในระบบงานจริง",
    date: "22-23 กรกฎาคม 2569",
    location: "ห้องอบรม 109 คณะการจัดการและเทคโนโลยีสารสนเทศ มหาวิทยาลัยนครพนม",
    description: "เข้าร่วมอบรมเชิงลึก 2 วันเต็ม เกี่ยวกับหลักการทำงานของ AI Agent และวิธีการนำไปเชื่อมต่อกับระบบงานจริงขององค์กร เช่น การดึงข้อมูลอัตโนมัติ การตอบอีเมลอัตโนมัติ และการประมวลผลเอกสารอัจฉริยะ",
    image: "/portfolio_images/activities/image10.jpg",
    category: "วิชาการ & อบรม"
  }
];

export const SKILLS_DATA = [
  {
    title: "IoT & Embedded Systems",
    desc: "เชี่ยวชาญการพัฒนาฮาร์ดแวร์และไมโครคอนโทรลเลอร์ ESP32, Arduino, เซนเซอร์วัดค่าในสภาพแวดล้อมจริง, โมดูลรีเลย์, และการเชื่อมต่อคลาวด์ Blynk IoT",
    tags: ["ESP32", "Arduino C++", "Blynk IoT", "Sensors", "Hardware Design"]
  },
  {
    title: "Cybersecurity & System Defense",
    desc: "การวิเคราะห์มัลแวร์เชิงลึก (Malware Analysis), การวิจัย Keylogger & Phishing, และการพัฒนาเครื่องมือป้องกัน AntiKeylogger ด้วย C++ เพื่อกำจัด Process และล้างร่องรอย Registry",
    tags: ["C++", "Win32 API", "Registry Cleanup", "Malware Defense", "VirtualBox"]
  },
  {
    title: "Artificial Intelligence & Computer Vision",
    desc: "การประยุกต์ใช้โมเดล Deep Learning สำหรับตรวจจับวัตถุและใบหน้าด้วย MobileNetV2 และ YOLOv8n, การสร้าง GUI ตรวจจับแบบ Real-time ด้วย OpenCV และ Tkinter",
    tags: ["Python", "TensorFlow", "YOLOv8", "MobileNetV2", "OpenCV"]
  },
  {
    title: "Full-Stack Web & App Development",
    desc: "การพัฒนาเว็บแอปพลิเคชันที่ทันสมัยด้วย Next.js, React, Tailwind CSS, TypeScript, Material Tailwind, และระบบฐานข้อมูลสำหรับจัดการข้อมูลธุรกิจ",
    tags: ["Next.js", "React", "Tailwind CSS", "TypeScript", "Node.js / PHP"]
  },
  {
    title: "Workflow Automation & AI Agents",
    desc: "การออกแบบระบบอัตโนมัติระดับองค์กรด้วย n8n, การเชื่อมต่อ Webhook & API, และการประยุกต์ใช้โมเดล AI Agent ในการจัดการข้อมูลและตอบกลับอีเมลอัตโนมัติ",
    tags: ["n8n", "AI Agents", "REST APIs", "Automation", "Workflows"]
  },
  {
    title: "Voice Biometrics & Audio AI",
    desc: "การสกัดคุณลักษณะของคลื่นเสียง (Audio Feature Extraction) ด้วย MFCC, การวิเคราะห์ Spectrogram และการพัฒนาระบบ Voice Authentication และ Speech-to-Text",
    tags: ["Librosa", "Audio Processing", "MFCC", "Speech Recognition", "Machine Learning"]
  }
];
