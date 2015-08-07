/**
 * Created by hammad on 05/08/2015.
 */
var app = angular.module('myApp',['ngNewRouter']);

app.controller("IndexController", function ($router) {
    $router.config([

        {path:'/', redirectTo:'home'},
        {path:'/home', component:'home'},
        {path:'/quiz', component:'quiz'},
        {path:'/questions', component:'questions'},
        {path:'/adminpanel', component:'adminpanel'},
        {path:'/result', component:'result'}

    ]);


});