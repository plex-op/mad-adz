import React from "react";
import DropdownBanner from "../../components/services/DropdownBanner";
import ContentCreate from "../../components/ContentCreation/ContentCreate";
import TechStack from "../../components/ContentCreation/TechStack";

const ContentCreation = () => {
  return (
    <div>
      <DropdownBanner
        imageSrc="/img/webdevin.png"
        heading="Transforming Ideas into Digital Solutions"
        description="At MADADZ, we specialize in transforming your ideas into innovative digital solutions that drive results..."
        buttonText="Start Your Journey"
      />
      <ContentCreate />
      <TechStack />
    </div>
  );
};

export default ContentCreation;
