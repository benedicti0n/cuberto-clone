import React from 'react'
import { VelocityScroll } from '../magicui/scroll-based-velocity'
import { CardLink1 } from '../ui/CardLink'
import * as motion from "motion/react-client"
import { Dribbble } from 'lucide-react'


const cards = [
    { imageUrl: "/assets/cover.png", href: '/image', title: "Cuberto", icon: <Dribbble className='h-4' /> },
    { imageUrl: "/assets/cover.png", href: '/image', title: "Cuberto", icon: <Dribbble className='h-4' /> },
    { imageUrl: "/assets/cover.png", href: '/image', title: "Cuberto", icon: <Dribbble className='h-4' /> },
    { imageUrl: "/assets/cover.png", href: '/image', title: "Cuberto", icon: <Dribbble className='h-4' /> },
    { imageUrl: "/assets/cover.png", href: '/image', title: "Cuberto", icon: <Dribbble className='h-4' /> },
    { imageUrl: "/assets/cover.png", href: '/image', title: "Cuberto", icon: <Dribbble className='h-4' /> },
]

const UiProjectSection = () => {
    return (
        <div className='relative flex w-full flex-col items-center justify-center overflow-hidden -top-20 mb-20'>
            <VelocityScroll numRows={1} defaultVelocity={100}>
                <h1 className="text-[12rem] font-regular ml-64">New Day -</h1>
                <h1 className="text-[12rem] font-light-italic">New Inspo</h1>
                <video
                    src="/assets/header3.mp4"
                    autoPlay
                    muted
                    loop
                    className="rounded-full h-40"
                />
            </VelocityScroll>

            <div className='overflow-hidden pt-40 pl-140'>
                <motion.div
                    className="flex gap-6 cursor-grab active:cursor-grabbing pl-40"
                    drag="x"
                    transition={{ stiffness: 30, damping: 30, ease: "easeInOut" }}
                    dragConstraints={{ left: -1000, right: 0 }}
                    whileTap={{ cursor: "grabbing" }}
                >
                    {cards.map((card, index) => (
                        <motion.div
                            key={index}
                        >
                            <CardLink1 {...card} />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </div>
    )
}

export default UiProjectSection