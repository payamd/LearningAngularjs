var app = angular.module("PayamApp",[])
app.directive("superhero", function(){

    return {
            restrict:"E",
            scope : {},
            controller: function($scope){
                $scope.abilities = []
                this.addstrength=function(){
                    $scope.abilities.push("strength")
                }

                this.addspeed=function(){
                    $scope.abilities.push("speed")
                }

                this.addflight=function(){
                    $scope.abilities.push("flight")
                }

            },

            link: function(scope,element){
            element.bind("mouseenter",function(){

                console.log(scope.abilities);
            })


            }



    }
} )



    app.directive("strength", function(){
        return{
            require:"superhero",
            link: function(scope,element,attrs,superheroCtrl){
                superheroCtrl.addstrength();
            }

        }

    })


    app.directive("speed", function(){
        return{
            require:"superhero",
            link: function(scope,element,attrs,superheroCtrl){
                superheroCtrl.addspeed();
            }

        }

    })


    app.directive("flight", function(){
        return{
            require:"superhero",
            link: function(scope,element,attrs,superheroCtrl){
                superheroCtrl.addflight();
            }

        }

    })

