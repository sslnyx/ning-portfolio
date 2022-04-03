import React from "react";
import LogoN from "../../components/SiteNav/LogoN";
import SideMenu from "../../components/SideMenu";
import DownArrow from "../../components/DownArrow";
import { HashLink } from "react-router-hash-link";

const HeroSection = () => {
  return (
    <section className="flex flex-col justify-center items-center min-h-[600px] h-[600px] md:h-screen py-[150px]">
      <div className="container relative flex flex-col flex-1 md:flex-grow-0 md:h-auto">
        <SideMenu className="hidden -top-[16px] absolute md:flex flex-col items-end right-[22px]" />

        <p className="text-2xl text-darkred mb-[20px]">Hi, my name is</p>
        <h1 className="font-[500] text-[40px] leading-[40px] -ml-[2px] lg:text-[100px] lg:leading-[90px] md:-ml-[10px] mb-[50px] uppercase mb-[20px]">
          Ning Yu, Luo.
          <br />I build things
          <br />
          for the web.
        </h1>

        <div className="flex mb-[50px]">
          <p className="text-xl -mr-[8px] max-w-[500px]">
            I'm a software developer in building beautiful interfaces &amp;
            experiences.
          </p>
        </div>

        <div className="flex-1 md:hidden"></div>

        <div className="flex justify-between md:justify-center items-end">
          <SideMenu className="md:hidden flex flex-col" />

          <HashLink smooth to="/#projects">
            <DownArrow />
          </HashLink>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
