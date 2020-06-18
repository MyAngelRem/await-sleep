# await-sleep   

```js
(async function () {
    for (let argument of arguments) {
        await sleep.sleep(1000);
        await console.log(argument);
    }
})(1, 2, 3);
```