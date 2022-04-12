import css from './Content.module.css';
import ReactMarkdown from 'react-markdown';
import { PrismLight } from 'react-syntax-highlighter'; // smaller size on build
import atomDark from 'react-syntax-highlighter/dist/cjs/styles/prism/atom-dark';
import js from 'react-syntax-highlighter/dist/cjs/languages/prism/javascript';

import Image from 'next/image';

import Header from './Header';

// If we had more posts about different languages, we would add them here...
PrismLight.registerLanguage('js', js);


export default function Content(props) {
    const {post} = props;

    const imgPath = `/images/posts/${post.slug}/${post.image}`;

    // Overriding default markdown with our custom one for images and code snippets
    const customMarkdown = {
        p(p) {
            const {node} = p;
            if (node.children[0].tagName === 'img') {
                const image = node.children[0];
                return <div className={css.image}>
                    <Image 
                    src={`/images/posts/${post.slug}/${image.properties.src}`} 
                    alt={image.alt} width={600} height={300} />
                </div>
            }
            return <p>{p.children}</p>;
        },
        code(code) {
            const { className, children } = code;
            const language = className.split('-')[1];

            return <PrismLight
            language={language}
            children={children}
            style={atomDark} />
        }
    }

    return <article className={css.content}>
        <Header title={post.title} image={imgPath} />
        <ReactMarkdown components={customMarkdown}>{post.content}</ReactMarkdown>
    </article>
}