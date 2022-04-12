---
title: 'Functional React'
summary: "React is the most popular front-end library/framework, based on Javascript. It prouds itself on being 100% JS. Recently, React switched from class-based to functional components, and they're super easy to learn, even for begginers!"
image: 'react.png'
isFeatured: false
date: '2021-04-12'
---

## Pellentesque

In pellentesque [risus](https://google.com) nec eros faucibus sagittis in vulputate elit. Curabitur et dignissim diam. Sed ut tellus iaculis dui gravida molestie. Sed dapibus cursus ex ac accumsan. Integer molestie ex non vestibulum semper. Nam sodales est ac diam tincidunt dictum. Praesent dictum ipsum sed lacus fringilla luctus nec sed nisl. Nam purus nisi, elementum quis tortor a, vehicula placerat felis. Maecenas interdum orci vitae dolor convallis cursus.

Maecenas pellentesque neque et est rutrum, non lobortis mauris rhoncus. Nunc vel iaculis neque, at tincidunt nisl. Quisque sit amet nulla eget felis euismod finibus id id metus. Proin mi elit, elementum id porttitor vel, placerat ornare nisi. Praesent vel massa in arcu iaculis congue et et nisi. Etiam varius nunc a lorem tincidunt malesuada. Etiam volutpat tincidunt dolor eget rutrum.

## Code

```js
import Image from 'next/image';

import css from './Hero.module.css';

export default function Hero() {
    return <section className={css.hero}>
        <div className={css.image}>
            <Image src='/images/hero/radan.jpg' alt='Image showing Radan' width={300} height={300} />
        </div>
        <h1>Hi, I'm Radan</h1>
        <p>and in this blog I write about web development - especially frontend frameworks like React or Next.</p>
    </section>
}
```

## Etiam

Nam consequat lacus porta fringilla iaculis. Etiam ullamcorper odio quis nulla iaculis euismod. Nam porta facilisis est. Nunc sapien sapien, consequat vitae sollicitudin sed, tristique ac nisi. Vestibulum fringilla eget metus non placerat. Praesent vulputate nisi in justo pharetra feugiat. Proin ultrices ac dolor tempus condimentum. Curabitur pulvinar vestibulum nisl feugiat egestas. Quisque non egestas eros, non sodales justo. 

Phasellus tristique ligula sit amet ipsum bibendum, quis ultrices purus aliquet. Etiam dictum, libero at fringilla semper, enim mauris faucibus ante, condimentum dignissim risus nisi eu ex. Nulla nibh lacus, mattis id odio ac, finibus venenatis nunc. Curabitur semper, lectus non blandit vulputate, lectus augue condimentum nunc, mattis accumsan tellus neque vitae arcu.