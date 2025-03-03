import React from 'react'
import FlipText from '../FlipText'

interface IButton {
    children: string;
    url?: string;
    className?: string;
}

const Button = ({ children, url, className }: IButton) => {
    return (
        <div className={`${className}`}>
            <FlipText href={`${url}`}>
                {children}
            </FlipText>
        </div>
    )
}

export default Button