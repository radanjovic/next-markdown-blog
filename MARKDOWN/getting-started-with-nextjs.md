---
title: 'Getting started with NextJS'
date: '2021-10-15'
image: 'getting-started-nextjs.png'
summary: 'NextJS is a production framework for React which makes building fullstack applications super easy, with React. It provides many features that developers just love, like file-name routing, built-in image optimization, SSR and many more.'
isFeatured: true
---

## Nullam

Nullam in augue vulputate, viverra nulla lobortis, tempus ipsum. Nunc gravida malesuada ipsum et semper. Fusce nec porttitor justo. Nulla posuere lectus at rhoncus pellentesque. Morbi bibendum lectus non quam pellentesque sodales. Nunc vitae libero eu lectus gravida feugiat in non dui. Etiam accumsan vulputate viverra. In eu massa nec lorem scelerisque volutpat a id tellus. Quisque eleifend pharetra aliquam. Nam iaculis quis lorem vitae posuere.

Nullam libero purus, tempor sit amet ultricies ut, bibendum sit amet arcu. Cras vitae egestas nibh, ut dignissim lectus. Mauris pulvinar rhoncus urna id tincidunt. Integer tempus ex a dolor dapibus fermentum. 

## Phasellus

Phasellus eros enim, consequat quis condimentum eu, ullamcorper quis nisl. Integer urna turpis, sollicitudin et justo eu, feugiat pretium orci. Phasellus at placerat tortor. Aliquam molestie vehicula tortor, in elementum enim maximus nec. Quisque condimentum neque a cursus fringilla. Interdum et malesuada fames ac ante ipsum primis in faucibus. Etiam ut ipsum eleifend, interdum augue nec, ornare augue. In eu ultrices tortor. Pellentesque mollis leo ultricies ipsum pellentesque, in sodales nisi fringilla. Aenean faucibus sed urna in mattis.

## File-based Routing

![Create routes via your file + folder structure](nextjs-file-based-routing.png)

## Code

```js
import Content from "../../components/posts/post-detail/Content";
import { getPostData, getAllPaths } from "../../helpers/posts-util";
import Head from "next/dist/next-server/lib/head";

export default function SinglePostPage(props) {
    const {post} = props;
    return <>
        <Head>
            <title>{post.title}</title>
            <meta name='description' content={post.summary} />
        </Head>
        <Content post={post} />
    </>
}

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
```