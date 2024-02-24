import Thb1 from "@/public/images/ycf-thb.jpeg";
import Thb2 from "@/public/images/berlin.jpg";
import Thb3 from "@/public/images/logo.png";

import Ycf1 from '@/public/images/ycf-works.png';
import Ycf2 from '@/public/images/ycf2.jpeg';
import Ycf3 from '@/public/images/ycf3.jpeg';

import Logo1 from '@/public/images/sketches.png';
import Logo2 from '@/public/images/Flags Mockup.png';

import Project2 from "@/public/images/berlin.jpg";
import Project3 from "@/public/images/logo.png";

export const projects = [
    {
        title: "Your Creative Film",
        subtitle: "Sito web",
        thumbnail: Thb1,
        media: "../images/ycf-main.mp4",
        isVideo: true,
        link: 'yourcreativefilm.com',

        description: "YourCreativeFilm è un team di creativi per i quali la parola d’ordine è solo una: eccellenza. La loro forza? È semplice: condividere idee, pianificare, creare qualcosa che ti vestirà addosso come un abito su misura.",
        client: "Your Creative Film",
        service: 'Web development',
        year: 2023,
        images: ['../images/ycf-home.mp4', Thb1, Ycf1, Ycf2, Ycf3],
    },
    {
        title: "BERLIN",
        subtitle: "Video making",
        thumbnail: Thb2,
        media: Project2,
        isVideo: false,
        link: 'none',

        description: "BERLIN è un progetto personale che ho deciso di affrontare per uscire dalla mia comfort zone. L'idea è partita quando, nella metro di Berlino, ho sentito un'artista di strada suonare una canzone familiare...",
        client: "Lorenzo Cerato",
        service: 'Video Making',
        year: 2023,
        images: ['open:../images/BERLIN.mp4'],
    },
    {
        title: "Personal Logo",
        subtitle: "Logo design",
        thumbnail: Thb3,
        media: Project3,
        isVideo: false,
        link: 'none',

        description: "Il mio logo personale, minimalista e versatile, cattura la mia creatività con linee pulite e colori essenziali. Simboleggia la mia passione e il mio stile distintivo in un design innovativo.",
        client: "Lorenzo Cerato",
        service: 'Logo Design',
        year: 2024,
        images: [Logo1, Logo2],
    },
] as const;

export const skills = [
    "E-commerce",
    "Websites",
    "Innovation",
    "Video making",
    "Creativity",
    "Logos",
    "Technology",
    "E-commerce",
    "Websites",
    "Innovation",
    "Video making",
    "Creativity",
    "Logos",
    "Technology",
] as const;