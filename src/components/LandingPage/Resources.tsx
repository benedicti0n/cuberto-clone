import React from 'react'
import { TextAnimate } from '../magicui/text-animate'
import { CardLink } from '../ui/CardLink'
import * as motion from "motion/react-client"
import Button from '../ui/Button'

const cards = [
    { imageUrl: "/assets/cover.png", href: '/image', title: "How to Make UI/UX Website // HTML and CSS development" },
    { imageUrl: "/assets/cover.png", href: '/image', title: "How to Make UI/UX Website // HTML and CSS development" },
    { imageUrl: "/assets/cover.png", href: '/image', title: "How to Make UI/UX Website // HTML and CSS development" },
    { imageUrl: "/assets/cover.png", href: '/image', title: "How to Make UI/UX Website // HTML and CSS development" },
    { imageUrl: "/assets/cover.png", href: '/image', title: "How to Make UI/UX Website // HTML and CSS development" },
    { imageUrl: "/assets/cover.png", href: '/image', title: "How to Make UI/UX Website // HTML and CSS development" },
]

const Resources = () => {
    return (
        <div className='min-h-screen bg-black/90 rounded-t-[5rem]  relative -top-40'>
            {/* Animated Title */}
            <div className='text-9xl flex flex-col leading-28 tracking-tighter text-white px-40 pt-56 pb-40'>
                <TextAnimate by="word" animation='slideUp' className='font-regular top-0 relative'>
                    Development
                </TextAnimate>
                <TextAnimate by="word" animation='slideUp' className='font-regular top-0 relative'>
                    and design
                </TextAnimate>
                <TextAnimate by="word" animation='slideUp' className='font-light-italic'>
                    resources
                </TextAnimate>
            </div>

            {/* Draggable Cards Section */}
            <div className='overflow-hidden '>
                <motion.div
                    className="flex gap-10 cursor-grab active:cursor-grabbing pl-40"
                    drag="x"
                    transition={{ stiffness: 30, damping: 30, ease: "easeInOut" }}
                    dragConstraints={{ left: -1000, right: 0 }}
                    whileTap={{ cursor: "grabbing" }}
                >
                    {cards.map((card, index) => (
                        <motion.div
                            key={index}
                        >
                            <CardLink {...card} />
                        </motion.div>
                    ))}
                </motion.div>
            </div>

            <div className='w-full py-40 border-white flex'>
                <div className='w-1/2'></div>
                <div className='flex flex-col w-1/2 gap-10 pr-68'>
                    <h1 className='text-xl font-regular text-white'>
                        We regularly release design courses, offer advice to newbie designers, walk you through creating awesome effects, and share source files.
                    </h1>
                    <Button className='border-1 border-white w-fit uppercase text-white p-4 rounded-3xl text-xl'>
                        View all resources
                    </Button>
                </div>
            </div>

        </div>
    )
}

export default Resources
