import AllPosts from "../../components/posts/AllPosts";
import { getAllPosts } from "../../helpers/posts-util";
import Head from "next/dist/next-server/lib/head";

// Dynamically displaying all posts
export default function AllPostsPage(props) {
    const {posts} = props;

    return <>
        <Head>
            <title>All Posts</title>
            <meta name='description' content='A list of all programming-related posts and tutorials' />
        </Head>
        <AllPosts posts={posts} />
    </>
}

export function getStaticProps() {
    const posts = getAllPosts();
    return {
        props: {
            posts
        }
    }
}