var gulp = require('gulp');
var shell = require('gulp-shell');
var install = require('gulp-install');
var path = require('path');
var json = require(path.join(__dirname,'package.json'));
// var gitbook = require('gitbook');

var run = require('gulp-run');
var git = require('simple-git');
var fs = require('fs-extra');
// var ghPages = require('gulp-gh-pages');
 
//---------------------------------------------------------------------------------
//Actualizar repositorio
//Push al repo
gulp.task('push', function(){
    if (!fs.existsSync(path.join(__dirname, '.git'))){
        git()
            .init()
            .add('./*')
            .commit("first commit")
            .addRemote('origin', json.repository.url)
            .push('origin', 'master');     
    }
    else
    {
         git()
            .add('./*')
            .commit("Actualizando gitbook")
            .push('origin', 'master');   
    }
});


//---------------------------------------------------------------------------------


gulp.task('deploy', function(){
   return gulp.src(path.join(__dirname, 'scripts'))
          .pipe(shell(['./scripts/losh generate-gitbook']))
          .pipe(shell(['./scripts/losh generate-wiki']))
          .pipe(shell(['./scripts/losh deploy-gitbook']))
          .pipe(shell(['./scripts/losh deploy-wiki']))
});
//---------------------------------------------------------------------------------

gulp.task('actualizando_iaas', function(){
    return run(path.join(__dirname,'scripts','upload_iaas')).exec();
});

gulp.task('deploy-heroku', function(){
   return gulp.src('').pipe(shell([
       'git add .'+
       ';'+
       'git commit -m "Deploy to Heroku"'+
       ';'+
       'git push heroku master'
       ])) 
});
//---------------------------------------------------------------------------------

gulp.task('instalar_recursos',['instalar_dependencias','instalar_plugins']);

gulp.task('instalar_dependencias', function()
{
    return gulp.src(['./package.json']).pipe(install());
});

gulp.task('instalar_plugins', function()
{
    return gulp.src('').pipe(shell([
        'gitbook install'    
    ])) 
});

//---------------------------------------------------------------------------------

gulp.task('default', ['deploy']);
