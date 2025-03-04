import React, { forwardRef } from 'react'

const NavHeader = forwardRef<HTMLDivElement, React.HTMLProps<HTMLDivElement>>(function NavHeader({ onClick, ...props }, ref) {
    return (
        <div
            ref={ref}
            className='fixed flex flex-col justify-center items-center gap-[3px] z-50 mix-blend-difference top-0 right-0 mt-4 mr-8 p-6 cursor-pointer'
            onClick={onClick}
        >
            <span className='w-5 h-0.5 mix-blend-difference bg-white'></span>
            <span className='w-5 h-0.5 mix-blend-difference bg-white'></span>
        </div>
    )
})

export default NavHeader