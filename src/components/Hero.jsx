import profileImage from '../assets/image/Nayeem-hossain.png'
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaFacebook,
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
} from "react-icons/fa";

import { SiTailwindcss, SiBootstrap } from "react-icons/si";

const Hero = () => {
  return (
    <>
      <div id='hero' className="max-w-[1200px] mx-auto px-5 pt-2 min-h-screen flex flex-col-reverse lg:flex-row items-center justify-between gap-10">

        {/* Left Side */}
        <div className="w-full lg:w-[60%] text-center lg:text-left">

          <h1 className="text-4xl md:text-5xl font-bold mb-2">
            Hi, I'm <span className="text-[#C132FB]">Nayeem Hossain</span>
          </h1>

          <h2 className="text-xl md:text-2xl text-[#cd86e9]">
            Frontend Developer | React Developer
          </h2>

          <p className="mt-4 max-w-[600px] mx-auto lg:mx-0 text-gray-300 leading-7">
            I build modern, responsive and user-friendly web applications using React, JavaScript and Tailwind CSS.
          </p>

          {/* Skills */}
          <div className="mt-8">
            <h2 className="text-xl font-semibold">Skills</h2>

            <div className="flex flex-wrap gap-3 mt-4 justify-center lg:justify-start">

              <span className="px-4 py-2 bg-white/10 rounded-full inline-flex items-center gap-2">
                <FaHtml5 /> HTML5
              </span>

              <span className="px-4 py-2 bg-white/10 rounded-full inline-flex items-center gap-2">
                <FaCss3 /> CSS3
              </span>

              <span className="px-4 py-2 bg-white/10 rounded-full inline-flex items-center gap-2">
                <FaJs /> JavaScript
              </span>

              <span className="px-4 py-2 bg-white/10 rounded-full inline-flex items-center gap-2">
                <FaReact /> React
              </span>

              <span className="px-4 py-2 bg-white/10 rounded-full inline-flex items-center gap-2">
                <SiTailwindcss /> Tailwind
              </span>

              <span className="px-4 py-2 bg-white/10 rounded-full inline-flex items-center gap-2">
                <SiBootstrap /> Bootstrap
              </span>

            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center lg:justify-start">

            <button className="bg-[#C132FB] hover:bg-[#a91fe0] px-6 py-4 rounded-2xl transition cursor-pointer">
              Hire Me
            </button>

            <button className="border border-[#C132FB] text-[#C132FB] hover:bg-[#C132FB] hover:text-white px-6 py-4 rounded-2xl transition cursor-pointer">
              Download CV
            </button>

          </div>

          {/* Social Icons */}
          <div className="flex gap-5 mt-8 justify-center lg:justify-start text-2xl">

            <FaGithub className="cursor-pointer hover:text-[#C132FB] hover:scale-110 transition" />
            <FaLinkedin className="cursor-pointer hover:text-[#C132FB] hover:scale-110 transition" />
            <FaInstagram className="cursor-pointer hover:text-[#C132FB] hover:scale-110 transition" />
            <FaFacebook className="cursor-pointer hover:text-[#C132FB] hover:scale-110 transition" />

          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-8 mt-8 justify-center lg:justify-start">

            <div>
              <h3 className="text-2xl font-bold text-[#C132FB]">10+</h3>
              <p>Projects</p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-[#C132FB]">1+</h3>
              <p>Years Learning</p>
            </div>

            <div className="inline-flex items-center gap-2 bg-green-500/10 text-green-400 px-5 py-3 rounded-full">
              <span className="w-3 h-3 bg-green-400 rounded-full"></span>
              Available for Work
            </div>

          </div>

        </div>

        {/* Right Side */}
        <div className="w-full lg:w-[40%] flex justify-center">

          <div className="relative w-[280px] h-[280px] md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px]">

            <div className="absolute inset-0 rounded-full bg-[#C132FB] blur-[100px] opacity-25"></div>

            <img
              src={profileImage}
              alt="Nayeem"
              className="relative w-full h-full object-contain border-2 border-[#C132FB]/20 rounded-full"
            />

          </div>

        </div>

      </div>

      {/* Location */}
      <div className="flex justify-center">
        <p className="text-gray-400 px-6 py-3 mt-6 bg-green-500/10 rounded-full text-center">
          📍 Bangladesh
        </p>
      </div>

      {/* Scroll */}
      <p className="animate-bounce text-center mt-10">
        ↓ Scroll Down
      </p>
    </>
  );
};

export default Hero;