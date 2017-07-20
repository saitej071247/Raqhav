'use strict';
 
angular.module('Home')
 
.controller('HomeController',
    ['$scope','$rootScope',
    function ($scope,$rootScope) {
        $scope.userList = [
            {
                name: "Sachitanand Kushwaha",
                alias:"sachi",
                mobile: "9949240145"
            },
            {
                name: "Eshwar Yaddanapudi",
                alias:"eshwar",
                mobile: "9911240145"
            },
            {
                name: "Saiteja Duggisetty",
                alias:"sai",
                mobile: "9998240145"
            },
            {
                name: "Sneha Kante",
                alias:"sneha",
                mobile: "9967240145"
            }];

            $scope.getImagePath = function (value) {
                    return $rootScope.imagePath + '/' + value+ '.png';
            }
            $scope.getConversation = function (user,index) {
                $scope.selectedUser =  user;
                $scope.messageList = [
                    {
                        name: "Sachitanand Kushwaha",
                        alias:"sachi",
                        mobile: "9949240145"
                    },
                    {
                        name: "Eshwar Yaddanapudi",
                        alias:"eshwar",
                        mobile: "9911240145"
                    },
                    {
                        name: "Saiteja Duggisetty",
                        alias:"sai",
                        mobile: "9998240145"
                    },
                    {
                        name: "Sneha Kante",
                        alias:"sneha",
                        mobile: "9967240145"
                    }];
            }
        $scope.username = $rootScope.globals.currentUser.username;
    }]);