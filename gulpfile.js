
//Создаем переменные

//"верстак" для подключения плагинов
let gulp = require('gulp'),
  //препроцессор 
  sass = require('gulp-sass'),
  //переименовывает scss в css
  rename = require('gulp-rename'),
  //синхронизирует изменения, чтобы браузер обновлялся автоматически
  browserSync = require('browser-sync'),
  //поддерживает старые версии браузеров
  autoprefixer = require('gulp-autoprefixer'),
  //собирает (конкатинирует) все файлы CSS и JS в libs.css и libs.js
  concat = require('gulp-concat'),
  //минифицирует в libs.min.js
  uglify = require('gulp-uglify'),
  //минифицирует в libs.min.css
  cssmin = require('gulp-cssmin');

/* Конвертируем SASS в CSS. .task() -- метод (точка, слово, скобки)
function нужен для того, чтобы метод не работал единожды */
gulp.task('sass', function () {

  //Откуда будут браться папки и файлы формата .scss 
  return gulp.src('app/scss/**/*.scss')

    //Действия над файлом (здесь сжатие и переименование) 
    .pipe(sass({ outputStyle: 'compressed' }))
    .pipe(rename({ suffix: '.min' }))

    //труба autoprefixer
    .pipe(autoprefixer({
      overrideBrowserslist: ['last 8 versions']
    }))

    //Куда это все выливается 
    .pipe(gulp.dest('app/css'))

    //труба для подключения browserSync к css 
    .pipe(browserSync.reload({ stream: true }))
});

//Подключение, конкатинация, минификация и вывод в папку css плагинов
gulp.task('style', function () {
  return gulp.src([
    'node_modules/normalize.css/normalize.css',
    'node_modules/swiper/swiper-bundle.css',
    'node_modules/magnific-popup/dist/magnific-popup.css'
  ])
    .pipe(concat('libs.min.css'))
    .pipe(cssmin())
    .pipe(gulp.dest('app/css'))
});

//Подключение, конкатинация, минификация и вывод в папку js плагинов
gulp.task('script', function () {
  return gulp.src([
    'node_modules/swiper/swiper-bundle.js',
    'node_modules/magnific-popup/dist/jquery.magnific-popup.js',
    'node_modules/mixitup/dist/mixitup.js' 
  ])
    .pipe(concat('libs.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('app/js'))
});

//подключаем BrowserSync для html
gulp.task('html', function () {
  return gulp.src('app/*.html')
    .pipe(browserSync.reload({ stream: true }))
});

//подключаем BrowserSync для js
gulp.task('js', function () {
  return gulp.src('app/js/*.js')
    .pipe(browserSync.reload({ stream: true }))
});

//BrowserSync -- позволяет не обновлять страницу вручную для отображения изменений html, css, js
gulp.task('browser-sync', function () {
  browserSync.init({
    server: {
      baseDir: "app/"
    }
  });
});

//Подключаем плагин, который следит за изменениями 
gulp.task('watch', function () {
  //метод: если происходят изменения в style.scss, файлах html, js - запускается плагин "parallel" 
  gulp.watch('app/scss/style.scss', gulp.parallel('sass'))
  gulp.watch('app/*.html', gulp.parallel('html'))
  gulp.watch('app/js/*.js', gulp.parallel('js'))
});

/* Запускаем task, который позволит автоматически обновлять страницу и работать с терминалом (gulp watch не будет забивать эфир). Пишем задание, default, за кем он будет наблюдать (за заданиями, которые мы вписываем)  */

gulp.task('default', gulp.parallel('style', 'script', 'sass', 'watch', 'browser-sync'))