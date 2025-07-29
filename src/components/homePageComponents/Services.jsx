"use client";
import React from "react";
import Container from "../Container/Container";
import Image from "next/image";
import Website_Development from "@/assets/Website_Development.png";
import Mobile_App_Development from "@/assets/Mobile_App_Development.png";
import Business_Intelligence from "@/assets/Business_Intelligence.png";
import Data_Science from "@/assets/Data_Science.png";
import ArrowRightWhite from "@/assets/arrow-right-white.png"; 

const Services = () => {
  const services = [
    {
      title: "Website Development",
      image: Website_Development.src,
    },
    {
      title: "Mobile App Development",
      image: Mobile_App_Development.src,
    },
    {
      title: "Business Intelligence",
      image: Business_Intelligence.src,
    },
    {
      title: "Data Science",
      image: Data_Science.src,
    },
  ];

  return (
    <div className="md:py-[60px] md:px-0 px-[16px] py-[40px]">
      <Container>
        <div>
          <h2 className="text-[#0B49F5] text-[24px] leading-[24px] font-semibold mb-[24px]">
            Services
          </h2>
          <p className="md:text-[32px] text-[22px] leading-[26px] md:leading-[36px] font-semibold">
            Transform your business with advance technologies
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-[24px]">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative group rounded-lg overflow-hidden shadow-lg cursor-pointer"
            >
              <Image
                src={service.image}
                alt={service.title}
                width={500}
                height={300}
                className="object-cover w-full md:h-48 h-[100%]"
              />

              <div className="absolute bottom-0 w-full px-[15px] py-[15px] text-white font-medium text-[18px] flex justify-between items-center transition-all duration-300 
                  bg-gradient-to-t from-black via-transparent to-transparent 
                  group-hover:bg-[linear-gradient(to_top,rgba(0,68,255,0.85),rgba(0,68,255,0.5)_50%,transparent)]">
                
                <div>
                  <h3 className="font-semibold text-[18px] leading-[20px]">
                    {service.title.split(" ")[0]}
                    <br />
                    <span className="font-semibold">
                      {service.title.split(" ").slice(1).join(" ")}
                    </span>
                  </h3>
                </div>

                <Image
                  src={ArrowRightWhite}
                  alt="Arrow"
                  width={20}
                  height={20}
                  className="transition-transform duration-300"
                />
              </div>
            </div>
          ))}
        </div>

        <button className="border border-[#C6C6C6] mt-[36px] cursor-pointer mx-auto block rounded-[12px] p-[8px_28px] hover:text-[#0b49f5] hover:border-[#0b49f5]">
          View all
        </button>
      </Container>
    </div>
  );
};

export default Services;
