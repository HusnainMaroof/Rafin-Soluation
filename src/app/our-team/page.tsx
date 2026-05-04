import { Footer } from "@/src/components/Footer";
import { Navbar } from "@/src/components/Navbar";
import OurTeam from "@/src/components/Ourteam";
import React from "react";

const page = () => {
  return (
    <div>
      <Navbar />
      <OurTeam />
      <Footer />
    </div>
  );
};

export default page;
