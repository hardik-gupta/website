import { c4gt22Report } from "@/component/assets/images";
import Image from "next/image";

export const Hightlights = () => {
  return (
    <div className="mt-5 w-11/12 mx-auto my-8 h-full">
      <h1 className="font-bold text-center mb-4 text-color-primary">
        Highlights from C4GT 2022
      </h1>
      <div className="flex mx-4 sm:mx-5 flex-col md:flex-row">
        <div className="flex flex-col items-center  bg-primary-color p-4 sm:p-5 w-full md:w-1/3">
          <h2 className="font-bold text-white">Overview</h2>
          <div className="text-white sm:text-center text-4 font-regular mt-5 px-4 leading-relaxed">
            The first edition of C4GT was launched in May 2022, and it saw
            participation from 346 applicants out of which 13 were chosen. They
            successfully created 25+ features & wrote 100K lines of code across
            9 key projects.
          </div>
          <div className="flex mt-5 mb-4 justify-center items-center text-center mx-auto bg-tertiary-color p-3  cursor-pointer hover:bg-green-700  rounded-lg">
            <a
              className="font-medium text-white no-underline"
              href="https://www.codeforgovtech.in/2022highlights"
              target="_blank"
            >
              Know More
            </a>
            <svg
              aria-hidden="true"
              className="w-4 h-4 ml-2 -mr-1"
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
          </div>
        </div>
        <div className="bg-secondary-color flex flex-col items-center  p-4 sm:p-5 text-color-primary w-full md:w-1/3">
          <h2 className="font-bold ">C4GT Mentors</h2>
          <p className="font-regular">Here is what past mentors have to say.</p>
          <div className="w-full">
            <iframe
              className="w-full h-48 md:h-64 lg:h-72"
              src="https://www.youtube.com/embed/8Ji8WwIyn3Y"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>
          </div>
        </div>
        <div className="bg-primary-color flex flex-col items-center p-4 sm:p-5 text-white w-full md:w-1/3">
          <h2 className="font-bold text-center">Program Report</h2>
          <p className="font-regular text-center">Check out C4GT 2022 highlights</p>
          <div className="w-10/12 h-full">
            <a href="https://drive.google.com/file/d/1n2l_7Njd7_2VGCLrJixBjt7142J3t1q9/view?usp=share_link">
              <Image
                className="w-full h-full"
                src={c4gt22Report}
                alt="c4gt22 report"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
