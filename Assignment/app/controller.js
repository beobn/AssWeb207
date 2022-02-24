var app = angular.module('myapp', []);

app.controller('my_Controller', function ($scope){

})


app.run(function ($rootScope, $http, $timeout) {
    $http.get("db/Subjects.js").then(function (response) {
        $rootScope.subjects = response.data;
    });
});