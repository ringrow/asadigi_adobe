var gulp = require('gulp');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');

//js minify
gulp.task('js-minify', function(done){
  gulp.src(['./src/**/*.js'],{base:'src'})
      .pipe(uglify())
      .pipe(rename({extname: '.min.js'}))
      .pipe(gulp.dest('dist'));
  return done();
});

//watch task
gulp.task('watch', function(){
 gulp.watch('./src/**/*', gulp.task('js-minify'));
});

//auto sumit
gulp.task('default',
    gulp.parallel('js-minify')
);
