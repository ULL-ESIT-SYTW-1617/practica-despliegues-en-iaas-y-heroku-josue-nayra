var gulp = require('gulp');
var shell = require('gulp-shell');

// function deploygh()
// {
    
// }

// gulp.task('deploy', ['build', 'push'], deploygh); //deploygh --> funcion que trabaja con las gh-pages

// gulp.task('deploygb',
//     shell.task(
//         "git ci -am 'deploy to gitbooks'"+
//         ";"+
//         "git push gbs master",
//         { verbose: true}
//         )
// );


gulp.task('deploy',
    shell.task(
        "node -e generate-gitbook",
    {
        verbose:true
    }
    )
);