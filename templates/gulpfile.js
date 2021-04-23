var gulp = require('gulp');
sass = require("gulp-sass"),
postcss = require("gulp-postcss");
autoprefixer = require("autoprefixer");
var sourcemaps = require('gulp-sourcemaps'); 
var browserSync = require('browser-sync').create(); 


/***********************************LTR***********************************/

//_______ task for scss folder to css main style 
gulp.task('watch', function() {
	console.log('Command executed successfully compiling SCSS in style.css');
	 return gulp.src('html/assets/scss/**/*.scss') 
		.pipe(sourcemaps.init())                       
		.pipe(sass())
		.pipe(sourcemaps.write(''))   
		.pipe(gulp.dest('html/assets/css'))
		.pipe(browserSync.reload({
		  stream: true
	}))
})

//_______task for style-dark
gulp.task('dark', function(){
console.log('Command executed successfully compiling SCSS in style-dark.scss');
   return gulp.src('html/assets/css/style-dark.scss')
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('html/assets/css'));
		
})

//_______task for sidemenu
gulp.task('sidemenu', function(){
	console.log('Command executed successfully compiling SCSS in sidemenu.scss');
   return gulp.src('html/assets/css/sidemenu.scss')
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('html/assets/css'));
		
})

//_______task for skinmodes
gulp.task('skins', function(){
	console.log('Command executed successfully compiling SCSS in skin-modes.scss');
   return gulp.src('html/assets/css/skin-modes.scss')
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('html/assets/css'));
		
})


/***********************************RTL***********************************/



//_______ task for scss folder to css main style 
gulp.task('rtlwatch', function() {
	console.log('Command executed successfully compiling SCSS in style.css');
	 return gulp.src('html/assets/scss-rtl/**/*.scss') 
		.pipe(sourcemaps.init())                       
		.pipe(sass())
		.pipe(sourcemaps.write(''))   
		.pipe(gulp.dest('html/assets/rtl-css'))
		.pipe(browserSync.reload({
		  stream: true
	}))
})

//_______task for style-dark
gulp.task('rtldark', function(){
console.log('Command executed successfully compiling SCSS in style-dark.scss');
   return gulp.src('html/assets/rtl-css/style-dark.scss')
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('html/assets/rtl-css'));
		
})

//_______task for sidemenu
gulp.task('rtlmenu', function(){
	console.log('Command executed successfully compiling SCSS in sidemenu.scss');
   return gulp.src('html/assets/rtl-css/sidemenu.scss')
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('html/assets/rtl-css'));
		
})

//_______task for skinmodes
gulp.task('rtlskins', function(){
	console.log('Command executed successfully compiling SCSS in skin-modes.scss');
   return gulp.src('html/assets/rtl-css/skin-modes.scss')
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('html/assets/rtl-css'));
		
})
