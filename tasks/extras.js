var gulp = require('gulp');

gulp.task('extras', function () {
    return gulp.src([
        'src/CNAME',
        'src/*.*',
        '!src/*.html'
    ]).pipe(gulp.dest('dist'));
});