angular.module('myApp', ['chart.js'])
    .controller('mainController', function ($scope, $http) {

        //$scope.weather = $q.defer();

        $scope.getJson = $http.get('https://api.weatherbit.io/v2.0/forecast/daily?city=Novi_Sad&key=80bfa43b6c694b169ef22d43ca379459').then(function (response) {
            $scope.weather = response.data;
            //console.log(`response`);
            //console.log($scope.weather);
            //$scope.weather.resolve(response);
            //return $scope.weather.promise;
            //console.log($scope.weather.$$state);
        

        //console.log($scope.weather.promise.$$state);

        $scope.labels = [$scope.weather.data[0].datetime, $scope.weather.data[1].datetime, $scope.weather.data[2].datetime, $scope.weather.data[3].datetime, $scope.weather.data[4].datetime, $scope.weather.data[5].datetime, $scope.weather.data[6].datetime, $scope.weather.data[7].datetime, $scope.weather.data[8].datetime, $scope.weather.data[9].datetime, $scope.weather.data[10].datetime, $scope.weather.data[11].datetime, $scope.weather.data[12].datetime, $scope.weather.data[13].datetime, $scope.weather.data[14].datetime, $scope.weather.data[15].datetime];
        $scope.series = ['Maksimalna Temperatura', 'Minimalna Temperatura', 'UV Indeks'];
        $scope.data = [
            [$scope.weather.data[0].max_temp, $scope.weather.data[1].max_temp, $scope.weather.data[2].max_temp, $scope.weather.data[3].max_temp, $scope.weather.data[4].max_temp, $scope.weather.data[5].max_temp, $scope.weather.data[6].max_temp, $scope.weather.data[7].max_temp, $scope.weather.data[8].max_temp, $scope.weather.data[9].max_temp, $scope.weather.data[10].max_temp, $scope.weather.data[11].max_temp, $scope.weather.data[12].max_temp, $scope.weather.data[13].max_temp, $scope.weather.data[14].max_temp, $scope.weather.data[15].max_temp],
            [$scope.weather.data[0].min_temp, $scope.weather.data[1].min_temp, $scope.weather.data[2].min_temp, $scope.weather.data[3].min_temp, $scope.weather.data[4].min_temp, $scope.weather.data[5].min_temp, $scope.weather.data[6].min_temp, $scope.weather.data[7].min_temp, $scope.weather.data[8].min_temp, $scope.weather.data[9].min_temp, $scope.weather.data[10].min_temp, $scope.weather.data[11].min_temp, $scope.weather.data[12].min_temp, $scope.weather.data[13].min_temp, $scope.weather.data[14].min_temp, $scope.weather.data[15].min_temp],
            [$scope.weather.data[0].uv.toFixed(1), $scope.weather.data[1].uv.toFixed(1), $scope.weather.data[2].uv.toFixed(1), $scope.weather.data[3].uv.toFixed(1), $scope.weather.data[4].uv.toFixed(1), $scope.weather.data[5].uv.toFixed(1), $scope.weather.data[6].uv.toFixed(1), $scope.weather.data[7].uv.toFixed(1), $scope.weather.data[8].uv.toFixed(1), $scope.weather.data[9].uv.toFixed(1), $scope.weather.data[10].uv.toFixed(1), $scope.weather.data[11].uv.toFixed(1), $scope.weather.data[12].uv.toFixed(1), $scope.weather.data[13].uv.toFixed(1), $scope.weather.data[14].uv.toFixed(1), $scope.weather.data[15].uv.toFixed(1)]
        ];
        $scope.onClick = function (points, evt) {
            console.log(points, evt);
        };
        $scope.datasetOverride = [{ yAxisID: 'y-axis-1' }, { yAxisID: 'y-axis-2' }];
        $scope.options = {
            scales: {
                xAxes: [
                    {
                      minimum: 0,
                    }
                  ],
                yAxes: [
                    {
                        id: 'y-axis-1',
                        type: 'linear',
                        display: true,
                        position: 'left',
                    },
                    {
                        id: 'y-axis-2',
                        type: 'linear',
                        display: true,
                        position: 'right'
                    }
                ]
            }

            
        };
    })
})


    .filter('celsius', [function () {
        return function (celsius) {
            return celsius + ' °C';
        };
    }])