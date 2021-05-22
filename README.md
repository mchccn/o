| [a](https://www.npmjs.com/package/@cursorsdottsx/a)
| [b](https://www.npmjs.com/package/@cursorsdottsx/b)
| [c](https://www.npmjs.com/package/@cursorsdottsx/c)
| [d](https://www.npmjs.com/package/@cursorsdottsx/d)
| [e](https://www.npmjs.com/package/@cursorsdottsx/e)
| [f](https://www.npmjs.com/package/@cursorsdottsx/f)
| [g](https://www.npmjs.com/package/@cursorsdottsx/g)
| [h](https://www.npmjs.com/package/@cursorsdottsx/h)
| [i](https://www.npmjs.com/package/@cursorsdottsx/i)
| [j](https://www.npmjs.com/package/@cursorsdottsx/j)
| [k](https://www.npmjs.com/package/@cursorsdottsx/k)
| [l](https://www.npmjs.com/package/@cursorsdottsx/l)
| [m](https://www.npmjs.com/package/@cursorsdottsx/m)
| [n](https://www.npmjs.com/package/@cursorsdottsx/n)
| **o**
| [p](https://www.npmjs.com/package/@cursorsdottsx/p)
| [q](https://www.npmjs.com/package/@cursorsdottsx/q)
| [r](https://www.npmjs.com/package/@cursorsdottsx/r)
| [s](https://www.npmjs.com/package/@cursorsdottsx/s)
| [t](https://www.npmjs.com/package/@cursorsdottsx/t)
| [u](https://www.npmjs.com/package/@cursorsdottsx/u)
| [v](https://www.npmjs.com/package/@cursorsdottsx/v)
| [w](https://www.npmjs.com/package/@cursorsdottsx/w)
| [x](https://www.npmjs.com/package/@cursorsdottsx/x)
| [y](https://www.npmjs.com/package/@cursorsdottsx/y)
| [z](https://www.npmjs.com/package/@cursorsdottsx/z)
|

**O is for Overload**

# @cursorsdottsx/o

Overloading was always a bit confusing (don't even get me started on TypeScript overloads), but never to fear, this library is here.

Though this library does not really go well with TypeScript, it does in fact work extremely well in JavaScript.
No more headaches over what argument is what. It's just separate functions now that you can manage easily.

```js
const overload = require("@cursorsdottsx/o").default;

const overloaded = overload({
    ["string number? object"](str, num) {
        console.log("callback 1 executed");
    },
    ["string boolean number?"](str, bool, num) {
        console.log("callback 2 executed");
    },
});

overloaded("hello world", 420, {}); // => "callback 1 executed"
overloaded("hello world", true, 69); // => "callback 2 executed"
overloaded("hello world", {}); // !! No overload matches this call.
```

Overloads follow a simple syntax, and there are currently on 4 supported types, all of which can be nullable:

-   `string`
-   `number`
-   `boolean`
-   `object`

To make a parameter nullable (and undefined-able), simply place a `?` after the parameter:

-   `string?`
-   `number?`
-   `boolean?`
-   `object?`
