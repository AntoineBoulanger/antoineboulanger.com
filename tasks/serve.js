var gulp = require('gulp');
var browserSync = require('browser-sync');

gulp.task('serve', ['styles', 'templates'], function() {
	browserSync({
		notify: false,
		port: 1000,
		server: ['.tmp', 'src']
	});

	gulp.watch([
		'src/scripts/**/*.js',
		'src/images/**/*'
	]).on('change', browserSync.reload);

	gulp.watch("src/styles/**/*.less", ['styles']);
	gulp.watch(["src/*.html", "src/data/*.yml"], ['templates']);
});