# `@lucid-softworks/noop`

A no-operation callback that accepts any arguments.

```ts
import { noop } from "@lucid-softworks/noop";

const promise = Promise.reject(new Error("Ignored"));
promise.catch(noop);
```
