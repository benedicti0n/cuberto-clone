import React from "react";
import { motion } from "framer-motion";
import FlipText from "./FlipText";
import UnderLineText from "./ui/UnderLineText";

const SideNav = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
    return (
        <>
            {/* Overlay for closing SideNav when clicking outside */}
            <div
                className={`fixed inset-0 bg-black transition-opacity duration-500 ${isOpen ? "opacity-50 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
                onClick={onClose}
            ></div>

            {isOpen && (
                <h1
                    className='text-2xl px-12 pt-6 fixed text-white z-20 duration-1000 transition-all ease-in-out'
                    style={{ opacity: isOpen ? 1 : 0 }}
                >
                    cuberto
                </h1>
            )}

            {/* Side Navigation Menu */}
            <motion.div
                initial={{ x: "100%" }}
                animate={{ x: isOpen ? "0%" : "100%" }}
                transition={{ type: "tween", duration: 0.6, ease: "easeInOut" }}
                className="fixed top-0 right-0 h-full w-1/2 bg-white text-black shadow-lg flex flex-col items-center justify-center gap-6 z-40 transition-opacity duration-500"
            >
                <div className="px-20 pt-36 pb-16 w-full h-full flex flex-col">
                    <div className="flex">
                        <div className="flex flex-col h-full w-1/2">
                            <h1 className="text-xs text-black/30 font-light-regular pb-12">Social media</h1>
                            <div className="text-sm font-light-regular flex flex-col">
                                <FlipText className="pb-4 w-fit">Linkedin</FlipText>
                                <FlipText className="pb-4 w-fit">Behance</FlipText>
                                <FlipText className="pb-4 w-fit">Dribble</FlipText>
                                <FlipText className="pb-4 w-fit">Instagram</FlipText>
                                <FlipText className="pb-4 w-fit">Youtube</FlipText>
                                <FlipText className="pb-4 w-fit">Twitter</FlipText>
                                <FlipText className="pb-4 w-fit">Github</FlipText>
                            </div>
                        </div>
                        <div className="flex flex-col h-full w-1/2">
                            <h1 className="text-xs text-black/30 font-light-regular pb-12">Menu</h1>
                            <div className="text-5xl font-light-regular flex flex-col tracking-tighter">
                                <FlipText className="pb-4 w-fit">What we do</FlipText>
                                <FlipText className="pb-4 w-fit">Projects</FlipText>
                                <FlipText className="pb-4 w-fit">Company</FlipText>
                                <FlipText className="pb-4 w-fit">Tutorials</FlipText>
                                <FlipText className="pb-4 w-fit">Contacts</FlipText>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col h-full justify-end">
                        <h1 className="text-xs text-black/30 font-light-regular pb-4">Get in touch</h1>
                        <div className="flex">
                            <UnderLineText className="w-1/2">info@cuerto.com</UnderLineText>
                            <UnderLineText>Our workflow</UnderLineText>
                        </div>
                    </div>
                </div>
            </motion.div>
        </>
    );
};

export default SideNav;
