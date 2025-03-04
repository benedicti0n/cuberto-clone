import React from 'react'
import * as motion from "motion/react-client"

import ProjectCard from '../ui/ProjectCard'

const projects = [
    { imageSrc: "/assets/frame.jpeg", videoSrc: "/assets/cover.mp4", name: "Punto Pago", description: "The First Super-App in Latin America" },
    { imageSrc: "/assets/frame.jpeg", videoSrc: "/assets/cover.mp4", name: "Project Two", description: "Another awesome project" },
    { imageSrc: "/assets/frame.jpeg", videoSrc: "/assets/cover.mp4", name: "Project Three", description: "Yet another cool app" },
    { imageSrc: "/assets/frame.jpeg", videoSrc: "/assets/cover.mp4", name: "Project Four", description: "A new revolution" },
    { imageSrc: "/assets/frame.jpeg", videoSrc: "/assets/cover.mp4", name: "Project Five", description: "Redefining innovation" },
    { imageSrc: "/assets/frame.jpeg", videoSrc: "/assets/cover.mp4", name: "Project Six", description: "Bringing ideas to life" },
    { imageSrc: "/assets/frame.jpeg", videoSrc: "/assets/cover.mp4", name: "Project Six", description: "Bringing ideas to life" },
    { imageSrc: "/assets/frame.jpeg", videoSrc: "/assets/cover.mp4", name: "Project Six", description: "Bringing ideas to life" },
    { imageSrc: "/assets/frame.jpeg", videoSrc: "/assets/cover.mp4", name: "Project Six", description: "Bringing ideas to life" },
    { imageSrc: "/assets/frame.jpeg", videoSrc: "/assets/cover.mp4", name: "Project Six", description: "Bringing ideas to life" },
    { imageSrc: "/assets/frame.jpeg", videoSrc: "/assets/cover.mp4", name: "Project Six", description: "Bringing ideas to life" },
];

const FeaturedProjects = () => {
    return (
        <div className='min-h-screen bg-black/90 md:rounded-t-[5rem] px-4 pt-20 pb-56 md:px-40 md:pt-32 md:pb-64'>
            <h1 className='text-white font-regular text-7xl md:text-9xl'>Featured</h1>
            <div className='flex items-center mt-2 gap-4'>
                <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                        duration: 0.4,
                        scale: { type: "spring", bounce: 0 },
                    }}
                >
                    <video src="/assets/header2.mp4" autoPlay muted loop className='rounded-full h-20 md:h-32' />
                </motion.div>
                <h1 className='text-7xl md:text-9xl font-light-italic text-white'>projects</h1>
            </div>

            {/* Grid for Projects */}
            <div className='h-full w-full md:w-8/10 mt-16 md:mt-48 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-16'>
                <div className='col-span-1 flex flex-col gap-16 md:gap-24'>
                    {projects.filter((_, index) => index % 2 === 0).map((project, index) => (
                        <ProjectCard key={index} {...project} />
                    ))}
                </div>
                <div className='col-span-1 flex flex-col gap-24 mt-16 md:mt-64'>
                    {projects.filter((_, index) => index % 2 !== 0).map((project, index) => (
                        <ProjectCard key={index} {...project} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default FeaturedProjects;