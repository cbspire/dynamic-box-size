var gulp = require('gulp');
var uglify = require('gulp-uglifyjs');
var rename = require('gulp-rename');

gulp.task('compress', function() {
  gulp.src('src/dynamic-box-size.js')
    .pipe(gulp.dest('dist'))
    .pipe(uglify())
    .pipe(rename({extname: '.min.js'}))
    .pipe(gulp.dest('dist'));
});

gulp.task('build', ['compress']);
