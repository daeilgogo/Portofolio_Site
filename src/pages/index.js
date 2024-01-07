import React from "react"
import HeroSection from "@/components/HeroSection"
import Navbar from "@/components/Navbar"
import AboutSection from "@/components/AboutSection"
import ProjectSections from "@/components/ProjectSections"
import EmailSection from "@/components/EmailSection"
import Footer from "@/components/Footer"
import AchivementSections from "@/components/AchivementSections"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]" >
     <Navbar/>
     <div className="px-5 py-12 mx-auto w-full">
       <HeroSection/>
       <AchivementSections/>
       <AboutSection/>
       <ProjectSections/>
       <EmailSection/>
       <Footer/>
     </div>

    
    </main>
  )
}
