var app =  angular.module("PhoneApp", [])
app.directive("Phone", function(){

    return {
       restrict:"E",
       scope:{
           dial:"&"
       },

        template:'<input type="text" ng-model="value"' + '<button ng-click="dial("message:value")> call home </button>'

    }
})