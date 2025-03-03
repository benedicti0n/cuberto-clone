import React from 'react'
import FlipText from '../FlipText'
import Button from '../ui/Button'

const WhatWeDo = () => {
    return (
        <div className='h-screen flex mx-32 pt-44 gap-32'>
            <div className='flex h-3/4'>
                <video src="/assets/1.mp4" autoPlay muted loop className='h-full' />
                <div className='flex flex-col justify-center font-regular pl-36 pr-16 gap-16'>
                    <h1 className='text-3xl'>Cuberto is a leading digital product agency focused on branding, UI/UX design, mobile, and web development.</h1>
                    <Button url='/services' className="border-1 border-black rounded-full w-fit py-20 px-32 text-3xl ">
                        What we do
                    </Button>
                </div>
            </div>
        </div >
    )
}

export default WhatWeDo