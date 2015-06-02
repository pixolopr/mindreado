//global variables
var input = 0;

angular.module('starter.controllers', [])



.controller('DashCtrl', function ($scope, $ionicModal, $interval) {
    /*$scope.$on('$ionicView.enter', function () {
        console.log("2");
     $scope.change(input);
    });*/

    $ionicModal.fromTemplateUrl('templates/my-modal.html', {
        scope: $scope,
        animation: 'slide-in-up'
    }).then(function (modal) {
        console.log("HEY HEY");
        $scope.modal = modal;
        console.log($scope.modal);
    });
    $scope.openModal = function () {
        $scope.modal.show();
    };
    $scope.closeModal = function () {
        $scope.modal.hide();
    };
    
    $interval($scope.openModal, 1000, 1);

    $scope.number = {};
    $scope.number.input = "";
    $scope.change = function () {
        input = parseInt($scope.number.input);
    };
})

.controller('ChatsCtrl', function ($scope, Chats, $location, $ionicPlatform, $filter, $ionicScrollDelegate) {

    $scope.resetgame = function () {
        console.log("Resetting");
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

        $scope.buttonarray = [];
        $scope.steptwo = [];
        $scope.slection;
        $scope.chechselect = 0;
        $scope.steptwoo = [];

        for (var r = 0; r < 6; r++) {
            $scope.buttonarray[r] = {
                "value": false,
                "title": "Yellow"
            };
            $scope.steptwo[r] = false;
        };
        console.log($scope.jyoti2);

        $scope.final = [];


    };


    //FUNCTION WILL CALL EVERY TIME PLAY PAGE IS OPENED
    $scope.$on('$ionicView.enter', function () {
        $scope.resetgame();
        console.log(input);
        if (input > 0) {
            $scope.inputset = true;
        } else {
            $scope.inputset = false;
        };
        for (var q = 0; q < $scope.array.length; q++) {
            $scope.jyoti[q] = false;
        };
    });


    $scope.resetgame();


    // var check = 0;




    $scope.magic = function (i, arrey, limitlen, classname, destination, temparr, messi) {
        var p = arrey[i];
        //console.log(temparr);

        if (temparr.length < limitlen) {
            if (temparr.indexOf(p) == -1) {
                console.log(classname[i]);
                classname[i] = !classname[i];
                temparr.push(arrey[i]);
                console.log(temparr.length);
                console.log(temparr);
            };

            if (temparr.length == limitlen) {
                console.log(messi);
                var b = arrey.indexOf(input);
                $scope.spliting(b, arrey, temparr, destination, messi, classname);
            };
        };
    };


    $scope.arr1 = [];
    $scope.spliting = function (i, arrey, temparr, destine, messi, classname) {
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
        $scope.selected(i, temparr, destine, messi, classname);
    }
    $scope.colour = function (val, len, array) {
        for (var w = 0; w < len; w++) {
            array[w] = val;
        };
    };

    $scope.insertintodestination = function (d, arrr) {
        if (d.length == 0) {
            for (var e = 0; e < arrr.length; e++) {
                d.push(arrr[e]);

            };
        };
        d.sort(function (a, b) {
            return a - b;
        });
        $ionicScrollDelegate.scrollBy(0, 300, true);
        window.scrollTo(0, 0);
        console.log("yo");

    };
    $scope.count = function (c) {
        return Math.round(c.length / 2);

    };


    $scope.selected = function (i, temparr, des, messi, classname) {
        console.log(input);
        console.log(temparr);
        console.log(classname);
        var ind = temparr.indexOf(input);
        console.log(ind);
        // var b = arrey.indexOf(input);
        var j = classname[i];
        console.log("j is" + j);
        $scope.steptwo[$scope.chechselect] = j;
        if (ind == -1) {
            console.log(messi);

            $scope.colour(j, $scope.arr1.length, messi);

            //insertintodestination(des, $scope.arr1);

            $scope.final = $scope.arr1;
            //des = $scope.arr1;

        } else {
            console.log(messi);
            $scope.colour(j, temparr.length, messi);
            //insertintodestination(des, temparr);

            $scope.final = temparr;
            //des = $scope.arr;
        };



        $scope.buttonarray[$scope.chechselect].value = true;
        console.log($scope.buttonarray);
        if (j == true) {
            $scope.buttonarray[$scope.chechselect].title = "GET PURPLE CARDS";
        } else {
            $scope.buttonarray[$scope.chechselect].title = "GET WHITE CARDS";
        };

        $scope.chechselect = $scope.chechselect + 1;


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