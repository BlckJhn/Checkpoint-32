import { GanttChartSquare, Blocks, Gem, icons } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";    


const servicesData = [
    {
        icons: <GanttChartSquare size={72} strokeWidth={0.8} />,
        title: "Web Design",
        description: "We design a custom website for your business using Next.js, React, and Tailwind CSS."
    },
    {
        icons: <Blocks size={72} strokeWidth={0.8} />,
        title: "Web Development",
        description: "We develop a full blown website using frontend, backend, database, and debugs of programming."
    },
    {
        icons: <Gem size={72} strokeWidth={0.8} />,
        title: " App Development", 
        description: " We design, create, and maintain applications for various device using frontend, backend, database programming tools."
    },
]
const Services = () => {
  return (
    <section className="mb-12 xl:mb-36">
        <div className="container mx-auto">
         <h2 className="section-title mb-12 xl:mb-24 text-center mx-auto">Services I Offer</h2>
         {/* grid items  */}
         <div className="grid xl:grid-cols-3 justify-center gap-y-12 xl:gap-y-24 xl:gap-x-8">
            {servicesData.map((item, index) => {
                return (
                    <Card className='w-full max-w-[424px] h-[300px] bg-p flex flex-col pt-16 pb-10 justify-center items-center relative' key={index}>
                        <CardHeader className='text-primary absolute -top-[60px] '>
                            <div className=" w-[140px] h-[80px] bg-background dark:bg-background flex justify-center items-center">
                            {item.icons}
                            </div>
                        </CardHeader>
                        <CardContent className='text-center '>
                        <CardTitle className='mb-5'>{item.title}</CardTitle>
                            <CardDescription className='text-lg'>{item.description}</CardDescription>
                        </CardContent>
                    </Card>
                )
            })}
         </div>
        </div>
    </section>
  )
}

export default Services
