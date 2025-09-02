'use client';
import Logo from '../../../../public/img/serhaz-logo.png';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
const navigationItems = [
    { title: 'Inicio', url: '/home' },
    { title: 'Servicios', url: '/home/services' },
    { title: 'Blog', url: 'home/blog' },
    { title: 'Contacto', url: 'home/contacto' },
];

export default function NavBar() {
    const pathname = usePathname();
    return (
        <header>
            <nav className="navbar bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        {/* Logo */}
                        <Link href={'/home'} className="flex items-center gap-3">
                            <Image alt={'Logo'} width={40} height={40} src={Logo} />
                            <div className="hidden sm:block">
                                <h1 className="text-xl font-bold text-gray-900">Serhaz</h1>
                                <p className="text-xs text-gray-500">Transporte Seguro</p>
                            </div>
                        </Link>
                        {/* Navigation Links */}

                        <div className="hidden md:flex items-center space-x-8">
                            {navigationItems.map((item) => (
                                <Link
                                    key={item.title}
                                    href={item.url}
                                    className={`text-sm font-medium transition-colors duration-200 hover:text-blue-600 ${
                                        pathname === item.url ? 'text-blue-600' : 'text-gray-700'
                                    }`}>
                                    {item.title}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
}
