import React from "react";
import Image from 'next/image'
import info_img from "@/component/assets/images/DPGimages/DPG_info_right_side.webp"

function Info() {
  return (
    <div className="lg:px-10">
      <div className="flex flex-col-reverse sm:flex-row">
        <div className="bg-primary-color flex justify-center items-center sm:w-1/2">
          <div className="text-white p-10 items-center">
              <h2 className="xl:text-6xl lg:text-5xl md:text-4xl font-bold leading-tight">
                What are Digital Public Goods?
              </h2>
              <p className="md:pt-10 pt-6 md:text-base text-sm ">
                The Digital Public Goods Alliance defines digital public goods
                (DPGs) as open-source software, open data, open AI models, open
                standards and open content that adhere to privacy and other
                applicable laws and best practices, do no harm by design, and help
                attain sustainable Development Goals. To know more about DPGs,
                click&nbsp;
                <a className="text-inherit" href="https://digitalpublicgoods.net/">here.</a>
                <br />
                <br />​ India is making great strides in building population-scale
                DPGs. Our experience with DPGs in education, governance identity
                authentication, health, through Sunbird, Digit, DigiLocker and
                Divoc are indicative of the huge potential for impact this
                approach holds.
              </p>
            
          </div>
        </div>
        <div className="w-full  flex-shrink sm:w-1/2  relative">
          <Image
            className="w-full h-full object-cover"
            src={info_img}
            alt="Image on the Right Side"
          />
        </div>
      </div>
    </div>
  );
}

export default Info;
