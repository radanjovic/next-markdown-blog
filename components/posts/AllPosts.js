import css from './AllPosts.module.css';

import List from './List';

export default function AllPosts(props) {
    return <section className={css.posts}>
        <h1>All Posts</h1>
        <List posts={props.posts} />
    </section>
}