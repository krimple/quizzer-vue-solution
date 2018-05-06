# Sample Vue.js Project - PTW 2018

Author: Ken Rimple

This is a demo project that generates a quiz taking system. We iterated through some of
this during the class. I'll continue to update it as I have time, but it currently has:

* `semantic-ui-css` CSS styling 
* `semantic-ui-vue` components using the above
* A main component displaying a list of quizzes
* A JSON data store provided by `json-server`, stored in `db.json`
* Data fetching via `axios`
* Data state management with `Vuex`
* A server configuration that launches the vue dev server as well as the `json-server` using concurrently
* Proxy configuration in `vue.config.js`

## Setup

```bash
# optional, if not performed before setup
npm install -g @vue/cli

git clone https://github.com/krimple/quizzer-vue-solution
cd quizzer-vue-solution
npm install
```

## Running

I've set up two `npm` scripts, `json-serve` and `cli-serve`, which are then called by `serve`. I've aliased this to the 
typical `start` script, so you can just do this:

```bash
npm run serve
or
npm start
or
yarn start
```

The VUE Development Server runs on port 8080, and JSON Server runs on port 3001.

Check the `vue.config.js` script to see how the proxy server works.
  
Enjoy!

Ken
