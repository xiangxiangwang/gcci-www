var gulp = require("gulp"),
    plugins = require("gulp-load-plugins")(),
    streamqueue = require("streamqueue");

var assetPath = "src/assets";
var genPath = "./src/assets/gen";

var js = function (isRelease) {
    var angular = gulp.src([
        assetPath + "/libs/angular/angular.min.js",
        assetPath + "/libs/angular/angular-resource.min.js",
        assetPath + "/libs/angular/angular-sanitize.min.js",
        assetPath + "/libs/angular/angular-ui-router.min.js"
    ]);

    var custom = gulp.src([
        assetPath + "/js/config.js",
        assetPath + "/js/route.js",
        assetPath + "/js/api.js",
        assetPath + "/js/services/*.js",
        assetPath + "/js/directives/*.js",
        assetPath + "/js/controllers/*.js"
    ]);

    return streamqueue({ objectMode: true })
        .queue(angular)
        .queue(isRelease ? custom.pipe(plugins.uglify()) : custom)
        .done();
};

gulp.task("js-dev", function () {
    return js()
        .pipe(plugins.concat("app.js"))
        .pipe(gulp.dest(genPath + "/js/"));
});

gulp.task("js-release", function () {
    return js()
        .pipe(plugins.concat("app.min.js"))
        .pipe(gulp.dest(gen + "/js/"));
});

/**
 * watch task
 */
gulp.task("watch", function () {
    var reload = function (e) {
        setTimeout(function () {
            plugins.livereload.changed(e);
        }, 2000);
    };

    plugins.livereload.listen();
    gulp.watch(assetPath + "/less/**/*.less", ["css"]).on("change", reload);
    gulp.watch(assetPath + "/js/**/*.js", ["js"]).on("change", reload);
    gulp.watch(["src/templates/**/*.html"]).on("change", reload);
    gulp.watch(["src/**/*.py"]).on("change", reload);
});

gulp.task("compile", ["css", "fonts", "js"]);