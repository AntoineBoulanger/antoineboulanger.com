var gulp = require('gulp');
var less = require('gulp-less');
var autoprefixer = require('gulp-autoprefixer');
var browserSync = require('browser-sync');

gulp.task('styles', function () {
    return gulp.src('src/styles/main.less')
        .pipe(less({
            strictMath: true
        }))
        .on('error', function(err) {
            console.log(err.toString());
            this.emit('end');
        })
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('.tmp/styles'))
        .pipe(browserSync.reload({stream: true}));
});