React Tutorial 1


Run the server from node
```sh
$ node server.js
```

CSS concat
`
cat css/*/* css/*.css | sed 's/..\/..\/images/images/g' > bundle.css
`

Transpile js
`
babel --presets react,es2015 js/source -d js/build
`

Bundle js
`
browserify js/build/app.js -o bundle.js
`
