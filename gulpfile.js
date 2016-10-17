var gulp = require('gulp');
var shell = require('gulp-shell');
var install = require('gulp-install');
var path = require('path');
var json = require(path.join(__dirname,'package.json'));
// var gitbook = require('gitbook');
var Q = require('q');
var run = require('gulp-run');
var git = require('simple-git');
var fs = require('fs-extra');

var ghPages = require('gulp-gh-pages');

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
//Ejecución del script generate-gitbook
gulp.task('generate-gitbook',function()
{
    if (!fs.existsSync(path.join(__dirname, 'gh-pages'))){
        fs.mkdirSync(path.join(__dirname, 'gh-pages'));
    }
    new Promise((resolve,reject) =>{
       return run(path.join(__dirname,'scripts','generate-gitbook')).exec(); 
    });
});

//---------------------------------------------------------------------------------

gulp.task('generate-wiki', function(){
    return run(path.join(__dirname,'scripts','generate-wiki')).exec();
});

//---------------------------------------------------------------------------------

gulp.task('deploy-gitbook', function()
{
    return gulp.src(path.join(__dirname,'gh-pages'))
          .pipe(ghPages());
});

//---------------------------------------------------------------------------------

gulp.task('eliminar_wiki', function(){
        fs.remove(path.resolve(path.join(__dirname,'wiki','.git')));
});

//---------------------------------------------------------------------------------

gulp.task('deploy', ['generate-gitbook','generate-wiki', 'deploy-gitbook', 'eliminar_wiki'], function()
{
    console.log("Deploy task");
    git(path.resolve(path.join(__dirname,'wiki')))
        .init()
        .add('./*')
        .commit("Deploy to wiki")
        .addRemote('origin', json.repository.wiki)
        .push(['--force', 'origin', 'master:master'])
    // return gulp.src('').pipe(shell(['./scripts/losh deploy-wiki']));
});

//---------------------------------------------------------------------------------

gulp.task('actualizando_iaas', function(){
    return run(path.join(__dirname,'scripts','upload_iaas')).exec();
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

gulp.task('default', function(){
    gulp.watch(['scripts/*', 'txt/**/*.md', 'book.json'], ['deploy']); 
});