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
var ghpages = require('gh-pages');
// var ghPages = require('gulp-gh-pages');


//Actualizar repositorio
//Push inicial
gulp.task('push_inicial', function(){
    git()
        .init()
        .add('./*')
        .commit("first commit")
        .addRemote('origin', json.repository.url)
        .push('origin', 'master'); 
});
//Push al repo
gulp.task('push', function(){
    git()
        .add('./*')
        .commit("Actualizando gitbook")
        .push('origin', 'master');
});

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

gulp.task('generate-wiki', function(){
    return run(path.join(__dirname,'scripts','generate-wiki')).exec();
});

gulp.task('deploy-gitbook', function()
{
    // return gulp.src(path.join(__dirname,'gh-pages'))
    //       .pipe(ghPages());
    ghpages.publish(path.join(__dirname, 'gh-pages'), function(err) { if(err) console.error("Error:" + err); });
});

gulp.task('deploy', ['push','generate-gitbook','generate-wiki', 'deploy-gitbook'], function()
{
    console.log("Deploy task");
    
    fs.remove(path.join(__dirname,'wiki','.git'));
    new Promise((resolve,reject) => {
        git(path.join(__dirname,'wiki'))
        .init()
        .add(path.join(__dirname,'wiki','*'))
        .commit("Deploy to wiki")
        .addRemote('origin', json.repository.wiki)
        .push(['--force', 'origin', 'master:master'], resolve)
    });
    
    // return gulp.src('').pipe(shell(['./scripts/losh deploy-wiki']));
});

gulp.task('actualizando_iaas', function(){
    return run(path.join(__dirname,'scripts','upload_iaas')).exec();
});

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


gulp.task('default', function(){
    gulp.watch(['scripts/*', 'txt/**/*.md', 'book.json'], ['deploy']); 
});