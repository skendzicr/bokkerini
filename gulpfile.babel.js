const gulp = require('gulp')
const sass = require('gulp-sass')
const browserSync = require('browser-sync').create()
const sourcemaps = require('gulp-sourcemaps')
const autoprefixer = require('gulp-autoprefixer')
const clean = require('gulp-clean')
const concat = require('gulp-concat')
const imagemin = require('gulp-image-optimization')
const copy = require('gulp-copy')
const htmlmin = require('gulp-htmlmin')
const uglify = require('gulp-uglify')
const runSequence = require('run-sequence')
const cleanCSS = require('gulp-clean-css')
const fs = require('fs')

// Synchronised browser testing
// https://www.browsersync.io/
gulp.task('serve', ['sass', 'concat'], () => {
  browserSync.init({
    server: ['./app', './.tmp']
  })
  gulp.watch('app/js/*.js', ['concat'])
  gulp.watch('.tmp/js/*.js').on('change', browserSync.reload)
  gulp.watch('app/*.html').on('change', browserSync.reload)
  gulp.watch('app/css/**/*.css').on('change', browserSync.reload)

})

gulp.task('serve:dist', () => {
  browserSync.init({
    server: ['dist']
  })
})

gulp.task('minify-css', function () {
  return gulp.src('app/css/**/*.css')
  .pipe(cleanCSS({compatibility: 'ie8'}))
  .pipe(gulp.dest('dist/css'))
})


// https://www.npmjs.com/package/gulp-image
gulp.task('images', () =>
  gulp.src(['./app/images/**/*.{jpg,png,jpeg,gif}'])
    .pipe(imagemin(
    {
      optimizationLevel: 5,
      progressive: true,
      interlaced: true
    }
    ))
    .pipe(gulp.dest('dist/img'))
)

gulp.task('minify', () => gulp.src('app/*.html')
.pipe(htmlmin({
  removeComments: true,
  collapseWhitespace: true,
  collapseBooleanAttributes: true,
  removeAttributeQuotes: true,
  removeRedundantAttributes: true,
  removeEmptyAttributes: true,
  removeScriptTypeAttributes: true,
  removeStyleLinkTypeAttributes: true,
  removeOptionalTags: true
}))
.pipe(gulp.dest('dist'))
)

gulp.task('compress', () => gulp.src('.tmp/js/main.js')
.pipe(uglify())
.pipe(gulp.dest('dist/js/'))
)

gulp.task('concat', () => gulp.src([
  'app/js/*.js'])
  .pipe(sourcemaps.init())
  .pipe(concat('main.js'))
  .pipe(sourcemaps.write())
  .pipe(gulp.dest('.tmp/js'))
)



gulp.task('copy', () => gulp.src([
  '.tmp/*'
  ])
  .pipe(gulp.dest('dist'))
)

gulp.task('clean', () => gulp.src([
  'dist',
  '.tmp'
  ])
  .pipe(clean({force: true}))
)

// development task
gulp.task('default', ['serve'])

// production task
gulp.task('build', ['minify-css', 'concat', 'compress', 'minify', 'copy', 'images'])

gulp.task('prod', ['build', 'serve:dist'])
