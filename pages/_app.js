import '../styles/globals.css';
import Layout from '../components/layout/Layout';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  // Adding head meta-data for each of the pages
  return <Layout>
    <Head>
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <meta name='author' content='Radan Jovic' />
    </Head>
    <Component {...pageProps} />
  </Layout>
}

export default MyApp
