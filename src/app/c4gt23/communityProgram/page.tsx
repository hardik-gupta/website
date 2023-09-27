import React from "react";
import { Header } from "@/component/components";
import { codeLaptop } from "@/component/assets/images";
import { Metadata } from "next";

import {ProjectDetails, columns} from "@/component/components/projectTable/columns"
import { ProjectTable } from "@/component/components/projectTable/projectTable";

export const metadata: Metadata = {
  title: "Community Program Projects | Code for GovTech",
};

const headerProps = {
  title: "Community Program Projects",
  description:
    "The C4GT Community Project Listing will showcase Digital Public Good projects across domains, complexity, technical skills  & more. \n If you wish to create impact through technology, build your skills, and get access to exclusive goodies & rewards, then explore the projects below and get coding!",
  spanText: "To know more about the program specifics",
  pageLink: "https://github.com/Code4GovTech/C4GT/wiki/C4GT-Community-Program",
  image: codeLaptop,
};

const C4GT23 = () => {

  const tableData: ProjectDetails[] = [
    {
      id: 1,
      project:{
        name: "Update workflow to make package public while pushing to github package and also automatically connect it to repository",
        githubLink:'https://github.com/Samagra-Development/ai-tools/issues/41',
      },
      complexity: "medium",
      techSkills: ["Github Actions"],
      points:'20',
      product: "CORD Network",
      type: ["DevOps"],
      status: 'closed',
    },
    {
      id: 2,
      project:{
        name: "Update workflow to make package public while pushing to github package and also automatically connect it to repository",
        githubLink:'https://github.com/Samagra-Development/ai-tools/issues/41',
      },
      complexity: "low",
      techSkills: ["Github Actions", "NextJS", "ReactJS"],
      points:'10',
      product: "CORD Network",
      type: ["Github Actions"],
      status: 'open',
    },
    {
      id: 3,
      project:{
        name: "Update workflow to make package public while pushing to github package and also automatically connect it to repository",
        githubLink:'https://github.com/Samagra-Development/ai-tools/issues/41',
      },
      complexity: "high",
      techSkills: ["Github Actions", "NextJS", "ReactJS"],
      points:'30',
      product: "CORD Network",
      type: ["Github Actions"],
      status: 'closed',
    },
    {
      id: 4,
      project:{
        name: "Update workflow to make package public while pushing to github package and also automatically connect it to repository",
        githubLink:'https://github.com/Samagra-Development/ai-tools/issues/41',
      },
      complexity: "low",
      techSkills: ["Java", "Selenium", "TestNG", "ExtentReport", "Log4j", "Maven", "POM", "Eclipse IDE", "SimpleJavaMail"],
      points:'10',
      product: "Sunbird UCI",
      type: ["Github Actions", "NextJS"],
      status: 'closed',
    },
    {
      id: 5,
      project:{
        name: "some project name",
        githubLink:'https://github.com/Samagra-Development/ai-tools/issues/41',
      },
      complexity: "high",
      techSkills: ["Github Actions", "NextJS", "ReactJS"],
      points: '30',
      product: "CORD Network",
      type: [],
      status: 'closed',
    },
  ]

  return (
    <div className={`c4gt23-container  bg-white`}>
      <Header content={headerProps} />

      <div className="bg-primary-color w-full flex flex-col items-center mt-5">
        <div className="flex flex-col items-center text-white w-full pt-12">
          <h1 className="font-bold text-3xl text-center leading-tight lg:text-4xl">
            Code For GovTech Community Projects
          </h1>
        </div>
        <div className="w-full flex flex-col items-center py-6 md:px-14">
          <div className="bg-white w-full rounded-md h-full">
              <ProjectTable columns={columns} data={tableData}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default C4GT23;
