# next-15-nav-issue

```
pnpm i

cd apps/webapp-customer

pnpm build-start:standalone
```

visit localhost:3000/register/account-type/choose and click through. Full document request is made on each page change. Subsequent visits are normal client side navigation.

If it doesn't happen the first time, stop the server and run the same `build-start:standalone` cmd, then just refresh/visit the above page and try again.
