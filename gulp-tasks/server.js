/**
 * Created by Ivan on 1/11/15.
 */

var gulp = require('gulp');
var browserSync = require('browser-sync');

gulp.task('server', function() {
    browserSync({
        server: {
            baseDir: './'
        }
    });
})