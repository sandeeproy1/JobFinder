/**
 * Created by ratan_000 on 5/6/2016.
 */
angular.module('clientApp')
  .controller('second226Ctrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    //service call
    $scope.jobs=[{job:'UI',desc:'UI Desc'},{job:'Backend',desc:'Backend Desc'},{job:'MiddleWare',desc:'MiddleWare Desc'}]

    $scope.fun1 = function (index){
      console.log("received index:" + index);
      $scope.number=index;
      $scope.JobDesc = $scope.jobs[index].desc ;
    };


    $scope.apply = function (index){
      alert("applied");
      //service call
    };


  });
