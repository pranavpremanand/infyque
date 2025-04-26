import {
  Smartphone,
  Users,
  Code,
  Cpu,
  Bot,
  Database,
  Cloud,
  Box,
  Gamepad2,
  Network,
  MemoryStick,
  BrainCircuit,
} from "lucide-react";
import file from "../assets/images/png/file.png";
import graph from "../assets/images/png/graph.png";
import rocket from "../assets/images/png/rocket.png";
import start from "../assets/images/png/start.png";
import integrity from "../assets/images/png/integrity.png";
import quality from "../assets/images/png/quality.png";
import success from "../assets/images/png/success.png";
import Infinite from "../assets/images/png/Infinite.png";

// porfolio image
// Import all images at the top (Web Development)
import FiveGHomesImg from "../assets/web-development-portfolio/5ghomes.png";
import BayutImg from "../assets/web-development-portfolio/bayut.png";
import ColdCreekcapImg from "../assets/web-development-portfolio/cold creekcap.png";
import EmergencyMusicImg from "../assets/web-development-portfolio/emergency music .png";
import FlatiornImg from "../assets/web-development-portfolio/flatiorn.png";
import MavenImg from "../assets/web-development-portfolio/maven.png";
import MenissaCateringsImg from "../assets/web-development-portfolio/menissa caterings.png";
import MethodistImg from "../assets/web-development-portfolio/methodist.png";
import ThinkRealityImg from "../assets/web-development-portfolio/think reality.png";

// Import all images at the top (App Development)
import DubaiTravelGuideImg from "../assets/app-development-portfolio/dubai travel guide.png";
import EloraHairPalourImg from "../assets/app-development-portfolio/elora hair palour.png";
import EvansFrancisImg from "../assets/app-development-portfolio/evans francis.png";
import HouseOfDeliverenceImg from "../assets/app-development-portfolio/house of deliverence.png";
import MybitsShopImg from "../assets/app-development-portfolio/mybitsshop.png";
import NamazImg from "../assets/app-development-portfolio/namaz.png";
import PoteaImg from "../assets/app-development-portfolio/potea.png";
import RentopBikeAndCarImg from "../assets/app-development-portfolio/rentop bike and car.png";
//portfolio
import nanoflow from "../assets/portfolio/nanoflow.png";
import padipal from "../assets/portfolio/padipal.png";
import cryptopadie from "../assets/portfolio/cryptopadie.png";

import { CgWebsite } from "react-icons/cg";
import { GoFileMedia } from "react-icons/go";
import { TfiLayoutMediaRightAlt } from "react-icons/tfi";
import {
  MdChatBubbleOutline,
  MdOutlineDashboardCustomize,
} from "react-icons/md";
import {
  FaAppStoreIos,
  FaFacebook,
  FaFileContract,
  FaInstagram,
  FaLinkedin,
  FaRobot,
  FaYoutube,
} from "react-icons/fa";
import { IoLogoAndroid } from "react-icons/io";
import { SiEthereum, SiFlutter } from "react-icons/si";
import { TbDeviceMobileCode } from "react-icons/tb";
import { FaL, FaXTwitter } from "react-icons/fa6";
import { BsGraphUpArrow } from "react-icons/bs";
import { AiOutlineCamera } from "react-icons/ai";
import { GiNetworkBars } from "react-icons/gi";
import { RiLockPasswordLine } from "react-icons/ri";

// industries
import financial from "../assets/images/industries/Financial Services.webp";
import healthcare from "../assets/images/industries/Healthcare.webp";
import manufacturing from "../assets/images/industries/Manufacturing.webp";
import energy from "../assets/images/industries/Energy.webp";
import retail from "../assets/images/industries/Retail.webp";
import realestate from "../assets/images/industries/Real Estate.webp";
import food from "../assets/images/industries/Food and Beverage.webp";
import transportation from "../assets/images/industries/Transportation.webp";
import communication from "../assets/images/industries/Communication.webp";
import electronics from "../assets/images/industries/Consumer Electronics.webp";
import aerospace from "../assets/images/industries/Aerospace and Defense.webp";
import chemicals from "../assets/images/industries/Chemicals.webp";
import mining from "../assets/images/industries/Mining.webp";
import agriculture from "../assets/images/industries/Agriculture.webp";
import construction from "../assets/images/industries/Construction.webp";
import hospitality from "../assets/images/industries/Hospitality.webp";
import entertainment from "../assets/images/industries/Entertainment.webp";
import consulting from "../assets/images/industries/Consulting.webp";
import legal from "../assets/images/industries/Legal.webp";

