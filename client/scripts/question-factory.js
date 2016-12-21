app.factory("questionFactory", ["$http", function ($http) {

    var factory = {};
    factory.user;
    factory.indexQ = function (gotQuestions) {
        $http.get("/questions").then(function (response) {
            gotQuestions(response.data.questions, factory.user);
        });
    }
    factory.indexA = function (gotAnswers) {
        $http.get("/answers").then(function (response) {
            gotAnswers(response.data.answers);
        });
    }
    factory.createQuestion = function (newQuestion, createdQuestion) {
        $http.post('/createQuestion', newQuestion).then(function (response) {
            createdQuestion(response.data.question);
        });
    }
    factory.createAnswer = function (newAnswer, question_id, createdAnswer) {
        factory.user = "Mike";
        $http.post('/createAnswer', {newAnswer: newAnswer, question_id: question_id, creator: factory.user}).then(function (response) {
            createdAnswer(response.data.answer);
        });
    }
    // factory.login = function(user, loggedInUser) {
    //     $http.post('/login', {name:user}).then(function (response) {
    //         factory.user = response.data.user;
    //         loggedInUser(response.data);
    //     });
    // }
    factory.login = function(user, loggedInUser) {
        factory.user = user;
        loggedInUser();
    }
    factory.getQuestion = function(questionId, gotQuestion) {
        $http.get('/question/'+questionId.id).then(function (response) {
            factory.question = response.data.question[0];
            gotQuestion(factory.question);
        })
    }
    factory.like = function(questionId, optionId, updatedVoteCount) {
        $http.post('/vote/'+questionId.id, {index:optionId}).then(function (response) {
            updatedVoteCount(response.data.question);
        })
    }
    return factory;

}]);
