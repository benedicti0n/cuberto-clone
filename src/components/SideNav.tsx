import React from "react";
import { motion } from "framer-motion";
import FlipText from "./FlipText";
import UnderLineText from "./ui/UnderLineText";

const socialLinks = ["Linkedin", "Behance", "Dribble", "Instagram", "Youtube", "Twitter", "Github"];
const menuItems = ["What we do", "Projects", "Company", "Tutorials", "Contacts"];


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
                className="fixed top-0 right-0 h-full w-1/2 bg-white text-black shadow-lg flex flex-col items-center justify-center gap-6 z-40 transition-opacity duration-700"
            >
                <div className="px-20 pt-36 pb-16 w-full h-full flex flex-col">
                    <motion.div className="flex transition-opacity duration-700" transition={{ type: "", duration: 0.6, ease: "easeInOut" }}>
                        <div className="flex flex-col h-full w-1/2">
                            <h1 className="text-xs text-black/30 font-light-regular pb-12">Social media</h1>
                            <div className="text-sm font-light-regular flex flex-col">
                                {socialLinks.map((link, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: isOpen ? 1 : 0 }}
                                        transition={{ duration: 0.6, delay: index * 0.1 }}
                                    >
                                        <FlipText className="pb-4 w-fit">{link}</FlipText>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                        <div className="flex flex-col h-full w-1/2">
                            <h1 className="text-xs text-black/30 font-light-regular pb-12">Menu</h1>
                            <div className="text-5xl font-light-regular flex flex-col tracking-tighter">
                                {menuItems.map((item, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: isOpen ? 1 : 0 }}
                                        transition={{ duration: 0.6, delay: index * 0.1 }}
                                    >
                                        <FlipText className="pb-4 w-fit">{item}</FlipText>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
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