import {
  FaMobileAlt,
  FaDesktop,
  FaBrain,
  FaGamepad,
  FaChartLine,
  FaServer,
  FaLink,
  FaUserCog,
  FaCode,
  FaPaintBrush,
  FaBitcoin,
} from "react-icons/fa";
import { SiBlockchaindotcom, SiUnity, SiGooglechat } from "react-icons/si";

export const companyDetails = {
  name: "INFYQUE",
  email: "abc@xyz.com",
  phone: "+91-9480060790",
  address:
    "Unit 101, Oxford Towers, 139, HAL Old Airport R, Bengaluru, Karnataka 560008",
  socialLinks: [
    {
      href: "https://www.linkedin.com/company/infyque/",
      icon: FaLinkedin,
    },
    {
      href: "https://www.instagram.com/infyque?igsh=ZGRuMTFsbDM1NWJ6",
      icon: FaInstagram,
    },
    {
      href: "",
      icon: FaFacebook,
    },
    {
      href: "",
      icon: FaXTwitter,
    },
    {
      href: "",
      icon: FaYoutube,
    },
  ],
  whatsapp: "https://wa.me/message/KS2NX4N4EVX5N1",
};

export const services = [
  {
    title: "Web Development",
    link: "/web-development",
    description:
      "We build fast, secure, and scalable websites and web apps that are not just visually clean but engineered to perform.",
    icon: FaDesktop,
    bgColor: "bg-blue-600",
  },
  {
    title: "Mobile App Development",
    link: "/app-development",
    description:
      "We design and develop mobile apps that feel intuitive and run smoothly — whether it's a product for the public or a tool for your internal teams.",
    icon: FaMobileAlt,
    bgColor: "bg-purple-600",
  },
  {
    title: "UX/UI Design",
    link: "/ux-ui-design",
    description:
      "Our design team focuses on creating clean, intuitive interfaces backed by research and real-world usability — not just pretty screens.",
    icon: FaPaintBrush,
    bgColor: "bg-pink-600",
  },
  {
    title: "Custom Chatbots",
    link: "/chatbot-development",
    description:
      "We build conversational bots that make life easier — for your team and your customers. Useful, friendly, and aligned with your brand.",
    icon: SiGooglechat,
    bgColor: "bg-green-600",
  },
  {
    title: "Blockchain Solutions",
    link: "/blockchain-development",
    description:
      "We help create secure, functional, and future-ready solutions using the latest in decentralized tech — from smart contracts to full-scale dApps.",
    icon: SiBlockchaindotcom,
    bgColor: "bg-yellow-600",
  },
  {
    title: "Game Development",
    link: "/game-development",
    description:
      "We bring ideas to life with high-performance games for mobile, web, and desktop — from casual mobile games to immersive 3D experiences.",
    icon: FaGamepad,
    bgColor: "bg-red-600",
  },
  {
    title: "RPA – Process Automation",
    link: "/rpa",
    description:
      "We design robotic process automation workflows that handle routine work faster and with fewer mistakes, freeing up time for real thinking.",
    icon: FaRobot,
    bgColor: "bg-indigo-600",
  },
  {
    title: "AI & Machine Learning",
    link: "/ai-development",
    description:
      "We build AI-powered tools that learn from data and drive better decision-making, focusing on solving practical problems with real business impact.",
    icon: FaBrain,
    bgColor: "bg-teal-600",
  },
];

