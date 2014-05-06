var app = angular.module("superhero", [])
app.directive("superman",function(){
    return{
        // E for element
        // C for class
        // A for active or link
        restrict: "E",
        template:"<div>i'm here to save the world!!!!</div>"

    }

})