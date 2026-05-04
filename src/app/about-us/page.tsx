import AboutUs from "@/src/components/AboutUs";
import { Footer } from "@/src/components/Footer";
import { Navbar } from "@/src/components/Navbar";
import React from "react";

const page = () => {
  return (
    <div>
      <Navbar />
      <AboutUs />
      <Footer />
    </div>
  );
};

export default page;
