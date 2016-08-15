var gulp = require('gulp');

var rename = require('gulp-rename');

gulp.task('jscss', function() {
  return gulp.src([
      './bower_components/angular/angular.min.js',
      './bower_components/bg-splitter/js/splitter.js',
      
      './bower_components/bootstrap/dist/css/bootstrap.min.css',
      './bower_components/bootstrap/dist/css/bootstrap-theme.min.css'
    
  ])
    .pipe(gulp.dest('vendor'));
});

gulp.task('fonts', function() {
  return gulp.src([
      './bower_components/bootstrap/dist/fonts/*.ttf',
      './bower_components/roboto-fontface/fonts/roboto/Roboto-Regular.ttf',
      './bower_components/roboto-fontface/fonts/roboto/Roboto-Bold.ttf',

  ])
    .pipe(gulp.dest('vendor/fonts'));
});

gulp.task('build', ['jscss', 'fonts']);