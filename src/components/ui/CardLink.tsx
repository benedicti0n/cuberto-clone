import { redirect } from 'next/navigation';
import React from 'react'

interface ICardLink {
    imageUrl: string;
    href: string;
    title: string;
}

const CardLink = ({ imageUrl, href, title }: ICardLink) => {
    return (
        <div className='flex flex-col gap-6 aspect-video w-120 rounded-4xl' onClick={() => redirect(href)}>
            <img src={`${imageUrl}`} alt={`${imageUrl}`} className='rounded-3xl object-cover' />
            <h1 className='text-white font-light-regular text-lg'>{title}</h1>
        </div>
    )
}

export default CardLink