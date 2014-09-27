module.exports = function (grunt) {
	'use strict';

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		assemble: {
			options: {
				layout: 'layout.mmm',
				layoutdir: '_source/views/layouts/',
				partials: '_source/views/partials/*.mmm',
			},
			pages: {
				files: [{
					cwd: '_source/views/pages/',
					dest: '',
					expand: true,
					src: '*.mmm',
				}]
			}
		},
		
	});

	/* load every plugin in package.json */
	// grunt.loadNpmTasks('grunt-contrib-connect');
	// grunt.loadNpmTasks('grunt-contrib-watch');
	// grunt.loadNpmTasks('grunt-contrib-less');
	// grunt.loadNpmTasks('grunt-contrib-copy');
	// grunt.loadNpmTasks('grunt-autoprefixer');
	grunt.loadNpmTasks('assemble');

	/* grunt tasks */
	// grunt.registerTask('serve', ['copy', 'less', 'autoprefixer', 'assemble', 'connect:server', 'watch']);
	grunt.registerTask('build', ['assemble']);

};