# Art Portfolio
This is an art portfolio made with Knockout, Sammy router and Grunt. It provides a simple JSON structure in `src/js/work.js` that makes it easy to add new art in different categories and uses grunt for image optimization.

A live version can be viewed at [Alison Reed Art](http://alisonreedart.com).

## Installation and Running

Clone the repository and run `npm install`. To install bower components, run 
```
cd src
bower install
cd ..
```

Next download the images. They are available on [Google Drive](https://drive.google.com/open?id=0B4-nN5EW3SkYWDgzTmJqQm1IVGM). Place the `original-images` folder inside `src/build-images/` so you end up having the folders structured `src/build-images/original-images/`. Put the `gifs` folder inside `src/` so you get `src/gifs/`.

The grunt-responsive-images tool requires [ImageMagick](https://www.imagemagick.org/script/index.php) to be installed. Once ImageMagick is set up, run `grunt images` to process the images, then `grunt build`. To run a local server use `grunt watchSync`. 