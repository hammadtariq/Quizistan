/**
 * Created by hammad on 05/08/2015.
 */
app.controller('QuizController',function(mainService,$rootScope){

    this.startQuiz = function(){
        mainService.goToPage('/questions');
    };
    /*this.newQuiz = function(){
        console.log($rootScope.choosedQuestionsBank);
    }*/

});