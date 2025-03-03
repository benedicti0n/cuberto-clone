import { redirect } from 'next/navigation';
import React, { ReactNode } from 'react'
import { motion } from 'framer-motion';

interface ICardLink {
    imageUrl: string;
    href: string;
    title: string;
    icon?: ReactNode;
}

export const CardLink = ({ imageUrl, href, title, icon }: ICardLink) => {
    return (
        <div className='flex flex-col gap-6 aspect-video w-120 rounded-4xl'>
            <motion.div
                className='flex flex-col gap-6'
                onClick={() => redirect(href)}
                whileHover={{ scale: 0.98 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
            >
                <img
                    src={`${imageUrl}`}
                    alt={`${imageUrl}`}
                    className='rounded-3xl object-cover'
                />
            </motion.div>
            <h1 className=' font-light-regular text-lg text-white'>{icon} {title}</h1>
        </div>
    )
}

export const CardLink1 = ({ imageUrl, href, title, icon }: ICardLink) => {
    return (
        <div className='flex flex-col gap-4 w-76'>
            <motion.div
                className='flex flex-col'
                onClick={() => redirect(href)}
                whileHover={{ scale: 0.98 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
            >
                <img
                    src={`${imageUrl}`}
                    alt={`${imageUrl}`}
                    className='rounded-2xl object-cover w-76 h-56'
                />
            </motion.div>
            <h1 className='flex items-center font-light-regular text-sm'>{icon} {title}</h1>
        </div>
    )
}