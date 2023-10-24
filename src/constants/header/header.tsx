import React from "react";
import styles from "./header.module.css";
import Image, { StaticImageData } from "next/image";
import { githubIcon, codeImage } from "@/component/assets/images";

interface HeaderProps{
  content:{
    title:string,
    description:string,
    spanText?:string,
    pageLink?:string,
    image:StaticImageData,
  }
}

export const Header:React.FC<HeaderProps> = ({content}) => {
  return (
    <div
      className={`${styles.container} w-full lg:w-11/12 mx-auto mt-5`}
    >
      <div className="flex flex-col-reverse sm:flex-row text-slate-100 lg:rounded-md overflow-hidden">
        <div className="bg-primary-color flex items-center justify-center w-full lg:w-1/2">
          <div className="text-white p-10 sm:p-6 md:p-8 items-center">
          <h1 className="font-bold text-4xl leading-tight mb-3 md:text-5xl">{content.title}</h1>
          <p className="font-regular text-lg leading-relaxed mb-4 xl:text-xl">
            {content.description}
          </p>
          
          {
            content.spanText ? <p className="font-regular text-base leading-relaxed mb-4 xl:text-xl">{content.spanText}</p> : <></>
          }

          {
            content.pageLink ? <a
            href={content.pageLink}
            className="bg-rose-900 w-[220px] h-[64px] text-white hover:text-gray-200 font-medium hover:bg-green-700 py-2 px-4 rounded-lg shadow transition duration-300 flex items-center xl:w-[250px]"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none" }}
          >
            <Image className="mr-4" width={30} height={30} src={githubIcon} alt='github-icon' />
            <span className="xl:text-xl">Explore Here</span>
            <svg
              aria-hidden="true"
              className="w-4 h-4 ml-2 -mr-1 xl:w-6 xl:h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </a> : <></>
          }
          </div>
        </div>
        <div className="w-full flex-shrink lg:w-1/2 relative">
          <Image
            className="w-full h-full object-cover"
            src={content.image}
            alt="Open Source Project Community"
          />
        </div>
      </div>
    </div>
  );
};
