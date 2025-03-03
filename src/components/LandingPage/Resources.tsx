import React from 'react'
import { TextAnimate } from '../magicui/text-animate'
import CardLink from '../ui/CardLink'
import * as motion from "motion/react-client"

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
        <div className='min-h-screen bg-black/90 rounded-t-[5rem] px-40 pt-56 pb-64 relative -top-40'>
            {/* Animated Title */}
            <div className='text-9xl flex flex-col leading-none text-white'>
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
            <div className='overflow-hidden mt-40'>
                <motion.div
                    className="flex gap-10 cursor-grab active:cursor-grabbing"
                    drag="x"
                    dragConstraints={{ left: -1000, right: 0 }} // Adjust based on card count
                    whileTap={{ cursor: "grabbing" }} // Changes cursor on drag
                >
                    {cards.map((card, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ scale: 1.05 }} // Subtle hover effect
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            <CardLink {...card} />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </div>
    )
}

export default Resources
