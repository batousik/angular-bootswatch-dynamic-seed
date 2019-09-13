const gulp = require('gulp');
const sass = require('gulp-sass');
const del = require('del');

gulp.task('styles', () => {
    return gulp.src('style/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./style/'));
});

gulp.task('clean', () => {
    return del([
        'style/*.css',
    ]);
});

gulp.task('watch', () => {
    gulp.watch('style/**/*.scss', (done) => {
        gulp.series(['clean', 'styles'])(done);
    });
});

gulp.task('default', gulp.series(['clean', 'styles']));
