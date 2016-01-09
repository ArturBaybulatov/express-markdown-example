### Hello there

```js
const test = {*[Symbol.iterator]() {
  let i = 0
  for (;;) yield i++
}}
 
for (let i of test) {
  console.log(i)
  if (i > 10) break
}
```

http://example.com/
