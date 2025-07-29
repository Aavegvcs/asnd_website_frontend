"use client";
import React from "react";
import { ChevronRight, ChevronLeft } from "lucide-react";
import Container from "../Container/Container";
import SpotlightonASND1 from "@/assets/spotlight1.png";
import SpotlightonASND2 from "@/assets/spotlight2.png";
import SpotlightonASND3 from "@/assets/spotlight3.png";
import SpotlightonASND4 from "@/assets/spotlight4.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import { useRef } from "react";

const spotlightItems = [
  {
    image: SpotlightonASND1.src,
    title: "Stay up-to-date with the latest ASND...",
  },
  {
    image: SpotlightonASND2.src,
    title: "Stay up-to-date with the latest ASND...",
  },
  {
    image: SpotlightonASND3.src,
    title: "Stay up-to-date with the latest ASND...",
    highlight: true,
  },
  {
    image: SpotlightonASND4.src,
    title: "Stay up-to-date with the latest ASND...",
  },
  {
    image: SpotlightonASND1.src,
    title: "Stay up-to-date with the latest ASND...",
  },
  {
    image: SpotlightonASND2.src,
    title: "Stay up-to-date with the latest ASND...",
  },
];

const SpotlightOnASND = () => {
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);

  return (
    <div className="bg-[#02030d] text-white py-[60px] px-[16px] md:px-0 md:mt-[60px] mt-[40px] overflow-hidden">
      <Container>
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-semibold mb-6">Spotlight on ASND</h2>

          <div className="relative">
            <div
              ref={navigationPrevRef}
              className="flex absolute left-[-10px] top-1/2 z-10 -translate-y-1/2 cursor-pointer bg-[#1144DF] p-2 rounded-full shadow-md hover:opacity-[0.8]"
            >
              <ChevronLeft className="text-[#fff] w-6 h-6" />
            </div>
            <div
              ref={navigationNextRef}
              className="flex absolute right-[-10px] top-1/2 z-10 -translate-y-1/2 cursor-pointer bg-[#1144DF] p-2 rounded-full shadow-md hover:opacity-[0.8]"
            >
              <ChevronRight className="text-[#fff] w-6 h-6" />
            </div>

            <Swiper
              modules={[Autoplay, Navigation]}
              spaceBetween={20}
              slidesPerView={1.2}
              loop={true}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              navigation={{
                prevEl: navigationPrevRef.current,
                nextEl: navigationNextRef.current,
              }}
              onBeforeInit={(swiper) => {
                swiper.params.navigation.prevEl = navigationPrevRef.current;
                swiper.params.navigation.nextEl = navigationNextRef.current;
              }}
              breakpoints={{
                640: { slidesPerView: 2 },
                768: { slidesPerView: 3 },
                1024: { slidesPerView: 4 },
                1280: { slidesPerView: 4.5 },
              }}
            >
              {spotlightItems.map((item, index) => (
                <SwiperSlide key={index}>
                  <div className="rounded-xl overflow-hidden shadow-md relative h-full cursor-pointer group border-[#757575] border-2 hover:border-[#1144DF] transition-all duration-300">
                    <img
                      src={item.image}
                      alt={`Spotlight ${index}`}
                      className="object-cover h-[286px] w-full"
                    />

                    <div
                      className={`absolute top-3 left-3 px-2 py-1 rounded-[12px] text-xs font-medium text-white group-hover:bg-gradient-to-r group-hover:from-[#1144DF] group-hover:to-[#6A11FC] group-hover:text-white transition-all duration-300`}
                    >
                      Newsletter
                    </div>
                    <div
                      className={`absolute bottom-0 w-full h-[30%] p-4 flex items-end transition-all duration-300 
  bg-gradient-to-t from-black/80 via-black/40 to-transparent 
  group-hover:bg-[linear-gradient(to_top,rgba(17,68,223,0.95),rgba(17,68,223,0.6)_80%,transparent)] 
  group-hover:shadow-[0_12px_24px_rgba(17,68,223,0.8),0_6px_12px_rgba(17,68,223,0.5)]`}
                    >
                      <p>
                        {item.title}{" "}
                        <span className="text-blue font-medium underline">
                          Read More
                        </span>
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <button className="border border-[#C6C6C6] mt-[36px] cursor-pointer mx-auto block rounded-[12px] p-[8px_28px] hover:text-[#0b49f5] hover:border-[#0b49f5]">
            View all
          </button>
        </div>
      </Container>
    </div>
  );
};

export default SpotlightOnASND;
