import React from 'react'
import {Chip} from "@nextui-org/react";
import { skills } from "@/components/data";

export default function Footer() {
    return (
        <footer className='pt-[80px] pb-[50px] bg-black text-white relative'>
            <div className='px-6 lg:w-[1000px] lg:mx-auto'>
                <h1 className='font-semibold opacity-50'>LORENZO CERATO</h1>
                <a href="mailto:ceratolorenzo06@gmail.com" className='underline'>ceratolorenzo06@gmail.com</a>
                <h1 className='mt-1'>VENEZIA, IT</h1>
            </div>
            <div className="flex overflow-hidden space-x-6 group mt-10 lg:w-[1000px] lg:mx-auto">
                <div className="flex space-x-6 animate-loop-scroll">
                    {skills.map((skill, index) => (
                        <Chip className='max-w-none p-2 bg-black text-white border border-white' key={index}>{skill}</Chip>
                    ))}
                </div>
                <div className="flex space-x-6 animate-loop-scroll" aria-hidden="true">
                    {skills.map((skill, index) => (
                        <Chip className='max-w-none p-2 bg-black text-white border border-white' key={index}>{skill}</Chip>
                    ))}
                </div>
            </div>
            <div className='lg:w-[1000px] lg:h-full lg:absolute lg:top-0 lg:left-[50%] lg:-translate-x-1/2'>
                <div className='lg:h-[75%] lg:absolute lg:top-[50%] lg:left-0 lg:-translate-y-1/2 lg:w-full lg:border-x lg:border-white/25'></div>
            </div>
        </footer>
    )
}
