'use strict';

const concat = require('gulp-concat');
const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

function buildStyles() {
    return gulp.src('src/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(concat('main.css'))
        .pipe(gulp.dest('./public/css'));
};

exports.buildStyles = buildStyles;

exports.watch = function () {
    gulp.watch('src/**/*.scss', ['sass']);
};