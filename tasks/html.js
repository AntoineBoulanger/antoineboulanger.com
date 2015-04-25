var gulp = require('gulp');
var minifyHtml = require('gulp-minify-html');
var minifyInline = require('gulp-minify-inline');

gulp.task('html', ['templates'], function () {
    return gulp.src('.tmp/*.html')
        .pipe(minifyHtml({
            conditionals: true, 
            loose: true
        }))
        .pipe(minifyInline())
        .pipe(gulp.dest('dist'));
});