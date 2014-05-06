/**
 * Created by Moon on 3/11/14.
 */
var myApp = angular.module('myApp', []);
myApp.factory('Data', function(){
    return {message:"I'm data from a service"}
});

function firstController($scope ,Data) {
    $scope.data = Data;
}
function secondController($scope, Data){
    $scope.data=Data;

    $scope.payam = function (message) {
        return message.split("").reverse().join("");
    }

}
/**
 * Created by Moon on 3/13/14.
 */
