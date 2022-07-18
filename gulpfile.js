
import gulp from 'gulp';
import babel from 'gulp-babel';
import webp from 'gulp-webp';
import avif from 'gulp-avif';

import imagemin from 'imagemin';
import imageminJpegtran from 'imagemin-jpegtran';
import imageminPngquant from 'imagemin-pngquant';


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
async function quality () {
    const files = await imagemin(['./src/build/img/**/*.{png,jpg,svg}'], {
        destination: './public/img',
        plugins: [
            imageminJpegtran(),
            imageminPngquant({
                quality: [0.6, 0.8]
            })
        ]
    });
    return files;
}



function parallels (cb) {
    gulp.parallel(convertWebp,convertAvif)
    cb()
}
export default parallels