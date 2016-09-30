var gulp = require('gulp');
var shell = require('gulp-shell');
var watch = require('gulp-watch');

gulp.task('construir_gitbook', function()
{
    return gulp.src('./scripts')
        .pipe(shell([
            "gitbook install"
        ]))        
        .pipe(shell([
           "./scripts/losh generate-gitbook" 
        ]))
        .pipe(shell([
           "./scripts/losh generate-wiki"
        ]))
        .pipe(shell([
            "./scripts/losh deploy-gitbook"
        ]))
        .pipe(shell([
            "./scripts/losh deploy-wiki"    
        ]))
});


// gulp.task('gitbook-pdf', function(){
//     return gulp.src('')
//         .pipe(shell(["gitbook pdf ../tareas-iniciales-josue-nayra ./mybook.pdf"])
//         )
// });

// gulp.task('subir_repo', function(){
//     return gulp.src('').pipe(shell([
//         'git add . '+
//         'git commit -m "Probando task en gulpfile" '+
//         'git push origin master'
//     ]))
// });

gulp.task('default', function(){
    gulp.watch(['scripts/*', 'txt/**/*.md', 'book.json'], ['construir_gitbook']); 
});

