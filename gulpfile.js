var gulp=require("gulp");
var sass=require("gulp-sass");
var connect=require("gulp-connect");
var concat=require("gulp-concat");
var uglify = require('gulp-uglify');
var rename=require("gulp-rename");


gulp.task('copy_html',function(){ 
	return gulp.src('*.html')
	.pipe(gulp.dest('dist')).pipe(connect.reload());
});

gulp.task('copy_img',function(){ 
	return gulp.src('img/**')
	.pipe(gulp.dest('dist/img'));
});

gulp.task('sass',function(){
	return gulp.src('css/*.scss')
	.pipe(sass())
	.pipe(gulp.dest('dist/css'));
});

gulp.task('copy_js',function(){
	return gulp.src('js/*.js')
	.pipe(gulp.dest('dist/js'));
});

gulp.task("watch",function(){
	gulp.watch(["css/*.scss","img/**",'js/*.js','*.html'],["sass","copy_img","copy_js","copy_html"]);
} )

gulp.task('server',function(){
	connect.server({ 
		root:'dist',
		livereload:true 
	}); 
});

gulp.task('default',['server','watch']);