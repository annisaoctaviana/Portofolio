export const personalInfo = {
  name: 'Annisa Octaviana Nurshanty',
  title: 'Frontend Developer',
  subtitle: 'UI/UX Designer & Web Developer',
  bio: "Front-end Engineer with 3+ years of experience crafting user-focused digital products at the intersection of engineering and design. I specialize in translating complex requirements into clean, scalable, and engaging interfaces. With a foundation in UI design, I approach development with a strong emphasis on usability and visual coherence. I’m driven by continuous improvement and actively seek opportunities that expand both my technical depth and creative range.",
  location: 'Jakarta, Indonesia',
  availability: 'Open to new opportunities',
  email: 'annisaoctaviana.ns@gmail.com',
  socials: {
    github: 'https://github.com/annisaoctaviana',
    linkedin: 'https://linkedin.com/in/annisaoctaviana',
  },
}

export const skills = [
  {
    category: 'Frontend',
    color: 'electric' as const,
    items: ['React', 'TypeScript', 'JavaScript', 'Laravel', 'Tailwind CSS', 'Redux', 'Rest API'],
  },
  {
    category: 'Design',
    color: 'acid' as const,
    items: ['Figma', 'Canva', 'Prototyping', 'UI/UX Principles'],
  },
  {
    category: 'Programming',
    color: 'neon' as const,
    items: ['Flutter', 'Dart', 'Kotlin', 'Laravel', 'PHP', 'Mobile Development', 'Web Development, HTML/CSS'],
  },
  {
    category: 'Project Management & Tools',
    color: 'coral' as const,
    items: ['Agile Methodologies', 'Jira', 'Trello', 'Slack', 'Notion'],
  },
]

import img1 from '../assets/image_qleap_1.png'
import img2 from '../assets/image_qleap_2.png'
import img3 from '../assets/image_qleap_3.png'
import img4 from '../assets/image_qleap_4.png'
import img5 from '../assets/image_qleap_5.png'
import img6 from '../assets/image_qleap_6.png'


export const projects = [
  {
    id: 1,
    title: 'QLEAP (HRIS Internal Erajaya Group Website)',
    category: 'Frontend Development',
    description: 'A scalable internal HRIS super app for Erajaya Group, streamlining employee services, approval workflows, and internal engagement. Built with React, TypeScript, Redux, and React Query, with a focus on performance, usability, and maintainable architecture.',
    tags: ['React', 'TypeScript', 'Redux', 'Figma'],
    color: 'electric' as const,
    accent: '#FF3BFF',
    year: '2023',
    featured: true,
    link: 'https://qleap.erajaya.com/login',
    images: [
      img6,
     img4,
     img5,
     img1,
     img2,
     img3,
    ],
  },
  {
    id: 2,
    title: 'Pesantren Go Digital Web',
    category: 'Web App',
    description:
      'A web-based platform developed to support digital transformation initiatives for pesantren, enabling content management and web-building capabilities through an intuitive interface. Contributed to UI prototyping and full-cycle development within a cross-functional team.',
    tags: ['Laravel 7', 'Bootstrap', 'jQuery', 'MySQL', 'Figma'],
    color: 'neon' as const,
    accent: '#3BF0FF',
    year: '2021',
    featured: true,
    link: 'https://pesantrengodigital.id',
  },
  {
    id: 3,
    title: 'Performance Dashboard',
    category: 'Web App',
    description:
      'A reporting dashboard designed to support strategic decision-making within Telkom Property. Led UI/UX prototyping and translated business requirements into interactive designs, then developed the application using Laravel and MySQL. Collaborated with stakeholders and vendors to deliver an integrated and scalable reporting system.',
    tags: ['Laravel 8', 'MySQL', 'Figma', 'Dashboard', 'UI/UX'],
    color: 'acid' as const,
    accent: '#ECFD65',
    year: '2022',
    featured: false,
    link: 'https://www.figma.com/design/lIZBMUTaThwCjyCOltHrwa/Design-Mockup?node-id=0-1&p=f&t=7swupB6QYey227EX-0',
  },
  // {
  //   id: 4,
  //   title: 'Nocturne Music Player',
  //   category: 'Creative Dev',
  //   description: 'A beautifully crafted music visualizer and player built with Web Audio API and Three.js. Every beat drives a reactive 3D visual experience.',
  //   tags: ['Three.js', 'Web Audio', 'GLSL', 'React'],
  //   color: 'coral' as const,
  //   accent: '#FF5C38',
  //   year: '2023',
  //   featured: false,
  //   link: '#',
  // },
]

