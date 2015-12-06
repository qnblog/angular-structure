defaultModule.factory('defaultStorage', [ '$rootScope',
    function ($rootScope) {
        var service = {

            model: {
                expandSidebar : true
            },

            saveState: function(){
                sessionStorage.state = angular.toJson(service.model);
                console.log("%c ============= State ============== \n"
                    + sessionStorage.state
                    + " \n ==================================", 'background: #222; color: #79DDDD');
            }

        };
        $rootScope.$on('saveState', service.saveState);

        return service;
    }]);