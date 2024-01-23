import { AiOutlineMail } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import Link from 'next/link';
import styles from '@/app/ui/home.module.css';
import Image from 'next/image';
import { Metadata } from 'next';
import Hero from '@/app/ui/portfolio/hero';
import About from '@/app/ui/portfolio/about';
import Navbar from '@/app/ui/portfolio/navbar';

export const metadata: Metadata = {
    title: 'Home',
};

export default function Page() {

    return (
        <div>
            <div className="w-full flex-none md:w-64">
                <Navbar />
            </div>
            <div className="w-full">
                <Hero />
            </div>
            <About />
        </div>
    )
}