import React, { useState } from "react";
import { techStack, organization, category } from '@/component/constants';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/component/components/ui/dropdown-menu"

interface SearchBarProps {
  productList: {
    title: string;
    description: string;
    projectCount: number;
    techStack: string[];
    githubLink: string;
    organization: string;
    domain: string;
  }[];
  onSearch: (
    result: {
      title: string;
      description: string;
      projectCount: number;
      techStack: string[];
      githubLink: string;
      organization: string;
      domain: string;
    }[]
  ) => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({ productList, onSearch }) => {
  const [searchText, setSearchText] = useState("");
  const [selectedTechStack, setSelectedTechStack] = useState<string[]>([]);
  const [selectedOrg, setSelectedOrg] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string[]>([]);

  const handleSearch = () => {
    const filteredProducts = productList.filter((product) => {
      const { title, techStack, projectCount, domain, organization } = product;
      return (
        title.toLowerCase().includes(searchText.toLowerCase()) ||
        techStack.some((tech) =>
          tech.toLowerCase().includes(searchText.toLowerCase())
        ) ||
        projectCount.toString().includes(searchText) ||
        projectCount >= parseInt(searchText)||
        domain.toLowerCase().includes(searchText.toLowerCase())||
        organization.toLowerCase().includes(searchText.toLowerCase())
      );
    });

    onSearch(filteredProducts);
  };

  const handleTechStackFilter = (tech: string) => {
    const isSelected = selectedTechStack.includes(tech);
    let updatedTechStack: string[];

    if (isSelected) {
      updatedTechStack = selectedTechStack.filter(
        (selectedTech) => selectedTech !== tech
      );
    } else {
      updatedTechStack = [...selectedTechStack, tech];
    }
    console.log(updatedTechStack);
    setSelectedTechStack(updatedTechStack);
    filterProducts(updatedTechStack);
  };


  const filterProducts = (techStack: string[]) => {
    const filteredProducts = productList.filter((product) => {
      return techStack.every((tech) => {
        return product.techStack.some((t) =>
          t.toLowerCase().includes(tech.toLowerCase())
        )
      });
    });

    onSearch(filteredProducts);
  };

  return (
    <div className=" font-regular flex flex-col space-y-6 md:space-y-0 md:flex-row  md:justify-between mb-10">
      <div className="font-demi flex flex-wrap w-full md:w-7/12">
        {/* <button
          className={`w-auto px-3 py-1 mr-2 mt-2 text-sm rounded-lg ${
            selectedTechStack.length === 0
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-gray-800"
          }`}
          onClick={() => {
            setSelectedTechStack([]);
            filterProducts([]);
          }}
        >
          All
        </button> */}
        {/* {techStack.map((tech) => (
          <button
            key={tech}
            className={`w-auto px-3 py-1 mt-2 mr-2.5 text-sm rounded-lg ${
              selectedTechStack.includes(tech)
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-800"
            }`}
            onClick={() => handleTechStackFilter(tech)}
          >
            {tech}
          </button>
        ))} */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
              <button className="w-auto px-3 py-1 mt-2 mr-4 text-sm rounded-lg bg-gray-200 text-gray-800">
                Tech Stack
              </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="h-52 overflow-y-scroll bg-white text-gray-800">
            {
              techStack.map((tech, index)=>(
                  <DropdownMenuItem key={index} onClick={()=>handleTechStackFilter(tech)} className={`mb-1 rounded-md ${selectedTechStack.includes(tech)
                    ? "bg-blue-500 text-white" : "bg-white text-gray-800"}`}
                    >
                    {tech}
                  </DropdownMenuItem>
              ))
            }
          </DropdownMenuContent>
        </DropdownMenu>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
              <button className="w-auto px-3 py-1 mt-2 mr-4 text-sm rounded-lg bg-gray-200 text-gray-800">
                Organisation
              </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="h-52 overflow-y-scroll bg-white text-gray-800">
            {
              organization.map((org)=>(
                  <DropdownMenuItem key={org} className={`mb-1 rounded-md ${selectedOrg.includes(org)? "bg-blue-500 text-white" : "bg-white text-gray-800"}`}>
                    <span>{org}</span>
                  </DropdownMenuItem>
              ))
            }
          </DropdownMenuContent>
        </DropdownMenu>
        
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
              <button className="w-auto px-3 py-1 mt-2 mr-2.5 text-sm rounded-lg bg-gray-200 text-gray-800">
                Category
              </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="h-52 overflow-y-scroll bg-white text-gray-800">
            {
              category.map((cat)=>(
                  <DropdownMenuItem key={cat} className={`mb-1 rounded-md ${selectedCategory.includes(cat)
                    ? "bg-blue-500 text-white" : "bg-white text-gray-800"}`}
                    >
                    <span>{cat}</span>
                  </DropdownMenuItem>
              ))
            }
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div className="search-section flex flex-col space-y-2  md:space-y-0 md:flex-row md:space-x-1  md:items-center  w-full md:w-5/12">
        <input
          type="text"
          className="w-full  shadow-lg py-2.5 px-3  text-sm border border-gray-700 rounded-lg focus:outline-0 focus:ring-2 focus:ring-blue-500"
          placeholder="Search by title, tech stack, or project count"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button
        id='search'
          className=" w-full md:w-auto py-2.5 px-3  p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 hover:shadow-2xl"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>
    </div>
  );
};

