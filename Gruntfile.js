'use strict';

module.exports = function(grunt) {

  require('load-grunt-tasks')(grunt);

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> - version <%= pkg.version %> - <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'src/<%= pkg.name %>.js',
        dest: 'dist/<%= pkg.name %>.min.js'
      }
    },

    connect: {
      server: {
        options: {
          port: 9000,
          base: 'demo',
          keepalive: true
        }
      }
    },

    babel: {
      options: {
        sourceMap: true,
        presets: ['es2015']
      },
      dist: {
        files: {
          'demo/dist/app.js': 'demo/app.js'
        }
      }
    },

    copy: {
      main: {
        files: [
          {expand: true, cwd: 'node_modules/angular', src: ['angular.min.js'], dest: 'demo/dist/dependencies'},
          {expand: true, cwd: 'dist', src: ['angular-register.min.js'], dest: 'demo/dist/dependencies'}
        ],
      },
    },
  });

  // Default task(s).
  grunt.registerTask('build', ['uglify']);
  grunt.registerTask('demo', ['babel','copy','connect']);
};
