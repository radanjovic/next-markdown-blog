import css from './Post.module.css';

import Link from 'next/link';
import Image from 'next/image';

export default function Post(props) {
    const {title, image, summary, date, slug} = props.post;

    // better readable time
    const time = new Date(date).toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    });

    // dynamic path for img
    const imgPath = `/images/posts/${slug}/${image}`;

    // dynamic path to ind. posts
    const linkPath = `/posts/${slug}`;

    return <li className={css.post}>
        <Link href={linkPath}>
            <a>
                <div className={css.image}>
                    <Image src={imgPath} alt={title} width={300} height={200} layout='responsive' />
                </div>
                <div className={css.content}>
                    <h3>{title}</h3>
                    <time>{time}</time>
                    <p>{summary}</p>
                </div>
            </a>
        </Link>
    </li>
}