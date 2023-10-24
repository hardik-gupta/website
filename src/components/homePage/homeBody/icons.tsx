import {
  SamagraLogo,
  dgpImage,
  githubFull,
  oniImage,
  projectPartners,
  unstopLogo,
} from "@/component/assets/images";
import Image from "next/image";

export const IconComponent = () => {
  return (
    <>
      <div className="flex  mx-4 mb-5 flex-wrap justify-center items-center mt-16 ">
        <div className="flex mb-4 sm:mb-4 border-0  flex-col justify-center w-full sm:w-1/2 md:w-1/4 mt-2">
          <h3 className="text-color-primary font-bold text-center ">
            Knowledge Partner
          </h3>
          <div className="w-34 h-34 flex mt-2 sm:mt-0 self-center items-center justify-center">
            <Image src={dgpImage} alt="" width={90} height={90} />
            <Image src={oniImage} alt="" width={90} height={90}/>
          </div>
        </div>
        <div className="flex mb-4 sm:mb-4 border-0  flex-col justify-center w-full sm:w-1/2 md:w-1/4">
          <h3 className="text-color-primary font-bold text-center ">
            Community Partner
          </h3>
          <div className="w-34  h-34 flex mt-2 sm:mt-0  self-center items-center justify-center">
            <Image src={githubFull} alt="" width={200} height={200}/>
          </div>
        </div>
        <div className="flex mb-4 sm:mb-4  border-0  flex-col justify-center w-full sm:w-1/2 md:w-1/4">
          <h3 className="text-color-primary font-bold text-center ">
            Platform Partner
          </h3>
          <div className=" w-34 h-34 flex mt-2 sm:mt-0  self-center items-center justify-center">
            <Image src={unstopLogo} alt="" width={200} height={200} />
          </div>
        </div>
        <div className="flex mb-4 sm:mb-4  border-0  flex-col justify-center w-full sm:w-1/2 md:w-1/4">
          <h3 className="text-color-primary font-bold text-center">
            Organiser
          </h3>
          <div className="w-34 h-34 flex mt-2 sm:mt-0  self-center items-center justify-center">
            <Image src={SamagraLogo} alt="" width={200} height={200} />
          </div>
        </div>
      </div>
      <h2 className="text-color-primary font-bold text-center mb-4">
        Project Partners
      </h2>
      <div className="flex flex-wrap mx-5 justify-center">
        {projectPartners.map((logo, index) => (
          <div
            key={index}
            className="mt-1 mr-4 w-28 h-28 flex items-center justify-center"
          >
            <Image src={logo} alt={`Partner Logo ${index}`} />
          </div>
        ))}
      </div>
    </>
  );
};
