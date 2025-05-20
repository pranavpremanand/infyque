import React from "react";
import LandingHeader from "../../Components/landingpage/LandingHeader";
import LandingFooter from "../../Components/landingpage/LandingFooter";
import LandingServices from "../../Components/landingpage/LandingServices";
import { useTheme } from "../../Context/ThemeContext";
import CoreValues from "../../Components/CoreValues";
import VisionMission from "../../Components/VisionMission";
import OurApproach from "../../Components/OurApproach";
import UnlockEfficiency from "../../Components/UnlockEfficiency";
import LeadForm from "../../Components/landingpage/LeadForm";
import Portfolio from "../../Components/Portfolio";
import Banner from "../../Components/landingpage/Banner";
import webAboutImg from "../../assets/images/web-development.webp";
import appAboutImg from "../../assets/images/app-development.webp";
import Ourvalues from "../../Components/Ourvalues";
import TechnologiesUsed from "../../Components/landingpage/TechnologiesUsed";
import BrandLogos from "../../Components/BrandLogos";
import WhatsAppIcon from "../../Components/WhatsApp";

const LandingPage = ({ page }) => {
  const { theme } = useTheme();
  const isDarkMode = theme === "dark";

  const isWeb = page === "web";

  let bannerTitle = isWeb
    ? "Discover the Future of Web Development"
    : "Discover the Future of Mobile App Development";
  let bannerDesc = isWeb
    ? "Crafting Scalable, Engaging, and High-Performance Digital Experiences"
    : "Bringing Innovative and Scalable Mobile Experiences to Life";

  return (
    <>
      <WhatsAppIcon />
      <LandingHeader />
      <div id="banner" className="bg-white dark:bg-darkblack">
        <Banner bannerTitle={bannerTitle} bannerDesc={bannerDesc} />
        <section id="about-us">
          <div className="wrapper grid md:grid-cols-2 gap-10 paddingtop paddingbottom">
            <div className="flex flex-col h-full max-h-[24rem] overflow-hidden">
              <img
                src={isWeb ? webAboutImg : appAboutImg}
                alt="About Us"
                className="h-full object-cover w-full"
              />
            </div>
            <div>
              <h1 className="main-title leading-tight">
                {isWeb
                  ? "Designing High-Impact Websites for Tomorrow"
                  : "Building Mobile Apps That Redefine User Engagement"}
              </h1>
              <p className="desc mt-4">
                {isWeb
                  ? "At INFYQUE, we specialize in creating high-performance, responsive websites that not only look great but also drive measurable business results. Our expert team takes your ideas and turns them into scalable digital solutions that increase your brand's visibility. From custom design to seamless integrations, we ensure every detail is optimized for performance and user experience. Whether it’s developing a new website or refreshing an existing one, we provide comprehensive strategies, SEO optimization, and analytics-driven design to elevate your online presence."
                  : "At INFYQUE, we design and develop powerful mobile applications that offer smooth, intuitive experiences across iOS and Android platforms. We focus on building apps with high performance, seamless UX, and robust infrastructure to deliver long-term value. By leveraging the latest technologies and frameworks, we create solutions tailored to your business needs, ensuring a seamless experience for your users. Whether it’s a native, hybrid, or cross-platform app, we create engaging mobile experiences that resonate with your audience."}
              </p>
            </div>
          </div>
        </section>

        <LandingServices page={page} />
        <div className="relative overflow-hidden">
          <div
            className={`absolute flex top-[41rem] blur-3xl -left-[47rem] w-full h-full ${
              isDarkMode ? 'bg-footerBackground' : 'bg-footerBackgroundLight'
            }`}
          />
          <Portfolio page={page} />
          <TechnologiesUsed service={page} />
          <section className="relative z-10 w-full h-full">
            <CoreValues />
            <VisionMission />
            <OurApproach />
            <UnlockEfficiency />
            <Ourvalues />
            <BrandLogos />
            <LeadForm />
          </section>
        </div>
      </div>
      <LandingFooter />
    </>
  );
};

export default LandingPage;
