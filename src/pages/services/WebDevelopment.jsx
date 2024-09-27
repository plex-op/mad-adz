import React from "react";
import DropdownBanner from "../../components/services/DropdownBanner";
import ServiceSection from "../../components/services/ServicesSection";
import TechStack from "../../components/services/TechStack";

const WebDevelopment = () => {
  return (
    <div>
      <DropdownBanner
        imageSrc="/img/webdevin.png"
        heading="Transforming Ideas into Digital Solutions"
        description="At MADADZ, we specialize in transforming your ideas into innovative digital solutions that drive results..."
        buttonText="Start Your Journey"
      />
      <ServiceSection />
      <TechStack />
    </div>
  );
};

export default WebDevelopment;
