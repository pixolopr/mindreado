angular.module('starter.controllers', [])

.controller('DashCtrl', function ($scope) {


    $scope.number = "";








})

.controller('ChatsCtrl', function ($scope, Chats) {
    $scope.array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    $scope.magic = function () {}
})

.controller('ChatDetailCtrl', function ($scope, $stateParams, Chats) {
    $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function ($scope) {
    $scope.settings = {
        enableFriends: true
    };
});