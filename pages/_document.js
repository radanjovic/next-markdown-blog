import Document, {Html, Head, Main, NextScript} from 'next/document';

// Adding english as lang to html, and adding div for notifications -
// For using ReactPortal !
class MyDocument extends Document {
    render() {
        return <Html lang='en'>
            <Head />
            <body>
                <Main />
                <NextScript />
                <div id='notification'></div>
            </body>
        </Html>
    }
}

export default MyDocument;
