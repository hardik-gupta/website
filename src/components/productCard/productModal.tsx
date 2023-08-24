import Image from "next/image";
import { githubIcon } from "@/component/assets/images";
import { AiFillFileText, AiFillYoutube } from "react-icons/ai";

interface ProjectProps {
  projects: {
    id: number;
    name: string;
    description: string;
    links: {
      github: string;
      documentation: string;
      contributorExperience: string;
    };
  }[];
}

export const ProductModal: React.FC<ProjectProps> = ({ projects }) => {
  return (
    <div className='overflow-y-scroll max-h-[80vh] max-w-fit'>
      {projects.map((project, index) => {
        return (
          <div className="border-b mb-8" key={project.id}>
            <h1 className="text-xl mb-2 font-medium"><span className="font-bold">Project Name:</span> {project.name}</h1>
            <h6 className="text-gray-500">{project.description}</h6>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={project.links.github}
                className="w-auto sm:w-1/2 md:w-3/4 text-slate-100 font-demi hover:text-gray-200 flex items-center justify-center mb-2 bg-blue-900 hover:bg-blue-700 py-2 px-3 rounded-lg shadow transition duration-300 "
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none" }}
              >
                <Image
                  className="mr-2"
                  width={20}
                  height={20}
                  src={githubIcon}
                  alt="github-icon"
                />
                Github Ticket
              </a>
              <a
                href={project.links.documentation}
                className="w-auto sm:w-1/2 md:w-3/4 text-slate-100 font-demi hover:text-gray-200 flex items-center justify-center mb-2 bg-blue-900 hover:bg-blue-700 py-2 px-3 rounded-lg shadow transition duration-300 "
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none" }}
              >
                <AiFillFileText size="1.5em" className="mr-2" />
                Documentation
              </a>
              <a
                href={project.links.contributorExperience}
                className="w-auto sm:w-1/2 md:w-3/4 text-slate-100 font-demi hover:text-gray-200 flex items-center justify-center mb-2 bg-blue-900 hover:bg-blue-700 py-2 px-3 rounded-lg shadow transition duration-300 "
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none" }}
              >
                <AiFillYoutube size="1.5em" className="mr-2" />
                Contributor Experience
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
};
