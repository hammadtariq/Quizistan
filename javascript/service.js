/**
 * Created by hammad on 05/08/2015.
 */
app.service('mainService',function($location){
    this.goToPage = function(go){
        $location.path(go);
    };
});