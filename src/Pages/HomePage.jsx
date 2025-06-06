import React from "react";
import HomePageBanner from "../Components/HomePageBanner";
import homeaboutimg from "../assets/images/homeaboutimg.webp";
import WhyChooseUs from "../Components/WhyChooseUs";
import RoundedHeader from "../Components/RoundedHeader";
import ServicesGrid from "../Components/ServicesGrid";
import Testimonials from "../Components/Testimonials";
import Highlights from "../Components/Highlights";
import Faq from "../Components/Faq";
import { useTheme } from "../Context/ThemeContext";
import Ourvalues from "../Components/Ourvalues";
import Portfolio from "../Components/Portfolio";
import LeadForm from "../Components/landingpage/LeadForm";
import BrandLogos from "../Components/BrandLogos";

const HomePage = () => {
  const { theme } = useTheme();
  const isDarkMode = theme === "dark";
  return (
    <div className="min-h-screen overflow-x-hidden">
      <HomePageBanner />
      <section>
        <div className="wrapper grid md:grid-cols-2 gap-10 sm:pt-[4rem] pt-[2rem] paddingbottom">
          <img data-aos="fade-right" src={homeaboutimg} alt="homeaboutimg" />
          <div>
            <h1 className="main-title leading-tight" data-aos="fade-left">
              Welcome to INFYQUE
            </h1>
            <p className="desc mt-4" data-aos="fade-left">
              At INFYQUE, we believe technology should do more than just
              function — it should inspire. We’re a full-service digital
              innovation firm helping businesses build smarter, design better,
              and move faster in a connected world. From web platforms and
              mobile apps to AI-driven systems and immersive experiences, we
              bring ideas to life through strategy, creativity, and cutting-edge
              tech.
            </p>
          </div>
        </div>
      </section>
      <WhyChooseUs />
      <Ourvalues />
      <section className="dark:bg-darkblack ">
        <div className="flex wrapper flex-col gap-4 items-center w-full paddingtop paddingbottom">
          <RoundedHeader title={"Our Services"} />
          <h1 className="main-title text-center" data-aos="fade-up">
            Unlock the Future
          </h1>
          <p className="desc max-w-[40rem] text-center" data-aos="fade-up">
            We offer a wide range of services to help you navigate the digital
            landscape and unlock the full potential of your business.
          </p>
        </div>
        <ServicesGrid />
      </section>
      <Portfolio />
      <div className="relative overflow-hidden dark:bg-darkblack min-h-screen">
        <div
          className={`absolute flex -bottom-[50rem] -left-[50rem] w-full h-full ${
            isDarkMode ? 'bg-background' : 'bg-backgroundLight'
          } blur-3xl opacity-70 z-0`}
        />
        <div className="relative z-10 w-full h-full">
          <Testimonials />
          {/* <Highlights /> */}
          <BrandLogos />
          <LeadForm />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
