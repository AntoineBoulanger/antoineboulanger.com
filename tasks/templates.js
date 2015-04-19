var gulp = require('gulp');
var swig = require('gulp-swig');
var data = require('gulp-data');
var yaml = require('js-yaml');
var fs   = require('fs');
var browserSync = require('browser-sync');

gulp.task('templates', function() {
	return gulp.src('src/index.html')
	    .pipe(data(function(file) {
	    	return yaml.safeLoad(fs.readFileSync('src/data/data.yml', 'utf8'));
	    }))
	    .pipe(swig({
	    	defaults: { cache: false }
	    }))
	    .pipe(gulp.dest('.tmp'))
	    .pipe(browserSync.reload({stream: true}));
});