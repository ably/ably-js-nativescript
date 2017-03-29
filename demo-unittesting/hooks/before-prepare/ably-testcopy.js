"use strict";

var fs = require('fs');
var path = require('path');
var os = require('os');

// Get our Path
var cwd = process.cwd() + '/';

// You can uncomment this to disable the script from doing anything
// ------------------------------------------------------------------------------
//process.exit(0);
// ------------------------------------------------------------------------------
// or you can comment out anything you do want copied, to disable that for tests


// Copy the Tests to the proper folder.
copyFolder(cwd + "node_modules/ably/spec/realtime", cwd + "app/tests/realtime");
copyFolder(cwd + "node_modules/ably/spec/rest", cwd + "app/tests/rest");



/**
 * This copies a folder and recurses if needed
 * @param src (string) - Source folder
 * @param dest (string) - Destination folder
 */
function copyFolder(src, dest) {
	// No source Folder exists, can't copy it!
	if (!fs.existsSync(src)) { return false; }

	var files = fs.readdirSync(src);
	files.forEach(function(file){
		var curPath = src + "/" + file;
		if(fs.lstatSync(curPath).isDirectory()) { // check to see if we need to recurse
			copyFolder(curPath, dest + "/" + file);
		} else { // copy file
			copyFile(src, dest, file);
		}
	});
	return true;
}

/**
 * This copies a file if need be
 * @param src (string) - Source folder
 * @param dest (string) - destination folder
 * @param file (string) - file to copy
 */
function copyFile(src, dest, file) {
	if (!fs.existsSync(dest)) {
		mkRecursiveDirectories(dest);
	}
	fs.writeFileSync(dest+"/"+file, fs.readFileSync(src + "/" + file));
}

/**
 * This creates a recursive folder structure
 * @param path
 */
function mkRecursiveDirectories(path) {
	var data = path.replace('\\','/').split('/');
	var newPath = '';
	for (var i=0;i<data.length;i++) {
		newPath += data[i] + "/";
		if (fs.existsSync(newPath)) { continue; }
		fs.mkdirSync(newPath);
	}
}
