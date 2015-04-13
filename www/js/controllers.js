//global variables
var input = "";

angular.module('starter.controllers', [])



.controller('DashCtrl', function ($scope) {


	$scope.number = "";
	$scope.change = function () {
		input = $scope.number;

	};







})

.controller('ChatsCtrl', function ($scope, Chats) {
	$scope.array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

	$scope.jyoti = [];
	for (var q = 0; q < $scope.array.length; q++) {
		$scope.jyoti[q] = false;
	};
	var check = 0;
	$scope.arr = [];




	$scope.magic = function (i) {
		check++; //wrong way to do, this will become on every click, check length of $scope.arr instead
		if (check < 6) {
			$scope.jyoti[i] = true;
			$scope.arr.push($scope.array[i]);
			if (check == 5)
				$scope.spliting();
		};






	}
	$scope.spliting = function () {
		$scope.arr1 = [];
		for (var k = 0, c = 0; k < $scope.array.length; k++) {
			for (var j = 0; j < $scope.arr.length; j++) {
				if ($scope.array[k] == $scope.arr[j]) {
					c = 0;
					break;
				} else
					c = 1;

			}
			if (c == 1)
				$scope.arr1.push($scope.array[k]);
		}

	}

})

.controller('ChatDetailCtrl', function ($scope, $stateParams, Chats) {
	$scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function ($scope) {
	$scope.settings = {
		enableFriends: true
	};
});