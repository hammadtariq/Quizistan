/**
 * Created by hammad on 05/08/2015.
 */
app.controller('QuestionsController',function($location,$rootScope,mainService){
    this.counter=0;
    this.qNo=1;
    var vm = this;
    vm.points = 0;
    vm.questionsBank=mainService.questionArray();
    vm.questionLength=vm.questionsBank.length;
    $rootScope.total = vm.questionsBank.length * 10;
    vm.i = 0;
    vm.option = "";
    vm.next = function() {

        if (vm.option == vm.questionsBank[vm.i].answer) {
            vm.option = "";
            vm.points += 10;
        }
        else if (vm.option === "") {
            alert("Select An Option");
            return;
        }
        else {
            vm.option = "";
        }

        if (vm.qNo > vm.questionsBank.length-1) {
            vm.points=(vm.points/$rootScope.total)*100;
            $rootScope.totalMarks = vm.points;
            mainService.goToPage('/result');
        }
        else{
            vm.qNo++;
            vm.i++;
        }
    }
});


