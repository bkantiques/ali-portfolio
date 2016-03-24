// Data
var categories = [
	{
		title: 'Animation Reel',
		thumbnail: 'animation-reel/animation-reel-thumbnail.jpg',
		parentLink: '',
		path: 'animation-reel',
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
			},
			{
				title: 'Fluorite'
			},
			{
				title: 'Leaf'
			},
			{
				title: 'Minerals'
			},
			{
				title: 'Ram Skeleton'
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
		thumbnail: 'sets/rakes-progress/the-rakes-progress-4.jpg',
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
					title: 'References to Salvador Dali Make Me Hot 3'
				},
				{
					title: 'References to Salvador Dali Make Me Hot 1'
				},
				{
					title: 'References to Salvador Dali Make Me Hot 2'
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
			thumbnail: 'sets/rakes-progress/the-rakes-progress-4.jpg',
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
			thumbnail: 'sets/exist/exist-1.jpg',
			parentLink: 'sets',
			path: 'sets/exist',
			images: [
				{
					title: 'Exist 1'
				}
			],
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
				},
				{
					title: 'Concept Sketch Eggscape'
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
		thumbnail: 'miscellaneous/silversmithing-and-enamel/silver-flowers-2.jpg',
		parentLink: '',
		path: 'miscellaneous',
		images: [],
		videos: [],
		subcategories: [
			{
				title: 'Models',
				thumbnail: 'miscellaneous/models/9th-grade-elizabethan-model-1.jpg',
				parentLink: 'miscellaneous',
				path: 'miscellaneous/models',
				images: [
					{
						title: '9th Grade Elizabethan Model 1'
					},
					{
						title: '9th Grade Elizabethan Model 2'
					},
					{
						title: 'Moishe in Progress 1'
					},
					{
						title: 'Moishe in Progress 2'
					},
					{
						title: 'Moishe with Clothes'
					},
					{
						title: 'Moishe with Vest'
					},
					{
						title: 'Moishe with Coat'
					}
				],
				videos: [],
				subcategories: []
			},
			{
				title: 'Silversmithing and Enamel',
				thumbnail: 'miscellaneous/silversmithing-and-enamel/silver-flowers-1.jpg',
				parentLink: 'miscellaneous',
				path: 'miscellaneous/silversmithing-and-enamel',
				images: [
					{
						title: 'Silver Flowers 1'
					},
					{
						title: 'Silver Flowers 2'
					},
					{
						title: 'Enamel Pendants'
					},
					{
						title: 'Flower Pendant'
					}
				],
				videos: [],
				subcategories: []
			},
			{
				title: 'Woodworking',
				thumbnail: 'miscellaneous/woodworking/chair-2.jpg',
				parentLink: 'miscellaneous',
				path: 'miscellaneous/woodworking',
				images: [
					{
						title: 'Chair 1'
					},
					{
						title: 'Chair 2'
					},
					{
						title: 'Bread Basket'
					}
				],
				videos: [],
				subcategories: []
			},
			{
				title: 'Sewing and Knitting',
				thumbnail: 'miscellaneous/sewing-and-knitting/quilt-detail.jpg',
				parentLink: 'miscellaneous',
				path: 'miscellaneous/sewing-and-knitting',
				images: [
					{
						title: 'Quilt Full'
					},
					{
						title: 'Quilt Detail'
					},
					{
						title: 'Knitted Blanket'
					},
					{
						title: 'Applique Paper Piecing Stars'
					},
					{
						title: 'Applique Paper Piecing 3 Squares'
					},
					{
						title: 'Patchwork 9 Squares'
					}
				],
				videos: [],
				subcategories: []
			},
			{
				title: 'Prints',
				thumbnail: 'miscellaneous/prints/museum-tags-and-water-towers.jpg',
				parentLink: 'miscellaneous',
				path: 'miscellaneous/prints',
				images: [
					{
						title: 'Museum Tags and Water Towers'
					}
				],
				videos: [],
				subcategories: []
			},
		]
	}
];