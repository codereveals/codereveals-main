import Image from 'next/image'
import React from 'react'
import logo from "@/app/assets/images/logo.svg"
import Link from 'next/link'
import Button from './Button'

const Header = () => {
    return (
        <header>
            <div className='container'>

                <nav className='py-2 md:py-3 flex justify-between'>
                    <div className="logo">
                        <Image src={logo} width={120} height={80} alt='logo' />
                    </div>

                    <div className='flex gap-8 items-center'>
                        <ul className='flex gap-7'>
                            <li><Link href="" className='hover:text-[--secondaryColor]'>Products</Link></li>
                            <li><Link href="" className='hover:text-[--secondaryColor]'>Services</Link></li>
                            <li><Link href="" className='hover:text-[--secondaryColor]'>About Us</Link></li>
                            <li><Link href="" className='hover:text-[--secondaryColor]'>Contact Us</Link></li>
                        </ul>
                        <Button title="Free Consultation" bgColor="#2CEE91" />
                    </div>

                </nav>
            </div>

        </header>
    )
}

export default Header
