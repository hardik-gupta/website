import React, { useState } from "react";
import { ProductCard } from "@/component/components/c4gt23/mentoringProgram/productCard/productCard";
import { SearchBar } from "@/component/components/c4gt23/mentoringProgram/searchBar/search";

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
  productList: any;
}

export const ProductList: React.FC<ProductListProps> = ({ productList }) => {
  const [searchResult, setSearchResult] = useState(productList);

  const handleSearch = (result: ProductListProps["productList"]) => {
    setSearchResult(result);
  };

  return (
    <div className="mt-14 mx-auto w-5/6">
      <h1 className="font-bold text-3xl text-slate-800 mb-8 font-display">
      Product & Projects
      </h1>
      <div className="">
        <SearchBar productList={productList} onSearch={handleSearch} />
      </div>

      {searchResult.length === 0 ? (
        <p className="text-center my-8 bg-red-200 text-red-900 font-demi text-[20px] py-3 rounded-lg">No Projects found</p>
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
