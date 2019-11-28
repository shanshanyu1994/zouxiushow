//1.导入
let gulp = require('gulp');
const babel = require('gulp-babel');
let sass = require('gulp-sass');
let cssnano = require('gulp-cssnano');
let rename = require('gulp-rename');
let uglify = require('gulp-uglify');
//let imagemin = require('gulp-imagemin');
gulp.task('sass',()=>{
    gulp.src('./src/sass/*.scss')
    .pipe(sass({outputStyle:'expanded'}))
   .pipe(cssnano())
    .pipe(rename({suffix:'.min'}))
    .pipe(gulp.dest('./dist/css'));
})
gulp.task('es6',()=>{
    gulp.src('./src/js/es6/*.js')
    .pipe(babel({
        presets: ['@babel/env']
    }))
    .pipe(gulp.dest('./src/js/es5'));
})
gulp.task('es5',()=>{
    gulp.src('./src/js/es5/*.js')
    .pipe(uglify())
    .pipe(rename({suffix:'.min'}))
    .pipe(gulp.dest('./.dist/js'));
})
// gulp.task('img',()=>{
//     gulp.src('./src/img/*')
//     .pipe(imagemin())
//     .pipe(gulp.dest('./dist/img'));
// })
gulp.task('default',()=>{
    gulp.watch('./src/sass/*.scss',['sass']);
    gulp.watch('./src/js/es6/*.js',['es6']);
    gulp.watch('./src/js/es5/*.js',['es5']);
   // gulp.watch('./src/img/*',['img']);
})