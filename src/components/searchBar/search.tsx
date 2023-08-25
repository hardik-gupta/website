import React, { useState } from "react";
import { techStack, organization, category } from "@/component/constants";

import { AiFillCheckSquare } from "react-icons/ai";
import { BiSolidArrowFromBottom } from "react-icons/bi";
import { BsSquare, BsChevronDown } from "react-icons/bs";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/component/components/ui/dropdown-menu";

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

export const SearchBar: React.FC<SearchBarProps> = ({
  productList,
  onSearch,
}) => {
  const [searchText, setSearchText] = useState("");
  const [selectedTechStack, setSelectedTechStack] = useState<string[]>([]);
  const [selectedOrgList, setSelectedOrgList] = useState<string[]>([]);
  const [selectedCategoryList, setSelectedCategoryList] = useState<string[]>(
    []
  );

  const [appliedFilters, setAppliedFilters] = useState<string[]>([]);

  const handleSearch = () => {
    const filteredProducts = productList.filter((product) => {
      const { title, techStack, projectCount, domain, organization } = product;
      return (
        title.toLowerCase().includes(searchText.toLowerCase()) ||
        techStack.some((tech) =>
          tech.toLowerCase().includes(searchText.toLowerCase())
        ) ||
        projectCount.toString().includes(searchText) ||
        projectCount >= parseInt(searchText) ||
        domain.toLowerCase().includes(searchText.toLowerCase()) ||
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
    setSelectedTechStack(updatedTechStack);
    filterProducts(updatedTechStack);
  };

  const filterProducts = (techStack: string[]) => {
    const filteredProducts = productList.filter((product) => {
      return techStack.every((tech) => {
        return product.techStack.some((t) =>
          t.toLowerCase().includes(tech.toLowerCase())
        );
      });
    });

    onSearch(filteredProducts);
  };

  const handleOrgFilter = (org: string) => {
    const isSelected = selectedOrgList.includes(org);
    let updatedOrgList: string[];

    if (isSelected) {
      updatedOrgList = selectedOrgList.filter(
        (selectedOrgItems) => selectedOrgItems !== org
      );
    } else {
      updatedOrgList = [...selectedOrgList, org];
    }
    console.log({ updatedOrgList, org });
    setSelectedOrgList(updatedOrgList);
    filterProductsByOrganizations(updatedOrgList);
  };

  const filterProductsByOrganizations = (targetOrganizations: string[]) => {
    if (targetOrganizations.length === 0) {
      onSearch(productList);
      return;
    }

    const filteredOrganizations = productList.filter((product) => {
      return targetOrganizations.some(
        (org) => product.organization.toLowerCase() === org.toLowerCase()
      );
    });

    onSearch(filteredOrganizations);
  };

  const handleCatFilter = (org: string) => {
    const isSelected = selectedCategoryList.includes(org);
    let updatedCategoryList: string[];

    if (isSelected) {
      updatedCategoryList = selectedCategoryList.filter(
        (selectedOrgItems) => selectedOrgItems !== org
      );
    } else {
      updatedCategoryList = [...selectedCategoryList, org];
    }
    console.log(updatedCategoryList);
    setSelectedCategoryList(updatedCategoryList);
    filterProductsByCategory(updatedCategoryList);
  };

  const filterProductsByCategory = (targetCategory: string[]) => {
    if (targetCategory.length === 0) {
      onSearch(productList);
      return;
    }

    const filteredCategory = productList.filter((product) => {
      return targetCategory.some(
        (org) => product.domain.toLowerCase() === org.toLowerCase()
      );
    });

    onSearch(filteredCategory);
  };

  return (
    <div className=" font-regular flex flex-col space-y-6 md:space-y-0 md:flex-row  md:justify-between mb-10">
      <div className="font-demi flex flex-wrap w-full md:w-7/12">
        {/* <button
          className={`w-auto px-3 py-1 mr-2 mt-2 rounded-lg ${
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
            <button className="w-auto px-3 py-2 mt-2 mr-2.5 rounded-full bg-gray-200 text-gray-800 text-[18px] flex items-center">
              Category &nbsp; <BsChevronDown size="1em" />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="h-52 overflow-y-scroll bg-white text-gray-800">
            {category.map((cat) => (
              <DropdownMenuItem
                key={cat}
                onClick={() => handleCatFilter(cat)}
                className={`mb-1 rounded-md ${
                  selectedCategoryList.includes(cat)
                    ? "bg-blue-500 text-white"
                    : "bg-white text-gray-800"
                }`}
              >
                {selectedCategoryList.includes(cat) ? (
                  <AiFillCheckSquare size="1.5em" />
                ) : (
                  <BsSquare size="1.5em" />
                )}
                &nbsp;&nbsp;{cat}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="w-auto px-3 py-2 mt-2 mr-4 rounded-full bg-gray-200 text-gray-800 font-demi text-[18px] flex items-center">
              Organisation &nbsp;
              <BsChevronDown size="1em" />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="h-52 overflow-y-scroll bg-white text-gray-800">
            {organization.map((org) => (
              <DropdownMenuItem
                key={org}
                onClick={() => handleOrgFilter(org)}
                className={`mb-1 rounded-md flex items-center justify-center${
                  selectedOrgList.includes(org)
                    ? "bg-blue-500 text-white"
                    : "bg-white text-gray-800"
                }`}
              >
                {selectedOrgList.includes(org) ? (
                  <AiFillCheckSquare size="24px" />
                ) : (
                  <BsSquare size="24px" />
                )}
                &nbsp;&nbsp;
                <p className="w-[200px] m-0">{org}</p>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="w-auto px-3 py-2 mt-2 mr-4 rounded-full bg-gray-200 text-gray-800 font-demi text-[18px] flex items-center">
              Tech Stack &nbsp; <BsChevronDown size="1em" />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="h-52 overflow-y-scroll bg-white text-gray-800">
            {techStack.map((tech, index) => (
              <DropdownMenuItem
                key={index}
                onClick={() => handleTechStackFilter(tech)}
                className={`mb-1 rounded-md ${
                  selectedTechStack.includes(tech)
                    ? "bg-blue-500 text-white"
                    : "bg-white text-gray-800"
                }`}
              >
                {selectedTechStack.includes(tech) ? (
                  <AiFillCheckSquare size="1.5em" />
                ) : (
                  <BsSquare size="1.5em" />
                )}
                &nbsp;&nbsp;{tech}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div className="search-section flex flex-col space-y-2  md:space-y-0 md:flex-row md:space-x-1  md:items-center  w-full md:w-5/12">
        <input
          type="text"
          className="w-full  shadow-lg py-2.5 px-3  border border-gray-700 rounded-lg focus:outline-0 focus:ring-2 focus:ring-blue-500"
          placeholder="Search by title, tech stack, or project count"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSearch();
            }
          }}
        />
        <button
          id="search"
          className=" w-full md:w-auto py-2.5 px-3  p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 hover:shadow-2xl"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>
    </div>
  );
};
