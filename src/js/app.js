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

	// Data
	var categories = [
		{
			title: 'Animation Reel',
			thumbnail: 'miscellaneous/quilt.jpg',
			parentLink: '',
			path: 'animation',
			images: [],
			videos: [
				{
					title: 'Animation Reel',
					youtubeId: 'mvVFWN4fXDo'
				}
			],
			subcategories: []
		},
		{
			title: 'Drawings',
			thumbnail: 'drawings/scissors.jpg',
			parentLink: '',
			path: 'drawings',
			images: [
				{
					title: 'Scale and Flowers'
				},
				{
					title: 'Detail of Scale and Flowers 1'
				},
				{
					title: 'Detail of Scale and Flowers 2'
				},
				{
					title: 'Newspaper'
				},
				{
					title: 'Scissors'
				},
				{
					title: 'Moose'
				},
				{
					title: 'Ostrich'
				},
				{
					title: 'Sever'
				},
				{
					title: 'Sheraton'
				},
				{
					title: 'Widener'
				},
				{
					title: 'Maintenance Vehicle'
				},
				{
					title: 'Emergency Light'
				},
				{
					title: 'Mom Dad'
				},
				{
					title: 'Detail of Mom Dad'
				}
			],
			videos: [],
			subcategories: []
		},
		{
			title: 'Paintings',
			thumbnail: 'paintings/kausalya.jpg',
			parentLink: '',
			path: 'paintings',
			images: [
				{
					title: 'Kausalya'
				},
				{
					title: 'Figure Painting 1'
				},
				{
					title: 'Figure Painting 2'
				},
				{
					title: 'Portrait'
				}

			],
			videos: [],
			subcategories: []
		},
		{
			title: 'Sets',
			thumbnail: 'sets/references/references-to-salvador-dali-make-me-hot-4.jpg',
			parentLink: '',
			path: 'sets',
			images: [],
			videos: [],
			subcategories: [{
				title: 'References to Salvador Dali Make Me Hot',
				thumbnail: 'sets/references/references-to-salvador-dali-make-me-hot-1.jpg',
				parentLink: 'sets',
				path: 'sets/references',
				images: [
					{
						title: 'References to Salvador Dali Make Me Hot 1'
					},
					{
						title: 'References to Salvador Dali Make Me Hot 2'
					},
					{
						title: 'References to Salvador Dali Make Me Hot 3'
					},
					{
						title: 'References to Salvador Dali Make Me Hot 4'
					},
					{
						title: 'References to Salvador Dali Make Me Hot 5'
					},
					{
						title: 'References to Salvador Dali Make Me Hot 6'
					},
					{
						title: 'References to Salvador Dali Make Me Hot 7'
					},
					{
						title: 'References to Salvador Dali Make Me Hot 8'
					},
					{
						title: 'References to Salvador Dali Make Me Hot 9'
					},
					{
						title: 'References to Salvador Dali Make Me Hot 10'
					}
				],
				videos: [],
				subcategories: []
			},
			{
				title: 'The Rake\'s Progress',
				thumbnail: 'sets/rakes-progress/the-rakes-progress-1.jpg',
				parentLink: 'sets',
				path: 'sets/rakes-progress',
				images: [
					{
						title: 'The Rake\'s Progress 1'
					},
					{
						title: 'The Rake\'s Progress 2'
					},
					{
						title: 'The Rake\'s Progress 3'
					},
					{
						title: 'The Rake\'s Progress 4'
					}
				],
				videos: [],
				subcategories: []
			},
			{
				title: 'Exist',
				thumbnail: 'sets/exist/',
				parentLink: 'sets',
				path: 'sets/exist',
				images: [],
				videos: [],
				subcategories: []
			},
			{
				title: 'Unspoken',
				thumbnail: 'sets/unspoken/unspoken-2.jpg',
				parentLink: 'sets',
				path: 'sets/unspoken',
				images: [
					{
						title: 'Unspoken 1'
					},
					{
						title: 'Unspoken 2'
					}
				],
				videos: [],
				subcategories: []
			},
			{
				title: 'Animation Sets',
				thumbnail: 'sets/animation-sets/dies-ovi-palace.jpg',
				parentLink: 'sets',
				path: 'sets/animation-sets',
				images: [
					{
						title: 'Dies Ovi Palace'
					}
				],
				videos: [],
				subcategories: []
			}]
		},
		{
			title: 'Illustration',
			thumbnail: 'illustration/cards/strawberry-thieves/strawberry-thieves-1.jpg',
			parentLink: '',
			path: 'illustration',
			images: [],
			videos: [],
			subcategories: [{
				title: 'Cards',
				thumbnail: 'illustration/cards/strawberry-thieves/strawberry-thieves-1.jpg',
				parentLink: 'illustration',
				path: 'illustration/cards',
				images: [],
				videos: [],
				subcategories: [
					{
						title: 'Strawberry Thieves',
						thumbnail: 'illustration/cards/strawberry-thieves/strawberry-thieves-1.jpg',
						parentLink: 'illustration/cards',
						path: 'illustration/cards/strawberry-thieves',
						images: [
							{
								title: 'Strawberry Thieves 1'
							},
							{
								title: 'Strawberry Thieves 2'
							},
							{
								title: 'Strawberry Thieves 3'
							},
							{
								title: 'Strawberry Thieves 4'
							},
							{
								title: 'Strawberry Thieves 5'
							},
							{
								title: 'Strawberry Thieves 6'
							}
						],
						videos: [],
						subcategories: []
					},
					{
						title: 'Tierpark',
						thumbnail: 'illustration/cards/tierpark/cover.jpg',
						parentLink: 'illustration/cards',
						path: 'illustration/cards/tierpark',
						images: [
							{
								title: 'Cover'
							},
							{
								title: 'Anteater'
							},
							{
								title: 'Butterfly'
							},
							{
								title: 'Cheetah and Tortoise'
							},
							{
								title: 'Cockatoo'
							},
							{
								title: 'Crocodile'
							},
							{
								title: 'Giraffe'
							},
							{
								title: 'Goat'
							},
							{
								title: 'Gopher'
							},
							{
								title: 'Jaguar'
							},
							{
								title: 'Lobster'
							},
							{
								title: 'Moose'
							},
							{
								title: 'Ostrich'
							},
							{
								title: 'Peacock'
							},
							{
								title: 'Piglet'
							},
							{
								title: 'Polar Bear'
							},
							{
								title: 'Rhinoceros'
							},
							{
								title: 'Shark'
							},
							{
								title: 'Squirrel'
							},
							{
								title: 'Back Cover and Lion'
							}
						],
						videos: [],
						subcategories: []
					},
					{
						title: 'Birthday',
						thumbnail: 'illustration/cards/birthday/hannah.jpg',
						parentLink: 'illustration/cards',
						path: 'illustration/cards/birthday',
						images: [
							{
								title: 'Alex'
							},
							{
								title: 'Hannah'
							},
							{
								title: 'Ratchberts 1'
							},
							{
								title: 'Ratchberts 2'
							},
							{
								title: 'Shelley'
							}
						],
						videos: [],
						subcategories: []
					}
				]},
				{
					title: 'This Harvard Life',
					thumbnail: 'illustration/this-harvard-life/do-you-believe-in-magic.jpg',
					parentLink: 'illustration',
					path: 'illustration/this-harvard-life',
					images: [
						{
							title: 'A Podcast By Any Other Name'
						},
						{
							title: 'Do You Believe in Magic'
						}
					],
					videos: [],
					subcategories: []
				}
			]
		},
		{
			title: 'Miscellaneous',
			thumbnail: 'miscellaneous/quilt.jpg',
			parentLink: '',
			path: 'miscellaneous',
			images: [
				{
					title: 'Quilt'
				}
			],
			videos: [],
			subcategories: []
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
	    Sammy(function() {

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