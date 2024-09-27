import React from "react";
import DropdownBanner from "../../components/services/DropdownBanner";
import DigitalMarket from "../../components/digitalmarketing/DigitalMarket";
import DigitalCard from "../../components/digitalmarketing/DigitalCard";

const Branding = () => {
  return (
    <div>
      <DropdownBanner
        imageSrc="/img/webdevin.png"
        heading="Transforming Ideas into Digital Solutions"
        description="At MADADZ, we specialize in transforming your ideas into innovative digital solutions that drive results..."
        buttonText="Start Your Journey"
      />
      <DigitalMarket />
      <DigitalCard />
    </div>
  );
};

export default Branding;
