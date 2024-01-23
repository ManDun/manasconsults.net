'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Skills', href: '/skills' },
    { name: 'Project', href: '/project' },
];

export default function NavLinks() {
    const pathname = usePathname();
    return (
        <div className='flex flex-row items-center leading-none'>
            {links.map((link) => {
                return (
                    <Link
                        key={link.name}
                        href={link.href}
                        className={clsx("flex items-center justify-center gap-2 rounded-md p-3 text-sm font-medium hover:text-teal-600 md:justify-start md:p-2 md:px-3",
                            {
                                'text-teal-600': pathname === link.href,
                            },
                        )}
                    >
                        <p className="ml-10 text-sm uppercase hover:border-b">{link.name}</p>
                    </Link>
                );
            })}
        </div>
    );
}