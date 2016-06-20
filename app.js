(function(){
	
	var app = angular.module('monsterStore',['store-directives']);
	
	app.controller('StoreController', ['$http', function($http){
		var store = this;
		store.products = monsters;
		// $http.get('/store-products.json').success(function(data){
		  // store.products = data;
		// });
		
	}]);
	
	app.controller('ReviewController', function(){
		
		this.review={};
		
		this.addReview = function(product){
			product.reviewsSum = parseInt(product.reviewsSum) + parseInt(this.review.stars);
			product.reviews.push(this.review);
			product.reviewsAvg = Math.round(product.reviewsSum / product.reviews.length);
			this.review={};
		}
		
		
	});
	
	app.controller('StarsController', ['$scope', '$sce', function($scope, $sce){
		
		var avgScore = 0;
		var scoreStars = '<p>bla</p>';
		
		$scope.recieveAvg= function(product){
			avgScore = product.reviewsAvg;
			scoreStars = fillStars();
		};
		
		$scope.starsHtml = scoreStars;
		
		function fillStars(){
			var i = 0;
			var retString;
			
			while(i < avgScore){
				retString += '<span>&#9733;</span>';
				i++;
			}
			
			while(i < 5){
				retString += '<span>&#10025;</span>';
				i++;
			}
			
			return retString;
		}
		
		$scope.trustedHtml = $sce.trustAsHtml($scope.starsHtml);
		
	}]);
	
})();

var monsters = [
	{
		'name':'Furbyellow',
		'type':'Smiles monster',
		'price':'55',
		'description':'Furbyellow is the funniest monster in the bunch. He is known for his huge smile and heart. Guaranteed laughs',
		'height':'58',
		'weight':'76',
		'numberOfEyes':'2',
		'teethLen':'3',
		'imageSrc':'big-smile-yellow.jpg',
		'reviews':[],
		'reviewsSum':'0',
		'reviewsAvg':'0',
		'reviewStars':"<span>&#10025;</span>"
	},
	{
		'name':'Kyle the Seer',
		'type':'Predictor of the future',
		'price':'80',
		'description':'Kyle the Seer is usefull to have. Due to his sharp 3 eyes, he is able to predict the future.',
		'height':'62',
		'weight':'69',
		'numberOfEyes':'3',
		'teethLen':'0.8',
		'imageSrc':'blue-3-eyes.jpg',
		'reviews':[],
		'reviewsSum':'0',
		'reviewsAvg':'0'
	},
	{
		'name':'Frankie',
		'type':'Young monster',
		'price':'105.99',
		'description':'Frankie is the youngest in the bunch. She is as sweet as she is playful.',
		'height':'43',
		'weight':'40',
		'numberOfEyes':'2',
		'teethLen':'0.2',
		'imageSrc':'cute-green-monster.jpg',
		'reviews':[],
		'reviewsSum':'0',
		'reviewsAvg':'0'
	},
	{
		'name':'Gossamer',
		'type':'Fast walker',
		'price':'99.99',
		'description':'Gossamer is a fast-walking delivery monster. You can count on him to deliver any package in no time.',
		'height':'49',
		'weight':'58',
		'numberOfEyes':'2',
		'teethLen':'0.6',
		'imageSrc':'cute-pink-dotted.jpg',
		'reviews':[],
		'reviewsSum':'0',
		'reviewsAvg':'0'
	},
	{
		'name':'Sigmund',
		'type':'Giant',
		'price':'150.5',
		'description':'Sigmund is our good hearted giant. Despite his enormous size, he is a bashful type.',
		'height':'1.90',
		'weight':'93',
		'numberOfEyes':'2',
		'teethLen':'2',
		'imageSrc':'green-big-cutie.jpg',
		'reviews':[],
		'reviewsSum':'0',
		'reviewsAvg':'0'
	},
	{
		'name':'Mike Wazowski Jr.',
		'type':'Monsters Inc.',
		'price':'170.5',
		'description':'Mike Wazowski Jr. is the son of known celebrities. He is the perfect combination of his parents.',
		'height':'49',
		'weight':'52',
		'numberOfEyes':'1',
		'teethLen':'1',
		'imageSrc':'green-small-1-eye.jpg',
		'reviews':[],
		'reviewsSum':'0',
		'reviewsAvg':'0'
	},
	{
		'name':'Ike Wazowski',
		'type':'Monsters Inc.',
		'price':'150',
		'description':'Ike Wazowski is the less famous brother of Mike Wazowski Jr. He also has great genes and a charming personality.',
		'height':'72',
		'weight':'80',
		'numberOfEyes':'1',
		'teethLen':'1.6',
		'imageSrc':'sparkly-purplish.jpg',
		'reviews':[],
		'reviewsSum':'0',
		'reviewsAvg':'0'
	},
	{
		'name':'Gleem the Goodhearted',
		'type':'Gloomy goodheart',
		'price':'34.99',
		'description':"Gleem the Goodhearted is man's best (gloomy) friend. His heart is as big as he is gloomy",
		'height':'1.78',
		'weight':'84',
		'numberOfEyes':'3',
		'teethLen':'0.7',
		'imageSrc':'orange-sad-3-eyes.jpg',
		'reviews':[],
		'reviewsSum':'0',
		'reviewsAvg':'0'
	},
	{
		'name':'Fluffy Fink',
		'type':'Young smiles monster',
		'price':'100',
		'description':'Fluffy Fink is a funny playful monster. she is known for her goofiness and her big smile.',
		'height':'45',
		'weight':'48',
		'numberOfEyes':'3',
		'teethLen':'0.2',
		'imageSrc':'pink-tiny-1-eye.jpg',
		'reviews':[],
		'reviewsSum':'0',
		'reviewsAvg':'0'
	},
	{
		'name':'Bellua',
		'type':'Slow thinker',
		'price':'60',
		'description':'Bellua is a funny fellow. He is slow thinker, but a loyal friend.',
		'height':'65',
		'weight':'70',
		'numberOfEyes':'2',
		'teethLen':'3.2',
		'imageSrc':'smiley-blue.jpg',
		'reviews':[],
		'reviewsSum':'0',
		'reviewsAvg':'0'
	},
	{
		'name':'Worried Moon',
		'type':'Worried monster',
		'price':'40',
		'description':'Worried Moon may look a bit scary, but he is actually a harmless monster. He is constantly worried, but his charming narotiv personality will eventually make you love him.',
		'height':'79',
		'weight':'90',
		'numberOfEyes':'2',
		'teethLen':'2.4',
		'imageSrc':'worried-pink.jpg',
		'reviews':[],
		'reviewsSum':'0',
		'reviewsAvg':'0'
	}
];