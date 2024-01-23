import Image from "next/image";
import Link from 'next/link';
import { Metadata } from 'next';
import aboutimage from "@/public/about.jpg";

export const metadata: Metadata = {
    title: 'About',
};

export default function About() {

    return (
        <div
            id="about"
            className="w-full md:h-screen p-2 flex items-center py-16 about-bg"
        >
            <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
                <div className="col-span-2">
                    <p className="uppercase text-xl tracking-widest text-[#276778]">
                        About
                    </p>
                    <h2 className="py-4">Who I Am</h2>
                    <p className="py-4">
                        Passionate Software Engineer, Architect, design thinker with over 10
                        years of experience in producing robust, secure and efficient design
                        across Finance, Telecommunications and Utility industry with focus
                        on Digital Automation, recognized for quality and efficiency.
                    </p>
                    <p className="py-2 text-gray-600">
                        Automation advocate with Cloud First approach, proficient in AWS and
                        Azure Cloud services. Engineered solutions using Full Stack, PaaS,
                        IaaS, SaaS. Optimized and digitized processes using BPM tools like
                        IBM BPM, Pega, IBM ODM and automated end to end using UiPath,
                        Automation Anywhere and Pega. Designed and built middle-ware
                        services using Python, IBM IID, IBM MQ.{" "}
                    </p>
                    <p className="py-2 text-gray-600">
                        Lead and trained teams to deliver successful enterprise
                        applications. Established CoE for Automation
                    </p>
                    <Link href="/#projects">
                        <p className="py-2 text-gray-600 underline cursor-pointer">
                            Checkout my latest projects.
                        </p>
                    </Link>
                </div>
                <div className="w-full h-auto m-auto shadow-lg shadow-gray-400 rounded-md flex items-center justify-center hover:scale-105 ease-in duration-300 bg-white">
                    <Image src={aboutimage} className="rounded-md" alt="/" />
                </div>
            </div>
        </div>
    )
}