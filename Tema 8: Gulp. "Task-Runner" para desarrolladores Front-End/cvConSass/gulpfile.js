

const{ watch,series,parallel,src,dest}=require("gulp");

function inicial(cb){
    console.log("generando proyecto CV");
    cb();
}

function final(cb){
    console.log("Proyecto CV finalizado");
    cb();
}

exports.inicial=inicial;
exports.final=final;

exports.pipeline=function() {
    return src("css/*").pipe(dest("dist/"))
};

