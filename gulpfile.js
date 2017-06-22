/**
 * Created by admin on 2017/5/10.
 */
const gulp = require('gulp')
const babel = require('gulp-babel')
const es2015 = require('babel-preset-es2015')
const uglify = require('gulp-uglify')
const clean = require('gulp-clean')
const copy = require('gulp-copy')

const BUILD_PATH = '_build'
const binPath = BUILD_PATH + '/bin'
const srcPath = BUILD_PATH + '/src'

const buildDir = BUILD_PATH + '/*'
const binDir = 'bin/*.js'
const srcDir = ['src/**/*.js', '!src/settings.js']
const copyDir = ['src/config/*', 'package.json', 'private.pem', 'public.pem', 'README.md']

// 清空构建目录中的文件
gulp.task('clean', function () {
  return gulp.src(buildDir)
    .pipe(clean())
})

// 复制相关的依赖库及配置文件
gulp.task('copy', function () {
  return gulp.src(copyDir)
    .pipe(copy(BUILD_PATH))
})

// 压缩JavaScript代码
gulp.task('script:src', function () {
  gulp.src(srcDir)
    .pipe(babel({presets: [es2015]}))
    .pipe(uglify())
    .pipe(gulp.dest(srcPath))
})

gulp.task('script:bin', function () {
  gulp.src(binDir)
    .pipe(babel({presets: [es2015]}))
    .pipe(uglify())
    .pipe(gulp.dest(binPath))
})

gulp.task('build', ['copy', 'script:src', 'script:bin'])

