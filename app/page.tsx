import React from "react";
import Home from "@/components/Home/Home";

import Services from "@/components/Home/Service/Service";
import ResumeSection from "@/components/Home/Resume/ResumeSection";


const HomePage = () => {
  return (
    <main>
      <Home />
      
      <Services />
      <ResumeSection />
    </main>
  );
};

export default HomePage;
