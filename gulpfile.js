
import gulp from 'gulp';
import babel from 'gulp-babel';
import webp from 'gulp-webp';
import avif from 'gulp-avif';

import imagemin from 'gulp-imagemin';

import pkg from 'gulp';
const {parallel} = pkg;


function convertWebp (cb) {
   gulp.src('./src/build/img/**/*')
    .pipe(webp())
    .pipe(gulp.dest('./public/img'))
    cb()
}
function convertAvif (cb) {
   gulp.src('./src/build/img/**/*.{png,jpg}')
    .pipe(avif())
    .pipe(gulp.dest('./public/img'))
    cb()

}
 function quality (cb) {
   gulp.src('./src/build/img/**/*.{png,jpg}')
        .pipe(imagemin({
            optimizationLevel: 8, progressive: true, interlaced: true 
        }))
        .pipe(gulp.dest('./public/img'))
    cb()

    
}

/* function parallels (cb) {
   parallel(convertWebp,convertAvif)
    console.log("Ejecuta")
    cb();
} */
gulp.task('default',  parallel(convertWebp,convertAvif, quality));
// export default parallels;
export {
    convertWebp,
    convertAvif,
    quality
}
