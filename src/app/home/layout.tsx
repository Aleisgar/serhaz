import React from 'react';
import NavBar from '@/app/components/shared/navBar';
export default function HomeLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <main>
            <NavBar />
            {children}
        </main>
    );
}
