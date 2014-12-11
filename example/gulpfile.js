var gulp = require('gulp');
var duo = require('gulp-duojs');

gulp.task('compile', function () {
  gulp.src('src/index.js')
    .pipe(duo({
      copy: true
    }))
    .pipe(gulp.dest('./dest'));
  gulp.src('src/index.css')
    .pipe(duo({
      copy: true
    }))
    .pipe(gulp.dest('./dest'));
});
