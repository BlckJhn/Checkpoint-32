import Socials from "./Socials";

const Footer = () => {
  return (
    <footer className="bg-secondary py-12">
      <div className="container mx-auto">
    <div className="flex flex-col items-center justify-between">
      <Socials containerStyles="flex gap-x-6 mx-auto mb-4 xl:mx-0"
       iconsStyles=" text-primary text-[20px]  dark:text-white/70 text-foreground hover:text-white dark:hover:text-primary transition-all" />
      <div className=" text-muted-foreground ">
        Copyright $copy; Ayomide. All rights reserved
      </div>
    </div>
      </div>
    </footer>
  )
}

export default Footer