export const whyChooseUs = [
  "We leverage the latest frameworks and tools to build future-proof solutions, ensuring your digital products stay competitive in evolving markets.",

  "Every project receives our signature white-glove treatment - custom-built to your exact requirements rather than forcing your business into template solutions.",

  "From concept to deployment and beyond, we provide continuous support including iterative improvements, performance optimization, and feature enhancements.",

  "Our rigorous quality assurance processes deliver enterprise-grade solutions with robust security protocols and architecture designed for scalability.",

  "We practice transparent communication and agile collaboration, working as an extension of your team to transform your vision into reality.",

  "With deep domain knowledge across multiple sectors, we bring valuable insights and best practices to every project we undertake.",
];

export const testimonials = [
  {
    quote:
      "We needed a fresh, modern website — something that didn’t just look good, but also reflected our values. Infyque delivered a clean, intuitive site that our team and customers love. They were responsive, collaborative, and just easy to work with from start to finish.",
    author: "Jane D., Product Manager at RetailTech",
    rating: 5,
    gridClass: "col-span-1",
  },
  {
    quote:
      "I had a concept for a driver tracking app but didn’t know where to start. Infyque took the time to understand what I was trying to achieve and built a solution that was better than what I imagined. The UI is smooth, performance is solid, and their support post-launch has been fantastic.",
    author: "John S., CEO at TrendyFashion Co",
    rating: 5,
    gridClass: "col-span-1",
  },
  {
    quote:
      "We were stuck with a clunky interface that users found confusing. Infyque’s design team stepped in and completely transformed the experience. Every screen now has a purpose. Navigation is intuitive, and conversions are noticeably up. They didn’t just make it look better — they made it work better.",
    author: "Michael T., CTO at FinSec Innovations",
    rating: 5,
    gridClass: "col-span-1",
  },
  {
    quote:
      "Our support team was stretched thin, so we brought in Infyque to help us build a smart chatbot. What we got was an assistant that actually understands what customers need. It handles most queries automatically, and our response time has improved significantly.",
    author: "Amanda W., HR Director at GlobalTraining Solutions",
    rating: 5,
    gridClass: "col-span-1",
  },
  {
    quote:
      "I was launching an NFT platform for digital artists and needed a team that could balance blockchain development with user-friendly design. Infyque delivered both. Smart contracts were airtight, the marketplace is smooth, and they made the whole process surprisingly stress-free.",
    author: "Lucas F., Head of Game Development at Pixel Ventures",
    rating: 5,
    gridClass: "col-span-1",
  },
];

export const highlights = [
  {
    id: 1,
    icon: file,
    title: "Intelligent Solutions for Every Stage",
    description:
      "From bold startups to established enterprises, INFYQUE delivers adaptable AI solutions that scale with your vision—enhancing growth, agility, and automation.",
  },
  {
    id: 2,
    icon: graph,
    title: "Harnessing the Quantum Edge",
    description:
      "We fuse quantum computing with advanced AI to unlock faster, smarter decision-making—driving innovation through next-level algorithms and multidimensional computing.",
  },
  {
    id: 3,
    icon: rocket,
    title: "Smarter Automation & Insightful Analytics",
    description:
      "Boost your operations with AI-powered systems that automate tasks, analyze vast data streams, and provide predictive intelligence for confident strategic moves.",
  },
  {
    id: 4,
    icon: start,
    title: "Redefining the Future of Intelligence",
    description:
      "At INFYQUE, we go beyond traditional AI—merging machine learning with universal intelligence to craft limitless digital experiences and possibilities.",
  },
];

