var gulp = require('gulp');
var open = require('gulp-open');
var util = require('gulp-util');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var connect = require('gulp-connect');
var minifyCss = require('gulp-minify-css');
var sourcemaps = require('gulp-sourcemaps');
var supervisor = require('gulp-supervisor');

var babelify= require('babelify');
var browserify = require('browserify');
var vueify = require('vueify');


var buffer = require('vinyl-buffer');
var source = require('vinyl-source-stream');

gulp.task('build', function() {
	browserify('./src/app.js', { debug: true })
		.transform(vueify)
		.bundle()
		.on('error', util.log.bind(util, 'Browserify Error'))
		.pipe(source('app.js'))
		.pipe(buffer())
		.pipe(sourcemaps.init({loadMaps: true}))
		.pipe(uglify({mangle: false}))
		.pipe(sourcemaps.write('./'))
		.pipe(gulp.dest('./static/js'));
});

gulp.task('minify-css', function() {
	return gulp.src([
			'./node_modules/normalize.css/normalize.css',
			'./src/style.css'
		])
		.pipe(concat('style.min.css'))
		.pipe(sourcemaps.init({loadMaps: true}))
		.pipe(minifyCss())
		.pipe(sourcemaps.write('./'))
		.pipe(gulp.dest('./static/css'));
});

gulp.task('supervisor', function() {
	supervisor('example/default', {
		ignore: ['src']
	});
});

gulp.task('watch-js', function() {
	gulp.watch('src/**/*.js', ['build']);
});

gulp.task('watch-vue', function() {
	gulp.watch(['src/**/*.vue', 'src/**/*.styl'], ['build']);
});

gulp.task('watch-css', function() {
	gulp.watch('src/**/*.css', ['minify-css']);
});

gulp.task('open', function(){
	gulp.src(__filename)
		.pipe(open({uri: 'http://localhost:3000/gasp'}));
});

gulp.task('watch', ['watch-js', 'watch-vue', 'watch-css']);
gulp.task('default', ['build', 'minify-css', 'watch', 'supervisor', 'open']);
