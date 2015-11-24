var gulp = require('gulp');
var open = require('gulp-open');
var util = require('gulp-util');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var connect = require('gulp-connect');
var sourcemaps = require('gulp-sourcemaps');
var supervisor = require('gulp-supervisor');

var babelify= require('babelify');
var browserify = require('browserify');

var buffer = require('vinyl-buffer');
var source = require('vinyl-source-stream');

gulp.task('build', function() {
	browserify('./src/app.js', { debug: true })
		.transform(babelify, {presets: ['es2015', 'stage-0', 'react']})
		.bundle()
		.on('error', util.log.bind(util, 'Browserify Error'))
		.pipe(source('app.js'))
		.pipe(buffer())
		.pipe(sourcemaps.init({loadMaps: true}))
		.pipe(uglify({mangle: false}))
		.pipe(sourcemaps.write('./'))
		.pipe(gulp.dest('./static/js'));
});

gulp.task('libraries', function(cb) {
	return gulp.src([
		'./node_modules/react/dist/react.js',
		'./node_modules/react-dom/dist/react-dom.js'
	])
	.pipe(concat('lib.js'))
	.pipe(uglify())
	.pipe(gulp.dest('static/js'));
});

gulp.task('supervisor', function() {
	supervisor('example/default', {
		ignore: ['src']
	});
});

gulp.task('watch', function() {
	gulp.watch('src/**/*.js', ['build']);
});

gulp.task('open', function(){
	gulp.src(__filename)
		.pipe(open({uri: 'http://localhost:3000'}));
});

gulp.task('install', ['libraries']);
gulp.task('default', ['build', 'watch', 'supervisor', 'open']);