export const faqs = [
  {
    question: "What is INFYQUE?",
    answer: `• INFYQUE is a next-gen AI platform combining quantum computing, intelligent automation, and immersive storytelling tools.
• It empowers individuals and businesses to explore advanced AI use cases, craft adaptive narratives, and co-create digital ecosystems.`,
  },
  {
    question: "How does INFYQUE work?",
    answer: `• It operates on a modular AI architecture supported by quantum logic and real-time data analysis.
• Users can deploy AI agents, train custom intelligence models, and navigate interactive environments driven by dynamic input.`,
  },
  {
    question: "What are the core features of INFYQUE?",
    answer: `• Custom AI Companions – Design intelligent agents tailored to your needs.
• Interactive Knowledge Portals – Engage with evolving, context-aware learning hubs.
• Real-Time Decision Engines – Use quantum-backed AI for advanced analytics and predictions.
• Cross-Domain Integration – Seamlessly connect with APIs, platforms, and tools for enterprise or creative applications.`,
  },
  {
    question: "Who can benefit from using INFYQUE?",
    answer: `• Innovators & Startups – Looking to leverage AI for product or service innovation.
• Enterprises – Seeking automation, insight, and scalable intelligence solutions.
• Researchers & Developers – Exploring quantum models and experimental frameworks.
• Creatives & Designers – Building intelligent experiences, worlds, or characters.`,
  },
  {
    question: "How does INFYQUE drive innovation?",
    answer: `• Fosters creative problem-solving through AI-assisted ideation tools.
• Encourages collaboration via shared AI networks and idea ecosystems.
• Enhances user experiences with adaptive content and predictive intelligence.`,
  },
  {
    question: "Is there a community around INFYQUE?",
    answer: `• Yes, users can connect through discussion hubs, collaborate on AI projects, and share their creations.
• Regular meetups, hackathons, and AI symposia keep the network active and evolving.`,
  },
  {
    question: "How do I get started?",
    answer: `• Sign up through the INFYQUE platform.
• Choose a use case (business, research, creative).
• Start exploring tools, training AI agents, or joining existing initiatives.`,
  },
  {
    question: "What pricing plans are available?",
    answer: `• Free Tier – Basic access to AI tools, templates, and public models.
• Pro Tier – Includes enhanced analytics, private AI environments, and early feature access.
• Enterprise – Tailored solutions, dedicated support, and full integration services.`,
  },
  {
    question: "How secure is my data on INFYQUE?",
    answer: `• All data is encrypted and protected with quantum-resilient protocols.
• Users have full control over privacy settings and access permissions.
• Optional decentralized storage is available for enhanced data sovereignty.`,
  },
  {
    question: "Can I create and publish my own AI content?",
    answer: `• Absolutely. Users can build intelligent apps, characters, or tools and share them within the platform or externally.
• Monetization options and co-creation tools are available for approved creators.`,
  },
  {
    question: "How does INFYQUE support future tech standards?",
    answer: `• Integrates Web 5.0 protocols, decentralized ID, and AI-optimized edge computing.
• Designed to evolve with emerging tech—ensuring long-term relevance and adaptability.`,
  },
  {
    question: "Where can I get help or support?",
    answer: `• Visit the Help Center for guides, tutorials, and forums.
• Use live chat or email support for real-time assistance.
• Join our community to get feedback, share insights, and collaborate.`,
  },
];

export const coreValues = [
  {
    id: 1,
    icon: integrity,
    title: "Innovation",
    description:
      "We embrace fresh ideas and use technology creatively to solve problems and deliver meaningful results.",
  },
  {
    id: 2,
    icon: quality,
    title: "Collaboration",
    description:
      "We work hand in hand with our clients, building strong partnerships to create solutions that reflect their goals.",
  },
  {
    id: 3,
    icon: success,
    title: "Integrity",
    description:
      "We operate with honesty, transparency, and a firm commitment to earning trust in every interaction.",
  },
  {
    id: 4,
    icon: Infinite,
    title: "Excellence",
    description:
      "We aim high in everything we do—from the quality of our work to the experiences we deliver.",
  },
];

export const visionAndMission = [
  {
    title: "Our Vision",
    description:
      "We envision a world where AI, quantum intelligence, and digital consciousness converge, reshaping how businesses and individuals engage with technology. By bridging the physical and digital realms, we aim to redefine innovation, communication, and growth on a global and even interstellar scale.",
  },
  {
    title: "Our Mission",
    description:
      "Our mission is clear: to empower businesses with the tools and technology needed to thrive. We work alongside you to understand your goals and challenges, crafting solutions that not only meet your needs but also position you for long-term success. We believe that with the right technological strategies, you can achieve more, faster, and with greater impact.",
  },
  {
    title: "Our Journey",
    description:
      "Born from a group of visionary engineers and futurists, INFYQUE has evolved into a leader in quantum-era technology. Our journey spans both the planet and the cosmos, helping businesses navigate the future with advanced AI, innovative solutions, and collaborative intelligence. With every partnership, we push the limits of what's possible, shaping the future together.",
  },
];


