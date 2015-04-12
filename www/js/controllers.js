angular.module('starter.controllers', [])

var input = "";

.controller('DashCtrl', function ($scope) {


    $scope.number = "";
    
    $scope.change = function()
    {
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
    $scope.magic = function (i) {
        check++;
        if (check < 6) {
            $scope.jyoti[i] = true;
        };
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