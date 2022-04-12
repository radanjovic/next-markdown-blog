import Image from 'next/image';

import css from './Hero.module.css';

export default function Hero() {
    return <section className={css.hero}>
        <div className={css.image}>
            <Image src='/images/hero/radan.jpg' alt='Image showing Radan' width={300} height={300} />
        </div>
        <h1>Hi, I'm Radan</h1>
        <p>and in this blog I write about web development - especially frontend frameworks like React or Next.</p>
    </section>
}