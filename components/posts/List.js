import css from './List.module.css';

import Post from './Post';

export default function List(props) {
    const {posts} = props;

    return <ul className={css.list}>
        {posts.map(post => <Post key={post.slug} post={post} />)}
    </ul>
}