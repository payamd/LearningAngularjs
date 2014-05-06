var app = angular.module("behaviorT2", [])

app.controller("firstCTRL", function($scope){

    $scope.loadmoretweets = function() {
        alert ("ok load that shit!!!");

    }
})



app.directive("enter" , function(){
    return function(scope,element,attrs){
        element.bind("mouseenter",function(){
           scope.$apply(attrs.enter)
        })
    }
})