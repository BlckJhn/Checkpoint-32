import Link from "next/link";
import Image from "next/image";

const Logo = () => {
  return (
    <Link href='/'>
     <Image src='/assets/icon.svg' width={54} height={54} className=' flex align-center justify-center' priority alt='Logo'/>
     <div className="text-lg uppercase font-semibold mb-4 text-primary text-[5rem]tracking-[4px] ">VICTORY</div>
        </Link>
  )
}

export default Logo
