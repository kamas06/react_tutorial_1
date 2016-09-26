module.exports = function(grunt) {
    grunt.initConfig({
        browserify: {
            dist: {
                options: {
                    browserifyOptions: {
                        debug: true
                    },
                   transform: [['babelify', {presets: ['es2015', 'react']}]]
                },
                files: {
                    "bundle.js": ["js/source/app.js", "js/source/components/*.js"],
                    "discover-bundle.js": ["js/source/discover.js", "js/source/components/*.js"]
                }
            }
        }
    });

    grunt.loadNpmTasks("grunt-browserify");

    grunt.registerTask("default", ["browserify"]);
};
