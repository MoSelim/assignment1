var weather = angular.module("weather", ["ui.router"]);

weather.config(["$stateProvider", "$urlRouterProvider", function ($stateProvider, $urlRouterProvider) {

//we have ony one state: portal which contains our app
    $urlRouterProvider.when("/", "/portal");
    $urlRouterProvider.otherwise("/portal");
    $stateProvider.state("portal", {
        url: "/portal",
        views: {
            "pageContent": {
                templateUrl: "views/main.html",
                controller: "AppController"
            }
        }
    });
}]);
