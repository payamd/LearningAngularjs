/**
 * Created by Moon on 12/1/2014.
 */
var app = angular.module("payam",[]);
app.controller("pctrl",['$scope',function($scope){

    $scope.sha={
        name:'shahrokh',
        age:45,
        location:'usa'
    };

    $scope.sky='the sky is so blue'

    $scope.younger = function(){
        $scope.sha.age --;
    };



    $scope.items = [
        {
            name: 'pizza',
            ingredients: ['cheese', 'tomato', 'oregano', 'salt']
        },
        {
            name: 'tortilla',
            ingredients: ['butter', 'salt', 'pepper', 'garlic']
        },
        {
            name: 'cake',
            ingredients: ['cream', 'sugar']
        },
        {
            name: 'empanada',
            ingredients: ['flour', 'meat', 'onion']
        }
    ];



}]);