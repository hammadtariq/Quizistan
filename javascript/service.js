/**
 * Created by hammad on 05/08/2015.
 */
app.service('mainService',function($location,$rootScope){
    this.goToPage = function(go){
        $location.path(go);
    };
    var questionsBank= [
        {
            name:'q1',
            text:'What does HTML stand for?',
            option1: 'Hyper Text Markup Language',
            option2: 'Hints Toast Merqury Language',
            option3: 'Hyper Tags Markup Language',
            answer:'Hyper Text Markup Language'
        },
        {
            name:'q2',
            text:'Who is making the Web standards?',
            option1: 'World Web Wide',
            option2: 'The World Wide Web Consortium',
            option3: 'Wide Web Worth',
            answer:'The World Wide Web Consortium'
        },
        {
            name:'q3',
            text:'Choose the correct HTML element for the largest heading.',
            option1: '<heading>',
            option2: '<h6>',
            option3: '<h1>',
            answer:'<h1>'
        },
        {
            name:'q4',
            text:'What is the correct HTML element for inserting a line break?',
            option1: '<linebreak>',
            option2: '<br>',
            option3: '<break>',
            answer:'<br>'
        },
        {
            name:'q5',
            text:'What is the correct HTML for adding a background color?',
            option1: '<body color="red">',
            option2: '<body bg="yellow">',
            option3: '<background="green">',
            answer:'<body bg="yellow">'
        },
        {
            name:'q6',
            text:'Choose the correct HTML element to define important text',
            option1: '<important>',
            option2: '<strong>',
            option3: '<legend>',
            answer:'<important>'
        },
        {
            name:'q7',
            text:'Choose the correct HTML element to define emphasized text',
            option1: '<emphasize>',
            option2: '<em>',
            option3: '<i>',
            answer:'<em>'
        },
        {
            name:'q8',
            text:'What is the correct HTML for creating a hyperlink?',
            option1: '<a open="http://www.fb.com">Facebook</a>',
            option2: '<a link="http://www.google.com">Google</a>',
            option3: '<a href="http://www.w3schools.com">W3Schools</a>',
            answer:'<a href="http://www.w3schools.com">W3Schools</a>'
        },
        {
            name:'q9',
            text:'Which character is used to indicate an end tag?',
            option1: '=',
            option2: '/',
            option3: '<',
            answer:'/'
        },
        {
            name:'q10',
            text:'How can you open a link in a new tab/browser window?',
            option1: '<a href="url" target="_blank">',
            option2: '<a href="url" target="new">',
            option3: '<a href="url" newTab>',
            answer:'<a href="url" target="_blank">'
        }
    ];

    this.questionArray=function(){
        if($rootScope.choosedQuestionsBank != undefined){
            return $rootScope.choosedQuestionsBank;
        }
        else{
            return questionsBank;
        }
    };



});