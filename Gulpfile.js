var requireDir = require('require-dir');
var tasks = requireDir('./gulp-tasks');
var gulp = require('gulp');
//var browserSync = require('browser-sync');




gulp.task('default', ['clean', 'eslint', 'sass', 'html','scripts']);

/**
gulp
    .task('serve', ['clean', 'eslint', 'sass', 'react', 'server'], function() {
        return gulp.watch([
            package.paths.js, package.paths.jsx, package.paths.html, package.paths.less
        ], [
            'eslint', 'sass', 'js', browserSync.reload
        ]);
    });


 .task('serve:minified', [ 'clean', 'eslint', 'less:min', 'js:min', 'server'], function() {
        return gulp.watch([
            package.paths.js, package.paths.jsx, package.paths.html, package.paths.less
        ], [
            'lint', 'less:min', 'js:min', browserSync.reload
        ]);
    });
 **/