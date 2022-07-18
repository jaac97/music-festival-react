
import gulp from 'gulp';
import babel from 'gulp-babel';
import webp from 'gulp-webp';
import avif from 'gulp-avif';

function convertWebp () {
    return gulp.src('./src/build/img/**/*')
    .pipe(webp())
    .pipe(gulp.dest('./public/img'))
}
function convertAvif () {
    return gulp.src('./src/build/img/**/*.{png,jpg,svg}')
    .pipe(avif())
    .pipe(gulp.dest('./public/img'))
}

function parallels (cb) {
    gulp.parallel(convertWebp,convertAvif)
    cb()
}
export default parallels