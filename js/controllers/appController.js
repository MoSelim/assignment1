weather.controller("AppController", ["$scope", "WeatherModel", "FormUtil", "$rootScope", function ($scope, WeatherModel, FormUtil, $rootScope) {
    $scope.weatherForm = {
        input: {req: true, value: ""},
        errorMessage: "",
        show: false,
        result: {}
    };
    //success function for ajax call
    function onSuccess(response) {
        $rootScope.showSpinner = false;
        $scope.weatherForm.result = response.data;
    };
    //error function for ajax call
    function onError() {
        $rootScope.showSpinner = false;
        $scope.weatherForm.errorMessage = weatherConstants.MESSAGES.GENERAL_ERROR;
    };
    //when user permits access of his geolocation
    function onPositionUpdate(position) {
        var lat = position.coords.latitude;
        var lon = position.coords.longitude;
        $rootScope.showSpinner = true;
        WeatherModel.getWeatherByCoordinates(lat, lon, onSuccess, onError);
    };
    //when user declines accessing his geolocation
    function onPermissionDecline() {
        $scope.weatherForm.show = true;
        $scope.$apply();
    };
    //when user submits the form
    $scope.getWeather = function (){
        //reset error message if any exists
        $scope.weatherForm.errorMessage = ""
        //validate that there is an existing input
        if (FormUtil.isFilled($scope.weatherForm.input)) {
            //show loading-indicator
            $rootScope.showSpinner = true;
            //call the weather api
            WeatherModel.getWeatherByCountryOrZip($scope.weatherForm.input.value, onSuccess, onError);
        }
        else {
            //in case of server error
            $scope.weatherForm.errorMessage = weatherConstants.MESSAGES.EMPTY_INPUT;
        }
    };

//request location permission from user
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(onPositionUpdate, onPermissionDecline);
    }
}]);
