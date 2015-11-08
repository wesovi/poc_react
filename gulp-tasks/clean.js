/**
 * Created by Ivan on 1/11/15.
 */
var del = require('del');
var gulp = require('gulp');


gulp.task('clean', function() {
    del(['dist/**']);
})