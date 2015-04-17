//global variables
var input;

angular.module('starter.controllers', [])



.controller('DashCtrl', function ($scope) {


    $scope.number = {};
    $scope.number.input;
    $scope.change = function () {
        input = parseInt($scope.number.input);
        console.log(input);
    };







})

.controller('ChatsCtrl', function ($scope, Chats) {
    $scope.array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    $scope.select = [];
    $scope.select1 = [];
    $scope.select2 = [];
    $scope.select3 = [];

    $scope.arr = [];
    $scope.arr2 = [];
    $scope.arr3 = [];
    $scope.arr4 = [];


    $scope.jyoti = [];
    $scope.jyoti2 = [];
    $scope.jyoti3 = [];
    $scope.jyoti4 = [];
    $scope.jyoti5 = [];

    for (var q = 0; q < $scope.array.length; q++) {
        $scope.jyoti[q] = false;
    };
    // var check = 0;




    $scope.magic = function (i, arrey, limitlen, classname, destination, temparr, messi) {
        console.log(messi);
        var p = arrey[i];
        //console.log(temparr);

        if (temparr.length < limitlen) {
            if (temparr.indexOf(p) == -1) {
                classname[i] = !classname[i];
                temparr.push(arrey[i]);
                console.log(temparr.length);
                console.log(temparr);
            };
            if (temparr.length == limitlen) {
                console.log(messi);
                $scope.spliting(arrey, temparr, destination, messi, classname);
            };
        };
    };


    $scope.arr1 = [];
    $scope.spliting = function (arrey, temparr, destine, messi, classname) {
        var c = 0;
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
        console.log(messi);
        $scope.selected(temparr, destine, messi, classname);
    }
    $scope.colour = function (val, len, array) {
        for (var w = 0; w < len; w++) {
            array[w] = val;
        };
    };

    var insertintodestination = function (d, arrr, i3) {
        for (var e = 0; e < arrr.length; e++) {
            d.push(arrr[e]);

        };
        d.sort(function (a, b) {
            return a - b;
        });
        //	if ($scope.select2.length == 2) {
        //	$scope.magic(i3, d, 1, jyoti3, select2, $scope.arr4);
        //}
    };

    $scope.selected = function (temparr, des, messi, classname) {
        console.log(input);
        var ind = temparr.indexOf(input);
        var j = classname[ind];
        console.log(ind);
        if (ind == -1) {
            console.log(messi);

            $scope.colour(j, $scope.arr1.length, messi);
            insertintodestination(des, $scope.arr1);
            //des = $scope.arr1;

        } else {
            console.log(messi);
            $scope.colour(!j, temparr.length, messi);
            insertintodestination(des, temparr);
            //des = $scope.arr;
        };

        //$scope.arr = [];
        $scope.arr1 = [];


        //for(var a=0;a<$scope.arr.length;a++){

        //}
    };
    $scope.magic1 = function (i1, arrrr, classname, dest, tempar, messi) {
        console.log(arrrr.length);
        if (arrrr.length == 3) {

            $scope.magic(i1, arrrr, 2, classname, dest, tempar, messi);

        } else if (arrrr.length == 2) {
            $scope.magic(i1, arrrr, 1, classname, dest, tempar, messi);
        }


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