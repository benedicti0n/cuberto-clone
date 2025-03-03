import React from 'react'
import * as motion from "motion/react-client"

const DURATION = 0.25;
const STAGGER = 0;

interface IFlipText {
    children: string;
    href?: string;
    duration?: number;
    stagger?: number;
    className?: string
}

const FlipText = ({ children, href, duration = DURATION, stagger = STAGGER, className }: IFlipText) => {
    return (
        <motion.a
            initial="initial"
            whileHover="hovered"
            href={href}
            className={`relative block overflow-hidden whitespace-nowrap ${className}`}
            style={{
                lineHeight: 0.75,
            }}
        >
            <div>
                {/* {children.split("").map((l, i) => ( */}
                <motion.span
                    variants={{
                        initial: {
                            y: 0,
                        },
                        hovered: {
                            y: "-105%",
                        },
                    }}
                    transition={{
                        duration: duration,
                        ease: "easeInOut",
                        delay: stagger, //stagger * i
                    }}
                    className="inline-block"
                // key={i}
                >
                    {children}{/* {l} */}
                </motion.span>
                {/* ))} */}
            </div>
            <div className="absolute inset-0">
                {/* {children.split("").map((l, i) => ( */}
                <motion.span
                    variants={{
                        initial: {
                            y: "100%",
                        },
                        hovered: {
                            y: 0,
                        },
                    }}
                    transition={{
                        duration: duration,
                        ease: "easeInOut",
                        delay: stagger, //stagger*i
                    }}
                    className="inline-block"
                // key={i}
                >
                    {children}{/* {l} */}
                </motion.span>
                {/* ))} */}
            </div>
        </motion.a>
    )
}

export default FlipText