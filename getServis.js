angular.module('myApp')
.factory('prognozaServis', function($http){
    this.prognoza = {};
    this.getJson = $http.get('https://api.weatherbit.io/v2.0/forecast/daily?city=Novi_Sad&key=80bfa43b6c694b169ef22d43ca379459').then(function (response) {
        this.prognoza = response.data;
    return this.prognoza;
})
})