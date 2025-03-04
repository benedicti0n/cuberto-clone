"use client"
import React, { useEffect, useRef, useState } from 'react'
import * as motion from "motion/react-client"
import { useMotionValue, useSpring, transform, animate } from 'motion/react'

interface CursorProps {
    stickyElement?: React.RefObject<HTMLDivElement> | null;
    isHoveringOnVideo?: boolean;
    isVideoPlaying?: boolean;
}

const Cursor: React.FC<CursorProps> = ({ stickyElement, isHoveringOnVideo, isVideoPlaying }) => {
    const [isHovered, setIsHovered] = useState(false)
    const cursorRef = useRef(null)

    const cursorSize = isHovered ? 44 : (isHoveringOnVideo ? 72 : 8);

    const mousePosition = {
        x: useMotionValue(0),
        y: useMotionValue(0)
    }

    const smoothOptions = { damping: 20, stiffness: 300, mass: 0.5 }
    const smoothMouse = {
        x: useSpring(mousePosition.x, smoothOptions),
        y: useSpring(mousePosition.y, smoothOptions)
    }

    const scale = {
        x: useMotionValue(1),
        y: useMotionValue(1)
    }

    const rotate = (distance) => {
        const angle = Math.atan2(distance.y, distance.x)
        animate(cursorRef.current, { rotate: `${angle}rad` }, { duration: 0 })
    }

    const manageMouseMove = (e: MouseEvent) => {
        if (!stickyElement?.current) return
        const { clientX, clientY } = e;
        const { left, top, height, width } = stickyElement.current.getBoundingClientRect();

        const center = { x: (left + width / 2), y: (top + height / 2) }
        const distance = { x: clientX - center.x, y: clientY - center.y }


        if (isHovered) {
            rotate(distance)
            const absDistance = Math.max(Math.abs(distance.x), Math.abs(distance.y))
            const newScaleX = transform(absDistance, [0, width / 2], [1, 1.3])
            const newScaleY = transform(absDistance, [0, width / 2], [1, 0.8])

            scale.x.set(newScaleX)
            scale.y.set(newScaleY)

            mousePosition.x.set((center.x - cursorSize / 2) + (distance.x * 0.1));
            mousePosition.y.set((center.y - cursorSize / 2) + (distance.y * 0.1));
        } else {
            mousePosition.x.set(clientX - cursorSize / 2)
            mousePosition.y.set(clientY - cursorSize / 2)
        }
    }

    if (isHoveringOnVideo) {

    }

    const manageMouseOver = () => { setIsHovered(true) }
    const manageMouseLeave = () => {
        setIsHovered(false)
        animate(cursorRef.current, { scaleX: 1, scaleY: 1 }, { duration: 0.1 })
    }

    useEffect(() => {
        if (!stickyElement?.current) return
        window.addEventListener("mousemove", manageMouseMove)
        if (stickyElement.current) {
            stickyElement.current.addEventListener("mouseover", manageMouseOver)
            stickyElement.current.addEventListener("mouseleave", manageMouseLeave)
        }
        return () => {
            window.removeEventListener("mousemove", manageMouseMove)
            if (stickyElement.current) {
                stickyElement.current.removeEventListener("mouseover", manageMouseOver)
                stickyElement.current.removeEventListener("mouseleave", manageMouseLeave)
            }
        }
    }, [isHovered])

    const template = ({ rotate, scaleX, scaleY }) => {
        return `rotate(${rotate}) scaleX(${scaleX}) scaleY(${scaleY})`
    }

    return (
        <motion.div
            ref={cursorRef}
            transformTemplate={template}
            className='w-2 h-2 fixed z-40 rounded-full mix-blend-difference bg-white'
            style={{ left: smoothMouse.x, top: smoothMouse.y, scaleX: scale.x, scaleY: scale.y }}
            animate={{ width: cursorSize, height: cursorSize }}
        >
        </motion.div>
    )
}

export default Cursor
