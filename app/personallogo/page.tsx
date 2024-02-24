import React from 'react'
import { projects } from '@/components/data';
import Project from '@/components/project';

export default function Index() {
    const title = 'personallogo'; //! ONLY MODIFY THIS LINE

    let i = -1;
    for (let ind = 0; ind < projects.length; ind++) {
        if (projects[ind].title.toLowerCase().replace(/\s+/g, '') == title) {
            i = ind;
        }
    }
    const data = projects[i];

    return (
        <main>
            <Project project={data}/>
        </main>
    )
}