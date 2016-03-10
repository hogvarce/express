var gulp = require('gulp');
var jshint = require('gulp-jshint');
var jscs = require('gulp-jscs');
var nodemon = require('gulp-nodemon');

var jsFiles = ['*.js', 'public/js/*.js'];

gulp.task('style', function(){
    return gulp.src(jsFiles)
        .pipe(jshint())
        .pipe(jshint.reporter('jshint-stylish', {
            verbose: true
        }))
        .pipe(jscs());
})

gulp.task('inject', function(){
    var wiredep = require('wiredep').stream;
    var inject = require('gulp-inject');
    var injectScr = gulp.src([
                                './public/css/*.css',
                                './public/js/*.js'
                            ], { read: false });
    var injectOptions = {
        ignorePath: '/public'
    };

    var options = {
        bowerJson: require('./bower.json'),
        directory: './public/lib'
    };

    return gulp.src('./public/*.jade')
                .pipe(wiredep(options))
                .pipe(inject(injectScr, injectOptions))
                .pipe(gulp.dest('./public'));
})

gulp.task('serve', ['inject'], function(){
    var options = {
        script: 'app.js',
        delayTime: 1,
        env: {
            'PORT' : 8080
        },
        watch: jsFiles
    };
    return nodemon(options)
            .on('restart', function(ev){
                console.log('Restarting...');
            })
})
