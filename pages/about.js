import Head from "next/dist/next-server/lib/head";
import About from "../components/about/About";

export default function AboutPage() {
    return <>
        <Head>
            <title>About Me</title>
            <meta name='description' content='Learn more about Radan' />
        </Head>
        <About />
    </>
}