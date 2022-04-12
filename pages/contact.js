import ContactForm from "../components/contact/ContactForm";
import Social from "../components/contact/Social";
import Head from "next/dist/next-server/lib/head";

// Contact page
export default function ContactPage() {
    return <>
        <Head>
            <title>Contact Me</title>
            <meta name='description' content='Contact Radan Jovic' />
        </Head>
        <Social />
        <ContactForm />
    </>
}