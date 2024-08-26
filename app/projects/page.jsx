"use client";
import { motion } from "framer-motion";
import React, {useState} from "react";

import {Swiper, SwiperSlide, SwiperSlider} from "swiper/react";
import "swiper/css";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import { Tooltip, TooltipContent, TooltipTrigger, TooltipProvider} from "@/components/ui/tooltip";
import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/ui/WorkSliderBtns";


const projects = [
  {
    num:"01",
    category: "Full stack AI content creator",
    title: "project 1",
    description: "A full-stack web application for social media contect generation using NextJs framework, and Google's Gemini API.",
    stack: [{name: "Next.js"}, {name:"Tailwind.css"}, {name:"Typescript"}, {name: "Postgres SQL"}],
    image: "/assets/content-gen.png",
    live:"https://content-gen-ai.vercel.app/",
    github: "https://github.com/MahinIbn/ContentGenAI",
  },
  {
    num:"02",
    category: "Full stack AI trip planner",
    title: "project 2",
    description: "A full-stack application using React framework, powered by Gemini API for hotel recommendation, trip planning and daily itinerary suggestion.",
    stack: [{ name:"React.js"}, {name:"Tailwind.css"}],
    image: "/assets/trip-rec.png",
    live:"https://travel-planner-ai-ivory.vercel.app/",
    github: "https://github.com/MahinIbn/travel-planner-ai",
  },
  {
    num:"03",
    category: "AI powered personalized tutor",
    title: "project 3",
    description: "An application built using NextJs framework, powered by Falcon 180 B for AI powered personalised course generation and evaluation",
    stack: [{name: "Next.js"}, {name:"Tailwind.css"}, {name:"Javascript"}],
    image: "/assets/tutor.png",
    live:"https://hack-proj.vercel.app/gallery",
    github: "https://github.com/MahinIbn/hack-proj",
  },
  {
    num:"04",
    category: "E-commerce Application ",
    title: "project 4",
    description: "An e-commerce application developed in Java using object orient programming principles, featuring product listings, shopping cart management, and payment processing.",
    stack: [{ name:"Java"}],
    image: "/assets/oop.png",
    live:"",
    github: "https://github.com/MahinIbn/Gift-Store",
  },
  {
    num:"05",
    category: "Machine Learning Project",
    title: "project 5",
    description: "Machine Learning based malware detection and classification using native and custom Android permissions as features.",
    stack: [{ name:"Python"},{ name:"pandas"},{ name:"sklearn"},{ name:"matplotlib"},],
    image: "/assets/ml.png",
    live:"",
    github: "https://github.com/MahinIbn/ML-based-malware-detection-for-Android",
  },
  {
    num:"06",
    category: "Deep Learning Project",
    title: "project 6",
    description: "LSTM and GRU deep learning models for improving quality-of-service in mobile adhoc networks.",
    stack: [{ name:"Python"},{ name:"pandas"},{ name:"numpy"},{ name:"tensorflow-keras"},{ name:"sklearn"},{ name:"seaborn"},{ name:"matplotlib"},],
    image: "/assets/olsr.png",
    live:"",
    github: "https://github.com/MahinIbn/QOS-OLSR-ML",
  },
  {
    num:"07",
    category: "Data Analytics Project",
    title: "project 7",
    description: "Data Analytics of New York City Taxi Trips.",
    stack: [{ name:"Python"},{ name:"pandas"},{ name:"numpy"},{ name:"matplotlib"},],
    image: "/assets/data-analytics.png",
    live:"",
    github: "https://github.com/MahinIbn/Taxi-Trip-Analytics",
  },

]

const Work = () => {
  
  const [project, setProject] = useState(projects[0]);
  const handleSlideChange = (swiper) =>{
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]);
  }




  return (
    <motion.section 
      initial={{ opacity: 0}}
      animate={{opacity:1, transition: {delay:2.0, duration:0.4, ease:"easeIn"}}}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0">
        <div className="container mx-auto">
          <div className="flex flex-col xl:flex-row xl:gap-[30px] h-[50%]">
            <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
              <div className="flex flex-col gap-[30px] h-[50]">
                <div className="text-8xl leading-none font-extrabold text-transparent text-outline">{project.num}</div>
                <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">{project.category}</h2>
                <p className="text-white/60">{project.description}</p>
                <ul className="flex flex-wrap gap-4">
                  {project.stack.map((item, index) => {
                    return (
                      <li key={index} className="text-xl text-accent">
                        {item.name}
                        {index !== project.stack.length -1 && ","}
                      </li>
                    )
                  })}
                </ul>
                <div className="border border-white/20"></div>
                
                <div className="flex items-center gap-4">
                  
                  {project.live ?
                  <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group"> 
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent"/>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live Project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                  </Link> :<></>}

                  <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group"> 
                        <BsGithub className="text-white text-3xl group-hover:text-accent"/>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>GitHub repo</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                  </Link>

                </div>
              </div>
            </div>
            <div className="w-full xl:w-[50%]">
              <Swiper spaceBetween={30} slidesPerView={1} className="xl:h-[520px] mb-12" onSlideChange={handleSlideChange}>
                {projects.map((project, index)=> {
                  return (
                    <SwiperSlide key={index} className="w-full" >
                      <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                        <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10 "></div>
                        <div className="relative w-full h-full bg-[#1c1c22]">
                          <Image src={project.image} fill className="object-scale-down"/>
                        </div>
                      </div>
                      </SwiperSlide> 
                  )
                })}
                <WorkSliderBtns containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all "/>
              </Swiper>
            </div>
          </div>

        </div>
      </motion.section>
  )
}

export default Work