import React from "react";
import { ProductList, Header } from "@/component/components";
import { productList } from "@/component/constants";
import { Metadata } from "next";
import { codeImage } from "@/component/assets/images";

export const metadata: Metadata = {
  title: "Mentoring Program Projects | Code for GovTech",
};

const headerProps = {
    title: 'Mentoring Program Projects',
    description: 'C4GT 2023 brings to you some key products being built in the Digital Public Goods ecosystem. This year we have numerous projects across products like DIGIT, CQube, Sunbird, UCI, and more!',
    spanText:'To explore projects in detail, visit the C4GT GitHub Wiki',
    pageLink:'https://github.com/C4GT/Wiki',
    image:codeImage
}

const C4GT23 = () => {
  return (
    <div className={`c4gt23-container  bg-white`}>
      <Header content={headerProps}/>
      <Header content={headerProps}/>
      <Header content={headerProps}/>
      <Header content={headerProps}/>
      <ProductList productList={productList} />
    </div>
  );
};

export default C4GT23;
