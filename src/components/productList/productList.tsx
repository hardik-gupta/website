import React, { useState } from "react";
import { ProductCard } from '@/component/components';
import { SearchBar } from '@/component/components';

interface Project{
    id: number;
    name: string;
    description:string;
    links:{
      github: string;
      documentation: string,
      contributorExperience: string,
    }
}

interface ProductListProps {
  productList: {
    title: string;
    description: string;
    projectCount: number;
    techStack: string[];
    githubLink: string;
    organization: string;
    domain: string;
    projects: Project[];
  }[];
}

export const ProductList: React.FC<ProductListProps> = ({ productList }) => {
  const [searchResult, setSearchResult] = useState(productList);

  const handleSearch = (result: ProductListProps["productList"]) => {
    setSearchResult(result);
  };

  return (
    <div className="mt-14 mx-auto w-5/6">
      <h1 className="font-bold text-3xl text-center text-slate-800 mb-8 font-display">
        C4GT 2023 Projects
      </h1>
      <div className="">
        <SearchBar productList={productList} onSearch={handleSearch} />
      </div>

      {searchResult.length === 0 ? (
        <p className="text-center text-gray-600 mt-8">No Projects found</p>
      ) : (
        <div className="grid grid-cols-1 auto-rows-auto md:grid-cols-2 lg:grid-cols-3 gap-5">
          {searchResult.map((product, index) => (
            <ProductCard product={product} key={index} />
          ))}
        </div>
      )}
    </div>
  );
};
