var app = angular.module("behavior", [])
app.directive("enter", function(){
    return function(scope , element ,attrs){
        element.bind("mouseenter",function(){
            console.log("you are in");
        element.addClass(attrs.enter);

        })}})







    app.directive("leave", function(){
        return function(scope , element){
            element.bind("mouseleave",function(){
                console.log("you are your are out");
            element.removeClass("payam");
        })}})


