//global variables
var input = 7;

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
        var p = $scope.array[i];
        // console.log(p);
        if ($scope.arr.length < 5) {
            $scope.jyoti[i] = true;
            if ($scope.arr.indexOf(p) == -1) {
                $scope.arr.push($scope.array[i]);
                console.log($scope.arr.length);
                console.log($scope.arr);
            };
            if ($scope.arr.length == 5) {
                $scope.spliting();

            };
        };






    }
    $scope.arr1 = [];
    $scope.spliting = function () {
        c = 0;
        for (var k = 0; k < $scope.array.length; k++) {
            for (var j = 0; j < $scope.arr.length; j++) {
                if ($scope.array[k] == $scope.arr[j]) {
                    c = 0;
                    break;
                } else {
                    c = 1;
                };

            };
            if (c == 1) {
                $scope.arr1.push($scope.array[k]);
            };
        };
        console.log($scope.arr1);
        $scope.selected();
    }
    $scope.colour = function (val, len, array) {
        for (var w = 0; w < len; w++) {
            array[w] = val;
        };
    };

    $scope.selected = function () {
        var ind = $scope.arr.indexOf(input);
        $scope.jyoti2 = [];
        console.log(ind);
        if (ind == -1) {
            $scope.colour(false, $scope.arr1.length, $scope.jyoti2);
            $scope.select = $scope.arr1;
            
        } else {
            $scope.colour(true, $scope.arr.length, $scope.jyoti2);
            $scope.select = $scope.arr;
        };


        //for(var a=0;a<$scope.arr.length;a++){

        //}
    };

})

.controller('ChatDetailCtrl', function ($scope, $stateParams, Chats) {
    $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function ($scope) {
    $scope.settings = {
        enableFriends: true
    };
});