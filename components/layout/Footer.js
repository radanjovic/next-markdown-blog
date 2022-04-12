import Link from 'next/link';
import css from './Footer.module.css';

export default function Footer() {
    return <footer className={css.footer}>
        <div>
            <ul>
                <li><Link href='/'>Home</Link></li>
                <li><Link href='/about'>About</Link></li>
                <li><Link href='/posts'>All Posts</Link></li>
                <li><Link href='/contact'>Contact</Link></li>
            </ul>
        </div>
        <hr />
        <div>@radanjovic 2022 - All Rights Reserved</div>
    </footer>
}