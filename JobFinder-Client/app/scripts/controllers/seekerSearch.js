/**
 * Created by ratan_000 on 5/6/2016.
 */
'use strict';

angular.module('clientApp')
  .controller('srcCtrl', function ($scope,$http,$rootScope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.src={};
    $scope.window="search";
    $scope.jobId=null;
    var resultJob=null;
    $scope.searchMe = function(srcobj){
     console.log("search On");
      console.log(srcobj);
      $http.post("http://localhost:3000/searchJobs/",srcobj ).success(function(data, status) {

       console.log("output:");
        console.log(data);
        // resultJob = data;
        $scope.srcResult=data;
      });
    };
/*
    resultJob ={
      "JobId":135918,
      "CompanyName":"OFFICE OF COLLECTIVE BARGAININ1",
      "JobCategoryDesc":"Intern",
      "NoOfPositions":1,
      "JobTitle":"COLLEGE AIDE - CLERICAL1",
      "WorkLocation":"100 Gold Street",
      "WorkUnitDesc":"Admin - Clerical",
      "JobDescription":"The Office of Collective Bargaining (OCB) is an independent",
      "MinQualRequirements":"For Assignment Level I:  Matriculation",
      "PreferredSkills":"Excellent interpersonal communication skills",
      "AdditionalInfo":null,
      "PostingDate":"10-09-14 0:00",
      "PostingUntil":"11-09-14 0:00",
      "Salary":55576
    };
    */

     $scope.result=[];
    for(var i in resultJob ){
        var str =  i + " " + resultJob[i];
      $scope.result.push(str);
    }

    $scope.OneClickApply=function(index){
      if( ! $rootScope.UserId){
        $rootScope.UserId =1;
      }
      var myJObID =$scope.srcResult[index].JobId;
      alert("applying for job Number:" + index + ":" + myJObID);
      //$scope.srcResult[index].JobId;
      //
      var data= {JobId:myJObID,
        UserId:$rootScope.UserId
      };
      //
      $http.post("http://localhost:3000/applyJob",data ).success(function(data, status) {
        alert("applied successfully");
        $scope.showList=true;
      });
    }

  });
