/**
 * Created by Ivan on 9/11/15.
 */
var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');
var webpack = require('webpack');
var webpackConfig = require("../webpack.config.js");
var stream = require('webpack-stream');

gulp.task('webpack', function() {
    return gulp.src(['src/**/*.jsx','src/**/*.js'])
        .pipe(sourcemaps.init())
        .pipe(stream(webpackConfig))
        //.pipe(uglify())// minifies the code for better compression
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('dist'));

});