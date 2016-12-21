var app = angular.module("myApp", ["ngRoute"]);
app.config(function($routeProvider){
    $routeProvider.when("/new_question", {
        templateUrl: "partials/create.html"
    });
    $routeProvider.when("/home", {
        templateUrl: "partials/home.html"
    });
    $routeProvider.when("/question/:id", {
        templateUrl: "partials/question.html"
    });
    $routeProvider.when("/question/:id/new_answer", {
        templateUrl: "partials/answer.html"
    });
    $routeProvider.otherwise({
        templateUrl: "partials/login.html"
    });
});
