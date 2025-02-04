import Image from "next/image";
import {Tabs, TabsContent, TabsList, TabsTrigger} from '@/components/ui/tabs';

import {User2, Mail, HomeIcon, PhoneCall, GraduationCap, Calendar, Briefcase} from 'lucide-react';

const infoData = [
     {
        icon: < User2 size={28} />,
        text: 'Ajala John',
     },
     {
        icon: < PhoneCall size={28} />,
        text: '+2349155909454',
     },
     {
        icon: < Mail size={28} />,
        text: 'johnajala84@gmail.com',
     },
     {
        icon: < Calendar size={28} />,
        text: 'Born on 4 April',
     },
     {
        icon: < GraduationCap size={28} />,
        text: 'Diploma on Software Development',
     },
     {
        icon: <HomeIcon size={28} />,
        text: 'Abuja, Nigeria',
     },
];

const qualificationData = [
    {
        title: 'Education',
        data: [
            {
                degree: 'Cerficate on Software Development',
                institution: 'Gomycode, Lagos',
                year: '2024',
            },
            {
                degree: 'National Diploma in Business Management',
                institution: 'Lagos State Polytechnic',
                year: '2018-2021',
            },
            {
                degree: 'Cerficate on Customer Service',
                institution: 'Total request Limited.',
                year: '2016',
            },
        ],
    },
    {
        title: 'Experience',
        data: [
            {
                Position: 'Intern as Software Developer',
                Company: 'Gomycode, Lagos',
                year: '2024',
            },
            {
                Position: 'Front Office Supervisor',
                Company: 'Smridu Nig. Limited',
                year: '2019-2022',
            },
            {
                Position: 'Customer Care Representative (CSR)',
                Company: 'Multichoice Nigeria Limited',
                year: '2018-2019',
            },
        ],
    },
];
 
