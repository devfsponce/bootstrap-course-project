module.exports = function (grunt) {
    require('time-grunt')(grunt);
    require('jit-grunt')(grunt, {
        useminPrepare: 'grunt-usemin'
    })

    grunt.initConfig({
        sass: {
            dist: {
                files: [{
                    expand: true,
                    cwd: 'css',
                    src: ["*.scss"],
                    dest: 'css',
                    ext: '.css'
                }]
            }
        },

        watch: {
            files: ['css/*.scss'],
            tasks: ['css']
        },

        browserSync: {
            dev: {
                bsFiles: { //browser files
                    src: [
                        'css/*.css',
                        '*.html',
                        'js/*.js'
                    ]
                },
                options: {
                    watchTask: true,
                    server: {
                        baseDir: './' //Directorio base de nuestro servidor
                    }
                }
            }
        },

        imagemin: {
            dynamic: {
                files: {
                    expand: true,
                    cwd: './',
                    src: 'img/*.{png, gif, jpg, jpeg}',
                    dest: 'dist/'
                }
            }
        },

        copy: {
            html: {
                files: [{
                    expand: true,
                    dot: true,
                    cwd: './',
                    src: ['*.html'],
                    dest: 'dist'
                }]
            }
        },
        clean: {
            build: {
                src: ['dist/']
            }
        },

        cssmin: {
            dist: {}
        },

        uglify: {
            dist: {}
        },

        filerev: {
            options: {
                encoding: 'utf8',
                algorithm: 'md5',
                lenght: 20
            },

            release: {
                files: [{
                    src: [
                        'dist/js/*.js',
                        'dist/css/*.css',
                    ]
                }]
            }
        },

        concat: {
            options: {
                separator: ';'
            },
            dist: {}
        },

        useminPrepare: {

            foo: {
                dest: 'dist',
                src: ['index.html', 'asociate.html', 'profesionales.html', 'psicomotricidad.html']
            },
            options: {
                flow: {
                    steps: {
                        css: ['cssmin'],
                        js: ['uglify']
                    },
                    post: {
                        css: [{
                            name: 'cssmin',
                            createConfig: function (context, block) {
                                var generated = context.options.generated;
                                generated.options = {
                                    keepSpecialComments: 0,
                                    rebase: false
                                }
                            }
                        }]
                    }
                }
            }
        },

        usemin: {
            html: ['dist/index.html', 'dist/asociate.html', 'dist/profesionales.html', 'dist/psicomotricidad.html'],
            options: {
                assetsDir: ['dist', 'dist/css', 'dist/js']
            }
        }
    });


    grunt.registerTask('css', ['sass']);
    grunt.registerTask('default', ['browserSync', 'watch'])
    runt.registerTask('img:compress', ['imagenmin'])
    grunt.registerTask('buil', [
        'clean',
        'copy',
        'imagemin',
        'contat',
        'cssmin',
        'uglify',
        'filerev',
        'usemin'
    ])
};