import React from 'react';
import { Navbar, Footer } from '@/app/components/shared';
export default function HomeLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <main>
            <Navbar />
            {children}
            <Footer />
        </main>
    );
}
