const gulp = require('gulp');
const imagemin = require('gulp-imagemin');

const buildPath = {
	img: ['build/static/media'],
};

const path = {
	img: ['build/static/media/*'],
};

// Optimize images
gulp.task('imageMin', () =>
	gulp.src(path.img)
		.pipe(imagemin())
		.pipe(gulp.dest(buildPath.img))
);

gulp.task('default', gulp.series(['imageMin']));
gulp.task('build', gulp.series(['imageMin']));

