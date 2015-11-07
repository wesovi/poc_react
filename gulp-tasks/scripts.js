/**
 * Created by Ivan on 1/11/15.
 */

var gulp = require('gulp');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');

gulp.task('scripts', function() {

    return browserify({
        extensions: ['.js', '.jsx'],
        entries: './src/Application.jsx',
        debug: true
    })
    .transform(babelify.configure({
        ignore: /(bower_components)|(node_modules)/,
        presets: ["es2015","react"]
    }))
    .bundle()
    .on("error", function (err) {
        console.log("Error : " + err.message);
    })
    .pipe(source('bundle.js'))
    .pipe(gulp.dest('dist'));
});