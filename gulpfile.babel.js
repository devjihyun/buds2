import gulp from "gulp";
import del from "del";
import ws from "gulp-webserver";
import image from "gulp-image";
import autoprefixer from "gulp-autoprefixer";
import miniCSS from "gulp-csso";
import bro from "gulp-bro";
import babelify from "babelify";
import ghPages from "gulp-gh-pages";
import include from "gulp-file-include";

const routes = {
    html: {
        src: ([
            "src/html/*",
            "!" + "./src/html/include"
        ]),
        dest: "build"
    },
    img: {
        src: "src/images/*",
        dest: "build/images"
    },
    scss: {
        watch: "src/scss/**/*.scss",
        src: "src/scss/style.scss",
        dest: "build/css"
    },
    js: {
        watch: "src/js/**/*.js",
        src: "src/js/main.js",
        dest: "build/js"
    }
};

const sass = require("gulp-sass")(require("node-sass"));

const html = () => 
    gulp
        .src(routes.html.src)
        .pipe(include({
            prefix: "@@",
            basepath: "@file"
        }))
        .pipe(gulp.dest(routes.html.dest))

const clean = () => del(["build/", ".publish"]);

const webserver = () => 
    gulp
        .src("build")
        .pipe(ws({livereload: true, open: true }));

const img = () => 
    gulp
        .src(routes.img.src)
        .pipe(image())
        .pipe(gulp.dest(routes.img.dest));

const styles = () =>
    gulp
        .src(routes.scss.src)
        .pipe(sass().on("error", sass.logError))
        .pipe(
            autoprefixer({
                overrideBrowserslist: ["last 2 versions"]
            })
        )
        .pipe(miniCSS())
        .pipe(gulp.dest(routes.scss.dest));

const js = () =>
    gulp
        .src(routes.js.src)
        .pipe(bro({
            transform: [
                babelify.configure({ presets: ["@babel/preset-env"] }),
                [ "uglifyify", { global: true }]
            ]
        })
        )
        .pipe(gulp.dest(routes.js.dest))

const gh = () => gulp.src("build/**/*").pipe(ghPages());

const watch = () => {
    gulp.watch(routes.html.src, html);
    gulp.watch(routes.img.src, img);
    gulp.watch(routes.scss.watch, styles);
    gulp.watch(routes.js.watch, js);
};

const prepare = gulp.series([clean, img]);

const assets = gulp.series([html, styles, js]);

const live = gulp.parallel([webserver, watch]);

export const build = gulp.series([prepare, assets]);
export const dev = gulp.series([build, live]);
export const deploy = gulp.series([build, gh, clean]);