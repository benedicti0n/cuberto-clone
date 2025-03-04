import React from 'react'
import { TextAnimate } from '../ui/magicui/text-animate'
import * as motion from "motion/react-client"

const Landingpage = () => {
    return (
        <div className='h-[90vh] w-full flex flex-col relative'>
            <div className='flex justify-between items-center pt-6 w-full px-12'>
                <h1 className='text-2xl'>cuberto</h1>
                <h1 className='font-light-regular text-base pr-13'>menu</h1>
            </div>
            <div className='h-full mx-40 my-20 flex flex-col justify-center text-8xl'>
                <TextAnimate
                    animation="slideUp"
                    by="word"
                    className='font-regular'
                    style={{ animationDelay: "0s" }} // Start immediately
                >
                    We are a digital
                </TextAnimate>

                <div className='flex items-center mt-2 gap-4'>
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            duration: 0.4,
                            scale: { type: "spring", visualDuration: 1, bounce: 0 },
                        }}
                    >
                        <video src="/assets/header.mp4" autoPlay muted loop className='rounded-full h-28' />
                    </motion.div>
                    <TextAnimate
                        animation="slideUp"
                        by="word"
                        className='font-light-italic'
                        delay={0.3}
                    >
                        design
                    </TextAnimate>
                    <TextAnimate
                        animation="slideUp"
                        by="word"
                        delay={0.6}
                    >
                        and
                    </TextAnimate>
                </div>
                <TextAnimate
                    animation="slideUp"
                    by="word"
                    delay={0.9}
                >
                    motion agency
                </TextAnimate>
            </div>
        </div>
    )
}

export default Landingpage
