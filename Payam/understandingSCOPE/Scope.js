var app = angular.module("ChoreApp",[]);

app.controller("choreCtrl",function($scope){

    $scope.logChores = function(chore){
        alert(chore + " is done");
    }




})



app.directive("kid", function(){

    return {
        restrict: "E",

        scope: {done:"&"} ,
        template: '<div><input type="text" ng-model="chore"><br>{{chore}}</div>' +'<button ng-click="done({chore:chore})">it\'s done !!!</button>'


        }
        })
