import React from 'react';
import NavBar from '@/app/components/shared/navBar';
import Footer from '@/app/components/shared/footer';
export default function HomeLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <main>
            <NavBar />
            {children}
            <Footer />
        </main>
    );
}
