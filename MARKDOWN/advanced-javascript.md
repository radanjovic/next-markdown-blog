---
title: 'Advanced JavaScript'
summary: "JavaScript is the most important programming language for web development. It powers the web as we know it, since every browser 'speaks' it. You probably don't know it well enough!"
image: 'advanced-javascript.jpg'
isFeatured: false
date: '2021-02-05'
---

## Fusce

Fusce ut iaculis tellus, sit amet lacinia nisl. Praesent nunc ipsum, vulputate ut ex sit amet, efficitur porttitor tortor. Cras lorem urna, posuere at dolor sed, accumsan pellentesque lectus. **Etiam tristique sem vel eros tristique ultrices.** Donec pharetra venenatis vulputate. Mauris sodales vitae libero sed condimentum. Phasellus non neque sed augue euismod vehicula non congue lacus.

Ut non lobortis neque. Pellentesque id nisi molestie, consequat augue non, bibendum turpis. Nulla ac ornare elit. 

Curabitur sodales elit efficitur ullamcorper tempus. Etiam non velit semper, feugiat ligula at, laoreet ligula. Donec varius nunc et bibendum gravida. Nulla eu fringilla ligula. In pharetra, metus in pellentesque dignissim, magna orci hendrerit massa, at consequat tellus nibh eu dolor. Vestibulum interdum efficitur risus nec egestas. 

## Code example

```js
function palindrome(str) {
  let regex = /[a-z0-9]+/ig;
  let newStr = str.match(regex);
  newStr = newStr.join('').toLowerCase();
  let reverseStr = '';
  for (let i = (newStr.length - 1); i>=0; i--) {
    reverseStr += newStr[i];
  }
  if (newStr === reverseStr) {
    return true;
  }
  return false;
}

palindrome("A man, a plan, a canal. Panama");
```

Cras non lacus pharetra, gravida risus ut, porta dolor. Donec quis purus efficitur, congue tellus ac, faucibus magna. Vestibulum arcu libero, dignissim eget posuere id, imperdiet eget diam. Curabitur purus nisl, vulputate sit amet blandit at, lacinia ac magna. Suspendisse gravida, risus id blandit pellentesque, justo risus tincidunt massa, sed gravida ex elit ut magna. Suspendisse semper quis est sit amet mollis.
