defaultModule.directive('sharedSidebar', function(){
    return{
        templateUrl: './app/shared/sidebar/sidebar.html',
        controller: function($scope, $rootScope){
            $scope.name = $rootScope.name;
        },
        link: function(scope, elem, attr){
            //scope.name = sharedHeaderCtrl.name;
            console.log(scope.name);
        }
    };
});