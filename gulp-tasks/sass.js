/**
 * Created by Ivan on 1/11/15.
 */

var autoprefixer = require('gulp-autoprefixer');
var browserSync  = require('browser-sync');
var filter       = require('gulp-filter');
var gulp         = require('gulp');
var notify       = require('gulp-notify');
var plumber      = require('gulp-plumber');
var reload       = browserSync.reload;
var sass         = require('gulp-sass');
var sourcemaps   = require('gulp-sourcemaps');
var minifyCSS    = require('gulp-minify-css');
var concat    = require('gulp-concat');

var onError = function(err) {
    notify.onError({
        title:    "Error",
        message:  "<%= error %>",
    })(err);
    this.emit('end');
};

var plumberOptions = {
    errorHandler: onError,
};

var SRC= ['./src/components/**/*.scss','./assets/stylesheets/**/*.scss'];
var DEST = 'dist/stylesheets/';


gulp.task('sass:watch', function () {
    gulp.watch('./assets/stylesheets/**/*.scss', ['sass']);
});

gulp.task('sass', function() {
    var autoprefixerOptions = {
        browsers: ['last 2 versions'],
    };

    var filterOptions = ['*.css', '!*.map'];

    var reloadOptions = {
        stream: true,
    };

    var sassOptions = {
        includePaths: [

        ]
    };

    return gulp.src(SRC)
        .pipe(plumber(plumberOptions))
        .pipe(sourcemaps.init())
        .pipe(sass(sassOptions))
        .pipe(autoprefixer({autoprefixerOptions, cascade:true}))
        .pipe(sourcemaps.write('./'))
        .pipe(concat('../bundle.css'))
        .pipe(minifyCSS({keepBreaks:true}))
        .pipe(gulp.dest(DEST))
        .pipe(filter(filterOptions))
        .pipe(reload(reloadOptions));
});