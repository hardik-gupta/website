import React from "react";
import { HeaderCard, InfoBar, InfoCard, ProjectCard, ContributorCard, MentorCard } from "@/component/components";
import { highlights22 } from "@/component/assets/images";
import { contributorsData } from "@/component/components/c4gt22/contributors2022"
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "C4GT 2022 | Code for GovTech",
};

const C4GT22Home = () => {
  const headerContent = {
    title: "Highlights from 2022",
    description: ["Code for GovTech (C4GT) was launched in May 2022, as an ecosystem-led annual coding program for engineering students, offering them the opportunity to work on Digital Public Goods (DPGs) aimed at solving governance challenges, with 1:1 mentorship from experienced practitioners in leading GovTech organizations. The first edition of C4GT concluded successfully on 17th August 2022.", "Here are some of the key highlights from 2022."],
    image: highlights22,
  }

  return (
    <div className="c4gt22-container">
      <HeaderCard headerData={headerContent} />
      <InfoBar />
      <InfoCard />
      <MentorCard />
      <ContributorCard contributorsData={contributorsData} edition="c4gt22">
        Meet the C4GT 2022 Contributors
      </ContributorCard>
      <ProjectCard />
    </div>
  );
};

export default C4GT22Home;
