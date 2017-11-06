var Nightmare = require('nightmare');
var nightmare = Nightmare({ show: true });
//var student = new Object();
var rates = [];
//var results = [];

nightmare
   .goto('https://box.jimu.com/Venus/List')
   .wait('.project-list')
   .evaluate(/*(results)=>{
            return document.getElementByClassName('.invest-item-profit');
       },results)*/
       function () {
           var results = [];
           var projects = [];

           [].forEach.call(document.querySelectorAll('.project'), function(item) {
               results.push(item);
           });

           for(var i=0;i<results.length;i++){
               var project = new Object();
               project.name = document.querySelectorAll('.project .title')[i].innerText;
               project.rate = document.querySelectorAll('.project .info .rate .invest-item-profit')[i].innerText;
               project.month =document.querySelectorAll('.project .info .time .time-limit')[i].innerText;
               project.status = document.querySelectorAll('.project .info .status .status-blue')[i].innerText;
               projects.push(project);
           }
           return projects;
       })
    .end()
   .then(function (projects) {
       console.log(projects);
       })
   .catch(function (error) {
        console.error('Search failed:', error);
     })