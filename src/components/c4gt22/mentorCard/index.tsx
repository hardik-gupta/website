import React from "react";
import { mentorsData } from "@/component/components/c4gt22/mentors22"
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 4,
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
    }
};

export const MentorCard = () => {
    const mentorsList = mentorsData;

    return (
        <>
            <div className="mb-10 lg:mb-16">
                <h3 className="text-4xl w-5/6 lg:w-full mx-auto lg:text-5xl text-center font-bold text-blue-950 py-10">Meet the C4GT 2022 Mentors</h3>
                <div className="w-5/6 mx-auto mt-8">
                    <Carousel
                        responsive={responsive}
                        swipeable={false}
                        draggable={false}
                    >
                        {
                            mentorsList.map((mentor, index) => (
                                <div className="flex flex-col items-center mx-auto overflow-hidden w-3/4" key={index}>
                                    <img className="w-72 h-72 object-cover mb-4 hover:scale-105 transition-all duration-200 ease-in hover:ease-out rounded-md" src={`./assets/c4gt22/mentors/${mentor.imageName}`} alt="" />
                                    <div className="w-72 h-24 flex-col items-center flex">
                                        <span className="font-bold text-xl text-black">{mentor.name}</span>
                                        <span className="font-medium text-sm text-center text-black w-3/5">{mentor.description}</span>
                                    </div>
                                </div>
                            ))
                        }
                    </Carousel>
                </div>
            </div>
        </>
    );
};