import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout(props) {
    return <>
        <Navbar />
        <main>{props.children}</main>
        <Footer />
    </>
}