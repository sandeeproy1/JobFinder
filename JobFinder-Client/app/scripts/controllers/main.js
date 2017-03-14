'use strict';
angular.module('clientApp')
  .controller('MainCtrl', function ($scope,$http,$rootScope) {

    $http.get('http://localhost:3000/getAllJobs').then(function(res){

      $scope.jobs = res.data;
      console.log("getAlljobs");
      console.log(res);

    },function(err){

      console.log("error");
    });

    $scope.window="main";

    //
    //$scope.jobs=[{job:'UI',desc:'UI Desc'},{job:'Backend',desc:'Backend Desc'},{job:'MiddleWare',desc:'MiddleWare Desc'}]
    $scope.showList=true;

    $scope.fun1 = function (index){
      console.log("received index:" + index);
      alert("clicked:" +  index);
      $scope.showList=false;

      $scope.number=index;
      $scope.JobDesc = $scope.jobs[index] ;
      $scope.jobDescArray=[];
      //
      for( var i in $scope.JobDesc){
          var str= i + "    :   " + $scope.JobDesc[i];
        $scope.jobDescArray.push(str);
      }
    };


    $scope.apply = function (index){
      var data= {JobId:$scope.JobDesc.JobId,
                  UserId:$rootScope.UserId
                };
      //service call
      $http.post("http://localhost:3000/applyJob",data ).success(function(data, status) {
        alert("applied successfully");
        $scope.showList=true;
      });

      $scope.showList=true;


      //service call
    };

  });
