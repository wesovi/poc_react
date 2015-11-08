/**
 * Created by Ivan on 1/11/15.
 */
var gulp = require('gulp'),
    eslint = require('gulp-eslint');

gulp.task('check', function ()
{
    return gulp.src('./src/**/*.jsx')
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failOnError());
});