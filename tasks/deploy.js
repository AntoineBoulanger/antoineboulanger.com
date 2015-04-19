var gulp = require('gulp');
var size = require('gulp-size');

gulp.task('deploy', ['html', 'css', 'images'], function () {
	return gulp.src('dist/**/*').pipe(size({title: 'build', gzip: true}));
});