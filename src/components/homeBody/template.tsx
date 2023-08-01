import { mentor } from "@/component/assets/images";
import Image from "next/image";
import React from "react";
import style from './template.module.css';

interface TemplateProps {
  data: {
    description: string;
    points: {
      text: string;
      title: string;
    }[];
  }[];
  title: string;
  description: string;
}

export const Template: React.FC<TemplateProps> = ({
  title,
  description,
  data,
}) => {
  return (
    <div className={`${title.includes("Community")?style.container2:style.container} w-11/12 mx-auto h-full flex flex-col items-center`}>
      <h1 className="font-bold text-color-primary mb-4 text-center">{title}</h1>
      <div className="bg-secondary-color text-color-primary border border-gray-300 shadow-md p-4 mx-[1.8975rem]">
        {description}
      </div>
      {title !== "C4GT Community Program" ? (
        <div className="flex w-11/12  mt-9 mx-auto justify-center items-center">
          <Image src={mentor} alt="mentor icon" width={57} height={40} />
          <h2 className="text-center font-bold text-color-primary">
            Why should you apply to the Mentoring Program ?
          </h2>
        </div>
      ) : null}
      <div className="flex mt-2 mx-0 md:mx-2 md:mt-3 flex-col md:flex-row">
        {data.map((item, index) => {
          return (
            <div key={index} className="w-full md:w-1/2 p-4">
              {item.description === "" ? null : (
                <h2 className="font-bold mb-4 text-center text-color-primary">
                  {item.description}
                </h2>
              )}
              <ul className="bg-primary-color border  w-full rounded-md border-gray-300 h-full shadow-lg p-4 flex justify-center flex-col">
                {item.points.map((point, index) => {
                  return (
                    <li key={index} className="items-center mt-2">
                      <div className="flex item-center">
                        <div>
                          <svg
                            className="w-6 md:w-10 text-white h-6 md:h-10 "
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <div className="ml-2">
                          <h4 className="font-bold xs:text-md sm:text-xl text-color-secondary">
                            {point.title}
                          </h4>
                          <p className="text-white xs:text-sm sm:text-lg font-regular">
                            {point.text}
                          </p>
                        </div>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
};
