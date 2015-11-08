var requireDir = require('require-dir');
var tasks = requireDir('./gulp-tasks');
var gulp = require('gulp');
var watch = require('gulp-watch');
var browserSync = require('browser-sync');
var package = require('./package.json');
var gulpSequence = require('gulp-sequence');


gulp.task('default',gulpSequence('clean','check', ['sass', 'html','scripts'],'watch'));

gulp.task('watch',function(){
    gulp.watch(package.paths.jsx,[gulpSequence('check','scripts')]);
    gulp.watch(package.paths.html,['html']);
    gulp.watch(package.paths.scss,['sass']);
});

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