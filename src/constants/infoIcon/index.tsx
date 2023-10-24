import React from "react";
import { IconType } from "react-icons/lib";

interface InfoIconProps {
    icon: IconType;
    count: string;
    desc: string;
    className?: string;
}

export const InfoIcon: React.FC<InfoIconProps> = ({ icon: Icon, count, desc, className }) => {
    return (
        <div className={`flex flex-col justify-start items-center pl-6 pr-6 lg:px-8 py-3 lg:hover:-translate-y-4 transition-transform ease-in duration-200 ${className}`}>
            <Icon color="black" size={67} />
            <span className="mt-4 mb-3 text-4xl font-bold text-blue-950">{count}</span>
            <span className="font-regular w-min min-w-fit text-center text-black">{desc}</span>
        </div >
    );
};