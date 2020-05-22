const{watch,series,parallel,src,dest}=require("gulp");
const sassdoc = require("sassdoc");

function inicio(cb){
    console.log("Generando proyecto CV");
    cb();
}

function final(cb){
    console.log("Proyecto CV generado");
    cb();
}

function pipeline(){
    return src("cv1.html").pipe(dest("dist/"),src("cv2.css").pipe(dest("dist/")));
}

function documentar(){
    return src("./scss/*.scss").pipe(sassdoc());
}

function generar(){
    return gulp.src('./scss/cv.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('dist/'));
}

function copyImage(){
    return src("./img/*").pipe(dest('dist/img/'));
}

exports.inicio = inicio;
exports.final = final;
exports.default = parallel(documentar,generar,copyImage);
exports.documentar = documentar;
exports.generar = generar;
exports.copyImage = copyImage;
exports.pipeline=pipeline;
