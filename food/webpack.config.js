'use strict';

let path = require('path');

module.exports = {
	mode: 'development', // режим работы (development/production)
	entry: './js/script.js', // откуда берем файл
	output: { // файл выхода
		filename: 'bundle.js', // название файла
		path: __dirname + '/js' // куда будем складывать (__dirname - корень папки)
	},
	watch: true, // в автоматическом режиме смотрит обновления

	devtool: "source-map", // хранит информацию о нахождении файлов

	module: {}
};
