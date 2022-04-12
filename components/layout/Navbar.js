import Link from 'next/link';
import Logo from './Logo';

import css from './Navbar.module.css';

export default function Navbar() {
    return <header className={css.header}>
        <Link href='/'>
            <a><Logo /></a>
        </Link>
        <nav>
            <ul>
                <li><Link href='/about'>About</Link></li>
                <li><Link href='/posts'>All Posts</Link></li>
                <li><Link href='/contact'>Contact</Link></li>
            </ul>
        </nav>
    </header>
}