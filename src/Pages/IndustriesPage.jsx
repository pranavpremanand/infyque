import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Link as Scroll } from "react-scroll";
import { motion } from "framer-motion";

import FinancialServicesImage from "../../src/assets/images/industries/Financial Services.webp";
import HealthcareImage from "../../src/assets/images/industries/Healthcare.webp";
import ManufacturingImage from "../../src/assets/images/industries/Manufacturing.webp";
import EnergyImage from "../../src/assets/images/industries/Energy.webp";
import RetailImage from "../../src/assets/images/industries/Retail.webp";
import RealEstateImage from "../../src/assets/images/industries/Real Estate.webp";
import FoodAndBeverageImage from "../../src/assets/images/industries/Food and Beverage.webp";
import TransportationImage from "../../src/assets/images/industries/Transportation.webp";
import CommunicationImage from "../../src/assets/images/industries/Communication.webp";
import ConsumerElectronicsImage from "../../src/assets/images/industries/Consumer Electronics.webp";
import AerospaceAndDefenseImage from "../../src/assets/images/industries/Aerospace and Defense.webp";
import ChemicalsImage from "../../src/assets/images/industries/Chemicals.webp";
import MiningImage from "../../src/assets/images/industries/Mining.webp";
import AgricultureImage from "../../src/assets/images/industries/Agriculture.webp";
import ConstructionImage from "../../src/assets/images/industries/Construction.webp";
import HospitalityImage from "../../src/assets/images/industries/Hospitality.webp";
import EntertainmentImage from "../../src/assets/images/industries/Entertainment.webp";
import ConsultingImage from "../../src/assets/images/industries/Consulting.webp";
import LegalImage from "../../src/assets/images/industries/Legal.webp";

