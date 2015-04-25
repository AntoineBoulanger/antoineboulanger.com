var gulp = require('gulp');
var csscomb = require('gulp-csscomb');

gulp.task('sort', function () {
    return gulp.src('src/styles/**/*.less')
        .pipe(csscomb())
        .pipe(gulp.dest('src/styles'));
});