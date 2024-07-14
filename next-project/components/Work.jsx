import Link from "next/link";
import { Button } from "./ui/button";

// required modules

import {Pagination} from 'swiper/modules';
import { Component } from "lucide-react";

// Component
import ProjectCard from '@/components/ProjectCard';

const projectData = [
    {
        image: '/assets/3.png',
        category: 'react js',
        title: 'Nexa Website',
        description: 'A React.js online Learning website',
        link: '/',
        github: '/',
    },
    {
        image: '/assets/2.png',
        category: 'Next js',
        title: 'Lumina Website',
        description: 'A React.js online Learning website',
        link: '/',
        github: '/',
    },
    {
        image: '/assets/4.png',
        category: 'Next js',
        title: 'Evolve Website',
        description: 'A React.js online Learning website',
        link: '/',
        github: '/',
    },
    {
        image: '/assets/1.png',
        category: 'Mern stack',
        title: 'Nova Website',
        description: 'A React.js online Learning website',
        link: '/',
        github: '/',
    }
];

const Work = () => {
  return (
   <section className=" relative mb-12 xl:mb-48">
    <div className="container mx-auto">
    {/* text  */}
    <div className="max-w-[400px] mx-auto xl:mx-0 text-center xl:text-left mb-12 xl:h-[400px] flex flex-col justify-center items-center xl:items-start">
        <h2 className="section-title mb-4">Latest Project</h2>
        <p className="subtitle mb-8">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis reiciendis
             assumenda dolores temporibus porro adipisci eos dolor.</p>
             <Link href='/projects'>
             <Button>All Projects</Button>
             </Link>
    </div>
    </div>
   </section>
  )
}

export default Work

