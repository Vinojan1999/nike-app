import { headerLogo } from "../../public/images";
import { hamburger } from "../../public/icons";
import { navLinks } from "@/constants";
import Link from "next/link";
import Image from "next/image";


const Nav = () => {
  return (
    <header className="padding-x py-8 absolute z-10 w-full">
        <nav className="flex justify-between items-center max-container"> 
            <Link href="/">
                <Image
                    src={headerLogo}
                    alt="Logo"
                    width={130}
                    height={29}
                    className="m-0"
                />
            </Link>
            <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
              {navLinks.map((item) => (
                <li key={item.label}>
                    <Link 
                        href={item.href}
                        className="font-montserrat leading-normal text-lg text-slate-gray"
                    >
                        {item.label}
                    </Link>
                </li>
              ))}
            </ul>
            <div className='flex gap-2 text-lg leading-normal font-medium font-montserrat max-lg:hidden wide:mr-24'>
                <Link href='/'>Sign in</Link>
                <span>/</span>
                <Link href='/'>Explore now</Link>
            </div>

            {/* Mobile Toggle menu */}
            <div className='hidden max-lg:block'>
                <Image
                    src={hamburger}
                    alt="hamburger icon"
                    width={25} 
                    height={25}
                />
            </div>
        </nav>
    </header>
  )
}

export default Nav