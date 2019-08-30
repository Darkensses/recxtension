import gulp from "gulp";
import rm from "gulp-rm";
import webpack_stream from "webpack-stream";
import webpack from "webpack";

const paths = {
  build: "./build-ext"
};
/* CLEAN */
gulp.task("clean", () => {
  return gulp.src(`${paths.build}/**/*`, { read: false }).pipe(rm());
});
/* BUILD COMPONENTS */
gulp.task("build:app", done => {
  return webpack_stream(require("./webpack.config.js"), webpack).pipe(
    gulp.dest(`${paths.build}`)
  );
});
/* COPY FILES INTO BUILD FOLDER */
const files = [
  "./manifest.json",
  "./src/index.html",
  "./src/devtools/devtools.html",
  "./src/devtools/devtools.js"
];
gulp.task("copy:static", done => {
  gulp
    .src(files)
    .pipe(gulp.dest(paths.build))
    .on("end", done);
});
/* BUILD */
gulp.task("build", gulp.series(["clean", "build:app", "copy:static"]));