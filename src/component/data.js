import banner from "../static/p2.png";
import banner2 from "../static/p3.png";
import banner1 from "../static/chat.png";
import company1 from "../static/monotype_logo.jpg";
import company2 from "../static/shushmoney_logo.jpg";

export const info = [
  {
    id: "1",
    name: "StyleRo",
    detail: [
    'Built StyleRo, an eCommerce platform using MongoDB, Express.js, React.js, and Node.js for seamless item browsing and ordering.',
    'Used React Router and Redux for multi-page navigation and state management, delivering a clean UI.',
    'Implemented Firebase and JWT for secure user authentication, with backend developed using Node.js, Express, and MongoDB.'
    ],
    img: banner,
    linkgit: "https://github.com/Akash1018/ecommerce",
    linksite: "https://ecommerce-front.onrender.com/",
  },
  {
    id: "2",
    name: "MEMOIR",
    detail: [
      'Memoir, a social media platform with features including user profiles, following, post uploads, likes/dislikes, and comments.',
      'Built the platform using React.js, Node.js, Express.js, and MongoDB, ensuring robust and scalable performance.',
      'Implemented secure user authentication with Firebase and JWT.',
    ],
    img: banner2,
    linkgit: "https://github.com/Akash1018/socail_backend",
    linksite: "https://social-app-akash.onrender.com",
  },
  {
    id: "3",
    name: "Unichat",
    detail: [
      'Unichat is a Chat Application with social authentication including Google using Firebase.',
      'Helps in creating multiple rooms and sharing media',
      'Tech stack: React.js, ChatEngine, Firebase, CSS.'
    ],
    img: banner1,
    linkgit: "#",
    linksite: "https://heroic-wisp-48fdb9.netlify.app/chats",
  },
];

export const experience = [
  {
    company: "MonoType",
    postion: "Software Engineer",
    img: company1,
    detail: [
      "Utilized a wide range of technologies including Vue.js, React.js, Nods.js, JavaScript, HTML, and CSS.",
      "Developed reusable components to improve code quality and maintainability, refactoring complex components for simplicity and reusability.",
      "Optimized plugins (InDesign, InCopy, Photoshop, and others) codebase for improved performance and functionality, enhancing the overall user experience. Also, migrated missing font functionalities from Vue2 to Vue3 during the migration process.",
      "Implemented auto-activation features in April 2024, enhancing user experience and productivity. Successfully deployed and verified all functionalities, ensuring they are operational and meeting requirements.",
    ],
    tech: [
      "Node.js, ",
      "React.js, ",
      "Vue.js, ",
      "Cascading Style Sheets (CSS), ",
      "GraphQL, ",
      "JavaScript.",
    ],
    timeStamp: "Nov 2023 - Present"
  },
  {
    company: "Bex Card",
    postion: "Software Engineer",
    img: company2,
    detail: [
      "Utilized a wide range of technologies including Amazon Web Services (AWS), AWS Lambda, AWS CloudFormation, Amazon DynamoDB, TypeScript, Terraform, and Node.js.",
      "Developed and implemented an event bridge that significantly reduced wait time by 15% and streamlined processes.",
      "Orchestrated the setup of Jumio KYC webhooks, resulting in a 30% reduction in KYC completion time for CBS(Core Banking System) and achieving a 80% accuracy rate in KYC verification for JISA (Junior Individual Savings Account) users.",
      "Designed and established a robust KYC data transportation pipeline, ensuring the smooth flow of webhooks data into user profiles.",
    ],
    tech: [
      "Node.js, ",
      "React.js, ",
      "AWS, ",
      "Terraform, ",
      "TypeScript.",
    ],
    timeStamp: "Mar 2023 - Sep 2023"
  },
];
