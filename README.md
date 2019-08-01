# HotDogApp

>Small hot dog management app built with MEVN stack.

## Quick start

#Install dependencies for server
npm install

#Install dependencies for client
cd client
npm install

#Run Express server
npm run dev

#Run Vue client
npm run serve

You should create a key_dev.js in the server config filder with:
```
module.exports = {
  mongoURI: 'YOUR_OWN_MONGO_URI',
  secretOrKey: 'YOUR_OWN_SECRET'
};
```

