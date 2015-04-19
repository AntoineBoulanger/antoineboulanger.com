var gulp = require('gulp');
var size = require('gulp-size');
var ghPages = require('gulp-gh-pages');

gulp.task('deploy', ['html', 'css', 'images', 'extras'], function () {
	return gulp.src('dist/**/*')
		.pipe(size({title: 'build', gzip: true}))
		.pipe(ghPages());
});