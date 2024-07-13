import Photo from "@/components/Photo"
import Socials from "@/components/Socials"
import Stats from "@/components/Stats"
import { Button } from "@/components/ui/button"
import { Heading1 } from "lucide-react"
import {FiDownload} from 'react-icons/fi'


const home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          <div className="text-center xl:text-left">
            <span className="text-xl">Software Engineer</span>
            <h1 className="h1 mb-6">
              Hi, I'm <br/> <span className="text-accent">Maheen Shoeb</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white">My expertise lies in Software development and Deep Learning
              where I am proficient in multiple programming languages and tools. </p>
          <div className="flex flex-col xl:flex-row items-center gap-8">
            <Button variant="outline" size="lg" 
              className="uppercase flex items-center gap-2">
                <span>Download CV</span>
                <FiDownload className="text-xl"/>
            </Button>
            <div className="mb-8 xl:mb-0">
              <Socials containerStyles="flex gap-6" iconStyles="w-9 h-9 border border-accent 
              rounded-full flex justify-center items-center text-accent text-base hover:bg-accent 
              hover:text-primary hover:transition-all duration-500"/>
            </div>
          </div>
          
          </div>

            <div className="order-1 xl:order-none mb-8 xl:mb-0">
              <Photo/>
            </div>
        </div>

      </div>
      <Stats/>
    </section>
  )
}

export default home