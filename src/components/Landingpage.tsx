import React from 'react'
import { TextAnimate } from './magicui/text-animate'
import * as motion from "motion/react-client"

const Landingpage = () => {
    return (
        <div className='h-9/10 w-full border-2 flex flex-col relative'>
            <div className='flex justify-between pt-8 w-full px-16'>
                <h1 className='text-2xl'>cuberto</h1>
                <h1 className='font-light-regular text-xl pr-20'>menu</h1>
            </div>
            <div className='border-2 border-black h-full mx-40 my-20 flex flex-col justify-center text-9xl'>
                <TextAnimate animation="slideUp" by="word" className='font-regular' >
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
                        <video src="/assets/header.mp4" autoPlay loop className='rounded-full h-32' />
                    </motion.div>
                    <TextAnimate animation="slideUp" by="word" className='font-light-italic'>
                        design
                    </TextAnimate>
                    <TextAnimate animation="slideUp" by="word">
                        and
                    </TextAnimate>
                </div>
                <TextAnimate animation="slideUp" by="word">
                    motion agency
                </TextAnimate>
            </div>
        </div>
    )
}

export default Landingpage