import React from "react";
import aboutusimg from "../assets/images/aboutusimg.webp";
import { useTheme } from "../Context/ThemeContext";
import CoreValues from "../Components/CoreValues";
import VisionMission from "../Components/VisionMission";
import OurApproach from "../Components/OurApproach";
import UnlockEfficiency from "../Components/UnlockEfficiency";

const AboutUsPage = () => {
  const { theme } = useTheme();
  const isDarkMode = theme === "dark";

  return (
    <div className=" bg-white dark:bg-darkblack">
      <section className="relative pt-[7rem]  overflow-hidden">
        <div
          className={`absolute flex -top-[28rem] blur-3xl left-0 w-full h-full ${
            isDarkMode ? 'bg-footerBackground' : 'bg-footerBackgroundLight'
          }`}
        />{" "}
        <section className="relative z-10 w-full h-full">
          <div>
            <div className="wrapper paddingtop paddingbottom grid md:grid-cols-2 gap-10">
              <div>
                <h1
                  data-aos="fade-right"
                  className="hero-title text-8xl font-bold text-darkblack dark:text-white"
                >
                  About Us
                </h1>
                <p data-aos="fade-right" className="desc mt-10">
                  At INFYQUE, we believe great technology should feel seamless —
                  not overwhelming. We’re a team of curious minds, creative
                  thinkers, and technical experts who care deeply about crafting
                  solutions that solve real problems and drive lasting impact.{" "}
                  <br />
                  <br />
                  We work with startups, scale-ups, and established companies
                  across the globe to bring bold ideas to life. Whether it’s
                  building an intelligent chatbot, designing a sleek mobile app,
                  or implementing AI into legacy systems — we’re here to help
                  you make it happen, the right way.
                </p>
              </div>
              <img
                data-aos="fade-left"
                src={aboutusimg}
                alt="aboutus-img"
                className="h-full object-cover"
              />
            </div>
          </div>
        </section>
      </section>
      <div className="relative overflow-hidden">
        <div
          className={`absolute flex top-[41rem] blur-3xl -left-[47rem] w-full h-full ${
            isDarkMode ? 'bg-footerBackground' : 'bg-footerBackgroundLight'
          }`}
        />
        <section className="relative z-10 w-full h-full">
          <CoreValues />
          <VisionMission />
          <OurApproach />
          <UnlockEfficiency />
        </section>
      </div>
    </div>
  );
};

export default AboutUsPage;
