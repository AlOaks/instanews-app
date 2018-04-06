// REQUIRES

var gulp = require("gulp");
var uglify = require("gulp-uglify");
var rename = require("gulp-rename");
var eslint = require("gulp-eslint");
var browserSync = require("browser-sync").create();
var sass = require("gulp-sass");
var autoprefixer = require("gulp-autoprefixer");
var cssnano = require("gulp-cssnano");
var prettyError = require("gulp-prettyerror");
var babel = require("gulp-babel");

// TASKS

    // DEFAULT TASK

gulp.task("default", ["browser-sync", "lint", "watch", "sass", "scripts"]
);

    // TASKS


gulp.task('browser-sync', function() {
    browserSync.init({
        server: {baseDir: "./"}
    });
});

gulp.task("lint", function() {

});

gulp.task("scripts", ["lint"], function() {
  return gulp
    .src("js/*.js") // What files do we want gulp to consume?
    .pipe(babel())
    .pipe(uglify()) // Call the uglify function on these files
    .pipe(rename({ extname: ".min.js" })) // Rename the uglified file
    .pipe(gulp.dest("./build/js")); // Where do we put the result?
});


gulp.task('watch', function() {
    gulp.watch(['js/*.js', 'sass/*.scss', '*.html', '!gulpfile.js', '!reset.css', '!node_modules/'] , ['scripts', 'sass', 'lint', 'reload']);
});
 
 gulp.task('reload', ['scripts', 'sass', 'lint'], function() {
    browserSync.reload();
});

gulp.task("sass", function() {
    return gulp
        .src("./sass/style.scss")
        .pipe(prettyError()) // ADD THIS LINE
        .pipe(sass())
        .pipe(
          autoprefixer({
            browsers: ["last 2 versions"]
          })
         )
        .pipe(cssnano())
        .pipe(rename("style.min.css"))
        .pipe(gulp.dest("./build/css"));
});