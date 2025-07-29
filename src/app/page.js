import React from "react";
import Banner from "@/components/homePageComponents/Banner";
import Services from "@/components/homePageComponents/Services";
import TransformingBusinesses from "@/components/homePageComponents/TransformingBusinesses";
import SpotlightOnASND from "@/components/homePageComponents/SpotlightonASND";
const page = () => {
  return (
    <main>
      <Banner />
      <Services />
      <TransformingBusinesses />
      <SpotlightOnASND />
    </main>
  );
};

export default page; 
