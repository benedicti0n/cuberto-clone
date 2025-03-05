import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';


const ShortPromo = () => {
    // eslint-disable-next-line
    const [isHoveringOnVideo, setIsHoveringOnVideo] = useState(false);
    const [isVideoPlaying, setIsVideoPlaying] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const videoRef = useRef<HTMLVideoElement>(null);

    const handleClick = () => {
        setIsVideoPlaying(!isVideoPlaying);
        setIsModalOpen(!isModalOpen);
    };

    return (
        <>
            <div
                className='relative h-screen w-full cursor-none'
                onMouseEnter={() => setIsHoveringOnVideo(true)}
                onMouseLeave={() => setIsHoveringOnVideo(false)}
                onClick={handleClick}
            >
                <video
                    ref={videoRef}
                    src="/assets/short.mp4"
                    className='h-full w-full object-cover'
                    muted
                    autoPlay
                    loop
                    playsInline
                ></video>
            </div>

            {/* Full screen modal with animation */}
            <AnimatePresence>
                {isModalOpen && (
                    <motion.div
                        initial={{ y: "100%" }}
                        animate={{ y: 0 }}
                        exit={{ y: "-100%" }}
                        transition={{
                            type: "spring",
                            duration: 1,
                            ease: "easeInOut"
                        }}
                        className="fixed inset-0 z-50"
                        onClick={handleClick}
                    >
                        <video
                            className="w-full h-full object-cover"
                            src="/assets/short.mp4"
                            autoPlay
                            muted={false}
                            controls={false}
                        ></video>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default ShortPromo;