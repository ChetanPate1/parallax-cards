module.exports = function( grunt ) {

	grunt.initConfig( {

		// Import package manifest
		pkg: grunt.file.readJSON( 'package.json' ),

		// Banner definitions
		meta: {
			banner: '/*\n' +
				' *  <%= pkg.title || pkg.name %> - v<%= pkg.version %>\n' +
				' *  <%= pkg.description %>\n' +
				' *  <%= pkg.homepage %>\n' +
				' *\n' +
				' *  Made by <%= pkg.author.name %>\n' +
				' *  Under <%= pkg.license %> License\n' +
				' */\n'
		},

		// Concat definitions
		concat: {
			options: {
				banner: '<%= meta.banner %>'
			},
			dist: {
				src: [ 'src/<%= pkg.name %>.js' ],
				dest: 'dist/<%= pkg.name %>.js'
			}
		},

		// Minify definitions
		uglify: {
			dist: {
				src: [ 'dist/<%= pkg.name %>.js' ],
				dest: 'dist/<%= pkg.name %>.min.js'
			},
			options: {
				banner: '<%= meta.banner %>'
			}
		},

		//SASS Compile
		sass: {
			dist: {
				options:{
					sourcemap: 'none',
					noCache: false
				},
				files: {
					'dist/parallax-cards.css': 'src/parallax-cards.scss'
				}
			}
		},

		// watch for changes to source
		// Better than calling grunt a million times
		// (call 'grunt watch')
		watch: {
			files: [ 'src/*', 'test/**/*' ],
			tasks: [ 'default' ]
		}

	} );

	grunt.loadNpmTasks( 'grunt-contrib-sass' );
	grunt.loadNpmTasks( 'grunt-contrib-concat' );
	grunt.loadNpmTasks( 'grunt-contrib-uglify' );
	grunt.loadNpmTasks( 'grunt-contrib-watch' );
	
	grunt.registerTask( 'build', [ 'concat', 'uglify', 'sass' ] );
	grunt.registerTask( 'default', [ 'build', 'sass'] );
};
