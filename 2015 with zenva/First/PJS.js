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

}]);