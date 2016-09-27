module.exports = function (grunt) {
    'use strict';

    require('load-grunt-tasks')(grunt);

    grunt.initConfig({

        clean: {
            server: ['.tmp']
        },

        connect: {
            options: {
                port: 9001,
                // Change this to '0.0.0.0' to access the server from outside.
                hostname: 'localhost',
                livereload: 35728,
                base: 'app'
            },
            livereload: {
                options: {
                    open: true,
                    base: 'app'
                }
            }
        },

        jshint: {
            options: {
                jshintrc: '.jshintrc'
            },
            all: {
                src: [
                    'Gruntfile.js',
                    'app/source/**/*.js'
                ]
            }
        },

        watch: {
            js: {
                files: ['app/source/**/*.js'],
                tasks: [],
                options: {
                    livereload: '<%= connect.options.livereload %>'
                }
            },
            styles: {
                files: ['styles/**/*.css'],
                tasks: []
            },
            gruntfile: {
                files: ['Gruntfile.js']
            },
            livereload: {
                options: {
                    livereload: '<%= connect.options.livereload %>'
                },
                files: [
                    'app/{,*/}*.html',
                    'app/styles/{,*/}*.css'
                ]
            }
        }

    });

    grunt.registerTask('serve', ['clean:server', 'connect:livereload', 'watch']);

};
