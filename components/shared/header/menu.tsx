import  { ShoppingCartIcon, UserIcon } from "lucide-react";
import Link from 'next/link'

export default function Menu() {
    return (
        <div className='flex justify-end'>
            <nav className='flex gap-3 w-full'>
                <Link href='/signin' className='header-button'>
                    <UserIcon className='h-8 w-8' />
                    Sign In
                </Link>

                <Link href='/cart' className='header-button'>
                <div className="flex items-end"></div>
                    <ShoppingCartIcon className='h-8 w-8' />
                    Cart
                </Link>
            </nav>
        </div>
    )
}