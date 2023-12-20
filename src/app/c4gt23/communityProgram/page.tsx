"use client"
import React,{useState, useEffect} from "react";
import { Header } from "@/component/components";
import { codeLaptop } from "@/component/assets/images";
import { Metadata } from "next";

import { ProjectTable } from "@/component/components/projectTable/projectTable";
import { ProjectDetails, columns } from "@/component/components/projectTable/columns";
import { getCommunityTable } from "@/component/api";

// export const metadata: Metadata = {
//   title: "Community Program Projects | Code for GovTech",
// };

const headerProps = {
  title: "Community Program Projects",
  description:
    "The C4GT Community Project Listing will showcase Digital Public Good projects across domains, complexity, technical skills  & more. \n If you wish to create impact through technology, build your skills, and get access to exclusive goodies & rewards, then explore the projects below and get coding!",
  spanText: "To know more about the program specifics",
  pageLink: "https://github.com/Code4GovTech/C4GT/wiki/C4GT-Community-Program",
  image: codeLaptop,
};

const C4GT23 = () => {
  const [tableData, setTableData] = useState<ProjectDetails[]>([]);

  useEffect(() => {
    const getTableData = async () => {
      const response = await getCommunityTable();
      setTableData(response?.data)
    }
    getTableData();
  }, [])

  return (
    <div className={`c4gt23-container bg-white`}>
      {/* <Header content={headerProps} /> */}

      <div className="bg-primary-color w-full flex flex-col items-center">
        <div className="flex flex-col items-center text-white w-full pt-12">
          <h1 className="font-bold text-3xl text-center leading-tight lg:text-4xl">
            Code For GovTech Community Projects
          </h1>
        </div>
        <div className="w-full flex flex-col items-center py-6 md:px-14">
          <div className="bg-white w-full rounded-md h-full py-6">
              <ProjectTable columns={columns} data={tableData} filterOptions={tableData}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default C4GT23;
