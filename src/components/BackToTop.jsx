import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

const BackToTop = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 300) {
        setShow(true);
      } else {
        setShow(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {show && (
        <div
          onClick={scrollToTop}
          style={styles.backToTopButton}
          aria-label="Back to top"
        >
          <FaArrowUp size={20} />
        </div>
      )}
    </>
  );
};

const styles = {
  backToTopButton: {
    position: "fixed",
    bottom: "100px", // Place it higher to avoid overlap with WhatsApp
    right: "30px", // Same side as WhatsApp, but further up
    width: "50px",
    height: "50px",
    backgroundColor: "#870be7", // Custom color
    color: "#fff",
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
    zIndex: 999, // Ensure it's behind WhatsApp button
    transition: "opacity 0.3s ease",
  },
};

export default BackToTop;
