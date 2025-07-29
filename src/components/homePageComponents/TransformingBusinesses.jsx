import React from "react";
import Image from "next/image";
import Cab from "@/assets/cab.svg";
import evbus from "@/assets/evbus.svg";
import Container from "../Container/Container";
const businesses = [
  {
    tag: "WTicabs",
    title: "Transforming Cab Rentals Digitally",
    desc: "We digitized WTi’s operations, simplifying cab booking and streamlining 1000+ drivers with 3000+ vehicles.",
    image: Cab.src,
  },
  {
    tag: "Aaveg",
    title: "Smart EV Shuttle Solutions",
    desc: "Built for enterprises to manage employee transport with ease, transparency, and real-time insights.",
    image: evbus.src,
  },
];

const TransformingBusinesses = () => {
  return (
    <Container>
      <div className="md:pt-0 md:px-0 px-[16px] pt-[20px] max-w-7xl mx-auto">
        <h2 className="text-2xl font-semibold mb-6">Transforming Businesses</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {businesses.map((item, index) => (
            <div
              key={index}
              className="bg-[#f5f5f5] rounded-xl p-6 shadow-sm flex flex-col justify-between"
            >
              <div>
                <p className="text-blue-600 font-semibold mb-2">{item.tag}</p>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-gray-700 mb-4">{item.desc}</p>
                <button className="bg-black text-white px-4 py-2 rounded-md text-sm cursor-pointer hover:bg-[#0b49f5]">
                  Learn More
                </button>
              </div>
              <div className="mt-4">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={500}
                  height={300}
                  className="rounded-md object-cover w-full h-48"
                />
              </div>
            </div>
          ))}
        </div>
        <button className="border border-[#C6C6C6] mt-[36px] cursor-pointer mx-auto block rounded-[12px] p-[8px_28px] hover:text-[#0b49f5] hover:border-[#0b49f5]">
          View all
        </button>
      </div>
    </Container>
  );
};

export default TransformingBusinesses;
