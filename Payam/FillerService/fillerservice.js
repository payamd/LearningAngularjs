/**
 * Created by Moon on 3/13/14.
 */
var myApp = angular.module('myApp',[]);
myApp.factory('Avengers', function (){

    var Avengers = {};
    Avengers.cast = [
        {
            name:"payam",
            character:"davoudi"

        },
        {
            name:"farid",
            character:"asadi"
        },
        {
            name:"farshid",
            character:"dahi"
        },
        {
            name:"parviz",
            character:"davoudi"
        },
        {
            name:"mahin",
            character:"vaseghi"
        }
    ];
return Avengers;


})

function Avengersctrl($scope,Avengers){
$scope.avengers = Avengers;

}