"use client"
import { Description } from '@radix-ui/react-dialog';
import {FaHtml5, FaCss3, FaJs, FaReact, FaAngular, FaPython, FaJava} from 'react-icons/fa';
import {SiTailwindcss, SiNextdotjs } from 'react-icons/si';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { motion } from 'framer-motion';
import { ScrollArea } from '@radix-ui/react-scroll-area';

const about ={
  title:"About Me",
  Description:"Lorem  corporis similique aut ut architecto nam ipsa aperiam iusto voluptatem blanditiis recusandae culpa repellendus! Veniam, corporis? Magnam, voluptas!",
  info: [
    {
      fieldname:"Name",
      fieldValue:"Maheen Shoeb"
    },
    {
      fieldname:"Email",
      fieldValue:"mahinshoeb16@gmail.com"
    },
    {
      fieldname:"Experience",
      fieldValue:"2+ Years"
    },
    {
      fieldname:"Freelance",
      fieldValue:"Available"
    },
    {
      fieldname:"Languages",
      fieldValue:"English, Arabic, Urdu"
    },
  ]
};

const experience = {
  icon: "/assets/badge.svg",
  title: "My experince",
  description: "Lorem ipsum dolor  culpa repellendus! Veniam, culpa repellendus! Veniam, corporis? Magnam, voluptas!",
  items: [
    {
      company: "Khalifa University",
      position: "Research Assistant",
      duration: "January 2024 - Present"
    },
    {
      company: "AIQ",
      position: "Software Engineering Intern",
      duration: "Summer 2023"
    },
    {
      company: "AIQ",
      position: "Software Engineering Intern",
      duration: "Summer 2023"
    },
  ]
};

const education = {
  icon: "/assets/cap.svg",
  title: "My education",
  description: "Lorem Veniam, corporis? aut ut architecto nam  Magnam, voluptas!",
  items: [
    {
      institution: "Khalifa University",
      degree: "Computer Science",
      duration: "August 2020 - Agusut 2024"
    },
  ]
};

const skills= {
  title: "My skills",
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, corporis similique aut ut ex ullam dignissimos architecto nam ipsa aperiam iusto voluptatem blanditiis recusandae culpa repellendus! Veniam, corporis? Magnam, voluptas!",
  skillset: [
    {
      icon: <FaHtml5/>,
      name: "html 5",
    },
    {
      icon: <FaCss3/>,
      name: "css 3",
    },
    {
      icon: <FaJs/>,
      name: "javascript",
    },
    {
      icon: <FaAngular/>,
      name: "angular.js",
    },
    {
      icon: <FaPython/>,
      name: "python",
    },
    {
      icon: <FaJava/>,
      name: "java",
    },
    {
      icon: <SiTailwindcss/>,
      name: "tailwind.css",
    },
    {
      icon: <SiNextdotjs/>,
      name: "next.js",
    },


  ]
};

const Resume = () => {
  return (
    <motion.div initial={{opacity:0}} animate={{
      opacity:1,
      transition:{ delay:2.4, duration:0.4, ease:"easeIn"},
    }}
    className='min-h-[80vh] flex items-center justify-center py-12 xl:py-0'>
      <div className='container mx-auto'>
        <Tabs
        defaultValue='experience'
        className='flex flex-col xl:flex-row gap-[60px]'>
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About Me</TabsTrigger>
          </TabsList>
          <div className='min-h-[70vh] w-full'>

            <TabsContent value="experience" className="w-full">
              <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                <h3 className='text-4xl font-bold'>{experience.title}</h3>
                <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>
                {experience.description}</p>
                <ScrollArea className='h-[400px]'>
                  <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[30px]'>
                    {experience.items.map((item, index)=>{
                      return (
                        <li key ={index} className='bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1'>
                          <span className='text-accent'>{item.duration}</span>
                          <h3 className='text-xl max-w-[260px] min-h-[60px] text-center lg:text-left'>{item.position}</h3>
                          <div className='flex items-center gap-3'>
                            <span className='w-[6px] h-[6px] rounded-full bg-accent'></span>
                            <p className='text-white/60'>{item.company}</p>
                          </div>
                        </li>
                      )
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>


            <TabsContent value="education" className="w-full">
            <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                <h3 className='text-4xl font-bold'>{education.title}</h3>
                <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>
                {education.description}</p>
                <ScrollArea className='h-[400px]'>
                  <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[30px]'>
                    {education.items.map((item, index)=>{
                      return (
                        <li key ={index} className='bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1'>
                          <span className='text-accent'>{item.duration}</span>
                          <h3 className='text-xl max-w-[260px] min-h-[60px] text-center lg:text-left'>{item.degree}</h3>
                          <div className='flex items-center gap-3'>
                            <span className='w-[6px] h-[6px] rounded-full bg-accent'></span>
                            <p className='text-white/60'>{item.institution}</p>
                          </div>
                        </li>
                      )
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>



            <TabsContent value="skills" className="w-full h-full">
            <div className="flex flex-col gap-[30px]">
              <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                  <h3 className='text-4xl font-bold'>{skills.title}</h3>
                  <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>
                  {skills.description}</p>
              </div>
              <ul className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]'>
                {skills.skillset.map((skill, index) => {
                  return (
                    <li key={index}>
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger className='w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group'>
                            <div className='text-6xl group-hover:text-accent transition-all duration-300'>
                              {skill.icon}</div>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className='capitalize'>{skill.name}</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>

                    </li>
                  ) 
                })}
              </ul>
            </div>
            </TabsContent>



            <TabsContent value="about" className="w-full text-center xl:text-left">
                <div className='flex flex-col gap-[30px]'>
                  <h3 className='text-4xl font-bold'>{about.title}</h3>
                  <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>{about.Description}</p>
                  <ul className='grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0'>
                    {about.info.map((item, index) => {
                      return (
                        <li key={index}
                        className='flex items-center justify-center xl:justify-start gap-4'>
                          <span className='text-white/60'>{item.fieldname}</span>
                          <span className='text-xl'>{item.fieldValue}</span>
                        </li>
                      )
                    })}
                  </ul>
                </div>
            </TabsContent>


          </div>

        </Tabs>

      </div>
    </motion.div> )
}

export default Resume