'use client'

import React, { useEffect } from 'react'
import { useResizeDetector } from 'react-resize-detector'

const Layout = ({ children }: { children: React.ReactNode }) => {
    const { width } = useResizeDetector()

    useEffect(() => {
        console.log(width)
    }, [width])

    return (
        <div className='flex flex-col'>
            {children}
        </div>
    )
}

export default Layout