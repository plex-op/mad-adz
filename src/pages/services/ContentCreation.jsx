import React from "react";
import DropdownBanner from "../../components/services/DropdownBanner";
import ContentCreate from "../../components/ContentCreation/ContentCreate";
import TechStack from "../../components/ContentCreation/TechStack";
import BackToTop from "../../components/BackToTop";
import WhatsAppButton from "../../components/WhatsAppButton";

const ContentCreation = () => {
  return (
    <div>
      <DropdownBanner
        imageSrc="/img/dropdownsev/contentcreation.png"
        heading="Transforming Ideas into Impactful Video Content"
        description="At MADADZ, we specialize in transforming your creative ideas into innovative digital solutions that deliver measurable results. Our dedicated team excels in content creation, focusing on high-quality video production and editing specifically designed for social media platforms.
        We understand the importance of captivating visuals and compelling storytelling in today’s digital landscape. Our services help businesses enhance their online presence, engage their target audience, and boost brand visibility. Whether you need eye-catching promotional videos, engaging social media content, or professional video editing, we are here to elevate your brand's digital strategy.
        Partner with MADADZ to create impactful content that resonates with your audience and drives growth. Contact us today to start transforming your ideas into effective digital solutions!"
        buttonText="Start Your Journey"
      />
      <ContentCreate />
      <TechStack />
      <WhatsAppButton />
      <BackToTop />
    </div>
  );
};

export default ContentCreation;
