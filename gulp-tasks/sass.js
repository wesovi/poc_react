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


gulp.task('sass:watch', function () {
    gulp.watch('./assets/stylesheets/**/*.scss', ['sass']);
});

gulp.task('sass', function() {
    var autoprefixerOptions = {
        browsers: ['last 2 versions'],
    };

    var filterOptions = '**/*.css';

    var reloadOptions = {
        stream: true,
    };

    var sassOptions = {
        includePaths: [

        ]
    };
//'./assets/stylesheets/**/*.scss',
    return gulp.src('./src/components/**/*.scss')
        .pipe(plumber(plumberOptions))
        .pipe(sourcemaps.init())
        .pipe(sass(sassOptions))
        .pipe(autoprefixer(autoprefixerOptions))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('dist/css'))
        .pipe(filter(filterOptions))
        .pipe(reload(reloadOptions));
});