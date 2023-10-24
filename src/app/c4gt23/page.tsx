import { ContributorCard, HeaderCard, InfoBar23 } from "@/component/components";
import React from "react";
import { highlights23 } from "@/component/assets/images";
import { contributorsData } from "@/component/components/c4gt23/mentoringProgram/contributors2023"
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "C4GT 2023 | Code for GovTech",
};

const C4GT23Home = () => {
    const headerContent = {
        title: "Highlights from 2023",
        description: ["The second edition of the C4GT Mentoring Program was launched on 1st April 2023. The goal was to scale up this year, from 13 contributors in 2022 to a cohort of 100+ contributors in 2023. We received 100+ open-source projects across 35+ DPG products from 20+ organizations.", "The coding period has begun and will be concluded on 30th August 2023.", "Explore some key highlights & contributor profiles here"],
        image: highlights23,
    }

    return (
        <>
            <div className="c4gt23-container bg-white">
                <HeaderCard headerData={headerContent} />
                <InfoBar23 />
                <ContributorCard contributorsData={contributorsData} edition="c4gt23">
                    Meet the C4GT 2023 Contributors
                </ContributorCard>
            </div>
        </>
    );
}

export default C4GT23Home;