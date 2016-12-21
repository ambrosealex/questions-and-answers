app.controller("loginController", ["$scope", "questionFactory", '$location', function ($scope, questionFactory, $location) {
    questionFactory.user = null;
    $scope.callLoginUser = function(name){
        questionFactory.login(name, function(user) {
            $location.url('/home');
        });
    }
}]);

app.controller("homeController", ["$scope", "questionFactory", '$location', function ($scope, questionFactory, $location) {
    $scope.questions = [];
    $scope.user = questionFactory.user;
    questionFactory.indexQ(function (questions, user) {
        $scope.user = user;
        // if(!user){
        //     $location.url('/');
        // }
        $scope.questions = questions;
    });
    questionFactory.indexA(function (answers) {
        // if(!user){
        //     $location.url('/');
        // }
        console.log("DID IT");
    });
}]);

app.controller("createController", ["$scope", "questionFactory", '$location', function ($scope, questionFactory, $location) {
    $scope.messages = [];
    $scope.callCreateQuestion = function(newQuestion) {
        $scope.messages = [];
        if(!newQuestion){
            $scope.messages.push("Please fill out the Question field - it must be at least 10 characters");
            return;
        }
        if(newQuestion.question.length < 10 ){
            $scope.messages.push("Question must be at least 10 characters");
            return;
        }
        questionFactory.createQuestion(newQuestion, function(question) {
            $location.url('/question/'+question._id);
        })
    }
}]);

app.controller("questionController", ["$scope", "questionFactory", "$routeParams", function ($scope, questionFactory, $routeParams) {
    $scope.question;
    questionFactory.getQuestion($routeParams, function(question) {
        $scope.question = question;
    })
}]);
app.controller("answerController", ["$scope", "questionFactory", "$routeParams", '$location', function ($scope, questionFactory, $routeParams, $location) {
    $scope.question;
    questionFactory.getQuestion($routeParams, function(question) {
        console.log("HELLO", question);
        $scope.question = question;
    });
    $scope.callCreateAnswer = function(newAnswer) {
        $scope.messages = [];
        if(!newAnswer){
            $scope.messages.push("Please fill out the Answer field - it must be at least 5 characters");
            return;
        }
        if(newAnswer.answer.length < 5 ){
            $scope.messages.push("Answer must be at least 5 characters");
            return;
        }
        questionFactory.createAnswer(newAnswer, $scope.question._id, function(answer) {
            $location.url('/home');
        })
    };
}]);
