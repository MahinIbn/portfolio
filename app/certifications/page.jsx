"use client";
import {BsArrowDownRight} from "react-icons/bs";
import Link from "next/link";
import { motion } from "framer-motion";
const service = [
  {
    num: '01',
    title: 'Machine Learning Specialization',
    desciption: "A certification from Stanford University on Supervised Machine Learning, Unsupervised Learning, Advanced Learning Algorithms, Recommenders, and Reinforcement Learning.",
    href:"https://www.coursera.org/account/accomplishments/specialization/ECXKR9Z7T9LY"
  },
  {
    num: '02',
    title: 'Deep Learning Specialization',
    desciption: "A certification from DeepLearning.AI that encompasses building neural networks like CNN, RNN, and Transformers for real-world applications like speech recognition, chatbots, translations and more.",
    href:"https://www.coursera.org/account/accomplishments/specialization/VLI7P9P3NEC1"
  },
  {
    num: '03',
    title: 'Generative AI with LLMs',
    desciption: "A certification from DeepLearning.AI on foundational knowledge, practical skills of how large language models works, including various finetuning and prompt engineering techniques.",
    href:"https://www.coursera.org/account/accomplishments/verify/NE48CTUKKMUS"
  },
  {
    num: '04',
    title: 'Google Data Analytics: Foundations',
    desciption: "Certification covers foundational concepts in data analytics, analytical thinking, and practical skills with spreadsheets, query languages, and data visualization.",
    href:"https://www.coursera.org/account/accomplishments/verify/Y2GE8AW94PM8"
  },


]

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
        initial={{opacity:0}}
        animate={{
          opacity:1,
          transition: { delay:2.4, duration:0.4, ease:"easeIn"},
        }}
        className="grid grid-cols-1 md:grid-cols-2 gap-[60px]">
             {service.map((service, index)=>{
              return  <div key={index}
              className="flex-1 flex flex-col justify-center gap-6 group">
                <div className="w-full flex justify-between items-center">
                  <div className="text-5xl font-extrabold text-outline
                  text-transparent transition-all duration-500">{service.num}</div>
                  <Link href={service.href} className="w-[70px] h-[70px] rounded-full bg-white
                  group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45">
                  <BsArrowDownRight className="text-primary text-3xl"/>
                  </Link>
                </div>
                <h2 className="text-[42px] font-bold leading-none text-white
                group-hover:text-accent transition-all duration-500">{service.title}</h2>
                <p className="text-white/60">{service.desciption}</p>
                <div className="border-b border-white/20 w-full"></div>
              </div>
             
             })} 
        </motion.div>
      </div>
    </section>
  )
}

export default Services