var gulp 		= require( "gulp" );
var browserify 	= require( "browserify" );
var source 		= require( "vinyl-source-stream" );
var tsify 		= require( "tsify" );

var paths = {
    pages: [ "src/*.html" ]
};

gulp.task( "copy-html", function () {
    return gulp.src( paths.pages )
        .pipe( gulp.dest( "dist" ) );
} );

gulp.task( "default", [ "copy-html" ], function () {
    return browserify( {
        basedir: 		".",
        debug: 			true,
        entries: 		[ "src/main.ts" ],
        cache: 			{},
        packageCache: 	{}
    } )
    .plugin( tsify )
    .bundle()
    .pipe( source( "bundle.js" ) )
    .pipe( gulp.dest( "dist" ) );
} );

// var gulp        = require( "gulp" );
// var browserify  = require( "browserify" );
// var source      = require( "vinyl-source-stream" );
// var watchify    = require( "watchify" );
// var tsify       = require( "tsify" );
// var gutil       = require( "gulp-util" );
// var server      = require( "gulp-server-livereload" );
 
// var paths = {
//     pages: [ "src/*.html" ]
// };

// var watchedBrowserify = watchify( browserify( {
//     basedir:    ".",
//     debug:      true,
//     // entries:    [ "src/main.ts" ],
//     entries:    [ "src/app.ts" ],
//     cache:      {},
//     packageCache:   {}
// } ).plugin( tsify ) );

// gulp.task( "copy-html", function () {
//     return gulp.src( paths.pages )
//         .pipe( gulp.dest( "dist" ) );
// } );

// gulp.task( "webserver", function() {
//   gulp.src( "dist" )
//     .pipe( server( {
//       livereload: true,
//       open:       true
//     } ) );
// } );

// function bundle() {
//     return watchedBrowserify
//         .bundle()
//         // .pipe( source( "bundle.js" ) )
//         .pipe( source( "app.js" ) )
//         .pipe( gulp.dest( "dist" ) );
// }

// gulp.task( "bundle", bundle );


// gulp.task( "default", [ "copy-html", "bundle", "webserver" ] );
// watchedBrowserify.on( "update", bundle );
// watchedBrowserify.on( "log", gutil.log );

# http://jonnyreeves.co.uk/2015/hello-typescript-and-mocha/