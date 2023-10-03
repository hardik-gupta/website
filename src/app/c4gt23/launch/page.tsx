"use client";
import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import GraduationHat from "../../../assets/images/graduationCap.svg";

const Confetti = dynamic(() => import("react-confetti"), {
  ssr: false,
});

const C4GT23 = () => {
  const [dimensions, setDimensions] = useState({
    width: 0,
    height: 0,
  });
  const [isClient, setClient] = useState(false);
  useEffect(() => {
    const { innerWidth: width, innerHeight: height } = window;
    setDimensions({
      width,
      height,
    });
    setClient(true);
  }, []);
  return (
    <div className="graduation-hat">
      <div className="h-screen">
        {isClient && (
          <Confetti
            width={dimensions.width}
            height={dimensions.height}
            numberOfPieces={1200}
          />
        )}
        <iframe
          src={
            "https://verify.codeforgovtech.in/inauguration/verify/did:C4GT:ad889eaf-3e7a-4203-9b34-25c5b81258a4"
          }
          width="100%"
          height="100%"
        />
      </div>
    </div>
  );
};

export default C4GT23;
