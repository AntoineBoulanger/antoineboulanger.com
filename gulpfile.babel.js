import gulp from 'gulp';
import styles from './build/styles.js';
import views from './build/views.js';
import svgs from './build/svgs.js';
import serve from './build/serve.js';
import watch from './build/watch.js';
import { buildStyles, buildViews } from './build/build.js';

const compile = gulp.series(styles, views, svgs);
const main = gulp.series(compile, serve, watch);
const build = gulp.series(compile, buildStyles, buildViews);

gulp.task('default', main);
gulp.task('compile', compile);
gulp.task('build', build);
