import clsx from 'clsx'
import { randomInt } from 'crypto'
import React from 'react'

const colours = ["bg-[#1F3A93]", "bg-[#D64541]", "bg-[#16A085]", "bg-[#8E44AD]", "bg-[#E67E22]"]

const SkillTag = ({ text }: { text: string }) => {
    const randomIndex = randomInt(colours.length)
    const color = colours[randomIndex]
    return (
        <div className={clsx('px-2 py-1 rounded-md text-white', color)}>
            <span className='font-semibold text-xs'>{text}</span>
        </div>
    )
}

export default SkillTag