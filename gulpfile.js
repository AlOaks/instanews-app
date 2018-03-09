// REQUIRES

var gulp = require("gulp");
var uglify = require("gulp-uglify");
var rename = require("gulp-rename");
var eslint = require("gulp-eslint");
var browserSync = require("browser-sync").create();

// TASKS

    // DEFAULT TASK

gulp.task("default", ["browser-sync", "lint", "watch"]
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
    .src("./*.js") // What files do we want gulp to consume?
    .pipe(uglify()) // Call the uglify function on these files
    .pipe(rename({ extname: ".min.js" })) // Rename the uglified file
    .pipe(gulp.dest("./build/js")); // Where do we put the result?
});


gulp.task('watch', function() {
    gulp.watch(['*.js', '*.css', '*.html', '!gulpfile.js', '!reset.css', '!node_modules/'] , ['lint', 'reload']);
});
 
 gulp.task('reload', ['lint'], function() {
    browserSync.reload();
});