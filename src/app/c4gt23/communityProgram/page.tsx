import React from "react";
import { Header } from "@/component/components";
import { codeLaptop } from "@/component/assets/images";
import { Metadata } from "next";

import 
{
  MdCloudDownload,
 MdFilterList,
 MdPrint,
 MdSearch,
 MdViewColumn
} from "react-icons/md"

import styles from "./styles.module.css"

export const metadata: Metadata = {
  title: "Community Program Projects | Code for GovTech",
};

const headerProps = {
    title: 'Community Program Projects',
    description: 'The C4GT Community Project Listing will showcase Digital Public Good projects across domains, complexity, technical skills  & more. \n If you wish to create impact through technology, build your skills, and get access to exclusive goodies & rewards, then explore the projects below and get coding!',
    spanText:'To know more about the program specifics',
    pageLink:'https://github.com/Code4GovTech/C4GT/wiki/C4GT-Community-Program',
    image:codeLaptop
}

const C4GT23 = () => {

  type TableOptions = {
    title:string,
    icon:React.JSX.Element
  }

  const tableOptions:TableOptions[] = [
    {
      title:'Search',
      icon:<MdSearch/>,
    },
    {
      title:'Download CSV',
      icon:<MdCloudDownload/>
    },
    {
      title:'Print',
      icon:<MdPrint/>,
    },
    {
      title:'View Columns',
      icon:<MdViewColumn/>,
    },
    {
      title:'Filter',
      icon:<MdFilterList/>,
    }
  ]

  return (
    <div className={`c4gt23-container  bg-white`}>
      <Header content={headerProps} />
      <div className="bg-primary-color w-full flex flex-col items-center mt-5">
      <div className="flex flex-col items-center text-white w-full pt-12">
        <h1 className="font-bold text-3xl text-center leading-tight md:text-4xl lg:text-5xl">Code For GovTech Community Projects</h1>
      </div>
      <div className="w-full flex flex-col items-center p-2 py-6 md:p-14">
        <div className="bg-white w-full h-[500px] rounded-md">
          <div className="bg-white flex flex-row w-full rounded-md">
            <div className={`flex flex-row p-4 items-center gap-2 opacity-75 ${styles.projectOptions}`}>
              {
                tableOptions.map((item:TableOptions)=>{
                  return(
                    <button>
                      {item.icon}
                      <span className={`${styles.tooltip}`}>{item.title}</span>
                    </button>
                  )
                })
              }
            </div>
          </div>
          <div className="overflow-x-scroll lg:overflow-x-hidden">
            {/* <table className="table-auto">
              <thead className="border-b border-gray-300">
                <tr>
                  <th className="p-4">S.No</th>
                  <th className="p-4">Project Name</th>
                  <th className="p-4">Complexity</th>
                  <th className="p-4">Tech Skills</th>
                  <th className="p-4">Points</th>
                  <th className="p-4">Project Link</th>
                  <th className="p-4">Product Name</th>
                  <th className="p-4">Project Type</th>
                  <th className="p-4">Status</th>
                </tr>
              </thead>

            </table> */}
            {/* <ProjecTable/> */}
          </div>
        </div>
      </div>
     </div>
    </div>
  );
};

export default C4GT23;
