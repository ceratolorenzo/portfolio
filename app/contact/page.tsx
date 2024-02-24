"use client"
import React from 'react'
import { Input, Textarea, Button } from '@nextui-org/react';
import { useRouter } from 'next/navigation'

export default function Contact() {
    const router = useRouter();

    return (
        <div className='px-6 mb-12 scroll-mt-32 max-w-[1000px] mx-auto min-h-[70vh]'>
            <div className="flex flex-col mt-3 mb-8">
                <h1 className="text-sm mt-4 opacity-50 font-semibold cursor-pointer" onClick={() => router.back()}>— TORNA INDIETRO</h1>
                <h1 className="mr-[2vw] text-[1.6rem] leading-[2.4rem] font-medium">HAI UN IDEA O UN PROGETTO IN MENTE?</h1>
            </div>
            <div>
                    <p className="font-medium opacity-50">Scrivimi una mail</p>
                    <a href="mailto:ceratolorenzo06@gmail.com" className='underline text-lg font-medium'>ceratolorenzo06@gmail.com</a>
            </div>
            <div>
                    <hr className="border-top border-black/[0.14] mt-5"/>
                    <p className="text-xs mt-4 mb-5 opacity-50 font-medium">OPPURE</p>
            </div>
            <div>
                <div>
                    <form encType="multipart/form-data" action="https://formbold.com/s/3OnM2" method="POST">
                        <h3 className="font-medium opacity-50 mb-3">Mandami un messaggio</h3>
                        <Input type="name" label="Nome" name="text_input_FBCCAB04-4466-4C0A-A343-EA1D75FC5D66" className='mb-3'></Input>
                        <Input type="email" label="E-Mail" name="email_input_0257A473-E7AA-4EE5-8A97-0C5B6CBC6C91"></Input>
                        <Textarea label="Messaggio" placeholder="Scrivi qui il tuo messaggio..." className="w-full mt-3" name="text_area_BF364791-FC80-40C8-B8AD-9E81C7B08E76"/>
                        <Button type='submit' className="mt-8 px-5 bg-black text-white rounded-full shadow-xl">INVIA MESSAGGIO</Button>
                    </form>
                </div>
            </div>
        </div>
    )
}