angular.module('starter.controllers', [])

.controller('DashCtrl', function ($scope) {

    $scope.array1 = [0,1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    $scope.array2 = [];
    
    console.log($scope.array1[11]);
    for (var q = 0; q < $scope.array1.length; q++) {
        var arr = [];
        for (var w = 0; w < 3; w++) {
            if ($scope.array1[q] || $scope.array1[q]==0) {
                arr.push($scope.array1[q]);
            };
            if (w != 2) {
                q++;
            };
        };
        $scope.array2.push(arr);
    };
    console.log($scope.array2);
    $scope.text = "abc";

})

.controller('ChatsCtrl', function ($scope, Chats) {
    $scope.chats = Chats.all();
    $scope.remove = function (chat) {
        Chats.remove(chat);
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