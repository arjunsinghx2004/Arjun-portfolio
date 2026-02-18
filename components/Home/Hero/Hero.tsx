"use client";
import Image from "next/image";
import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { TypeAnimation } from "react-type-animation";
import ParticleBackground from "./ParticleBackground"; // ✅ Correct name match


const Hero = () => {
  return (
    <div className="relative h-screen flex items-center justify-center text-white overflow-hidden flex-col">
      <ParticleBackground /> {/* ✅ match export name */}

      <div className="relative z-10 flex flex-col items-center">
        <Image
          src="/images/images.jpg"
          alt="heroimage"
          width={150}
          height={150}
          className="rounded-full border-8 border-[#0c0c48aa]"
        />
        <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl mt-6 text-center font-bold tracking-wide">
          creating web products,
          <br />
          brands,
          <span className="text-cyan-200"> and experiences. </span>
        </h1>
        <h2 className="mt-5 text-sm px-2 text-center sm:text-2xl font-medium flex items-center">
          Hi! I'm Arjun Singh - A passionate{" "}
          <span className="text-cyan-200 font-bold ml-2">
            <TypeAnimation
              sequence={[
                "Frontend Developer",
                2000,
                "Backend Developer",
                2000,
                "Full Stack Engineer",
                2000,
                "Tech Enthusiast",
                2000,
              ]}
              speed={50}
              repeat={Infinity}
            />
          </span>
        </h2>
        <button className="mt-6 px-10 py-4 bg-blue-800 hover:bg-blue-900 transition-all duration-300 cursor-pointer rounded-full text-lg font-medium flex items-center gap-2">
          <span>See my work</span>
          <BsArrowRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default Hero;
