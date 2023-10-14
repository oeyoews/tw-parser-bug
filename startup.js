process.env.TIDDLYWIKI_PLUGIN_PATH = "plugins";

const { TiddlyWiki } = require("tiddlywiki");

const app = TiddlyWiki().boot;

app.argv = ["--build"];

app.boot();