const skillData = [
    {
        title: 'Skills',
        data: [
            {
                name: 'HTML, CSS',
            },
            {
                name: 'Front-end Development',
            },
            {
                name: 'JavaScript, React',
            },
            {
                name: 'Back-end Development',
            },
            {
                name: 'MongoDB, Postman',
            },
        ],
    },
    {
        title: 'Tools',
        data: [
            {
                imgPath: '/assets/vscode.svg',
            },
            {
                imgPath: '/assets/figma.svg',
            },
            {
                imgPath: '/assets/notion.svg',
            },
            {
                imgPath: '/assets/wordpress.svg',
            },
        ],
    }
];
const About = () => {
    const getData = (arr, title) => {
        return arr.find((item) => item.title === title);
    };

  return (
<section className="xl:h-[860px] pb-12 xl:py-24">
    <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">About Me</h2>
        <div className="flex flex-col xl:flex-row">
            {/* image  */}
            <div className="hidden xl:flex flex-1 relative">
            <img src="/assets/developer copy.png" alt="John "
                 className='w-[350px] h-[350px] rounded-full'/> 
            </div>
            {/* tabs  */}
            <div className="flex-1">
                <Tabs defaultValue="personal">
                    <TabsList className='w-full grid xl:grid-cols-3 xl:max-w-[520px] xl:border dark:border-none'>
                        <TabsTrigger className="w-[162px] xl:w-auto" value='personal'>Personal Info</TabsTrigger>
                        <TabsTrigger className="w-[162px] xl:w-auto" value='qualification'>Qualifications</TabsTrigger>
                        <TabsTrigger className="w-[162px] xl:w-auto" value='skills'>Skills & Tools</TabsTrigger>
                    </TabsList>
                    {/* tab contents  */}
                    <div className="text-lg mt-12 xl:mt-8 "> 
                        <TabsContent value='personal'>
                            <div className=" text-center xl:text-left">
                                <h3 className="h3 mb-4">Unmatched Service Quality for Over 5years</h3>
                                <p className="subtitle mx-w-xl mx-auto xl:mx-0">I specalize in crafting intuitive website with cutting-edge technology, 
                                    delivering dynamic and engaging user experiences</p>
                                    {/* icon  */}
                                 <div className="grid xl:grid-cols-2 gap-4 mb-12">
                                        {infoData.map((item, index)=> {
                                            return <div className="flex items-center gap-x-4 mx-auto xl:mx-0" key={index}>
                                                <div className="text-primary">{item.icon}</div>
                                                <div>{item.text}</div>
                                            </div>
                                        })}
                                </div>
                                {/* languages  */}
                                <div className="flex flex-col gap-y-4">
                                 <div className="text-primary ">Language Skills</div>
                                 <div className="border-b border-border"></div>
                                 <div>English, French, Italian</div>
                                </div>
                            </div>
                        </TabsContent>
                        {/* qualification  */}
                        <TabsContent value='qualification'> 
                            <div>
                                <h3 className="h3 mb-6 text-center xl:text-left">My Awesome Journey</h3>
                                {/* Education and Experience wrapper  */}
                                <div className="grid md:grid-cols-2 gap-y-8 ">
                                    {/* experiences */}
                                    <div className="flex flex-col gap-y-6">
                                        <div className="flex gap-x-4 items-center text-[22px] text-primary">
                                            <Briefcase />
                                            <h4 className="capitalize mb-2 font-medium">
                                                {getData(qualificationData, 'Experience').title}
                                            </h4>
                                        </div>
                                        {/* list  */}
                                        <div className="flex flex-col gap-y-4 ">
                                        {getData(qualificationData, 'Experience').data.map((item, index) =>{
                                            const {Company, Position, year} = item;
                                            return(
                                                 <div className="flex gap-x-4 group" key={index}>
                                                    <div className="h-[84px] w-[1px] bg-border relative ml-2 ">
                                                        <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-800"></div>
                                                    </div>
                                                     <div >
                                                         <div className="font-semibold text-xl leading-none mb-2">{Company}</div>
                                                         <div className="text-lg leading-none text-muted-foreground mb-2">{Position}</div>
                                                         <div className="text-base font-medium">{year}</div>
                                                     </div>
                                                 </div>
 
                                            )
                                        })}
                                        </div>
                                    </div>

                                     {/* Education */}
                                     <div  className="flex flex-col gap-y-6">
                                        <div className="flex gap-x-4 items-center text-[22px] text-primary">
                                            <Briefcase />
                                            <h4 className="capitalize mb-2 font-medium">
                                                {getData(qualificationData, 'Education').title}
                                            </h4>
                                        </div>
                                        {/* list  */}
                                        <div className="flex flex-col gap-y-4 ">
                                        {getData(qualificationData, 'Education').data.map((item, index) =>{
                                            const {institution, degree, year} = item;
                                            return(
                                                 <div className="flex gap-x-4 group " key={index}>
                                                    <div className="h-[84px] w-[1px] bg-border relative ml-2 ">
                                                        <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-800"></div>
                                                    </div>
                                                     <div >
                                                         <div className="font-semibold text-xl leading-none mb-2">{institution}</div>
                                                         <div className="text-lg leading-none text-muted-foreground mb-2">{degree}</div>
                                                         <div className="text-base font-medium">{year}</div>
                                                     </div>
                                                 </div>
                                            )
                                        })}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </TabsContent>
                        <TabsContent value='skills'> 
                            <div className="text-center xl:text-left">
                                <h3 className="h3 mb-8">What I Use Everyday</h3>
                                <div className=" mb-16 ">
                                    <h4 className=" text-xl font-semibold">Skills</h4>
                                    <div className="border-b border-border mb-4"></div>
                                    {/* sklill list  */}
                                    <div>
                                     {getData(skillData, 'Skills').data.map((item, index) =>{
                                        const {name} = item;
                                        return (
                                         <div className="w-2/4 text-center xl:text-left mx-auto xl:mx-0" 
                                         key={index}>
                                            <div className=" font-medium">{name}</div>
                                         </div>
                                        );
                                        }
                                     )}
                                     </div>
                                </div>
                                {/* tools  */}
                                <div>
                                    <h4 className="text-xl font-semibold mb-2 xl:text-left"> Tools</h4>
                                    <div className="border-b border-border mb-4"></div>
                                    <div className="flex gap-x-8 justify-center xl:justify-start">
                                        {getData(skillData, 'Tools').data.map((item, index) => {
                                            const {imgPath} = item;
                                            return (
                                            <div key={index}>
                                                <Image src={imgPath} width={48} height={48} alt="" priority />
                                            </div>
                                            );
                                        })}
                                    </div>
                                </div>
                            </div>
                        </TabsContent>
                    </div>
                    </Tabs>
            </div>
        </div>
    </div>
</section>
  )
}

export default About
