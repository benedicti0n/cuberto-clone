import React from 'react'
import { VelocityScroll } from '../magicui/scroll-based-velocity'
import CircularPing from '../ui/CircularPing'
import { ArrowUpRight } from 'lucide-react'
import SocialLinkRibbon from './SocialLinkRibbon'
import { TextAnimate } from '../magicui/text-animate'
import Button from '../ui/Button'

const socials = [
    { key: "1", platform: "Instagram", link: "www.instagram.com", icon: <ArrowUpRight className='h-12 w-12' /> },
    { key: "2", platform: "Instagram", link: "www.instagram.com", icon: <ArrowUpRight className='h-12 w-12' /> },
    { key: "3", platform: "Instagram", link: "www.instagram.com", icon: <ArrowUpRight className='h-12 w-12' /> },
    { key: "4", platform: "Instagram", link: "www.instagram.com", icon: <ArrowUpRight className='h-12 w-12' /> },
    { key: "5", platform: "Instagram", link: "www.instagram.com", icon: <ArrowUpRight className='h-12 w-12' /> },
    { key: "6", platform: "Instagram", link: "www.instagram.com", icon: <ArrowUpRight className='h-12 w-12' /> },
    { key: "7", platform: "Instagram", link: "www.instagram.com", icon: <ArrowUpRight className='h-12 w-12' /> },
]

const Socials = () => {
    return (
        <div className='w-full min-h-screen bg-black pt-32'>
            <VelocityScroll numRows={1} defaultVelocity={100}>
                <h1 className='text-[12rem] text-white font-regular px-10 tracking-tighter'>Follow Us</h1>
                <CircularPing />
            </VelocityScroll>

            <div className='w-full'>
                <h1 className='uppercase text-sm text-white font-light-regular px-20 py-12 border-b-1 border-white/20'>Social media and contacts</h1>

                {socials.map((social) => {
                    return (
                        <SocialLinkRibbon key={social.key} platform={social.platform} link={social.link} icon={social.icon} />
                    )
                })}
            </div>

            <div className="w-full px-20 flex relative z-10 bg-black py-24">
                <div className="w-1/2 flex flex-col text-light-regular">
                    <div className='flex items-center gap-4'>
                        <TextAnimate className="text-white text-xs items-center uppercase">
                            Main Office
                        </TextAnimate>
                        <TextAnimate className="text-white text-2xl">
                            901 N Pitt Street
                        </TextAnimate>
                    </div>
                    <TextAnimate className="text-white text-2xl">
                        Alexandria VA, 22314
                    </TextAnimate>
                    <Button className='border-1 border-white rounded-4xl w-fit text-white uppercase p-4 text-2xl mt-8'>Info@cuberto.com</Button>
                </div>

                <div className="w-1/2 flex flex-col text-light-regular">
                    <div className='flex items-center gap-4'>
                        <TextAnimate className="text-white text-xs items-center uppercase">
                            Second Office
                        </TextAnimate>
                        <TextAnimate className="text-white text-2xl">
                            901 N Pitt Street
                        </TextAnimate>
                    </div>
                    <TextAnimate className="text-white text-2xl">
                        342/1, 11000 Prague
                    </TextAnimate>
                    <Button className='border-1 border-white rounded-4xl w-fit text-white uppercase p-4 text-2xl mt-8'>+1 301 549 9309</Button>
                </div>
            </div>
        </div>
    )
}

export default Socials