const IndustriesPage = () => {
  const [industries, setIndustries] = useState([]);

  useEffect(() => {
    // Initialize the industries data
    setIndustries([
      {
        id: 1,
        title: "Financial Services",
        image: FinancialServicesImage,
        description:
          "Innovation and security go hand in hand in finance. We help banks, fintech startups, and insurers build fast, secure, and customer-friendly digital platforms. From fraud detection using AI to smart contract-enabled blockchain systems, our tech helps streamline everything from customer onboarding to compliance.",
        deliverables: [
          "Predictive fraud detection models using AI & ML",
          "Seamless digital banking UX and mobile-first solutions",
          "RPA bots that automate document processing",
          "Blockchain systems for secure, transparent transactions",
        ],
        layout: "right",
        color: "blue",
      },
      {
        id: 2,
        title: "Healthcare",
        image: HealthcareImage,
        description:
          "Healthcare is evolving rapidly with technology at the center. We design patient portals, AI-assisted diagnostics, and HIPAA-compliant mobile apps that simplify experiences for both doctors and patients. NLP tools help with medical transcription and chatbot triage, while cloud platforms ensure safe, scalable data handling.",
        deliverables: [
          "Virtual care platforms and secure patient portals",
          "AI-powered diagnostics and treatment planning",
          "NLP-based clinical data entry and summarization",
          "Cloud migration for improved scalability and compliance",
        ],
        layout: "left",
        color: "teal",
      },
      {
        id: 3,
        title: "Manufacturing",
        image: ManufacturingImage,
        description:
          "We bring smart automation to the factory floor. Using AI, RPA, and real-time data platforms, we help manufacturers streamline operations, reduce downtime, and maintain high-quality outputs. Our cloud-based tools offer better insights across production lines and supply chains.",
        deliverables: [
          "AI for predictive maintenance and defect detection",
          "RPA to automate routine procurement and inventory tasks",
          "Mobile dashboards for factory floor visibility",
          "Cloud-hosted data systems for better production control",
        ],
        layout: "center",
        color: "orange",
      },
      {
        id: 4,
        title: "Energy",
        image: EnergyImage,
        description:
          "Energy firms need efficient, scalable, and secure technology systems. We develop AI models for load forecasting, blockchain for trading transparency, and mobile apps for remote field monitoring. Our cloud infrastructures support real-time data and predictive insights.",
        deliverables: [
          "Blockchain-based energy trading platforms",
          "AI-driven analytics for demand/supply forecasting",
          "Real-time asset tracking and field apps",
          "Cloud migration for improved reliability and scalability",
        ],
        layout: "right",
        color: "yellow",
      },
      {
        id: 5,
        title: "Retail",
        image: RetailImage,
        description:
          "Retail success hinges on speed and personalization. We help retailers build immersive digital storefronts, intelligent recommendation engines, and 24/7 support through chatbots. Our focus is always on better shopping experiences and operational agility.",
        deliverables: [
          "Mobile-first eCommerce platforms",
          "Personalized product suggestions using AI",
          "Automated customer service with chatbots",
          "Cloud-based inventory and order management systems",
        ],
        layout: "left",
        color: "pink",
      },
      {
        id: 6,
        title: "Real Estate",
        image: RealEstateImage,
        description:
          "Whether it's simplifying property searches or managing leads more effectively, we help real estate firms modernize their platforms. Our custom CRMs, AI tools, and mobile apps make property browsing, booking, and management more streamlined than ever.",
        deliverables: [
          "Dynamic listing websites and apps with integrated maps",
          "AI for lead scoring and buyer interest prediction",
          "Chatbots for 24/7 property queries and appointment bookings",
          "Virtual tour integrations with smooth user experiences",
        ],
        layout: "grid",
        color: "indigo",
      },
      {
        id: 7,
        title: "Food and Beverage",
        image: FoodAndBeverageImage,
        description:
          "Speed, quality, and convenience drive the F&B sector. We deliver mobile ordering apps, smart POS systems, and AI-based kitchen and inventory tools that keep operations smooth and customers satisfied.",
        deliverables: [
          "Custom ordering and loyalty apps",
          "Real-time POS dashboards hosted on cloud",
          "AI for ingredient demand prediction and menu engineering",
          "Chatbots for reservations and real-time assistance",
        ],
        layout: "right",
        color: "red",
      },
      {
        id: 8,
        title: "Transportation",
        image: TransportationImage,
        description:
          "In logistics and mobility, efficiency is everything. We build route optimization tools, fleet tracking platforms, and mobile ticketing apps powered by AI and cloud. Our systems reduce costs and improve delivery speed and reliability.",
        deliverables: [
          "Real-time fleet monitoring dashboards",
          "AI for route optimization and fuel efficiency",
          "Mobile ticketing platforms for public transport",
          "RPA to automate backend operations like billing",
        ],
        layout: "left",
        color: "green",
      },
      {
        id: 9,
        title: "Communication",
        image: CommunicationImage,
        description:
          "We help brands and platforms deliver seamless, secure communication. From chat and VoIP systems to AI-driven moderation and translation, our tech stack supports dynamic and scalable real-time interactions.",
        deliverables: [
          "AI tools for content moderation and translation",
          "Custom messaging platforms and video conferencing tools",
          "NLP-powered customer support chatbots",
          "Cloud-based infrastructure for global reach",
        ],
        layout: "center",
        color: "purple",
      },
      {
        id: 10,
        title: "Consumer Electronics",
        image: ConsumerElectronicsImage,
        description:
          "We connect people to their devices more intuitively. Whether it's developing a companion app or a smart home dashboard, our focus is on usability, integration, and continuous learning through AI.",
        deliverables: [
          "Mobile apps for smart devices",
          "Cloud infrastructure for firmware and analytics",
          "Personalized user experiences driven by AI",
          "Web-based portals for customer support and setup",
        ],
        layout: "right",
        color: "cyan",
      },
      {
        id: 11,
        title: "Aerospace and Defense",
        image: AerospaceAndDefenseImage,
        description:
          "In this high-stakes sector, precision and security are critical. We create solutions that include blockchain for secure communications, AI for equipment diagnostics, and cloud environments built for compliance and resilience.",
        deliverables: [
          "Blockchain for supply chain and comms security",
          "Predictive maintenance with AI",
          "Automated workflows using RPA",
          "Compliant and secure cloud systems",
        ],
        layout: "left",
        color: "slate",
      },
      {
        id: 12,
        title: "Chemicals",
        image: ChemicalsImage,
        description:
          "Safety and regulation come first in chemical manufacturing. Our AI and RPA solutions help maintain compliance and safety protocols, while our data platforms improve visibility and efficiency in production.",
        deliverables: [
          "AI for safety monitoring and compliance tracking",
          "RPA for documentation and reporting",
          "Cloud-based inventory and production dashboards",
          "Secure web apps for data logging and review",
        ],
        layout: "grid",
        color: "emerald",
      },
      {
        id: 13,
        title: "Mining",
        image: MiningImage,
        description:
          "We digitize rugged operations with smart analytics, AI-based exploration support, and real-time safety tools. Our platforms enable data-driven decision-making in the field and in the office.",
        deliverables: [
          "AI for mineral prediction and mapping",
          "Cloud dashboards for environmental and equipment tracking",
          "RPA for regulatory compliance and inspection logging",
          "Field reporting tools with offline capabilities",
        ],
        layout: "right",
        color: "amber",
      },
      {
        id: 14,
        title: "Agriculture",
        image: AgricultureImage,
        description:
          "Modern farming is data-driven. We deliver mobile and cloud solutions that manage everything from irrigation to yield forecasting. Our platforms support precision agriculture for better sustainability and productivity.",
        deliverables: [
          "IoT and AI for crop health and soil analysis",
          "Cloud-hosted farm management systems",
          "Mobile apps for field staff and equipment tracking",
          "Predictive analytics for weather and yield",
        ],
        layout: "left",
        color: "lime",
      },
      {
        id: 15,
        title: "Construction",
        image: ConstructionImage,
        description:
          "We build digital tools for the job site—project tracking, collaboration, and compliance become seamless. From mobile project management apps to RPA for document flow, we make construction smarter.",
        deliverables: [
          "Real-time project dashboards for on-site teams",
          "Cloud-based collaboration tools",
          "RPA for safety logs, permits, and compliance",
          "Mobile UX tailored for rugged use environments",
        ],
        layout: "center",
        color: "yellow",
      },
      {
        id: 16,
        title: "Hospitality",
        image: HospitalityImage,
        description:
          "Guest expectations are higher than ever. We deliver apps for booking, personalization engines using AI, and chatbots that handle everything from room service to concierge tasks—all built to create memorable experiences.",
        deliverables: [
          "Frictionless booking and check-in apps",
          "AI for upselling, personalization, and guest feedback",
          "Chatbots for concierge services and support",
          "Thoughtful UX design for elegance and ease",
        ],
        layout: "right",
        color: "rose",
      },
      {
        id: 17,
        title: "Entertainment",
        image: EntertainmentImage,
        description:
          "Streaming, gaming, live events—we support entertainment platforms with scale and creativity. Our AI algorithms help curate personalized experiences, while our cloud architecture supports millions of users in real time.",
        deliverables: [
          "Scalable video streaming platforms",
          "Game development with immersive features",
          "AI for personalized content feeds",
          "Cloud hosting with minimal latency",
        ],
        layout: "left",
        color: "violet",
      },
      {
        id: 18,
        title: "Consulting",
        image: ConsultingImage,
        description:
          "Consultants need agility and insight. We help firms automate data capture, visualize performance, and engage clients through digital portals. AI and data science improve strategic delivery.",
        deliverables: [
          "Custom dashboards and analytics tools",
          "AI-driven reporting and client insights",
          "Automated workflows using RPA",
          "Interactive web portals for clients",
        ],
        layout: "grid",
        color: "sky",
      },
      {
        id: 19,
        title: "Legal",
        image: LegalImage,
        description:
          "Digital tools are redefining legal work. We build secure case management systems, use NLP to streamline legal research, and implement chatbots for better client interaction.",
        deliverables: [
          "Case and document management systems",
          "NLP tools for research and review",
          "Chatbots for legal inquiries and onboarding",
          "Cloud infrastructure for sensitive data",
        ],
        layout: "center",
        color: "blue",
      },
    ]);
  }, []);

  // Function to get color class based on industry color
  const getColorClass = (color) => {
    const colorMap = {
      blue: "from-blue-500 to-blue-700",
      teal: "from-teal-500 to-teal-700",
      orange: "from-orange-500 to-orange-700",
      yellow: "from-yellow-500 to-yellow-700",
      pink: "from-pink-500 to-pink-700",
      indigo: "from-indigo-500 to-indigo-700",
      red: "from-red-500 to-red-700",
      green: "from-green-500 to-green-700",
      purple: "from-purple-500 to-purple-700",
      cyan: "from-cyan-500 to-cyan-700",
      slate: "from-slate-500 to-slate-700",
      emerald: "from-emerald-500 to-emerald-700",
      amber: "from-amber-500 to-amber-700",
      lime: "from-lime-500 to-lime-700",
      rose: "from-rose-500 to-rose-700",
      violet: "from-violet-500 to-violet-700",
      sky: "from-sky-500 to-sky-700",
    };
    return colorMap[color] || "from-primary to-blue-700";
  };

  // Render different layouts based on the industry layout type
  const renderIndustry = (industry) => {
    switch (industry.layout) {
      case "left":
        return (
          <div
            key={industry.id}
            id={industry.id}
            className="w-full mb-24"
            data-aos="fade-up"
          >
            <div className="flex flex-col lg:flex-row gap-8 items-center">
              <div className="w-full lg:w-1/2 relative overflow-hidden rounded-2xl">
                <img
                  src={industry.image}
                  alt={industry.title}
                  className="w-full h-[400px] object-cover transform hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <h3 className="absolute bottom-6 left-6 text-3xl font-bold text-white">
                  {industry.title}
                </h3>
              </div>
              <div className="w-full lg:w-1/2">
                <p className="desc mb-6">{industry.description}</p>
                <div>
                  <h4 className="text-xl font-semibold mb-4 text-primary">
                    What We Deliver:
                  </h4>
                  <ul className="space-y-2">
                    {industry.deliverables.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        <span className="desc">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        );

      case "right":
        return (
          <div
            key={industry.id}
            id={industry.id}
            className="w-full mb-24"
            data-aos="fade-up"
          >
            <div className="flex flex-col lg:flex-row-reverse gap-8 items-center">
              <div className="w-full lg:w-1/2 relative overflow-hidden rounded-2xl">
                <img
                  src={industry.image}
                  alt={industry.title}
                  className="w-full h-[400px] object-cover transform hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <h3 className="absolute bottom-6 left-6 text-3xl font-bold text-white">
                  {industry.title}
                </h3>
              </div>
              <div className="w-full lg:w-1/2">
                <p className="desc mb-6">{industry.description}</p>
                <div>
                  <h4 className="text-xl font-semibold mb-4 text-primary">
                    What We Deliver:
                  </h4>
                  <ul className="space-y-2">
                    {industry.deliverables.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        <span className="desc">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        );

      case "center":
        return (
          <div
            key={industry.id}
            id={industry.id}
            className="w-full mb-24"
            data-aos="fade-up"
          >
            <div className="text-center mb-8">
              <h3 className="main-title mb-6">{industry.title}</h3>
              <p className="desc max-w-4xl mx-auto">{industry.description}</p>
            </div>
            <div className="relative h-[400px] overflow-hidden rounded-2xl">
              <img
                src={industry.image}
                alt={industry.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end">
                <div className="p-8 w-full">
                  <h4 className="text-xl font-semibold mb-4 text-white">
                    What We Deliver:
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {industry.deliverables.map((item, index) => (
                      <div
                        key={index}
                        className="bg-black/40 backdrop-blur-sm p-3 rounded-lg"
                      >
                        <p className="text-white">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case "grid":
        return (
          <div
            key={industry.id}
            id={industry.id}
            className="w-full mb-24"
            data-aos="fade-up"
          >
            <div className="bg-slate-900 rounded-2xl overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="p-8 lg:p-12">
                  <h3 className="text-3xl font-bold text-white mb-6">
                    {industry.title}
                  </h3>
                  <p className="text-gray-300 mb-8">{industry.description}</p>
                  <div>
                    <h4 className="text-xl font-semibold mb-4 text-primary">
                      What We Deliver:
                    </h4>
                    <div className="grid grid-cols-1 gap-4">
                      {industry.deliverables.map((item, index) => (
                        <div
                          key={index}
                          className={`bg-gradient-to-r ${getColorClass(
                            industry.color
                          )} p-4 rounded-lg`}
                        >
                          <p className="text-white">{item}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="h-full min-h-[500px]">
                  <img
                    src={industry.image}
                    alt={industry.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return (
          <div
            key={industry.id}
            id={industry.id}
            className="w-full mb-24"
            data-aos="fade-up"
          >
            <div className="flex flex-col lg:flex-row gap-8 items-center">
              <div className="w-full lg:w-1/2 relative overflow-hidden rounded-2xl">
                <img
                  src={industry.image}
                  alt={industry.title}
                  className="w-full h-[400px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <h3 className="absolute bottom-6 left-6 text-3xl font-bold text-white">
                  {industry.title}
                </h3>
              </div>
              <div className="w-full lg:w-1/2">
                <p className="desc mb-6">{industry.description}</p>
                <div>
                  <h4 className="text-xl font-semibold mb-4 text-primary">
                    What We Deliver:
                  </h4>
                  <ul className="space-y-2">
                    {industry.deliverables.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        <span className="desc">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen dark:bg-darkblack text-white pt-[10rem] pb-20">
      {/* Hero Section */}
      <div className="wrapper text-center mb-16">
        <motion.h1
          className="main-title mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          data-aos="fade-up"
        >
          Industries We Serve
        </motion.h1>
        <motion.p
          className="desc max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Real-World Impact Through Tailored Digital Solutions. At INFYQUE, we
          understand that no two industries operate the same. That's why our
          approach is never one-size-fits-all. We align our core services with
          your specific industry needs, goals, and audience expectations.
        </motion.p>
      </div>

      {/* Quick Navigation */}
      <div className="wrapper mb-20">
        <div className="flex flex-wrap justify-center gap-3" data-aos="fade-up">
          {industries.map((industry) => (
            <Scroll
              key={industry.id}
              to={industry.id}
              smooth={true}
              duration={500}
              offset={-100}
              spy={true}
              className="px-4 py-2 bg-slate-800 hover:bg-primary rounded-full text-sm transition-colors cursor-pointer"
            >
              {industry.title}
            </Scroll>
          ))}
        </div>
      </div>

      {/* Industries Content */}
      <div className="wrapper">
        {industries.map((industry) => (
          <div id={industry.id} key={industry.id}>
            {renderIndustry(industry)}
          </div>
        ))}
      </div>

      {/* CTA Section */}
      <div className="wrapper mt-16">
        <div
          className="bg-gradient-to-r from-blue-900 to-primary p-10 rounded-2xl text-center"
          data-aos="fade-up"
        >
          <h2 className="text-3xl font-bold text-white mb-4">
            Let's Build the Future Together
          </h2>
          <p className="text-white text-lg mb-8 max-w-3xl mx-auto">
            Your industry has unique needs. Our job is to understand them and
            craft technology solutions that work with you—not just for you.
            Whether you're looking to innovate, grow, or scale sustainably,
            we're ready to partner with you every step of the way.
          </p>
          <Link
            to="/contact-us"
            className="inline-block px-8 py-3 bg-white text-primary font-semibold rounded-lg hover:bg-blue-50 transition-colors"
          >
            Reach Out to Our Team
          </Link>
        </div>
      </div>
    </div>
  );
};

export default IndustriesPage;
