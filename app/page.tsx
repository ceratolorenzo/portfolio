"use client"
import React, { useEffect } from "react";
import Image from "next/image";
import Link from 'next/link'
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Button } from "@nextui-org/react";

import BackImg from "@/public/images/back.png";
import MeImg from "@/public/images/me.png";
import Projects from "@/components/projects";

export default function Home() {
    const titleSpan = "LORENZO CERATO", title = "È UNO SVILUPPATORE E DESIGNER ITALIANO CON SEDE A VENEZIA.";

    const ctrls = useAnimation();
  
    const { ref } = useInView({
        threshold: 0.5,
        triggerOnce: true,
    });

    useEffect(() => {
        ctrls.start("visible");
    }, []);    

    const wordAnimation = {
        hidden: {},
        visible: {},
    };
      
    const characterAnimation = {
        hidden: {
            opacity: 0,
        },
        visible: {
            opacity: 1,
            transition: {
                duration: 1,
                ease: [0.2, 0.65, 0.3, 0.9],
            },
        },
    };

    const textAnimation = {
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
    }

    const btnAnimation = {
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
    }

    const imgAnimation = {
        hidden: {
            opacity: 0,
        },
        visible: {
            opacity: 1,
            transition: {
                duration: 1,
                ease: [0.2, 0.65, 0.3, 0.9],
            },
        },
    }

    return (
        <main className="mb-[100px] max-w-[1000px] align-center mx-auto scroll-mt-[500px]">
            <div className="flex flex-col md:flex-row w-full">
                <div className="px-6 mt-10 md:mt-20 md:w-3/5 md:pr-12">
                    <h1 className="mb-5 text-[1.4rem] leading-[2.4rem] md:pt-5 md:border-t md:border-black/[0.14]">
                        <span className="opacity-50 font-semibold" aria-label={titleSpan} role="heading">
                            {titleSpan.split(" ").map((word, index) => (
                                <motion.span ref={ref} aria-hidden="true" key={index} initial="hidden" animate={ctrls} variants={wordAnimation} transition={{delayChildren: index * 0.25, staggerChildren: 0.05,}}>
                                    {word.split("").map((character, index) => (
                                        <motion.span aria-hidden="true" key={index} variants={characterAnimation}>{character}</motion.span>
                                    ))}
                                    &nbsp;
                                </motion.span>
                            ))}
                        </span>
                        <p className="font-medium" aria-label={title} role="heading">
                            {title.split("").map((character, index) => (
                                <motion.span aria-hidden="true" key={index} initial="hidden" animate={ctrls} variants={characterAnimation}>{character}</motion.span>
                            ))}
                        </p>
                    </h1>
                    <motion.p animate={ctrls} variants={textAnimation} aria-hidden="true" initial="hidden" className="my-5">Combino le tecnologie più avanzate con la mia esperienza nel design per dar vita a progetti unici e <span className="opacity-50 font-medium">garantirti un sito web eccellente.</span></motion.p>
                    <motion.div animate={ctrls} variants={btnAnimation} aria-hidden="true" initial="hidden">
                        <Button className="mt-5 px-5 bg-black text-white rounded-full shadow-xl">
                            <Link href="/contact">CONTATTAMI</Link>
                        </Button>
                    </motion.div>
                </div>
                <motion.div ref={ref} animate={ctrls} variants={imgAnimation} aria-hidden="true" initial="hidden" className="md:w-2/5">
                    <Image className="w-full object-cover my-12 md:h-[600px] md:rounded-2xl" src={BackImg} alt='image' placeholder='blur' draggable='false'></Image>
                </motion.div>
            </div>
            <hr className="hidden md:block border-top border-black/[0.14]"/>
            <div className="flex flex-col md:flex-row md:mt-12">
                <div className="px-6 scroll-mt-28 md:w-1/2 md:border-r md:border-black/[0.14] md:pt-4" id="projects">
                    <h2 className="font-semibold opacity-50">PROGETTI</h2>
                    <Projects/>
                    <hr className="border-top border-black/[0.14]"/>
                    <hr className="border-top border-black/[0.14] mt-2"/>
                </div>
                <div className="px-6 mt-12 scroll-mt-28 md:w-1/2 md:mt-4" id="skills">
                    <h2 className="font-semibold opacity-50">SKILLS</h2>
                    <div className="flex flex-row mt-4 mb-6">
                        <Image className="w-[30%] mr-4 rounded-xl object-cover" src={MeImg} alt='image' placeholder='blur' draggable='false'></Image>
                        <div>
                            <p className="mb-4">Le mie competenze spaziano dalla progettazione dei <span className="opacity-50 font-semibold">siti web</span> al <span className="opacity-50 font-semibold">graphic design.</span></p>
                            <p>Che tu abbia bisogno di un sito di e-commerce o un sito statico per la tua azienda, <span className="opacity-50 font-semibold">sono la persona che fa per te.</span></p>
                        </div>
                    </div>
                    <hr/>
                    <p className="mt-4">Mi tengo in costante aggiornamento per essere al passo con le <span className="opacity-50 font-semibold">tecnologie</span> più recenti, e ciò che mi distingue è la <span className="opacity-50 font-semibold">passione</span> che metto in tutti i miei lavori.</p>
                    <Button className="mt-8 px-5 bg-black text-white rounded-full shadow-xl">
                        <Link href="/contact">CONTATTAMI</Link>
                    </Button>
                </div>
            </div>
        </main>
    );
}