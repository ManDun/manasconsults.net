import { CreditCardIcon } from '@heroicons/react/24/outline';
import Image from "next/image";
import logo from '@/public/logo.png'

export default function AppLogo() {
    return (
        <div
            className="flex flex-row items-center leading-none text-white"
        >
            <Image
                src={logo}
                className="rounded-full shadow-lg shadow-gray-400"
                width="60"
                height="60"
                alt="/"
            />
        </div>
    );
}