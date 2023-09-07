"use client";
import { getCert } from "@/component/api";
import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { useParams } from "next/navigation";
import GraduationHat from "@/component/components/GraduationHat";

const Confetti = dynamic(() => import("react-confetti"), {
  ssr: false,
});

const C4gt23 = () => {
  const [url, setUrl] = useState();
  const params = useParams();
  const [hats, setHats] = useState([]);
  const [showConfetti, setShowConfetti] = useState(true);

  const generateRandomHat = () => {
    return {
      left: Math.random() * window.innerWidth,
      top: -50,
      animationDuration: `${3 + Math.random()}s`, // Vary animation speed
      rotation: Math.random() * 80,
    };
  };

  useEffect(() => {
    // Create a fixed number of hats initially
    const initialHats = [];
    for (let i = 0; i < 5; i++) {
      // Change the number to your desired initial count
      initialHats.push(generateRandomHat());
    }
    setHats(initialHats);

    // Create a new hat every few seconds
    const hatInterval = setInterval(() => {
      const newHat = generateRandomHat();
      setHats((prevHats) => [...prevHats, newHat]);
    }, 2000); // Change the interval (in milliseconds) to your desired time

    const confettiTimeout = setTimeout(() => {
      setShowConfetti(false);
    }, 15000); // 10 seconds

    return () => {
      clearInterval(hatInterval);
      clearTimeout(confettiTimeout); // Clear the timeout when the component unmounts
    };
  }, []);

  useEffect(() => {
    const getCertificate = async () => {
      const res = await getCert(params?.slug);
      // @ts-ignore
      setUrl(res?.data);
      console.log(res?.data);
    };
    getCertificate();
  }, []);
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
  return url ? (
    <div className="h-screen bg-cap">
      {showConfetti && (
        <>
          {hats.map((hat, index) => (
            <GraduationHat
              key={index}
              style={{
                left: `${hat.left}px`,
                top: `${hat.top}px`,
                animationDuration: hat.animationDuration,
              }}
              rotation={hat.rotation}
            />
          ))}
          {isClient && (
            <Confetti
              width={dimensions.width}
              height={dimensions.height}
              numberOfPieces={600}
              colors={["#d4af37"]}
            />
          )}
        </>
      )}

      <iframe
        src={
          url
            ? url
            : "https://verify.codeforgovtech.in/inauguration/verify/did:C4GT:ad889eaf-3e7a-4203-9b34-25c5b81258a4"
        }
        width="100%"
        height="100%"
      />
    </div>
  ) : (
    <div className="container flex justify-center items-center flex-col min-h-screen">
      <img src="/C4GT.png" width={400} />
      <h1 className="text-center text-[30px] mt-4 font-bold text-[#294294] tracking-wide	leading-10">
        All the inaugurators have not approved the launch of Code for Govtech
        2023 yet. <br /> If you are one of the inaugurators, kindly check your
        mail to approve.
      </h1>
    </div>
  );
};

export default C4gt23;