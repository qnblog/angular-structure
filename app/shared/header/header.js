defaultModule.directive('sharedHeader', ['defaultStorage',function(){
    return{

        templateUrl: './app/shared/header/header.html',

        controller: function($scope, $rootScope){
            $rootScope.name = 'Quang Nguyen';
            $rootScope.$emit("saveState");
        },

        link: function(scope,elem,attr){

            scope.toggleSidebar = function(){
                if($('body').hasClass('sidebar-collapse')){
                    $('body').removeClass('sidebar-collapse');
                }else{
                    $('body').addClass('sidebar-collapse');
                }
            }

        }
    };
}]);