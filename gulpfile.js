
/* Создаем переменные для облегчения работы в дальнейшем */
let gulp = require('gulp'),
    sass = require('gulp-sass');

/* Конвертируем SASS в CSS. Даем задание (task)
.task() -- это метод (точка, слово, скобки)
function нужен для того, чтобы метод не работал единожды */
gulp.task('sass', function(){
  gulp.src('app/scss/style.scss')
  .pipe(sass())
  .pipe(gulp.dest('app/css'))
});
