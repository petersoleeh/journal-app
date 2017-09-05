var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var utilities = require('gulp-util');
var del = require('del');
var jshint = require('gulp-jshint');
var buildProduction = utilities.env.production;

// Test gulp
 gulp.task('myTask', function() {
     console.log('hello gulp');
 });

// Concatination Task
gulp.task('concatInterface', function() {
    return gulp.src(['js/*-interface.js'])
        .pipe(concat('allConcat.js'))
        .pipe(gulp.dest('./tmp'));
});

// Browserify Task
gulp.task('jsBrowserify', ['concatInterface'], function() {
    return browserify({
            entries: ['./tmp/allConcat.js']
        })
        .bundle()
        .pipe(source('app.js'))
        .pipe(gulp.dest('./build/js'));
});

// Minify Task
gulp.task('minifyScripts', ['jsBrowserify'], function() {
    return gulp.src('./build/js/app.js')
    .pipe(uglify())
    .pipe(gulp.dest('./build/js'));
});

// Task for cleaning
gulp.task('clean', function () {
    return del(['build', 'temp']);
});

// Task for creating environments
gulp.task('build', ['clean'], function () {
    if (buildProduction) {
        gulp.start('minifyScripts');
    } else {
        gulp.start('jsBrowserify');
    }
});

// Task for code checker
gulp.task('jshint', function () {
    return gulp.src(['js/*.js'])
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});
