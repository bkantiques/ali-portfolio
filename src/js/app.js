$(document).ready(function() {

	function Category(category) {	
		
		var thisCategory = this;

		this.title = new ko.observable(category.title);
		this.thumbnail = new ko.observable(category.thumbnail);

		this.subcategories = new ko.observableArray();
		this.videos = new ko.observableArray();
		this.images = new ko.observableArray();

		// Set up subcategories
		category.subcategories.forEach(function(subcategory) {
			thisCategory.subcategories.push(new Category(subcategory));
		});

		// Set up videos
		category.videos.forEach(function(video) {
			thisCategory.videos.push(new PortfolioVideo(video));
		});
	
		// Set up images
		category.images.forEach(function(image) {
			thisCategory.images.push(new PortfolioImage(image));
		});

	}

	// Parent class of image and video classes
	function PortfolioItem(item) {
		this.title = new ko.observable(item.title);
		this.thumbnail = new ko.observable(item.thumbnail);

		this.link = new ko.computed(function() {
			return this.title().toLowerCase().replace(/[^a-z0-9 ]/g, '').replace(/ /g, '-');
		}, this);

	}

	function PortfolioImage(item) {
		this = new PortfolioItem(item);
		this.imgSrc = new ko.observable(item.imgSrc);
	}

	function PortfolioVideo(item) {
		this = new PortfolioItem(item);
		this.youtubeId = new ko.observable(item.youtubeId);	
	}

	var a = [{
		title: 'Blah blah *&(&( HIiii',
		type: 'image',
		thumbnail: 'https://www.fillmurray.com/200/300',
		src: 'https://www.fillmurray.com/400/600'
		},
		{
		title: 'Blah blahi',
		type: 'video',
		thumbnail: 'https://www.fillmurray.com/200/300',
		src: 'mvVFWN4fXDo'
		},
		{
		title: 'gffgsfd',
		type: 'video',
		thumbnail: 'https://www.fillmurray.com/100/400',
		src: '6-1ezWYhMEY'
		}
	];

	function ViewModel(items) {
		
		var self = this;

		self.portfolioItems = new ko.observableArray();
		self.selectedPortfolioItem = new ko.observable();
		
		self.initialize = function(items) {
			// Add portfolio items to observable array
			items.forEach(function(item) {
				self.portfolioItems.push(new PortfolioItem(item));
			});
		};

		self.setSelectedPortfolioItem = function(item) {

			// If item not already selected
			if(!(self.selectedPortfolioItem() === item)) {

				if(self.selectedPortfolioItem() && self.selectedPortfolioItem().isVideo())
					player.pauseVideo();

				self.selectedPortfolioItem(item);

				if(item.isVideo()) {
					// Show youtube video
					self.getVideo();
				}
				else {
					$player.hide();
				}

			}
		};

		self.getVideo =function() { 
			if(player) {
				player.cueVideoById(self.selectedPortfolioItem().src());

				$player.show();
			}
			else {
				player = new YT.Player('player', {
			        height: '390',
			        width: '640',
			        videoId: self.selectedPortfolioItem().src()			    
			    });
			}
		    
		};

		/*self.removeVideoPlayer = function() {
			$('#player').replaceWith('<div id="player"></div>');
			player = null;
		};*/


		// Router
	    Sammy(function() {
		    this.get('#:titleLink', function() {

		    	// Find portfolio item where link matches title link
		    	var titleLink = this.params.titleLink.toLowerCase();

		    	var itemFound = false;
		    	var portfolioItems = self.portfolioItems();

		    	// Go through portfolio items
		    	for(var i = 0; i < portfolioItems.length && !itemFound; i++) {

		    		var portfolioItem = portfolioItems[i];

		    		// If item link matches title link
		    		if(portfolioItem.link() === titleLink) {
		    			itemFound = true;

		    			self.setSelectedPortfolioItem(portfolioItem);
		    		}

		    	}

		    });
	    }).run();

	    self.initialize(items);

	}

	ko.applyBindings(new ViewModel(a));

});