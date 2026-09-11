export const NAV_LINKS = [
  { label: 'เกี่ยวกับฉัน', href: '#about' },
  { label: 'ทักษะ', href: '#skills' },
  { label: 'ผลงาน', href: '#projects' },
  { label: 'การศึกษา', href: '#education' },
  // { label: 'ประวัติย่อ', href: '#resume' },
  { label: 'ติดต่อ', href: '#contact' },
] as const;

export const SECTION_IDS = ['about', 'skills', 'projects', 'education', 'resume', 'contact'];

export const PROFILE = {
  name: 'กัลยรัตน์ ถิ่นหาญวงศ์',
  role: 'วิทยาการคอมพิวเตอร์และนวัตกรรมการพัฒนาซอฟต์แวร์',
  email: 'kanyaratthinhanwong04@gmail.com',
  location: '',
  university: 'มหาวิทยาลัยศรีปทุม',
  github: 'https://github.com/Kanyarat2007',
  linkedin: 'https://www.linkedin.com/in/kanyarat-thinhanwong-a68a10434',
};

export const ABOUT_PARAGRAPHS = [
  'ฉันเป็นนักศึกษาสาขาวิทยาการคอมพิวเตอร์และนวัตกรรมพัฒนาซอฟต์แวร์ที่มหาวิทยาลัยศรีปทุม มีความหลงใหลในด้าน Front-End Development และ UX/UI Design — ชอบกระบวนการแปลงไอเดียให้กลายเป็นอินเทอร์เฟซที่ใช้งานได้ลื่นไหลและดูสวยงาม',
  'พื้นฐานทางเทคนิคของฉันครอบคลุม HTML, CSS, JavaScript และ SQL และฉันพัฒนาตัวเองอย่างต่อเนื่องในด้าน Frameworks สมัยใหม่และเครื่องมือออกแบบต่าง ๆ ฉันสนุกกับการสร้างเว็บเพจที่ตอบสนองต่อทุกอุปกรณ์ ทดลองเลย์เอาต์ใหม่ ๆ และขัดเกลารายละเอียดเล็ก ๆ น้อย ๆ ที่ทำให้ผลิตภัณฑ์รู้สึกสมบูรณ์',
  'ฉันกระตือรือร้นที่จะได้รับประสบการณ์จริงผ่านโปรเจกต์ การฝึกงาน และการทำงานร่วมกัน พร้อมเรียนรู้สิ่งใหม่ ๆ อยู่เสมอ และมองหาโอกาสในการเติบโตในฐานะนักพัฒนาและนักออกแบบ',
];

export const SKILL_GROUPS = [
  {
    title: 'Front-End',
    icon: 'Code2',
    skills: ['HTML', 'JavaScript', 'React', 'Tailwind CSS'],
  },
  {
    title: 'Design',
    icon: 'Palette',
    skills: ['UX/UI Design'],
  },
  {
    title: 'Database',
    icon: 'Database',
    skills: ['SQL','MongoDB', 'Docker', 'n8n'
],
  },
];

export const PROJECTS = [
  {
    title: 'Slide Me App',
    problem:
      'กระบวนการจัดการขนส่งรถยนต์มีความยุ่งยาก กระจัดกระจาย และเข้าถึงได้ยาก',
    solution:
      'พัฒนาแอปพลิเคชันที่รวบรวมบริการขนส่งรถยนต์ไว้ในที่เดียว เพื่อให้เข้าถึงได้สะดวกยิ่งขึ้น',
    role:
      'พัฒนาฟีเจอร์สำหรับการส่งคำขอขนส่งรถยนต์ และการติดตามสถานะรถสไลด์',
    tech: ['React'],
    proof: '',
    icon: 'Truck',
    images: [
      '/images/projects/Slide_Me_App_1.jpg',
      '/images/projects/Slide_Me_App_2.jpg',
    ],
  },
  {
    title: 'AI Chatbot JitArsa PhaPai',
    problem:
      'ข้อมูลเกี่ยวกับกิจกรรมอาสาสมัครกระจายอยู่บนหลายแพลตฟอร์ม ทำให้ผู้ใช้ลำบากในการค้นหาข้อมูล',
    solution:
      'Chatbot รวบรวมข้อมูลกิจกรรมอาสาสมัครไว้ในที่เดียว ช่วยให้ผู้ใช้ค้นหาตามจังหวัดได้ พร้อมบันทึกประวัติการสนทนา',
    role: 'ทำความสะอาดข้อมูลที่รวบรวมมา และออกแบบ UX/UI ของระบบ',
    tech: [
      'LLM llama-3.3-70b-versatile (Groq API)',
      'Embedding paraphrase-multilingual-MiniLM-L12-v2',
      'Vector DB FAISS',
      'Framework FastAPI',
    ],
    proof: '',
    icon: 'Bot',
    images: ['/images/projects/AI_Chatbot_JitArsa_PhaPai.png'],
  },
];

export const EDUCATION = [
  {
    period: '2023 — ปัจจุบัน',
    title: 'สาขาวิทยาการคอมพิวเตอร์และนวัตกรรมพัฒนาซอฟต์แวร์',
    institution: 'คณะเทคโนโลยีสารสนเทศ มหาวิทยาลัยศรีปทุม',
    detail:
      'กำลังศึกษาในระดับปริญญาตรีสาขาวิทยาการคอมพิวเตอร์ โดยเน้นด้านนวัตกรรมพัฒนาซอฟต์แวร์ วิชาที่เรียนครอบคลุมพื้นฐานการเขียนโปรแกรม การพัฒนาเว็บ และระบบฐานข้อมูล',
    gpa: 'กำลังศึกษา',
  },
];

export const EXPERIENCE: {
  period: string;
  role: string;
  company: string;
  bullets: string[];
}[] = [];

export const CERTIFICATIONS: string[] = [];
