import Link from 'next/link';
import { Button } from './ui/button';
import { Download, Send } from 'lucide-react';

import {
    RiBriefcase4Fill,
    RiTeamFill,
    RiTodoFill ,
    RiArrowDownSLine,
} from 'react-icons/ri';

//component

import Badge from './Badge';
import Socials from './Socials';

const Hero = () => {
  return (
    <section className='py-12 xl:py-24 h-[100vh] xl:pt-20 bg-hero bg-no-repeat bg-bottom bg-cover dark:bg-none' >
        <div className='container mx-auto'>
        <div className='flex justify-between gap-x-8 '>
            {/* text */}
            <div className='flex max-w-[800px] flex-col justify-center mx-auto xl:mx-0
            text-center xl:text-left'>
            <div className='text-lg uppercase font-semibold mb-4 text-green-500 tracking-[4px]'>Fullstack Developer</div>
            <h1 className="text-5xl xl:text-[35px] xl:leading-[40px] tracking-[-2px] font-bold mb-4">Hello! My name is Ayomide</h1>
            <p className='subtitle max-w-[490px] mx-auto xl:mx-0'>Brief Description with insights into myself, my vocational journey and what I engage in professionally. I'm a full-stack developer with a passion for web technologies. I build modern, user-friendly applications using React, Next.js, and Tailwind CSS. I love working on projects that impact people's lives and contribute positively to the tech community.</p>
                {/* button */}
                <div className='flex flex-col gap-y-3 md:flex-row gap-x-3 mx-auto xl:mx-0 mb-12'>
                <Link href='/contact'>
                <Button className='gap-x-2'>
                    Contact me <Send size={18} />
                    </Button>
                </Link>
                <Button variant='secondary' className='gap-x-2'>
                    Download Cv <Download size={18} />
                    </Button>
            </div>
                 {/* social */}
            <Socials 
                 containerStyles="flex space-x-6 mx-auto xl:mx-0"  iconsStyles="text-[22px] text-foreground hover:text-primary transition-all"  />       
             </div>
            {/* image */}
            <div className='hidden xl:flex relative '>
                {/* badge  */}
                <Badge containerStyles='absolute top-[24%] -left-[8rem]'
                icon={<RiBriefcase4Fill />} endCountNum={3} badgeText='Years Of Experience' />
                  {/* badge 2 */}
                  <Badge containerStyles='absolute top-[80%] -left-[6rem]'
                icon={<RiTodoFill />} endCountNum={4} endCountText='k' badgeText='Finished Projects' />
                  {/* badge 3 */}
                  <Badge containerStyles='absolute top-[50%] -right-[4rem]'
                icon={<RiTeamFill />} endCountNum={9} endCountText='k' badgeText='Happy Clients' />
                <img src="/assets/developer.png" alt="John Potrait"
                 className='w-[350px] h-[350px] rounded-full'/> 
            </div>
            </div>
            {/* icon  */}
            <div className='hidden md:flex absolute left-2/4 bottom-24 xl:bottom-0 animate-bounce'>
                <RiArrowDownSLine  className='text-3xl text-primary'/>
            </div>
        </div>
    </section>
  )
}

export default Hero


