/**
 * Created by hammad on 05/08/2015.
 */
app.controller('HomeController',function(mainService){

    this.login=function(){
        if(this.email == 'admin' && this.password == '123'){
            mainService.goToPage('adminpanel');
        }
        else{
            alert('Wrong email or password!');
        }
    }

});