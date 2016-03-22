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
                }]
            }

        }

    });

    require('load-grunt-tasks')(grunt);

    // 4. Register tasks
    grunt.registerTask('build', []);

};