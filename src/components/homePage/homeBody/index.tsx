import { Template } from "./template";
import { Hightlights } from "./hightlights";
import {
  communityContent,
  communityDescription,
  mentoringContent,
  mentoringDescription,
} from "@/component/components/c4gt23/mentoringProgram/projects23"
import { IconComponent } from "./icons";

export const HomeBody = () => {
  return (
    <div className="">
      <Template
        title="C4GT Community Program"
        description={communityDescription}
        data={communityContent}
      />
      {/* <div className="text-center w-48 mx-auto bg-tertiary-color p-3  mb-5  cursor-pointer hover:bg-green-700  rounded-lg">
        <a
          href="https://github.com/Code4GovTech/C4GT/wiki"
          className="font-medium text-white no-underline"
          target="_blank"
        >
          Learn More
        </a>
      </div> */}
      <Template
        title="C4GT Mentoring Program"
        description={mentoringDescription}
        data={mentoringContent}
      />
      <Hightlights />
      <IconComponent />
    </div>
  );
};
