module.exports = function(grunt) {

    // 1. All configuration goes here
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        responsive_images: {
            options: {
                engine: 'im',
                upscale: false
            },
            build: {
                options: {
                    sizes: [{
                        width: 200,
                        height: 200,
                        rename: false
                    },
                    {
                        width: 400,
                        height: 400,
                        rename: false
                    },
                    {
                        width: 600,
                        height: 600,
                        rename: false
                    },
                    {
                        width: 800,
                        height: 800,
                        rename: false
                    },
                    {
                        width: 1000,
                        height: 1000,
                        rename: false
                    },
                    {
                        width: 1200,
                        height: 1200,
                        rename: false
                    },
                    {
                        width: 1400,
                        height: 1400,
                        rename: false
                    },
                    {
                        width: 1600,
                        height: 1600,
                        rename: false
                    },
                    {
                        width: 1800,
                        height: 1800,
                        rename: false
                    },
                    {
                        width: 2000,
                        height: 2000,
                        rename: false
                    }]
                },
                files: [{
                    expand: true,
                    cwd: 'src/build-images/original-images/',
                    src: ['**/*.jpg'],
                    custom_dest: 'src/build-images/sizes/{%= width %}/{%= path %}/'
                }]

            }
        },

        imagemin: {

            build: {

                files: [{
                    expand: true,
                    cwd: 'src/build-images/sizes/',
                    src: ['**/*.jpg'],
                    dest: 'src/images'
                },
                {
                    expand: true,
                    cwd: 'src/build-images/sizes/',
                    src: ['**/*.jpg'],
                    dest: 'dist/images'
                }]
            }

        },

        sass: {
            build: {
                files: {
                    'src/build-css/sassed/style.css': 'src/build-css/sass/style.scss'
                }
            }
        },

        watch: {
            build: {
                files: ['src/build-css/sass/style.scss'],
                tasks: ['sass']
            }
        },

        browserSync: {
            bsFiles: {
                src: ['src/index.html', 'src/build-css/style.css', 'src/js/*.js']
            },
            options: {
                server: {
                    baseDir: './src/'
                },
                watchTask: true
            }
        },

        concat: {
            options: {
                separator: '\n'
            },
            // Concats local css into one file to reduce requests
            css: {
                src: ['src/bower_components/canonical.css/canonical.min.css', 'src/build-css/style.css'],
                dest: 'src/build-css/concat/style.css'
            },
            // Concats local js into one file to reduce requests
            js: {
                src: ['src/bower_components/jquery/dist/jquery.min.js', 'src/bower_components/sammy/lib/min/sammy-0.7.6.min.js', 'src/bower_components/knockout/dist/knockout.js', 'src/js/picturefill.min.js', 'src/js/work.js','src/js/app.js'],
                dest: 'src/js/concat/app.js'
            }
        },

        // Adds css prefixes
        autoprefixer: {
            dist: {
                files: {
                    'src/build-css/style.css': 'src/build-css/sassed/style.css'
                }
            }
        },

        cssmin: {
            // Minifies concatenated css and puts in dist folder
            build: {
                files: {
                    'dist/css/style.min.css': 'src/build-css/concat/style.css'
                }
            }
        },

        uglify: {
            // Minifies concatenated js and puts in dist folder
            build: {
                files: {
                    'dist/js/app.min.js': 'src/js/concat/app.js'
                }
            }
        },

        processhtml: {
            build: {
                files: {
                    'dist/index.html': 'src/index.html'
                }
            }
        },

        copy: {
            gifs: {
                expand: true,
                cwd: 'src/gifs/',
                src: '**',
                dest: 'dist/gifs/',
            },
        },

    });

    require('load-grunt-tasks')(grunt);

    // 4. Register tasks
    grunt.registerTask('images', ['responsive_images', 'newer:imagemin', 'copy']);
    grunt.registerTask('watchSync', ['browserSync', 'watch']);
    grunt.registerTask('build', ['sass', 'autoprefixer', 'concat', 'cssmin', 'uglify', 'processhtml']);

};