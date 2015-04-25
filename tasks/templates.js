var gulp = require('gulp');
var swig = require('gulp-swig');
var data = require('gulp-data');
var gulpFilter = require('gulp-filter');
var yaml = require('js-yaml');
var fs   = require('fs');
var browserSync = require('browser-sync');

gulp.task('templates', function() {
    var filter = gulpFilter(['*', '!src/templates']);

    return gulp.src('src/**/*.html')
        .pipe(data(function(file) {
            return yaml.safeLoad(fs.readFileSync('src/data/data.yml', 'utf8'));
        }))
        .pipe(swig({
            defaults: { cache: false }
        }))
        .pipe(filter)
        .pipe(gulp.dest('.tmp'))
        .pipe(browserSync.reload({stream: true}));
});