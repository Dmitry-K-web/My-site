const { src, dest } = require('gulp');
const avif = require('gulp-avif');
const webp = require('gulp-webp');
const imagemin = require('gulp-imagemin');
const newer = require('gulp-newer');
const fonter = require('gulp-fonter');
const ttf2woff2 = require('gulp-ttf2woff2');



function fonts() {
    return src('src/assets/fonts/*.*')
        .pipe(fonter({ formats: ['woff', 'ttf'] }))
        .pipe(src('src/public/fonts/*.ttf'))
        .pipe(ttf2woff2())
        .pipe(dest('src/public/fonts'))
}


function images() {
    return src(['src/assets/images/*.*', '!src/images/*.svg'])
        .pipe(newer('src/public/images'))
        .pipe(avif({ quality: 50 }))

        .pipe(src('src/assets/images/*.*'))
        .pipe(newer('src/public/images'))
        .pipe(webp())

        .pipe(src('src/assets/images/*.*'))
        .pipe(newer('src/public/images'))
        .pipe(imagemin())

        .pipe(dest('src/public/images'))
}



exports.images = images;
exports.fonts = fonts;
