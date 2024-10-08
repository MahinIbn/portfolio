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
            <span className="text-xl">Software & AI Engineer</span>
            <h1 className="h1 mb-6">
              Hello, I'm<br/> <span className="text-accent">Maheen.</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white">Welcome to my portfolio! I'm passionate about pushing the boundaries of technology through innovative Software Development and cutting-edge Deep Learning. </p>
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <a href="https://drive.google.com/drive/folders/16cbxNJ1ok7JK7wBopLFF19rEFqlAuEKG?usp=drive_link">
                <Button variant="outline" size="lg"
                  className="uppercase flex items-center gap-2">
                    <span>Download CV</span>
                    <FiDownload className="text-xl"/>
                </Button>
              </a>
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
      <div className="sm:hidden flex flex-col justify-between items-center text-center p-4">
        <h2 className="text-sm font-semibold text-accent">Explore the side navigation bar for more.</h2>
      </div>
    </section>
  )
}

export default home