import React, { useState, useEffect } from "react";
import { techStack, organization, category } from "@/component/constants";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/component/components/ui/dropdown-menu";

import { AiFillCheckSquare } from "react-icons/ai";
import { BsSquare, BsChevronDown } from "react-icons/bs";

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
  const [selectedOrganizations, setSelectedOrganizations] = useState<string[]>(
    []
  );
  const [selectedCategory, setSelectedCategory] = useState<string[]>([]);

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
    let updatedFilters: string[];

    if (isSelected) {
      updatedTechStack = selectedTechStack.filter(
        (selectedTech) => selectedTech !== tech
      );
      updatedFilters = appliedFilters.filter(
        (selectedFilter) => selectedFilter !== tech
      );
    } else {
      updatedTechStack = [...selectedTechStack, tech];
      updatedFilters = [...appliedFilters, tech];
    }
    setSelectedTechStack(updatedTechStack);
    // filterByTechStack(selectedTechStack);
    // filterProducts(selectedTechStack)
    setAppliedFilters(updatedFilters);
  };

  const handleOrgFilter = (org: string) => {
    const isSelected = selectedOrganizations.includes(org);
    let updatedOrganizations: string[];
    let updatedFilters: string[];

    if (isSelected) {
      updatedOrganizations = selectedOrganizations.filter(
        (selectedOrgItems) => selectedOrgItems !== org
      );
      updatedFilters = appliedFilters.filter(
        (selectedFilter) => selectedFilter !== org
      );
    } else {
      updatedOrganizations = [...selectedOrganizations, org];
      updatedFilters = [...appliedFilters, org];
    }
    setSelectedOrganizations(updatedOrganizations);
    // filterByTechStackByOrganizations(updatedOrganizations);
    filterByOrgsAndCat(updatedOrganizations, "organization");
    setAppliedFilters(updatedFilters);
  };

  const handleCatFilter = (org: string) => {
    const isSelected = selectedCategory.includes(org);
    let updatedCategory: string[];
    let updatedFilters: string[];

    if (isSelected) {
      updatedCategory = selectedCategory.filter(
        (selectedOrgItems) => selectedOrgItems !== org
      );
      updatedFilters = appliedFilters.filter(
        (selectedFilter) => selectedFilter !== org
      );
    } else {
      updatedCategory = [...selectedCategory, org];
      updatedFilters = [...appliedFilters, org];
    }
    console.log(updatedCategory);
    setSelectedCategory(updatedCategory);
    // filterByTechStackByCategory(updatedCategory);
    filterByOrgsAndCat(updatedCategory, "category");
    setAppliedFilters(updatedFilters);
  };

  const handleFilter = (
    filterValue: string,
    targetArray: string[],
    setTargetArrayFunction: (value: React.SetStateAction<string[]>) => void
  ) => {
    const isSelected = targetArray.includes(filterValue);
    let updatedTargetArray: string[];
    let updatedFilters: string[];

    if (isSelected) {
      updatedTargetArray = targetArray.filter(
        (targetArrayItems) => targetArrayItems !== filterValue
      );
      updatedFilters = appliedFilters.filter(
        (selectedFilter) => selectedFilter !== filterValue
      );
    } else {
      updatedTargetArray = [...targetArray, filterValue];
      updatedFilters = [...appliedFilters, filterValue];
    }
    setTargetArrayFunction(updatedTargetArray);

    // targetArrayType === "tech"
    //   ? filterByTechStack(updatedTargetArray)
    //   : filterByOrgsAndCat(updatedTargetArray, targetArrayType);
    // filterProducts()
    setAppliedFilters(updatedFilters);
  };

  useEffect(() => {
    filterProducts();
  }, [selectedTechStack, selectedOrganizations, selectedCategory]);

  const filterProducts = () => {
    let filteredProducts = productList.filter((product) => {
      return selectedTechStack.every((tech) => {
        return product.techStack.some(
          (t) => t.toLowerCase() === tech.toLowerCase()
        );
      });
    });

    if (selectedOrganizations.length !== 0) {
      filteredProducts = filteredProducts.filter((product) => {
        return selectedOrganizations.some((item) => {
          return product.organization.toLowerCase() === item.toLowerCase();
        });
      });
    }

    if (selectedCategory.length !== 0) {
      filteredProducts = filteredProducts.filter((product) => {
        return selectedCategory.some((item) => {
          return product.domain.toLowerCase() === item.toLowerCase();
        });
      });
    }

    onSearch(filteredProducts);
  };

  const filterByTechStack = (techStack: string[]) => {
    const filteredProducts = productList.filter((product) => {
      return techStack.every((tech) => {
        return product.techStack.some(
          (t) => t.toLowerCase() === tech.toLowerCase()
        );
      });
    });

    onSearch(filteredProducts);
  };

  const filterByOrgsAndCat = (targetArray: string[], type: string) => {
    if (targetArray.length === 0) {
      onSearch(productList);
      return;
    }

    const filteredArray = productList.filter((product) => {
      return targetArray.some((item) => {
        const filterType =
          type === "organization" ? product.organization : product.domain;
        return filterType.toLowerCase() === item.toLowerCase();
      });
    });

    onSearch(filteredArray);
  };

  // const filterByTechStackByOrganizations = (targetOrganizations: string[]) => {
  //   if (targetOrganizations.length === 0) {
  //     onSearch(productList);
  //     return;
  //   }

  //   const filteredOrganizations = productList.filter((product) => {
  //     return targetOrganizations.some((org) =>
  //       product.organization.toLowerCase() === org.toLowerCase()
  //     );
  //   });

  //   onSearch(filteredOrganizations);
  // };

  // const filterByTechStackByCategory = (targetCategory: string[]) => {
  //   if (targetCategory.length === 0) {
  //     onSearch(productList);
  //     return;
  //   }

  //   const filteredCategory = productList.filter((product) => {
  //     return targetCategory.some((org) =>
  //       product.domain.toLowerCase() === org.toLowerCase()
  //     );
  //   });

  //   onSearch(filteredCategory);
  // };

  // const applyFilters = (selectedOrgs: string[], selectedCategories: string[]) => {
  //   const filteredProducts = productList.filter((product) => {
  //     const orgMatch = selectedOrgs.length === 0 || selectedOrgs.some((org) =>
  //       product.organization.toLowerCase() === org.toLowerCase()
  //     );

  //     const categoryMatch = selectedCategories.length === 0 || selectedCategories.some((category) =>
  //       product.domain.includes(category.toLowerCase())
  //     );

  //     return orgMatch && categoryMatch;
  //   });

  //   onSearch(filteredProducts);
  // };

  return (
    <div className="flex flex-col">
      <div className=" font-regular flex flex-col space-y-6 md:space-y-0 md:flex-row  md:justify-between mb-4">
        <div className="font-demi flex flex-wrap w-full md:w-7/12">
          {/* <button
            className={`w-auto px-3 py-1 mr-2 mt-2 text-sm rounded-lg ${
              selectedTechStack.length === 0
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-800"
            }`}
            onClick={() => {
              setSelectedTechStack([]);
              filterByTechStack([]);
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
                Category &nbsp;
                <BsChevronDown size="1em" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-auto h-52 overflow-y-scroll bg-white text-gray-800">
              {category.map((cat) => (
                <DropdownMenuItem
                  onClick={() =>
                    handleFilter(cat, selectedCategory, setSelectedCategory)
                  }
                  key={cat}
                  className={`mb-1 rounded-md ${
                    selectedCategory.includes(cat)
                      ? "bg-blue-500 text-white"
                      : "bg-white text-gray-800"
                  }`}
                >
                  {selectedCategory.includes(cat) ? (
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
              <button className="w-auto px-3 py-2 mt-2 mr-2.5 rounded-full bg-gray-200 text-gray-800 font-demi text-[18px] flex items-center">
                Organisation &nbsp;
                <BsChevronDown size="1em" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-auto h-52 overflow-y-scroll bg-white text-gray-800 p-1">
              {organization.map((org) => (
                <DropdownMenuItem
                  onClick={() =>
                    handleFilter(
                      org,
                      selectedOrganizations,
                      setSelectedOrganizations
                    )
                  }
                  key={org}
                  className={`mb-1 rounded-md ${
                    selectedOrganizations.includes(org)
                      ? "bg-blue-500 text-white"
                      : "bg-white text-gray-800"
                  }`}
                >
                  {selectedOrganizations.includes(org) ? (
                    <AiFillCheckSquare size="1.5em" />
                  ) : (
                    <BsSquare size="1.5em" />
                  )}
                  &nbsp;&nbsp;{org}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="w-auto px-3 py-2 mt-2 mr-2.5 rounded-full bg-gray-200 text-gray-800 font-demi text-[18px] flex items-center">
                Tech Stack &nbsp;
                <BsChevronDown size="1em" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="h-52 overflow-y-scroll bg-white text-gray-800">
              {techStack.map((tech, index) => (
                <DropdownMenuItem
                  key={index}
                  onClick={() =>
                    handleFilter(tech, selectedTechStack, setSelectedTechStack)
                  }
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

          {appliedFilters.length !== 0 ? (
            <button
              className="w-auto px-3 py-1 mt-2 text-sm rounded-full bg-rose-900 text-white"
              onClick={() => {
                setAppliedFilters([]),
                  setSelectedCategory([]),
                  setSelectedOrganizations([]),
                  setSelectedTechStack([]),
                  onSearch(productList);
              }}
            >
              Clear Filters
            </button>
          ) : (
            <></>
          )}
        </div>

        <div className="search-section flex flex-col space-y-2  md:space-y-0 md:flex-row md:space-x-1  md:items-center  w-full md:w-5/12">
          <input
            type="text"
            className="w-full shadow-lg py-2.5 px-3  border border-gray-700 rounded-lg focus:outline-0 focus:ring-2 focus:ring-blue-500 text-black"
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

      <div className="filter-bar flex items-center w-full gap-1 mb-6 flex-wrap min-h-[28px]">
        {appliedFilters.map((filter) => (
          <button
            key={filter}
            className="w-auto px-2 py-1 text-sm rounded-lg bg-blue-500 text-white"
            onClick={() => {
              if (techStack.includes(filter)) {
                handleFilter(filter, selectedTechStack, setSelectedTechStack);
              } else if (organization.includes(filter)) {
                handleFilter(
                  filter,
                  selectedOrganizations,
                  setSelectedOrganizations
                );
              } else {
                handleFilter(filter, selectedCategory, setSelectedCategory);
              }
            }}
          >
            {filter}
          </button>
        ))}
      </div>
    </div>
  );
};
