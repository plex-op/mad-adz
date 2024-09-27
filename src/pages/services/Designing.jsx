import React from "react";
import DropdownBanner from "../../components/services/DropdownBanner";
import DesignCard from "../../components/design/DesignCard";
import DesignContent from "../../components/design/DesignContent";
import TechStack from "../../components/design/TechStack";

const Designing = () => {
  return (
    <div>
      <DropdownBanner
        imageSrc="/img/webdevin.png"
        heading="Transforming Ideas into Digital Solutions"
        description="At MADADZ, we specialize in transforming your ideas into innovative digital solutions that drive results..."
        buttonText="Start Your Journey"
      />
      <DesignContent />
      <DesignCard />
      <TechStack />
    </div>
  );
};

export default Designing;
