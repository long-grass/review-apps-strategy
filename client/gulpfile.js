var gulp = require('gulp');
var sass = require('gulp-sass');
var minifyCss = require('gulp-minify-css');
var clean = require('gulp-clean');
var serve = require('gulp-serve');
var paths = {
  sass: ['./scss/**/*.scss'],
};

gulp.task('serve', serve('www'));

gulp.task('style', function(done) {
  gulp.src('./scss/style.scss')
      .pipe(sass({
        errLogToConsole: true
      }))
      .pipe(gulp.dest('./www/css'))
      .pipe(minifyCss({
        keepSpecialComments: 0
      }))
      .on('end', done);
});



