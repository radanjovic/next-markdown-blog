import Content from "../../components/posts/post-detail/Content";
import { getPostData, getAllPaths } from "../../helpers/posts-util";
import Head from "next/dist/next-server/lib/head";

export default function SinglePostPage(props) {
    // Individual post page, fetched dynamically from markdown
    const {post} = props;

    return <>
        <Head>
            <title>{post.title}</title>
            <meta name='description' content={post.summary} />
        </Head>
        <Content post={post} />
    </>
}

// We can build static pages every time we add markdown content, 
// but if we make just small changes - revalidate will pick them up -
// no need to build then...
export function getStaticProps(ctx) {
    const slug = ctx.params.slug;

    const post = getPostData(slug);

    return {
        props: {
            post
        },
        revalidate: 1800
    }
}

export function getStaticPaths() {
    const paths = getAllPaths();

    return {
        paths: paths.map( path => ({params: {slug: path}})),
        fallback: false
    }
}