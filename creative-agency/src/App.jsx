import { useState } from "react";
import logo from "../assets/logo.svg";
import hero from "../assets/desktop/image-hero.jpg";
import heroTablet from "../assets/tablet/image-hero.jpg";
import heroMobile from "../assets/mobile/image-hero.jpg";
import hamburger from "../assets/mobile/icon-hamburger.svg";
import cross from "../assets/mobile/icon-cross.svg";
import strategic from "../assets/desktop/image-strategic.jpg";
import strategicTablet from "../assets/tablet/image-strategic.jpg";
import strategicMobile from "../assets/mobile/image-strategic.jpg";
import slideOne from "../assets/desktop/image-slide-1.jpg";
import slideOneTablet from "../assets/tablet/image-slide-1.jpg";
import slideOneMobile from "../assets/mobile/image-slide-1.jpg";
import wave from "../assets/desktop/bg-pattern-wave-red.svg";
import arrowLeft from "../assets/desktop/icon-arrow-previous.svg";
import arrowRight from "../assets/desktop/icon-arrow-next.svg";
import "./App.css";

function App() {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <>
      <nav className="flex items-center justify-between p-4 pr-0 pb-0 pt-0 max-w-[1110px] mx-auto">
        <div>
          <img src={logo} alt="" />
        </div>
        <div
          className={
            nav
              ? "flex flex-col md:flex-row absolute top-14 right-12 md:static gap-8 text-white items-center bg-[#191921] md:bg-[#f94f4f] p-10"
              : "flex flex-col md:flex-row absolute top-[-100%] right-12 md:static gap-8 text-white items-center bg-[#191921] md:bg-[#f94f4f] p-10"
          }
        >
          <a href="/" className="hover:font-extrabold">
            About
          </a>
          <a href="/" className="hover:font-extrabold">
            Service
          </a>
          <a href="/" className="hover:font-extrabold">
            Projects
          </a>
          <button className="bg-[#f94f4f] md:bg-[#191921] py-3 px-8 font-extrabold hover:opacity-90">
            Schedule a Call
          </button>
        </div>
        <div className="md:hidden p-4" onClick={handleClick}>
          {nav ? <img src={cross} alt="" /> : <img src={hamburger} alt="" />}
        </div>
      </nav>

      <section
        className="max-w-[1110px] mx-auto flex flex-col-reverse md:flex-row 
      items-center text-start pl-0 md:pl-4 p-4 pr-0 py-0"
      >
        <div className="my-10 md:my-0">
          <h1 className="font-extrabold text-4xl md:text-6xl lg:text-7xl md:w-[31rem] my-10">
            Branding & website design agency
          </h1>
          <p className="w-96 text-sm lg:text-lg my-10 md:w-[287px] lg:w-[420px]">
            We specialize in visual storytelling by creating cohesive brand and
            website design solutions for small businesses, giving lasting
            impressions to audiences in a digital world.
          </p>
          <button className="bg-[#f94f4f] text-white text-lg font-extrabold px-6 py-6 hover:opacity-50">
            Learn More
          </button>
        </div>
        <div>
          <img src={hero} alt="" className="hidden lg:block" />
          <img src={heroTablet} alt="" className="hidden md:block lg:hidden" />
          <img src={heroMobile} alt="" className="md:hidden" />
        </div>
      </section>

      <section className="flex flex-col md:flex-row text-start max-w-[1110px] mx-auto relative">
        <div>
          <img src={strategic} alt="" className="hidden lg:block" />
          <img
            src={strategicTablet}
            alt=""
            className="hidden md:block lg:hidden"
          />
          <img src={strategicMobile} alt="" className="md:hidden" />
        </div>
        <img
          src={wave}
          alt=""
          className="absolute top-[46%] md:top-[25%] md:left-[37%] lg:left-[39%] w-16 h-7 lg:w-auto lg:h-auto"
        />
        <div className="bg-[#191921] md:p-28 lg:p-52 flex-grow">
          <h2 className="font-extrabold text-white text-3xl lg:text-6xl my-10">
            <span className="text-[#f94f4f]">Design</span> is strategic
          </h2>
          <p className="w-72 lg:w-96 text-sm lg:text-base text-white my-10">
            “A well-crafted design strategy consistently produces desired
            outcomes and brand awareness. We are firm believers that success
            lies in creative collaboration with our clients.”
          </p>
          <div className="font-extrabold text-[#f94f4f] hover:opacity-50">
            <a href="/">Schedule a Call</a>
            <div className="bg-[#f94f4f] h-[1px] w-28 mt-2"></div>
          </div>
        </div>
      </section>

      <section
        className="max-w-[1110px] mx-auto flex flex-col md:flex-row items-center 
      text-start md:px-4 md:pr-0 py-0 pr-0 pl-0 relative mt-[-5.5rem] md:mt-[-10rem]"
      >
        <div>
          <h2
            className="font-extrabold text-3xl md:text-4xl lg:text-6xl relative left-0 top-28 
          md:static lg:relative lg:left-20 text-white md:text-black p-2 md:p-0"
          >
            Our approach for creating a winning brand
          </h2>
        </div>
        <div
          className="bg-[#f94f4f] text-white p-48 pl-[0.5rem] 
      pr-[2.5rem] md:pr-[7.5rem] lg:p-96 lg:px-[14.5rem]"
        >
          <div className="flex">
            <div>
              <p className="font-extrabold text-7xl opacity-25">01</p>
            </div>
            <div className="relative right-6 top-3">
              <h3 className="font-extrabold text-xl my-6">Brand Strategy</h3>
              <p className="w-96 text-lg">
                Brand strategy is critical for long-term success. Outshining
                competitors and capturing the target audience are key.
              </p>
            </div>
          </div>

          <div className="flex my-20">
            <div>
              <p className="font-extrabold text-7xl opacity-25">02</p>
            </div>
            <div className="relative right-6 top-3">
              <h3 className="font-extrabold text-xl my-6">Brand Design</h3>
              <p className="w-96 text-lg">
                Keeping the brand design unique and meaningful helps in
                communicating the brand’s timeless value effectively.
              </p>
            </div>
          </div>

          <div className="flex">
            <div>
              <p className="font-extrabold text-7xl opacity-25">03</p>
            </div>
            <div className="relative right-6 top-3">
              <h3 className="font-extrabold text-xl my-6">Web Design</h3>
              <p className="w-96 text-lg">
                A beautifully crafted website is the best tool for brand
                awareness, and ultimately results in increased revenues.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        className="flex flex-col-reverse md:flex-row max-w-[1110px] mx-auto px-4 
      py-0 pr-0 mb-20 pl-0 md:pl-4"
      >
        <div
          className="bg-[#191921] md:relative pl-4 md:pl-28 p-28 lg:p-40 z-10 left-10 
        md:w-[390px] md:h-[352px] lg:w-[735px] lg:h-[350px]"
        >
          <h2 className="text-white font-extrabold text-3xl lg:text-6xl text-start">
            Brand naming & guidelines
          </h2>
          <div className="my-10 flex items-center gap-4 cursor-pointer">
            <img src={arrowLeft} alt="" />
            <img src={arrowRight} alt="" />
          </div>
        </div>
        <div className="relative">
          <img src={slideOne} alt="" className="hidden lg:block" />
          <img
            src={slideOneTablet}
            alt=""
            className="hidden md:block lg:hidden"
          />
          <img src={slideOneMobile} alt="" className="md:hidden" />
          <div className="text-end text-white absolute z-10 bottom-10 right-[3rem]">
            <h2 className="text-xl font-extrabold">Lean Product Roadmap</h2>
            <p className="text-lg">2019 Project</p>
          </div>
        </div>
      </section>

      <section
        className="max-w-[1110px] mx-auto my-10 flex flex-col md:flex-row items-start 
      md:items-center gap-4 md:gap-0 justify-between p-4 lg:p-0"
      >
        <h2 className="text-3xl lg:text-6xl font-extrabold lg:w-[40rem] text-start">
          Let’s build something great together.
        </h2>
        <button className="bg-[#f94f4f] text-white py-3 px-8 font-extrabold hover:opacity-50">
          Schedule a Call
        </button>
      </section>
    </>
  );
}

export default App;
