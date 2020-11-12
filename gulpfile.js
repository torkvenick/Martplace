
/* Создаем переменные для облегчения работы в дальнейшем */
let gulp = require('gulp'),
    sass = require('gulp-sass'),
    rename = require('gulp-rename');

/* Конвертируем SASS в CSS. Даем задание (task)
.task() -- это метод (точка, слово, скобки)
function нужен для того, чтобы метод не работал единожды */
gulp.task('sass', function(){

  /* Откуда будут браться файлы */
  return gulp.src('app/scss/style.scss')
  /* Что мы с файлом делаем (в данном случае переименовываем и делаем css минифицированным) */
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe(rename({suffix : '.min'}))
  /* Куда это все выливается */
        .pipe(gulp.dest('app/css'))
});

/* Подключаем плагин, который следит за изменениями */
gulp.task('watch', function(){
  /* метод: если происходят изменения в style.scss запускается плагин "parallel" */
  gulp.watch('app/scss/style.scss', gulp.parallel('sass'));
});
