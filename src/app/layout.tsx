import './globals.css';
export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="es" data-theme={'mytheme'}>
            <body>{children}</body>
        </html>
    );
}
