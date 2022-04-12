import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

// Get path to markdown folder
const MARKDOWN = path.join(process.cwd(), 'MARKDOWN');

export function getPostData(file) { // post data
    const slug = file.replace(/\.md$/, ''); // create slug from filename, without .md extension, if there was one
    const filePath = path.join(MARKDOWN, `${slug}.md`);
    const markdownContent = fs.readFileSync(filePath, 'utf-8');
    const {data, content} = matter(markdownContent);
    const postData = {
        slug,
        ...data,
        content
    }
    return postData;
}

export function getAllPosts() { // all posts
    const files = fs.readdirSync(MARKDOWN);
    const posts = files.map( file => {
        return getPostData(file);
    });
    const sorted = posts.sort( (x,y) => x.date > y.date ? -1 : 1); // sort - get latest
    return sorted;
}

export function getFeaturedPosts() { // featured posts
    const posts = getAllPosts(); // if we had more posts, we wouldn't fetch all ... but for our purposes this is fine
    const featured = posts.filter( post => post.isFeatured);
    return featured;
}

export function getAllPaths() { // get static paths for ind. post page
    const files = fs.readdirSync(MARKDOWN);
    const paths = files.map( file => file.replace(/\.md$/, ''));
    return paths;
}