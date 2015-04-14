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
    $scope.select = [];
    $scope.select1 = [];
    $scope.select2 = [];
    $scope.jyoti = [];
    for (var q = 0; q < $scope.array.length; q++) {
        $scope.jyoti[q] = false;
    };
    var check = 0;
    $scope.arr = [];




    $scope.magic = function (i, arrey, limitlen, classname, destination) {
        console.log(arrey);
        var p = arrey[i];
        // console.log(p);
        if ($scope.arr.length < limitlen) {

            if ($scope.arr.indexOf(p) == -1) {
                classname[i] = !classname[i];
                $scope.arr.push(arrey[i]);
                console.log($scope.arr.length);
                console.log($scope.arr);
            };
            if ($scope.arr.length == limitlen) {
                /*if (limitlen == 5) {
                    $scope.spliting($scope.array);
                } else if (limitlen == 3) {
                    console.log($scope.select);
                    $scope.spliting($scope.select);
                }*/
                console.log(arrey);
                console.log(destination);
                
                $scope.spliting(arrey, destination);
                destination = [1,2];
                arrey=[1,2];
            };
        };
    };


    $scope.arr1 = [];
    $scope.spliting = function (arrey, destine) {
        console.log(destine);
        destine = [1,2];
        c = 0;
        for (var k = 0; k < arrey.length; k++) {
            for (var j = 0; j < $scope.arr.length; j++) {
                if (arrey[k] == $scope.arr[j]) {
                    c = 0;
                    break;
                } else {
                    c = 1;
                };

            };
            if (c == 1) {
                $scope.arr1.push(arrey[k]);
            };
        };
        console.log($scope.arr1);
        $scope.selected(destine);
    }
    $scope.colour = function (val, len, array) {
        for (var w = 0; w < len; w++) {
            array[w] = val;
        };
    };

    $scope.selected = function (des) {
        var ind = $scope.arr.indexOf(input);
        $scope.jyoti2 = [];
        console.log(ind);
        if (ind == -1) {
            $scope.colour(false, $scope.arr1.length, $scope.jyoti2);
            des = $scope.arr1;

        } else {
            $scope.colour(true, $scope.arr.length, $scope.jyoti2);
            des = $scope.arr;
        };
        $scope.arr = [];
        $scope.arr1 = [];


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