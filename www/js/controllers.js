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
    
    
    $scope.arr = [];
    $scope.arr1 = [];
    $scope.arr2 = [];
    
    
    
    $scope.jyoti = [];
    for (var q = 0; q < $scope.array.length; q++) {
        $scope.jyoti[q] = false;
    };
    var check = 0;




    $scope.magic = function (i, arrey, limitlen, classname, destination, temparr) {
        console.log(arrey);
        var p = arrey[i];
        console.log(temparr);
        if (temparr.length < limitlen) {
            if (temparr.indexOf(p) == -1) {
                classname[i] = !classname[i];
                temparr.push(arrey[i]);
                console.log($scope.arr.length);
                console.log($scope.arr);
            };
            if (temparr.length == limitlen) {
                $scope.spliting(arrey,temparr, destination);
            };
        };
    };


    $scope.arr1 = [];
    $scope.spliting = function (arrey,temparr, destine) {
        c = 0;
        for (var k = 0; k < arrey.length; k++) {
            for (var j = 0; j < temparr.length; j++) {
                if (arrey[k] == temparr[j]) {
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
        $scope.selected(temparr, destine);
    }
    $scope.colour = function (val, len, array) {
        for (var w = 0; w < len; w++) {
            array[w] = val;
        };
    };

    var insertintodestination = function(d, arrr)
    {
        for(var e=0; e<arrr.length;e++)
        {
            d.push(arrr[e]);
        };
    };
    
    $scope.selected = function (temparr, des) {
        var ind = $scope.arr.indexOf(input);
        $scope.jyoti2 = [];
        console.log(ind);
        if (ind == -1) {
            $scope.colour(false, $scope.arr1.length, $scope.jyoti2);
            insertintodestination(des,$scope.arr1);
            //des = $scope.arr1;

        } else {
            $scope.colour(true, $scope.arr.length, $scope.jyoti2);
            insertintodestination(des, temparr);
            //des = $scope.arr;
        };
        //$scope.arr = [];
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