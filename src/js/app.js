$(document).ready(function() {

	function Category(category) {

		var thisCategory = this;

		this.title = new ko.observable(category.title);
		this.thumbnail = new ko.observable(category.thumbnail);

		this.parentLink = new ko.observable(category.parentLink);
		this.path = new ko.observable(category.path);

		this.subcategories = new ko.observableArray();
		this.videos = new ko.observableArray();
		this.images = new ko.observableArray();

		this.selectedImageIndex = new ko.observable();

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

		// Category id
		this.id = new ko.computed(function() {
			return this.title().toLowerCase().replace(/[^a-z0-9 ]/g, '').replace(/ /g, '-');
		}, this);

	}

	// Parent class of image and video classes
	function PortfolioItem(item) {
		this.title = new ko.observable(item.title);

		// Item id
		this.id = new ko.computed(function() {
			return this.title().toLowerCase().replace(/[^a-z0-9 ]/g, '').replace(/ /g, '-');
		}, this);

	}

	function PortfolioImage(item) {
		var image = new PortfolioItem(item);
		return image;
	}

	function PortfolioVideo(item) {
		var video = new PortfolioItem(item);
		video.youtubeId = new ko.observable(item.youtubeId);
		return video;
	}


	function ViewModel(categories) {

		var self = this;

		self.categories = new ko.observableArray();

		// User can choose a category and optional child subcategory
		self.selectedCategory = new ko.observable();
		self.selectedPortfolioItem = new ko.observable();

		// Views
		self.selectedCategoryBoolean = new ko.computed(function() {
			return Boolean(self.selectedCategory());
		}, this);

		// Return whether selected category has an image with index lower than selected image
		self.selectedCategoryHasPreviousImage = new ko.computed(function() {
			var hasPreviousImage = false;

			if(self.selectedCategory() && self.selectedCategory().images().length && self.selectedPortfolioItem()) {

				var index = self.selectedCategory().selectedImageIndex();

				hasPreviousImage = index > 0;
			}

			return hasPreviousImage;

		}, this);

		// Return whether selected category has an image with index higher than selected image
		self.selectedCategoryHasNextImage = new ko.computed(function() {
			var hasNextImage = false;

			if(self.selectedCategory() && self.selectedCategory().images().length && self.selectedPortfolioItem()) {

				var images = self.selectedCategory().images();
				var index = self.selectedCategory().selectedImageIndex();

				hasNextImage = index < images.length - 1;
			}

			return hasNextImage;

		}, this);

		// Select previous image
		self.selectPreviousImage = function() {
			if(self.selectedCategoryHasPreviousImage) {

				var previousImageIndex = self.selectedCategory().selectedImageIndex() - 1;
				var previousImageId = self.selectedCategory().images()[previousImageIndex].id();

				var categoryId = self.selectedCategory().id();

				sammy.setLocation('#' + categoryId + '/' + previousImageId);

			}
		};

		// Select next image
		self.selectNextImage = function() {
			if(self.selectedCategoryHasNextImage) {

				var nextImageIndex = self.selectedCategory().selectedImageIndex() + 1;
				var nextImageId = self.selectedCategory().images()[nextImageIndex].id();

				var categoryId = self.selectedCategory().id();

				sammy.setLocation('#' + categoryId + '/' + nextImageId);

			}
		};

		self.clearSelections = function() {
			self.selectedPortfolioItem(null);
			self.selectedCategory(null);
		};

		self.initialize = function(categories) {
			// Add categories to observable array
			categories.forEach(function(category) {
				self.categories.push(new Category(category));
			});
		};

		// Used for tree search of categories
		self.searchSubcategoriesById = function(category, id) {
			var categoryFound = false;
			var categoryId = category.id();
			var subcategories = category.subcategories();

			/*
			If id matches this category, set as selected category
			and return true
			*/
			if(categoryId === id) {
				self.selectedCategory(category);
				categoryFound = true;
			}
			// Else search subcategories
			else {
				for(var i = 0; i < subcategories.length && !categoryFound; i++) {
					categoryFound = self.searchSubcategoriesById(subcategories[i], id);
				}
			}

			return categoryFound;
		};

		// Search for category by id
		self.setCategoryById = function(id) {

			// If category is already selected, return true
			if(self.selectedCategory() && self.selectedCategory().id() &&  self.selectedCategory().id() === id) {
				return true;
			}

			var categoryFound = false;
			var categories = self.categories();

			// Go through base categories searching each branch
			for(var i = 0; i < categories.length && !categoryFound; i++) {
				categoryFound = self.searchSubcategoriesById(categories[i], id);
			}

			return categoryFound;

		};

		self.setItemInSelectedCategoryById = function(id) {
			var category = self.selectedCategory();
			var videos = category.videos();
			var images = category.images();

			var itemFound = false;

			// Search videos
			for(var i = 0; i < videos.length && !itemFound; i++) {
				var video = videos[i];

				// If id matches, set portfolio item and set found to true
				if(video.id() === id) {
					self.selectedPortfolioItem(video);
					itemFound = true;
				}
			}

			// Search images
			for(var i = 0; i < images.length && !itemFound; i++) {
				var image = images[i];

				// If id matches, set portfolio item and set found to true
				if(image.id() === id) {
					self.selectedPortfolioItem(image);
					itemFound = true;

					self.selectedCategory().selectedImageIndex(i);
				}
			}

			// If found item, scroll to top
			if(itemFound) {
				$('body').scrollTop(0);
			}

			return itemFound;

		};

		self.initialize(categories);

		// Router
	    var sammy = Sammy(function() {

	    	this.get('#/', function() {

	    		self.clearSelections();
	    	});

	    	// Just category link
		    this.get('#:categoryId', function() {

			    var categoryId = this.params.categoryId.toLowerCase();

		    	// If not the current category
		    	if(!(self.selectedCategory() && self.selectedCategory().id() && self.selectedCategory().id() == categoryId)) {
		    		// Clear selections
		    		self.clearSelections();

		    		// Find portfolio item where link matches title link
			    	self.setCategoryById(categoryId);
		    	}
		    	else {
		    		// If current category, clear selected portfolio item
		    		self.selectedPortfolioItem(null);
		    	}

		    });

		    // Category and item link
		    this.get('#:categoryId/:itemId', function() {

			    var categoryId = this.params.categoryId.toLowerCase();
			    var itemId = this.params.itemId.toLowerCase()

		    	// If not the current category
		    	if(!(self.selectedCategory() && self.selectedCategory().id() && self.selectedCategory().id() === categoryId)) {
		    		// Clear selections
		    		self.clearSelections();

		    		// Find portfolio item where link matches title link
			    	var categoryFound = self.setCategoryById(categoryId);

			    	if(categoryFound) {
			    		self.setItemInSelectedCategoryById(itemId);
			    	}
		    	}
		    	else if(!(self.selectedPortfolioItem() && self.selectedPortfolioItem().id() && self.selectedPortfolioItem().id() === itemId)) {
		    		// If current category but not current item, clear selected portfolio item
		    		self.selectedPortfolioItem(null);

		    		self.setItemInSelectedCategoryById(itemId);
		    	}

		    });

	    }).run(location.hash || '#/');


	}

	ko.applyBindings(new ViewModel(categories));

});