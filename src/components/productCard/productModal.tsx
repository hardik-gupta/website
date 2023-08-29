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
    <div className="overflow-y-scroll max-h-[80vh] w-full">
      {projects.map((project, index) => {
        return (
          <div className="border-b mb-4 pb-3" key={project.id}>
            <h1 className="text-xl mb-2 font-medium text-black">
              <span className="font-bold text-black">Project Name:</span> {project.name}
            </h1>
            <h6 className="text-gray-500">{project.description}</h6>
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex items-center flex-col">
                <div className="logo-container">
                  <img
                    src="/githubLogo.png"
                    alt="GitHub Logo"
                    className="max-w-[130px]"
                  />
                </div>
                <a
                  href={project.links.github}
                  className="flex items-center text-slate-100 font-demi hover:text-gray-200 bg-blue-900 hover:bg-blue-700 py-2 px-3 rounded-lg shadow transition duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "none" }}
                >
                  <Image
                    className="mr-2 block sm:hidden"
                    width={20}
                    height={20}
                    src={githubIcon}
                    alt="github-icon"
                  />
                  <span className="whitespace-nowrap">Issue Ticket</span>
                </a>
              </div>
              <div className="flex items-center flex-col">
                <div className="logo-container">
                  <img
                    src="/certification.png"
                    alt="GitHub Logo"
                    className="max-w-[100px]"
                  />
                </div>

                <a
                  href={project.links.documentation}
                  className="flex items-center text-slate-100 font-demi hover:text-gray-200 bg-blue-900 hover:bg-blue-700 py-2 px-3 rounded-lg shadow transition duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "none" }}
                >
                  <AiFillFileText size="1.5em" className="mr-2 block sm:hidden" />
                  <span className="whitespace-nowrap">Documentation</span>
                </a>
              </div>
              <div className="flex items-center flex-col">
                <div className="logo-container">
                  <iframe
                    className={"sushasan-channel-trailer"}
                    src="https://www.youtube.com/embed/evr-R7iC1VM/"
                    frameBorder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    height={130}
                    width={200}
                  ></iframe>
                </div>
                <a
                  href={project.links.contributorExperience}
                  className="flex items-center text-slate-100 font-demi hover:text-gray-200 bg-blue-900 hover:bg-blue-700 py-2 px-3 rounded-lg shadow transition duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "none" }}
                >
                  <AiFillYoutube size="1.5em" className="mr-2 block sm:hidden" />
                  <span className="whitespace-nowrap">
                    Contributor Experience
                  </span>
                </a>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
