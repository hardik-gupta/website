import React from "react";
import Image from "next/image";
import { c4gtImage, oniImage, dgpImage } from "@/component/assets/images";

export const HomeHeader = () => {
  return (
    <div className="w-full flex mt-4 mb-5  relative">
      <div className="  flex flex-col-reverse text-slate-100 items-center justify-center md:flex-row">
        <div className="bg-primary-color w-full lg:w-1/4  p-10 py-10">
          <h1 className="font-bold text-5xl leading-tight mb-3">
            Your code can impact millions
          </h1>
          <p className="font-regular text-lg leading-relaxed mb-4">
            Code for GovTech (C4GT) is a unique program aimed at creating
            India's first active open-source community of coders that can build
            and contribute to global{" "}
            <a
              className="text-white "
              href="https://www.codeforgovtech.in/digital-public-goods"
            >
              Digital Public Goods.
            </a>
          </p>
          <p className="font-regular text-base leading-relaxed mb-4">
            To ensure sustainable adoption of DPGs, building an open source
            community of vibrant young coders is key!
          </p>
          <p className="font-regular text-base leading-relaxed mb-4">
            If you want to use technology to create large scale impact, then
            this is the opportunity for you. Read ahead to know more!
          </p>
        </div>
        <div className="w-full  flex-shrink lg:w-1/2  relative ">
          <Image
            className="w-full h-full object-cover"
            src={c4gtImage}
            alt="c4gt Image"
          />
          <div className=" absolute xs:bottom-12 sm:bottom-20 md:bottom-16 lg:bottom-24 xs:right-2 sm:right-0  flex flex-col items-center ">
            <h6 className="text-color-primary font-bold">Knowledge Partner</h6>
            <div className="flex">
            <Image
              className="xs:w-16 xs:h-16 sm:w-28 sm:h-24"
              src={dgpImage}
              alt="c4gt Image"
              
            />
            <Image
              className="xs:w-16 xs:h-16 sm:w-24 sm:h-24"
              src={oniImage}
              alt="c4gt Image"
              
            />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
