import Hero from "../components/home-page/Hero";
import FeaturedPosts from "../components/home-page/FeaturedPosts";
import {getFeaturedPosts} from '../helpers/posts-util';
import Head from "next/dist/next-server/lib/head";

// Homepage with hero and featured posts
export default function HomePage(props) {
    const {posts} = props;

    return <>
        <Head>
            <title>Radan's Blog</title>
            <meta name='description' content='Latest post on the subject of web development' />
        </Head>
        <Hero />
        <FeaturedPosts posts={posts} />
    </>
}

// Getting featured posts with helper funcion and rendering on build
export function getStaticProps() {
    const featured = getFeaturedPosts();

    return {
        props: {
            posts: featured
        }
    }
}