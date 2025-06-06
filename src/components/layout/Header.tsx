"use client"

import Link from "next/link";
import { navLinks } from "@/data/navLinks";
import Image from "next/image";
import { Bell, CircleUserRound, Settings } from "lucide-react";
import { usePathname } from "next/navigation";

export default function Header() {
      const pathname = usePathname();

  return (
    <header className='flex items-center justify-between p-3 bg-[#21729F] text-white rounded-full'>
      <div>
        <Image src={"/logo.png"} alt="Logo" width={150} height={40} />
      </div>
      
      <nav className="hidden md:flex gap-6">
        {navLinks.map((item, i) => (
            <Link href={item.href} key={i} className={`text-lg rounded-full px-4 py-1 ${pathname === item.href && "bg-white text-accent"} hover:bg-white hover:text-accent`}> 
                {item.title} 
            </Link>
        ))}
      </nav>

      <div className="flex gap-1">
        <Link href={"#"} className="rounded-full p-1 bg-white"><Settings className="text-accent"/></Link>
        <Link href={"#"} className="rounded-full p-1 bg-white"><Bell className="text-accent"/></Link>
        <div className="border-r-1 border-white/50 w-1"></div>
        <Link href={"#"} className="rounded-full p-1 bg-white"><CircleUserRound className="text-accent"/></Link>
      </div>
    </header>
  )
}
