import React from "react";
import { InfoIcon } from "@/component/constants/infoIcon";

// importing required icons
import { GrDocument } from "react-icons/gr";
import { HiOutlineUsers } from "react-icons/hi2";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { FaChalkboardTeacher } from "react-icons/fa";
import { FaGear } from "react-icons/fa6";
import { BsFileCode } from "react-icons/bs";

export const InfoBar = () => {
    return (
        <div className="mt-5">
            <h3 className="w-5/6 mx-auto text-4xl lg:text-5xl text-center font-bold text-blue-950 py-8">C4GT 2022 in Numbers</h3>
            <div className="w-5/6 lg:w-3/4 xl:w-3/5 mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6">
                <InfoIcon icon={GrDocument} count={"346"} desc="Applications Received" />
                <InfoIcon icon={HiOutlineUsers} count={"13"} desc="Contributors Selected" />
                <InfoIcon icon={AiOutlineFundProjectionScreen} count={"9"} desc="Projects" />
                <InfoIcon icon={FaChalkboardTeacher} count={"7"} desc="Mentors" />
                <InfoIcon icon={FaGear} count={"25+"} desc="Features Developed" />
                <InfoIcon icon={BsFileCode} count={"100k+"} desc="Lines of code added" />
            </div>
        </div>
    );
};