import React from 'react'

const CircleRotating = ({ bgColor,size }: any) => {
    return (
        <div
            style={{
                // Dynamic conic gradient
                ['--tw-gradient-stops' as any]: `${bgColor} 0deg, ${bgColor} 30deg, transparent 30deg, transparent 180deg, ${bgColor} 180deg, ${bgColor} 210deg, transparent 210deg, transparent 360deg`,
                backgroundImage: `conic-gradient(${bgColor} 0deg, ${bgColor} 30deg, transparent 30deg, transparent 180deg, ${bgColor} 180deg, ${bgColor} 210deg, transparent 210deg, transparent 360deg)`,
            }} className={`${size} bg-transparent absolute rounded-full z-0 group-hover:animate-spin-slow `}></div>
    )
}

export default CircleRotating