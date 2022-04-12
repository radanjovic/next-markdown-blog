import css from './FeaturedPosts.module.css';

import List from '../posts/List';

export default function FeaturedPosts(props) {


    return <section className={css.latest}>
        <h2>Featured Posts</h2>
        <List posts={props.posts} />
    </section>
}