import { useState } from 'react';
import * as motion from "motion/react-client"
import { AnimatePresence } from 'motion/react';

interface IProjectCard {
    videoSrc: string;
    imageSrc: string;
    name: string;
    description: string;
}

const ProjectCard = ({ videoSrc, imageSrc, name, description }: IProjectCard) => {
    const [isHovered, setIsHovered] = useState<boolean>(false);

    return (
        <div className="h-8/10 flex flex-col gap-6">
            <div
                className="relative aspect-square h-full w-full overflow-hidden rounded-4xl"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <motion.img
                    src={imageSrc}
                    className="absolute inset-0 h-full w-full object-cover rounded-4xl"
                    initial={{ opacity: 1 }}
                    animate={{ opacity: isHovered ? 0 : 1 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                />

                <motion.video
                    src={videoSrc}
                    autoPlay
                    muted
                    loop
                    className="absolute inset-0 h-full w-full object-cover rounded-4xl"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: isHovered ? 1 : 0 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                />
            </div>

            <h1 className="font-light-regular text-white text-2xl">
                <span className="font-regular">{name}</span> - {description}
            </h1>
        </div>
    );
};

export default ProjectCard;
