"use client"
import {motion} from "framer-motion";
import  Image  from "next/image";

const Photo = () => {
  return (
    <div className="w-full h-full relative flex justify-center items-center">
    <motion.div 
        initial={{opacity: 0}}
        animate={{
        opacity: 1,
        transition: { delay: 2, duration: 0.4, ease: "easeInOut" },
        }}
        className="relative"
    >
        <div className="w-[260px] h-[260px] xl:w-[468px] xl:h-[468px] 
                        absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
                        z-10">
        <Image src="/assets/pfp.png" priority quality={100} fill alt="" className="object-contain"/>
        </div>

        <motion.svg 
        className="w-[315px] h-[315px] xl:w-[506px] xl:h-[506px] 
                    relative z-20"
            fill="transparent"
            viewBox="0 0 506 506"
            xmlns="https://www.w3.org/2000/svg">
                <motion.circle cx="253" cy="253" r="250" stroke="#863EF2" strokeWidth="4"
                    strokeLinecap="round" strokeLinejoin="round"
                    initial={{strokeDasharray: "24 10 0 0"}}
                    animate={{
                        strokeDasharray:["15 120 25 25","16 25 92 72","4 250 22 22"],
                        rotate: [120, 360],
                    }}
                    transition={{
                        duration:20,
                        repeat: Infinity,
                        repeatType: "reverse"
                    }}
                />
            </motion.svg>
        </motion.div>
    </div>
  )
}

export default Photo