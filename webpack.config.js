'use strict';

module.exports = {
	entry:{
		index:'./src/index.js'
	},
	watch:true,
	module:{
		loaders:[{
			test:/\.js/,
			exclude:/node_modules/,
			loader:'babel',
			query:{
				presets:['es2015-loose'],
				plugins:['add-module-exports']
			}
		}]
	},
	output:{
		filename:'index.js',
		path:'./',
		library:'MobileSelector',
		libraryTarget:'umd'
	}
};