export const marqueeItems = [
  'React', 'TypeScript', 'JavaScript', 'Figma', 'Tailwind', 'Mobile Programming', 'UI/UX',
  'Laravel', 'Design Systems', 'Web Development', 'Frontend',
]

export const experiences = [
  {
    role: 'HC System Design Supervisor',
    company: 'Erajaya Swasembada, Tbk.',
    location: 'Jakarta, Indonesia',
    period: 'Jan 2023 — Present',
    type: 'Full-time',
    description:
      'Leading frontend development and system design for internal HRIS applications. Responsible for building scalable, maintainable interfaces and ensuring seamless integration with backend systems across multiple business units.',
    highlights: [
      'React',
      'TypeScript',
      'HRIS',
      'System Design',
      'Cross-functional Collaboration',
    ],
    color: 'rose' as const,
    emoji: '🚀',
  },
  {
    role: 'Web Developer & UI/UX Designer',
    company: 'Telkom Property (PT. Graha Sarana Duta)',
    location: 'Jakarta, Indonesia',
    period: 'Mar 2022 — Dec 2022',
    type: 'Internship',
    description:
      'Developed and enhanced internal reporting systems to support strategic decision-making. Designed UI/UX flows and built web-based dashboards while collaborating with stakeholders, leadership, and vendors.',
    highlights: [
      'Laravel 8',
      'MySQL',
      'Dashboard',
      'Figma',
      'Stakeholder Collaboration',
    ],
    color: 'sun' as const,
    emoji: '📊',
  },
  {
    role: 'Web Developer (Tribe Pesantren Go Digital)',
    company: 'PT. Telekomunikasi Indonesia, Tbk.',
    location: 'Jakarta, Indonesia',
    period: 'Sep 2021 — Feb 2022',
    type: 'Internship',
    description:
      'Contributed to the development of web-builder applications for digital initiatives. Designed UI prototypes and implemented web solutions while actively participating in the full application lifecycle within a cross-functional team.',
    highlights: [
      'Laravel 7',
      'Bootstrap',
      'jQuery',
      'MySQL',
      'Figma',
    ],
    color: 'mint' as const,
    emoji: '💻',
  },
  {
    role: 'Android Developer (Bangkit Academy)',
    company: 'Bangkit Academy (Google, Gojek, Tokopedia)',
    location: 'Jakarta, Indonesia',
    period: 'Feb 2021 — Aug 2021',
    type: 'Program',
    description:
      'Completed an intensive Android development program focused on building production-ready applications using Kotlin. Applied modern architecture patterns including Clean Architecture, Dependency Injection, and Modularization.',
    highlights: [
      'Kotlin',
      'Android',
      'Clean Architecture',
      'Dependency Injection',
    ],
    color: 'sky' as const,
    emoji: '📱',
  },
];

export const education = [
  {
    degree: 'Bachelor of Computer Science',
    school: 'Bina Nusantara University (BINUS)',
    location: 'Jakarta, Indonesia',
    period: 'Aug 2018 — Oct 2022',
    description:
      'Focused on software engineering and application development, with exposure to web technologies, system design, and user interface development.',
    highlights: [
      'GPA 3.25/4.00',
      'Software Engineering',
      'Web Development',
      'UI/UX Fundamentals',
    ],
    emoji: '🎓',
    color: 'sky' as const,
  },
  {
    degree: 'Organizational Experience',
    school: 'BINUS University',
    location: 'Jakarta, Indonesia',
    period: '2019',
    description:
      'Served as Vice Coordinator of the Computer Science First Year Program, coordinating academic support initiatives and mentoring new students in adapting to university-level learning.',
    highlights: [
      'Leadership',
      'Mentorship',
      'Program Coordination',
    ],
    emoji: '🤝',
    color: 'mint' as const,
  },
];