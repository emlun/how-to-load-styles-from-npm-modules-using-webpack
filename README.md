How to load styles from NPM modules using Webpack
===

This is a demo of how I managed to load [Bootstrap][bootstrap] styles from
`node_modules` in a [Webpack][webpack] build. In short, you just need to
configure Webpack with the right loaders.

An extended discussion of how I arrived at this solution is available
[here][blog].


[bootstrap]: http://getbootstrap.com/
[webpack]: https://webpack.github.io/
[blog]: http://emlun.se/2016/01/30/how-to-load-styles-from-npm-modules-using-webpack.html


Walkthrough
---

The diffs between the first three commits should guide you on how to do this.
Here's a step-by-step walkthrough.

 1. Check out
    [64bd09c](https://github.com/emlun/how-to-load-styles-from-npm-modules-using-webpack/commit/64bd09c326aec3bcd3ae7a9cc6a4a9b9d6cea81a)

    After checking out the commit, install the dependencies and start up the
    dev server:

        $ npm install
        $ npm start

    You should now see a simple "Hello, World!" page with a white background in
    your browser at `http://localhost:8080`.

 2. Check out
    [d04469a](https://github.com/emlun/how-to-load-styles-from-npm-modules-using-webpack/commit/d04469a81f6ace172074a31681b6b6ae755116fa)

    Again, install the dependencies added by the new commit and start up the dev
    server. This time, the demo page should have a black background.

    Look at the diff between the two commits (`$ git diff 64bd09c d04469a`). As
    you can see, we have installed a few more loaders with `$ npm install
    --save-dev` and configured those for use by Webpack. Lastly, we include the
    styles in `main.js` by simply `require`ing them.

 3. Check out
    [280d7d1](https://github.com/emlun/how-to-load-styles-from-npm-modules-using-webpack/commit/280d7d1c6089a473bf315728f32a479d7665fe72)

    Again, install the new dependencies and start up the dev server. This time,
    the demo page should be enhanced with some Bootstrap styles.

    The diff shows how we have yet again added some loaders, which are necessary
    for resolving files (fonts and such) referenced by the Bootstrap styles.
    Finally, we pull in the Bootstrap stylesheets by simply `@import`ing them in
    our `main.scss`. The `~` at the beginning of the module path tells the
    loader to look for the module in `node_modules` instead of trying to resolve
    it as a relative path.
