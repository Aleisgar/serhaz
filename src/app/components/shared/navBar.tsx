import Link from 'next/link';
export default function NavBar() {
    console.log('NavBar rendered');
    return (
        <header>
            <nav className="navbar">
                <ul className={'navbar-content'}>
                    <li>
                        <Link href={'/home'}>Home</Link>
                    </li>
                    <li>
                        <Link href={'/home/services'}>Servicios</Link>
                    </li>
                    <li>
                        <Link href={'/home/blog'}>Blog</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
