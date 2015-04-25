var gulp = require('gulp');
var csso = require('gulp-csso');

gulp.task('css', ['styles'], function () {
    return gulp.src('.tmp/styles/*.css')
        .pipe(csso())
        .pipe(gulp.dest('dist/styles'));
});