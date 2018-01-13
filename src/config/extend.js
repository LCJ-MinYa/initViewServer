const view = require('think-view');
const cache = require('think-cache');
const session = require('think-session');
const mongo = require('think-mongo');

module.exports = [
	view, // make application support view
	mongo(think.app),
	cache,
	session
];