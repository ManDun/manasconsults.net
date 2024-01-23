import Link from 'next/link';
import NavLinks from '@/app/ui/portfolio/nav-links';
import AppLogo from '@/app/ui/app-logo'
import { PowerIcon } from '@heroicons/react/24/outline';

export default function Navbar() {
    return (
        <div className="fixed w-full h-20 z-[100] ease-in-out duration-300 bg-transparent">
            <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
                <AppLogo />
                <ul className="hidden md:flex">
                    <NavLinks />
                </ul>
            </div>
        </div>
    );
}