"use client"
import React from 'react';
import Image from 'next/image';
import { Accordion, AccordionItem, Button } from '@nextui-org/react';
import Link from 'next/link';
import { projects } from '@/components/data';

export default function Projects() {
  return (
    <Accordion className="px-0" defaultExpandedKeys={['0']} selectionMode="multiple">
      {projects.map((project, index) => (
        <AccordionItem
          key={index}
          aria-label={project.title}
          title={<h1 className="font-semibold text-[1.4rem]">{project.title}</h1>}
          subtitle={<span>{project.subtitle}</span>}
          startContent={<Image className="w-[54px] h-[40px] object-cover rounded-lg" src={project.thumbnail} alt="image" placeholder="blur" draggable="false" />}
        >
          <div className="mb-5 relative">
            {project.isVideo ? (
              <video src={project.media} className="h-full w-full object-cover rounded-2xl" autoPlay playsInline loop muted draggable="false"></video>
            ) : (
              <Image className="h-full w-full object-cover rounded-2xl" src={project.media} alt="image" placeholder="blur" draggable="false" />
            )}
            <Link href={`/${encodeURIComponent(project.title.toLowerCase().replace(/\s+/g, ''))}`}>
              <Button
                size="sm"
                className="absolute bottom-4 left-4 bg-neutral-400/40 text-neutral-100 backdrop-blur-md border border-white/50 font-medium text-xs rounded-xl shadow-xl"
              >
                VEDI PROGETTO
              </Button>
            </Link>
          </div>
        </AccordionItem>
      ))}
    </Accordion>
  );
}