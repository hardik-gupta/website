import React, { useState } from "react";
import { ProductCard } from "@/component/components";

interface ProjectListProps {
  projectData: {
    title: string;
    description: string;
    projectCount?: number;
    techStack?: string[];
    githubLink: string;
  }[];
}

export const ProjectList: React.FC<ProjectListProps> = ({ projectData }) => {
  const [projectsData, setProjectsData] = useState(projectData);

  return (
    <div className="grid grid-cols-1 auto-rows-auto md:grid-cols-2 lg:grid-cols-3 gap-5 w-5/6 lg:w-4/5 mx-auto">
      {projectsData.map((project, index) => (
        <ProductCard product={project} key={index} />
      ))}
    </div>
  );
};


