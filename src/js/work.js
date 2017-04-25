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
		gifs: [
			{
				title: 'Elephant 1'
			},
			{
				title: 'Elephant 2'
			}
		],
		subcategories: []
	},
	{
		title: 'Live Action Film',
		thumbnail: 'live-action-film/entanglement-thumbnail.jpg',
		parentLink: '',
		path: 'live-action-film',
		images: [],
		videos: [
			{
				title: 'Entanglement',
				youtubeId: 'Mv7hIr_c0ck'
			}
		],
		gifs: [],
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
				title: 'Figure Drawing'
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
		gifs: [],
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
				title: 'Fall from Ivory Tower'
			},
			{
				title: 'Figure Painting 1'
			},
			{
				title: 'Figure Painting 2'
			},
			{
				title: 'Authors Dancing'
			},
			{
				title: 'Authors Dancing In Progress 1'
			},
			{
				title: 'Authors Dancing In Progress 2'
			},
			{
				title: 'Authors Dancing In Progress 3'
			},
			{
				title: 'Red and Green All Over'
			},
			{
				title: 'Portrait'
			}

		],
		videos: [],
		gifs: [],
		subcategories: []
	},
	{
		title: 'Sets',
		thumbnail: 'sets/rakes-progress/the-rakes-progress-4.jpg',
		parentLink: '',
		path: 'sets',
		images: [],
		videos: [],
		gifs: [],
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
			gifs: [],
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
			gifs: [],
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
				},
				{
					title: 'Exist 2'
				}
			],
			videos: [],
			gifs: [],
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
			gifs: [],
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
				},
				{
					title: 'Egg Set'
				},
				{
					title: 'Egg Set In Progress 1'
				},
				{
					title: 'Egg Set In Progress 2'
				},
				{
					title: 'Egg Set In Progress 3'
				},
				{
					title: 'Egg Set In Progress 4'
				}
			],
			videos: [],
			gifs: [],
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
		gifs: [],
		subcategories: [{
			title: 'Cards',
			thumbnail: 'illustration/cards/strawberry-thieves/strawberry-thieves-1.jpg',
			parentLink: 'illustration',
			path: 'illustration/cards',
			images: [],
			videos: [],
			gifs: [],
			subcategories: [
				{
					title: 'Strawberry Thieves',
					thumbnail: 'illustration/cards/strawberry-thieves/strawberry-thieves-1.jpg',
					parentLink: 'cards',
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
					gifs: [],
					subcategories: []
				},
				{
					title: 'Tierpark',
					thumbnail: 'illustration/cards/tierpark/cover.jpg',
					parentLink: 'cards',
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
					gifs: [],
					subcategories: []
				},
				{
					title: 'Birthday',
					thumbnail: 'illustration/cards/birthday/hannah.jpg',
					parentLink: 'cards',
					path: 'illustration/cards/birthday',
					images: [
						{
							title: 'Ulrich'
						},
						{
							title: 'Pfister'
						},
						{ 
							title: 'Sand'
						},
						{
							title: 'Alex'
						},
						{
							title: 'Alex 2'
						},
						{
							title: 'Hannah'
						},
						{
							title: 'Ellie'
						},
						{
							title: 'Jonathan'
						},
						{
							title: 'Jonathan in Progress'
						},
						{
							title: 'Ratchberts 1'
						},
						{
							title: 'Ratchberts 2'
						},
						{
							title: 'Nerds'
						},
						{
							title: 'Rosh Hashanah'
						},
						{
							title: 'Shelley'
						}
					],
					videos: [],
					gifs: [],
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
					},
					{
						title: 'Suits'
					},
					{
						title: 'Emily'
					},
					{
						title: 'Emily Interview'
					},
					{
						title: 'Pinata'
					},
					{
						title: 'Emily 1'
					},
					{
						title: 'Living Room'
					}
				],
				videos: [],
				gifs: [],
				subcategories: []
			},
			{
				title: 'Miscellaneous Illustration',
				thumbnail: 'illustration/miscellaneous-illustration/vitorio-label-mockups.jpg',
				parentLink: 'illustration',
				path: 'illustration/miscellaneous-illustration',
				images: [
					{
						title: 'Vitorio Label Mockups'
					},
					{
						title: 'Post Its'
					}
				],
				videos: [],
				gifs: [],
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
		gifs: [],
		subcategories: [
			{
				title: 'Models',
				thumbnail: 'miscellaneous/models/9th-grade-elizabethan-model-1.jpg',
				parentLink: 'miscellaneous',
				path: 'miscellaneous/models',
				images: [
					{
						title: 'Elephant Puppet Powdered'
					},
					{
						title: 'Elephant Puppet In Progress 1'
					},
					{
						title: 'Elephant Puppet In Progress 2'
					},
					{
						title: 'Elephant Puppet In Progress 3'
					},
					{
						title: 'Elephant Puppet In Progress 4'
					},
					{
						title: 'Elephant Puppet In Progress 5'
					},
					{
						title: 'Moishe with Coat'
					},
					{
						title: 'Moishe with Vest'
					},
					{
						title: 'Moishe with Clothes'
					},
					{
						title: 'Moishe in Progress 1'
					},
					{
						title: 'Moishe in Progress 2'
					},
					{
						title: 'Pysanky 1'
					},
					{
						title: 'Pysanky 2'
					},
					{
						title: 'Pysanky 3'
					},
					{
						title: 'Pysanky 4'
					},
					{
						title: 'Elephant Mold 1'
					},
					{
						title: 'Elephant Mold 2'
					},
					{
						title: 'Elephant Mold 3'
					},
					{
						title: 'Elephant Mold 4'
					},
					{
						title: 'Elephant Mold 5'
					},
					{
						title: '9th Grade Elizabethan Model 1'
					},
					{
						title: '9th Grade Elizabethan Model 2'
					}

				],
				videos: [],
				gifs: [],
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
				gifs: [],
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
						title: 'Headless Mountain Goat 1'
					},
					{
						title: 'Headless Mountain Goat 2'
					},
					{
						title: 'Mountain Goat'
					},
					{
						title: 'Emily Goat Top View'
					},
					{
						title: 'Emily Goat Side View'
					},
					{
						title: 'Bread Basket'
					}
				],
				videos: [],
				gifs: [],
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
				gifs: [],
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
				gifs: [],
				subcategories: []
			},
		]
	}
];