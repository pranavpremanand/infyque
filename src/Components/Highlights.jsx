import React from "react";
import RoundedHeader from "./RoundedHeader";
import { highlights } from "../util/constant";
import { useNavigate } from "react-router-dom";

const Highlights = () => {
  const navigate = useNavigate();
  const navigateTo = (link) => {
    navigate(link);
  };
  return (
    <section className="z-30">
      <div className="wrapper paddingtop paddingbottom">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="flex flex-col gap-5">
            <RoundedHeader title={"Highlights"} bg={true} />
            <h1 className="main-title leading-tight" data-aos="fade-right">
              Where Quantum Sparks the Next AI Evolution
            </h1>
            <p className="desc" data-aos="fade-right">
              Whether you're grounded on Earth or reaching for the stars,
              INFYQUE bridges the gap between ambition and innovation. Our
              fusion of AI, quantum intelligence, and universal awareness powers
              a new era of limitless digital advancement.
            </p>
            <button
              data-aos="fade-right"
              onClick={() => navigateTo("/contact-us")}
              className="secondary-btn-white w-fit"
            >
              Get Started
            </button>
          </div>
          <div className="col-span-2 grid md:grid-cols-2 gap-4">
            {highlights.map((obj) => (
              <div
                data-aos="fade-left"
                className="bg-white/10 flex flex-col gap-2 p-5 border text-black dark:text-white border-slate-500 rounded-xl"
              >
                <img src={obj.icon} alt={obj.title} className="w-7 " />
                <h3 className="small-heading">{obj.title}</h3>
                <p className="small-desc">{obj.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Highlights;