// web development services
export const webDevelopmentServices = [
  {
    id: 1,
    title: "E-Commerce Web Applications",
    img: CgWebsite,
    description:
      "We create scalable, future-ready e-commerce platforms powered by AI. Features like personalized product recommendations, intelligent search, and automated inventory management are designed to drive continuous growth and optimize user experience.",
  },
  {
    id: 2,
    title: "Community & Networking Web Apps",
    img: GoFileMedia,
    description:
      "We build dynamic online communities that encourage engagement and connection. Real-time feeds, AI-driven user suggestions, and personalized content ensure your platform thrives and users stay connected.",
  },
  {
    id: 3,
    title: "Landing Pages & Microsites",
    img: TfiLayoutMediaRightAlt,
    description:
      "We design sleek, high-conversion landing pages and microsites, complete with optimized CTAs, integrated analytics, and AI-powered user journey mapping, turning visitors into long-term customers.",
  },
  {
    id: 4,
    title: "Custom Websites",
    img: MdOutlineDashboardCustomize,
    description:
      "We specialize in custom web solutions—from interactive dashboards to data-driven platforms. Our solutions feature AI-powered automation, bespoke workflows, and modern, user-friendly interfaces tailored to your unique needs.",
  },
];


// app development services
export const appDevelopmentServices = [
  {
    id: 1,
    title: "iOS Applications",
    img: FaAppStoreIos,
    description:
      "We develop high-performance iOS apps with intuitive UIs, integrating advanced AI features such as voice recognition, behavior prediction, and personalized user journeys, leveraging the latest Apple technologies.",
  },
  {
    id: 2,
    title: "Android Solutions",
    img: IoLogoAndroid,
    description:
      "We build powerful Android apps that scale with your business needs. By integrating AI for automation, predictive UX, and seamless user interactions, we ensure top-tier performance and security.",
  },
  {
    id: 3,
    title: "Cross-Platform Flutter Apps",
    img: SiFlutter,
    description:
      "We use Flutter to deliver smooth, responsive cross-platform experiences. With AI-enhanced features, our apps adapt to user behavior, optimize performance, and increase retention across both iOS and Android devices.",
  },
  {
    id: 4,
    title: "Hybrid Mobile Apps",
    img: TbDeviceMobileCode,
    description:
      "We develop hybrid mobile apps that provide a native feel while being cross-platform. Our AI-driven hybrid solutions offer agility, smart offline functionality, and seamless synchronization for fast, efficient delivery.",
  },
];


// ai development services
export const aiDevelopmentServices = [
  {
    id: 1,
    title: "AI-Powered Chatbots",
    img: MdChatBubbleOutline,
    description:
      "We design intelligent chatbots powered by NLP and machine learning to automate support, qualify leads, and offer personalized conversations across web and mobile platforms.",
  },
  {
    id: 2,
    title: "Predictive Analytics Solutions",
    img: BsGraphUpArrow,
    description:
      "Leverage AI-driven data modeling and forecasting to unlock actionable insights. Our predictive systems help you anticipate trends, optimize operations, and stay ahead of the curve.",
  },
  {
    id: 3,
    title: "Computer Vision Applications",
    img: AiOutlineCamera,
    description:
      "We build advanced computer vision models for facial recognition, object detection, quality inspection, and more — enabling machines to interpret visual data like never before.",
  },
  {
    id: 4,
    title: "AI Automation & Integration",
    img: FaRobot,
    description:
      "From automating repetitive tasks to enhancing workflows with intelligent decision-making, we integrate AI seamlessly into your existing tech stack to improve efficiency and reduce costs.",
  },
];

