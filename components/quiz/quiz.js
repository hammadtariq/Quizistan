/**
 * Created by hammad on 05/08/2015.
 */
app.controller('QuizController',function(mainService){

    this.startQuiz = function(){
        alert('abc');
        mainService.goToPage('/questions');

    }

});