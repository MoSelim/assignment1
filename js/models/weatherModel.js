weather.factory("WeatherModel", ["$http", function ($http) {
    var weatherModel = {
        getWeatherByCoordinates: function (lat, lon, success, failure) {
            $http.get(weatherConstants.BASE_URL + "/data/2.5/weather?lat=" + lat + "&lon=" + lon + "&APPID=" + weatherConstants.API_KEY).then(success, failure);
        },
        getWeatherByCountryOrZip: function (q, success, failure) {
            $http.get(weatherConstants.BASE_URL + "/data/2.5/weather?q=" + q + "&APPID=" + weatherConstants.API_KEY).then(success, failure);
        }
    };
    return weatherModel;

}]);