// blockchain development services
export const blockchainDevelopmentServices = [
  {
    id: 1,
    title: "Smart Contract Development",
    img: FaFileContract,
    description:
      "We create secure, efficient, and tamper-proof smart contracts on platforms like Ethereum and Solana — perfect for automating transactions and agreements without intermediaries.",
  },
  {
    id: 2,
    title: "Decentralized Applications (dApps)",
    img: SiEthereum,
    description:
      "Build powerful, scalable dApps that harness the potential of decentralized ecosystems. From DeFi to NFT platforms, we engineer intuitive and user-centric solutions.",
  },
  {
    id: 3,
    title: "Blockchain Consulting & Architecture",
    img: GiNetworkBars,
    description:
      "We offer strategic guidance, architecture design, and implementation roadmaps to help your business unlock blockchain's potential and choose the right technology stack.",
  },
  {
    id: 4,
    title: "Private & Consortium Blockchains",
    img: RiLockPasswordLine,
    description:
      "Implement permissioned blockchain networks tailored to your enterprise needs — with customizable consensus mechanisms, robust access control, and seamless integrations.",
  },
];

export const futureTechSectors = [
  {
    id: 1,
    img: financial,
    title: "Financial Services",
    description:
      "Revolutionizing finance with AI-powered risk management, smart contracts, and decentralized finance solutions.",
  },
  {
    id: 2,
    img: healthcare,
    title: "Healthcare",
    description:
      "Transforming healthcare with AI-driven diagnostics, personalized treatments, and advanced patient monitoring systems.",
  },
  {
    id: 3,
    img: manufacturing,
    title: "Manufacturing",
    description:
      "Optimizing production processes with AI-powered automation, predictive maintenance, and smart factories.",
  },
  {
    id: 4,
    img: energy,
    title: "Energy",
    description:
      "Streamlining energy supply with AI-driven optimization, renewable energy integration, and smart grids.",
  },
  {
    id: 5,
    img: retail,
    title: "Retail",
    description:
      "Enhancing customer experiences with AI-powered recommendation systems, personalized merchandising, and smart checkout systems.",
  },
  {
    id: 6,
    img: realestate,
    title: "Real Estate",
    description:
      "Optimizing real estate operations with AI-driven property management, smart leasing, and smart contracts.",
  },
  {
    id: 7,
    img: food,
    title: "Food and Beverage",
    description:
      "Transforming food and beverage with AI-powered menu optimization, smart packaging, and smart supply chains.",
  },
  {
    id: 8,
    img: transportation,
    title: "Transportation",
    description:
      "Revolutionizing transportation with AI-powered route optimization, smart logistics, and smart cargo tracking.",
  },
  {
    id: 9,
    img: communication,
    title: "Communication",
    description:
      "Transforming communication with AI-powered chatbots, virtual assistants, and smart messaging platforms.",
  },
  {
    id: 10,
    img: electronics,
    title: "Consumer Electronics",
    description:
      "Revolutionizing consumer electronics with AI-powered personalized recommendations, smart home automation, and smart wearables.",
  },
  {
    id: 11,
    img: aerospace,
    title: "Aerospace and Defense",
    description:
      "Transforming aerospace and defense with AI-powered automation, smart sensors, and smart contracts.",
  },
  {
    id: 12,
    img: chemicals,
    title: "Chemicals",
    description:
      "Transforming chemicals with AI-powered automation, smart sensors, and smart contracts.",
  },
  {
    id: 13,
    img: mining,
    title: "Mining",
    description:
      "Transforming mining with AI-powered automation, smart sensors, and smart contracts.",
  },
  {
    id: 14,
    img: agriculture,
    title: "Agriculture",
    description:
      "Transforming agriculture with AI-powered automation, smart sensors, and smart contracts.",
  },
  {
    id: 15,
    img: construction,
    title: "Construction",
    description:
      "Transforming construction with AI-powered automation, smart sensors, and smart contracts.",
  },
  {
    id: 16,
    img: hospitality,
    title: "Hospitality",
    description:
      "Transforming hospitality with AI-powered automation, smart sensors, and smart contracts.",
  },
  {
    id: 17,
    img: entertainment,
    title: "Entertainment",
    description:
      "Transforming entertainment with AI-powered automation, smart sensors, and smart contracts.",
  },
  {
    id: 18,
    img: consulting,
    title: "Consulting",
    description:
      "Transforming consulting with AI-powered automation, smart sensors, and smart contracts.",
  },
  {
    id: 19,
    img: legal,
    title: "Legal",
    description:
      "Transforming legal with AI-powered automation, smart sensors, and smart contracts.",
  },
];

