const gulp=require('gulp');
const server=require('gulp-webserver');
// const js=require('gulp-babel');

gulp.task('webserver',()=>{
	return gulp.src('./src/')
	.pipe(server({
		port:8086,
		livereload:true,
		proxies:[
			{
				source:"/api/getUser",
				target:"http://localhost:3000/api/getUser",
			},
			{
				source:"/api/addUser",
				target:"http://localhost:3000/api/addUser",
			},
			{
				source:"/api/getUserOne",
				target:"http://localhost:3000/api/getUserOne",
			},
			{
				source:"/api/getUpdate",
				target:"http://localhost:3000/api/getUpdate",
			},
			{
				source:"/api/delUser",
				target:"http://localhost:3000/api/delUser",
			},
		]
	}))
})
