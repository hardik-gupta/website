import React from "react";
import Image from 'next/image'
import img1 from "@/component/assets/images/DPGimages/Sunbird_logo.webp"
import img2 from "@/component/assets/images/DPGimages/DIVOC_logo.webp"
import img3 from "@/component/assets/images/DPGimages/DIGIT_logo.webp"
import img4 from "@/component/assets/images/DPGimages/DigiLocker_logo.webp"

function Content() {
  return (
    <div className="px-5">
      <div className="grid sm:grid-cols-2 pt-14 flex justify-center text-black">
        <div className="p-0">
          <div className="bg-sky-100 py-16 xl:pl-28 lg:pl-20 md:pl-14 sm:pl-10 pr-8  xl:h-[685px] lg:h-[815px] md:h-[900px] sm:h-[775px]">
            <div className="sm:px-0 pl-8">  
              <Image 
                src={img1}
                alt="DPG img1"
                className="lg:w-[290px] lg:h-[100px] w-[200px] h-[60px]"
              />
              <p className="md:pt-10 pt-6 md:text-base text-sm xl:w-[376px] lg:w-[280px] md:w-[230px] sm:w-[200px]">
                Sunbird is a set of configurable, extendable, modular building
                blocks for learning and human development designed for scale and
                open sourced under MIT license. It is designed to support multiple
                languages and multiple teaching and learning solutions by
                providing the building blocks for the development of platforms and
                learning solutions to suit various use cases, contexts and needs.
                Sunbird has been developed by EkStep Foundation to fulfill its
                education mission to enhance access to learning opportunities at
                scale for millions of learners particularly in the K-12 space.
                Sunbird building blocks are being used in diverse areas such as
                education, health, lifelong learning, among others. Read more
                about Sunbird&nbsp;
                <a className="text-inherit" href="">here.</a>
              </p>
            </div>
          </div>
          <div className="bg-red-100 py-20 xl:pl-28 lg:pl-20 md:pl-14 sm:pl-10 pr-8 xl:h-[655px] lg:h-[815px] md:h-[900px] sm:h-[775px]">
            <div className="sm:px-0 pl-8">  
              <Image
                    src={img3}
                    alt="DPG img3"
                    className="lg:w-[290px] lg:h-[80px] w-[200px] h-[50px]"
                  />
              <p className="md:pt-10 pt-6 md:text-base text-sm xl:w-[376px] lg:w-[280px] md:w-[230px] sm:w-[200px]">
                DIGIT is a platform which is open source and open API powered for
                developers, enterprises and citizens to build new applications and
                solutions. The ready-to-use platform helps achieve quicker
                implementation timeframes and helps local governments achieve
                process improvements, accountability and transparency at various
                levels of administration. DIGIT is a manifestation of Societal
                Platform thinking, a systemic method to resolve complex societal
                challenges with speed, at scale, and sustainably (Societal
                Platform is an initiative of EkStep Foundation). DIGIT has been
                developed by the eGov Foundation. Read more about DIGIT&nbsp;
                <a className="text-inherit" href="">here.</a>
              </p>
            </div>
          </div>
        </div>
        <div className="">
          <div className="sm:bg-red-100 bg-sky-100 py-20 xl:pl-28 lg:pl-20 md:pl-14 sm:pl-10 pr-8 xl:h-[685px] lg:h-[815px] md:h-[900px] sm:h-[775px]">
            <div className="sm:px-0 pl-8">  
              <Image
                src={img2}
                alt="DPG img2"
                className="lg:w-[240px] lg:h-[80px] w-[200px] h-[60px]"
              />
              <p className="md:pt-10 pt-6 md:text-base text-sm xl:w-[376px] lg:w-[280px] md:w-[230px] sm:w-[200px]">
                DIVOC stands for Digital Infrastructure for Verifiable Open
                Credentialing. DIVOC is a DPGA (Digital Public Goods Alliance)
                listed public good that enables countries to digitally orchestrate
                large scale vaccination and public health programs using open
                source digital infrastructure. It is recognised by 96+ countries
                globally and used by over one-fifth of the world’s population. It
                is built on top of the generalized electronic registry and
                credentialing framework of OpenSABER project under Sunbird RC
                Registry and Credentialing. DIVOC is an open source project under
                the MIT License, created in India by the eGov Foundation. Read
                more about DIVOC&nbsp;
                <a className="text-inherit" href="https://divoc.egov.org.in/">here.</a>
              </p>
            </div>
          </div>
          <div className="sm:bg-sky-100 bg-red-100 py-20 xl:pl-28 lg:pl-20 md:pl-14 sm:pl-10 pr-8 xl:h-[655px] lg:h-[815px] md:h-[900px] sm:h-[775px]">
            <div className="sm:px-0 pl-8">  
              <Image
                src={img4}
                alt="DPG img4"
                className="lg:w-[320px] lg:h-[80px] w-[200px] h-[50px]"
              />
              <p className="md:pt-10 pt-6 md:text-base text-sm xl:w-[376px] lg:w-[280px] md:w-[230px] sm:w-[200px]">
                DigiLocker is a flagship initiative of Ministry of Electronics &
                IT (MeitY), Government of India under Digital India programme.
                DigiLocker empowers citizens by providing access to authentic
                digital documents to citizen’s digital document wallet. The issued
                documents in DigiLocker system are deemed to be at par with
                original physical documents. They can be accessed by Citizens
                anytime, anywhere. It facilitates faster delivery of government
                schemes and services. It enables paperless governance and reduces
                the administrative overhead by minimizing the use of paper and
                curtailing the verification process. Read more about
                DigiLocker&nbsp;
                <a className="text-inherit" href="">here.</a>
              </p>
            </div> 
          </div>
        </div>
      </div>
    </div>
  );
}

export default Content;
