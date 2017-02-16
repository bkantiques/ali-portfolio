# Art Portfolio
This is an art portfolio made with Knockout, Sammy router and Grunt. It provides a simple JSON structure in `src/js/work.js` that makes it easy to add new art in different categories and uses grunt for image optimization.

A live version can be viewed at [http://alisonreedart.com].

## Installation and Running

Clone the repository and run `npm install`. The grunt-responsive-images tool requires [ImageMagick](https://www.imagemagick.org/script/index.php) to be installed. Once ImageMagick is set up, run `grunt images` to process the images, then `grunt build`. To run a local server use `grunt watvhSync`. 