export const webPortfolio = [
  {
    id: 1,
    img: FiveGHomesImg,
    title: "5g Homes",
    link: "https://5ghighspeedinternet.co",
  },
  {
    id: 2,
    img: BayutImg,
    title: "Bayut",
    link: "https://www.bayut.com",
  },
  {
    id: 3,
    img: ColdCreekcapImg,
    title: "Cold Creekcap",
    link: "https://www.coldcreekcap.com",
  },
  {
    id: 4,
    img: EmergencyMusicImg,
    title: "Emergency Music",
    link: "https://www.figma.com/proto/GwlIMQuIuFevhOEp8moALy/emergence-music-distribuBon?page-id=6298%3A7215&type=design&node-id=6298-7776&viewport=407%2C314%2C0.11&t=QCtz7M4USn6gI1CG-1&scaling=min-zoom",
  },
  {
    id: 5,
    img: FlatiornImg,
    title: "Flatiorn",
    link: "",
  },
  {
    id: 6,
    img: MavenImg,
    title: "Maven",
    link: "",
  },
  {
    id: 7,
    img: MenissaCateringsImg,
    title: "Menissa Caterings",
    link: "https://messinascatering.com",
  },
  {
    id: 8,
    img: MethodistImg,
    title: "Methodist",
    link: "",
  },
  {
    id: 9,
    img: ThinkRealityImg,
    title: "Think Reality",
    link: "https://thinkrealty.ae",
  },
];

export const appPortfolio = [
  {
    id: 1,
    img: DubaiTravelGuideImg,
    title: "Dubai Travel Guide",
    link: "https://play.google.com/store/apps/details?id=com.eBps.dubai.travel.guide&pcampaignid=web_share",
  },
  {
    id: 2,
    img: EloraHairPalourImg,
    title: "Elora Hair Palour",
    link: "https://play.google.com/store/apps/details?id=app.barbera.io&pcampaignid=web_share",
  },
  {
    id: 3,
    img: EvansFrancisImg,
    title: "Evans Francis",
    link: "https://play.google.com/store/apps/details?id=com.chrisBanappdevelopers.evansfrancis&pcampaignid=web_share",
  },
  {
    id: 4,
    img: HouseOfDeliverenceImg,
    title: "House of Deliverence",
    link: "https://play.google.com/store/apps/details?id=com.chrisBanappdevelopers.hod&pcampaignid=web_share",
  },
  {
    id: 5,
    img: MybitsShopImg,
    title: "Mybits Shop",
    link: "https://play.google.com/store/apps/details?id=com.klikomics.android&pcampaignid=web_share",
  },
  {
    id: 6,
    img: NamazImg,
    title: "Namaz",
    link: "https://play.google.com/store/apps/details?id=com.iccbrossard.prayerBmes&pcampaignid=web_share",
  },
  {
    id: 7,
    img: PoteaImg,
    title: "Potea",
    link: "https://play.google.com/store/apps/details?id=com.Zigna.AutoSnap&pcampaignid=web_share",
  },
  {
    id: 8,
    img: RentopBikeAndCarImg,
    title: "Rentop Bike and Car",
    link: "https://play.google.com/store/apps/details?id=com.rentop&pcampaignid=web_share",
  },
];

export const blockchainPortfolio = [
  {
    id: 1,
    img: nanoflow,
    title: "Nanoflow",
    link: "https://play.google.com/store/apps/details?id=com.nanfolo.user.app",
  },
  {
    id: 2,
    img: padipal,
    title: "Padipal",
    link: "https://padiepal.com",
  },
  {
    id: 3,
    img: cryptopadie,
    title: "Cryptopadie",
    link: "https://cryptopadie.com/",
  },
];
