"use client"
import React, { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from 'next/image';
import Link from 'next/link';
import {Button} from '@nextui-org/react';
import BackImg from "@/public/images/back.png";
import ReDeck from "@/public/images/redeck.png";

interface ProjectProps {
    project: any; // You can replace 'any' with a more specific type if you have defined the structure of your project data
}

export default function Project({ project }: ProjectProps) {
    const ctrls = useAnimation();
  
    const { ref, inView } = useInView({
        threshold: 0.5,
        triggerOnce: true,
    });

    useEffect(() => {
        if (inView) {
            ctrls.start("visible");
        }
        if (!inView) {
            ctrls.start("hidden");
        }
    }, [ctrls, inView]);
    
    const titleAnimation = {
        hidden: {
            opacity: 0,
            y: 0,
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 1,
                ease: [0.2, 0.65, 0.3, 0.9],
            },
        },
    };

    const videoAnimation = {
        hidden: {
            opacity: 0,
            y: 10,
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 1,
                ease: [0.2, 0.65, 0.3, 0.9],
            },
        },
    };

    const textAnimation = {
        hidden: {
            opacity: 0,
            y: 20,
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 1,
                ease: [0.2, 0.65, 0.3, 0.9],
            },
        },
    };
    
    const imageAnimation = {
        hidden: {
            opacity: 0,
            y: 30,
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 1,
                ease: [0.2, 0.65, 0.3, 0.9],
            },
        },
    };

    return (
        <div className='px-6 mx-auto max-w-[1000px]'>
            <motion.h3 className='text-xs font-semibold text-gray-400' ref={ref} aria-hidden="true" initial="hidden" animate={ctrls} variants={titleAnimation}>PROGETTO</motion.h3>
            <motion.h1 className='text-3xl font-medium' aria-hidden="true" initial="hidden" animate={ctrls} variants={titleAnimation}>{project.title}</motion.h1>
            <motion.div className="mt-5 mb-8 shadow-2xl rounded-2xl" aria-hidden="true" initial="hidden" animate={ctrls} variants={videoAnimation}>
                { project.isVideo ? (
                    <video src={project.media} className="h-full w-full object-cover rounded-2xl" autoPlay loop muted draggable="false"></video>
                ) : (
                    <Image className="h-full w-full object-cover rounded-2xl" src={project.media} alt="image" placeholder="blur" draggable="false" />
                )}
                { project.link != 'none' ? (
                    <a href={`https://${project.link}`} target="_blank" className="relative">
                        <Button size="sm" className="absolute bottom-4 left-4 bg-neutral-400/40 text-neutral-100 backdrop-blur-md border border-white/50 font-medium text-xs rounded-xl shadow-xl">
                            VAI AL SITO
                        </Button>
                    </a>
                ) : (
                    <div></div>
                )}
            </motion.div>
            <motion.p className='text-sm font-regular' aria-hidden="true" initial="hidden" animate={ctrls} variants={textAnimation}>{project.description}</motion.p>
            <motion.div className='border-y border-black/[0.14] flex flex-col mt-10 mb-14' aria-hidden="true" initial="hidden" animate={ctrls} variants={textAnimation}>
                <div className='flex flex-row justify-between py-6 px-3'>
                    <h2 className='font-medium'>Cliente</h2>
                    <h2 className='opacity-50'>{project.client}</h2>
                </div>
                <hr className="border-top border-black/[0.14]"/>
                <div className='flex flex-row justify-between py-6 px-3'>
                    <h2 className='font-medium'>Servizio</h2>
                    <h2 className='opacity-50'>{project.service}</h2>
                </div>
                <hr className="border-top border-black/[0.14]"/>
                <div className='flex flex-row justify-between py-6 px-3'>
                    <h2 className='font-medium'>Anno</h2>
                    <h2 className='opacity-50'>{project.year}</h2>
                </div>
                <hr className="border-top border-black/[0.14] mb-1"/>
            </motion.div>
            <motion.div className='flex flex-col gap-8' aria-hidden="true" initial="hidden" animate={ctrls} variants={imageAnimation}>
                {project.images.map((image: any, index: number) => (
                    typeof image == 'string' ? (
                        image.includes('open:') ? (
                            <video src={image.slice(5)} className="h-full w-full object-cover rounded-2xl shadow-xl" controls draggable="false"></video>
                        ) : (
                            <video src={image} className="h-full w-full object-cover rounded-2xl shadow-xl" autoPlay loop muted draggable="false"></video>
                        )
                    ) : (
                        <Image className="h-full w-full object-cover rounded-2xl shadow-xl" src={image} alt="image" placeholder="blur" draggable="false" key={index}/>
                    )
                ))}
            </motion.div>
            <hr className="mt-10 border-top border-black/[0.14]"/>
            <div className='mt-24'>
                <h1 className='font-medium text-2xl'>Pronto per <span className='font-semibold opacity-50'>trasformare</span> il tuo business?</h1>
                <p className='mt-4'>Non esitare a contattarmi nel caso tu abbia qualsiasi domanda riguardo il mio lavoro.</p>
                <Button className="mt-8 px-5 bg-black text-white rounded-full shadow-xl">
                        <Link href="/contact">CONTATTAMI</Link>
                </Button>
            </div>
            <div className='flex flex-row gap-4 mt-24 h-[160px] mb-24'>
                <div className='w-1/2 relative'>
                    <Image className="h-full w-full object-cover rounded-2xl shadow-lg" src={ReDeck} alt="image" placeholder="blur" draggable="false"/>
                    <div className='mx-auto w-full text-center absolute top-1/2'>
                        <Button size='md' className='w-max absolute left-1/2 -translate-x-1/2 -translate-y-1/2 bg-neutral-400/40 text-neutral-100 backdrop-blur-md border border-white/50 font-medium text-[0.75rem] rounded-full shadow-xl'>
                            <Link href="/#projects">ALTRI LAVORI</Link>
                        </Button>
                    </div>
                </div>
                <div className='w-1/2 relative'>
                    <Image className="h-full w-full object-cover rounded-2xl shadow-lg" src={BackImg} alt="image" placeholder="blur" draggable="false"/>
                    <div className='mx-auto w-full text-center absolute top-1/2'>
                        <Button size='md' className='w-max absolute left-1/2 -translate-x-1/2 -translate-y-1/2 bg-neutral-400/40 text-neutral-100 backdrop-blur-md border border-white/50 font-medium text-[0.75rem] rounded-full shadow-xl'>
                            <Link href="/">TORNA ALLA HOME</Link>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}