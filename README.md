# Mirage Pretender JS

This repo contains all the code allow MirageJS to use Pretender as its interceptor.

## Documentation

To tell Mirage which interceptor you wish to use, update the server config

```js
import { createServer } from "miragejs"
import PretenderInterceptor from 'mirage-pretender';

export default function () {
  createServer({
    interceptor: new PretenderInterceptor(),  
    routes() {
      this.get("/api/reminders", () => ({
        reminders: [],
      }))
    },
  })
}
```
