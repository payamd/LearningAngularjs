/**
 * Created by Moon on 12/1/2014.
 */
var app;
app = angular.module("payam", ['ngRoute']);


app.config(function($routeProvider){
    $routeProvider
        .when('/',{
            templateUrl :'views/Items.html',
            controller:'ExpensesViewController'
        })
        .when('/edit/:id',{
            templateUrl :'views/Edit.html',
            controller:'ExpensesEditViewController'
        })
        .when('/new',{
            templateUrl :'views/new.html',
            controller:'ExpensesEditViewController'
        })
        .otherwise({redirectTO:'/'});



});

app.controller("pctrl",['$scope',function($scope){
    $scope.apptitle="my expense App v.1";
}]);/**
 * Created by Moon on 12/4/2014.
 */
app.factory('Expenses',function(){
   var service=[];

    service.items=[
        {id:1,description: 'food', amount: 80, date: '2014-10-01'},
        {id:2,description: 'tickets', amount: 11, date: '2014-10-02'},
        {id:3,description: 'food', amount: 12, date: '2014-10-03'},
        {id:4,description: 'phone credit', amount: 13, date: '2014-10-04'},
        {id:5,description: 'bills', amount: 14, date: '2014-10-05'},
        {id:6,description: 'food', amount: 15, date: '2014-10-06'},
    ]


    service.getById = function(id){
 return _.find(service.items,function(entry){
     return entry.id == id;
 })

    }

    service.getNewId = function() {
        if(service.newId) {
            service.newId++;
            return service.newId;
        }
        else {
            var MaxId = _.max(service.items,function(item){return item.id;});
            service.newId = MaxId.id + 1;
            return service.newId;
        }
    }



    service.save=function(entry){
        var toUpdate = service.getById(entry.id);
       if(toUpdate){
           _.extend(toUpdate,entry);
       }
        else{entry.id=service.getNewId();
            service.items.push(entry)  ;}

    }

    service.remove = function(entry){
       service.items= _.reject(service.items,function(element){
           return element.id == entry.id;
       });

    };


    return service;
});



app.controller('ExpensesViewController', ['$scope','Expenses','$location',function($scope,Expenses,$location) {
    $scope.expenses=Expenses.items;
    $scope.addnew = function(){
        $location.path('/new');

    }

    $scope.remove = function(expense){
        Expenses.remove(expense);


    };

    $scope.$watch(function(){
        return Expenses.items;
    },function(items){
        $scope.expenses=items;
    });

}]);

app.controller('ExpensesEditViewController',['$scope','$routeParams','Expenses','$location',function($scope , $routeParams,Expenses,$location){
    $scope.welcome='you can edit your items from here ' + $routeParams.id + '\n the first item is ' + Expenses.items[0].description;


if(!$routeParams.id){

    $scope.Expenses = {id:'0' ,description: 'lazania', amount: 6, date: new Date().getFullYear()};
} else{
$scope.Expenses = _.clone(Expenses.getById($routeParams.id));

}

    $scope.save=function(){
        Expenses.save($scope.Expenses);
        $location.path('/');
    }

}])