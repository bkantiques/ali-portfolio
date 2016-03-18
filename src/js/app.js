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

		// Category id
		this.id = new ko.computed(function() {
			return this.title().toLowerCase().replace(/[^a-z0-9 ]/g, '').replace(/ /g, '-');
		}, this);

	}

	// Parent class of image and video classes
	function PortfolioItem(item) {
		this.title = new ko.observable(item.title);
		this.thumbnail = new ko.observable(item.thumbnail);

		// Item id
		this.id = new ko.computed(function() {
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

	// Data
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

		self.clearSelections = function() {
			self.selectedPortfolioItem(null);
			self.selectedSubcategory(null);
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
			var subcategories = category.subcaegories();

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
					categoryFound = self.searchSubcategoriesById(subcategories[i]);
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
				categoryFound = self.searchSubcategoriesById(self.catetegories[i]);
			}

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
				}
			}

			return itemFound;

		};


		// Router
	    Sammy(function() {

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
		    	if(!(self.selectedCategory() && self.selectedCategory().id() && self.selectedCategory().id() == categoryId)) {
		    		// Clear selections
		    		self.clearSelections();

		    		// Find portfolio item where link matches title link
			    	var categoryFound = self.setCategoryById(categoryId);

			    	if(categoryFound) {
			    		self.setItemInSelectedCategoryById(itemId);
			    	}
		    	}
		    	else if(!(self.selectedItem() && self.selectedItem().id() && self.selectedItem().id() === itemId)) {
		    		// If current category but not current item, clear selected portfolio item
		    		self.selectedPortfolioItem(null);

		    		self.setItemInSelectedCategoryById(itemId);
		    	}

		    });
		    
	    }).run();

	    self.initialize(items);

	}

	ko.applyBindings(new ViewModel(a));

});