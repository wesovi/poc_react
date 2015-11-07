/**
 * Created by Ivan on 3/11/15.
 */


var gulp = require('gulp');

gulp.task('html', ['html-copy-resources']);

gulp.task('html-copy-resources',[],function(){
    gulp.src(['index.html'], {
        base:'./'
    }).pipe(gulp.dest('dist'));
});

