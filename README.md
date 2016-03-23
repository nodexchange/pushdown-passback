
##Build your projects with gulp

When you build with `gulp`, it does automatically:
- Js lint
- Js concatenation, minification and source maps
- Less and Sass compilation, minification and source maps
- Css copy and minification
- Images optimization
- Http webserver or proxy to your webserver
- Sync all the browser
- Watch files for changes (keep the command window open)

##Requirements

First off download and install [node and npm](http://nodejs.org/) on your machine.

Then install gulp globally:

```sh
npm install -g gulp
```

And install bower globally:

```sh
npm install -g bower
```

##Usage

You can just execute the `.sh` or `.bat` files inside the `/bin` folder. Or run the shell commands.

####Install all dependencies

Execute `npm install` and `bower update` files or use this command:

```sh
npm install && bower update
```

Bower default folder is `dist/bower_components`.

####Gulp task

Start building with `gulp`, it builds the project into `/dist` and open the browser on the webserver with browser sync.

```sh
gulp
```

Edit the settings inside `gulpfile.js` if you want to use your own webserver.

##Js concatenation

The gulp task does Js compilation and concatenation (to `main.js`) automatically.
If you want to exclude a file from compilation, just name it with a starting underscore (ex: **_myfile.js**).
Files starting with "**_**" are excluded but they are still concatenated in the `main.js`.

##Less and Sass compilation

The gulp task does Less and Sass compilation automatically.
If you want to exclude a file from compilation, just name it with a starting underscore (ex: **_myfile.less**).
Files starting with "**_**" are excluded but you can still import them normally with Less and Sass.

##Css copy and minification

The gulp task does Css copy and minification automatically.
If you want to exclude a file from copy and minification, just name it with a starting underscore (ex: **_myfile.css**).
Files starting with "**_**" are excluded but you can still import them normally with Less and Sass (ex: `@import (less) '_myfile.css';`).

##Settings

Available advanced settings inside `gulpfile.js`:
- `src` and `dest` folders (if you change the dest folder also change the directory inside `.bowerrc`)
- `settings.jsConcatTo` filename for the Js concatenation
- `settings.browserSync` [browserSync](http://www.browsersync.io/docs/options/) options, if you want to execute php or other server side, use proxy to your own webserver
- `settings.ftp` [gulp-ftp](https://www.npmjs.com/package/gulp-ftp) options
- `settings.imagemin` [gulp-imagemin](https://www.npmjs.com/package/gulp-imagemin) options

##Sourcemaps
Sourcemaps are bugged now on [gulp-minify-css](https://github.com/jonathanepollack/gulp-minify-css/issues/34) and on [gulp-concat](https://github.com/wearefractal/gulp-concat)

##backup
var settings = 'http://adserver.adtech.de/addyn/3.0/1176/4451983/573618/0/;AdId=14277911;BnId=-1;;misc=[CACHEBUSTER];rdclick={clickurl}';

var iframeContent = document.createElement('iframe');
  iframeContent.scrolling = 'no';
  iframeContent.frameBorder = '0';
  iframeContent.width = 970;
  iframeContent.height = 250;
  iframeContent.allowtransparency = 'true';
  var cachebusterValue = Math.ceil(Math.random() * 10000);
  settings = settings.replace('[CACHEBUSTER]', cachebusterValue);
  var htmlText = '<!DOCTYPE html><html><head><title>Passback</title><meta charset="UTF-8">'+
    '<style>html, body {background: #123456;}</style>'+
    '</head><body>' +
    '<SCRIPT SRC="'+
    settings+' '+
    'TYPE="text/javascript"></SCRIPT>'+
    '</body></html>';
iframeContent.src = 'data:text/html;charset=utf-8,' + encodeURI(htmlText);
  this.container.appendChild(iframeContent);
