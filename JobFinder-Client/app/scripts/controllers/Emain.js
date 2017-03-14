/**
 * Created by ratan_000 on 5/6/2016.
 */
'use strict';
angular.module('clientApp')
  .controller('emainCtrl', function ($scope,$http,$rootScope) {


    $scope.loggedUserEmail =$rootScope.loggedUserEmail;

    if( ! $rootScope.UserId ){
      $rootScope.UserId=2;
    }

    if(! $rootScope.UserId){
      $rootScope.UserId = 2;
      $rootScope.LoggedUserName="recruiter1@gmail.com"

    }

    $http.get('http://localhost:3000/getPostedJobs/' + $rootScope.UserId).then(function (res) {
      console.log("applied jobs");
      console.log(res.data);
      $scope.PostedJobs=res.data;
    });
    // get call
    /* getPostedJobs
     $http.get("wrongfilename.htm")
     .then(function(response) {
     //First function handles success
     $scope.content = response.data;
     }
    */
    $scope.window="emain";
/*
    $scope.PostedJobs = [{
      JobId: 1,
      CompanyId: 1,
      JobCategoryId: 1,
      NoOfPositions: 4,
      JobTitle: 'XYZ',
      WorkLocation: 'Sa',
      WorkUnitId: 'ab',
      JobDescription: 's',
      MinQualRequirements: 'Masters',
      PreferredSkills: 'xxx',
      AdditionalInfo: 'asdf',
      PostingDate: '2015-05-05T07:00:00.000Z',
      PostingUntil: '2015-05-05T07:00:00.000Z',
      Salary: '00000'
    },
      {
        JobId: 2,
        CompanyId: 1,
        JobCategoryId: 1,
        NoOfPositions: 4,
        JobTitle: 'XYZ',
        WorkLocation: 'Sa',
        WorkUnitId: 'ab',
        JobDescription: 's',
        MinQualRequirements: 'Masters',
        PreferredSkills: 'xxx',
        AdditionalInfo: 'asdf',
        PostingDate: '2015-05-05T07:00:00.000Z',
        PostingUntil: '2015-05-05T07:00:00.000Z',
        Salary: '00000'
      },
      {
        JobId: 3,
        CompanyId: 1,
        JobCategoryId: 1,
        NoOfPositions: 4,
        JobTitle: 'XYZ',
        WorkLocation: 'Sa',
        WorkUnitId: 'ab',
        JobDescription: 's',
        MinQualRequirements: 'Masters',
        PreferredSkills: 'xxx',
        AdditionalInfo: 'asdf',
        PostingDate: '2015-05-05T07:00:00.000Z',
        PostingUntil: '2015-05-05T07:00:00.000Z',
        Salary: '00000'
      }];
*/
    // 3 flags
    $scope.showList=true;
    $scope.showDetails=false;
    $scope.showCandidateList=false;
    $scope.showCandidateprofile=false;

    $scope.fun1 = function (index){
      console.log("received index:" + index);
     // alert("clicked:" +  index);
      //setting flags
      $scope.showList=false;
      $scope.showDetails=true;
      $scope.showCandidateList=false;
      $scope.showCandidateprofile=false;

      $scope.number=index;
      $scope.JobDesc = $scope.PostedJobs[index] ;
      $scope.jobDescArray=[];
      //
      for( var i in $scope.JobDesc){
      //  var str= "Job-ID: " +  $scope.JobDesc.JobId + " | "  + $scope.JobDesc.JobTitle;
        var str = i + " : "+  $scope.JobDesc[i];
        $scope.jobDescArray.push(str);

      }
    };


    $scope.apply = function (index){

      alert("applied");
      $scope.showList=true;
      $scope.showDetails=false;
      $scope.showCandidateList=false;
      $scope.showCandidateprofile=false;
    };

    $scope.showCandidates= function (jobindex){
     // alert("showing applied candidates..");
      var currentJob=$scope.PostedJobs[jobindex].JobId;
      alert("fetching candidates list for :" + currentJob);
     // alert("posting jobID to get deatails");
      $http.get('http://localhost:3000/getCandidates/' + currentJob).then(function (res) {
        console.log("getting list of applied candidates");
        console.log(res.data);
        $scope.candidates=res.data;
        //settings show flags
        $scope.showList=false;
        $scope.showDetails=false;
        $scope.showCandidateList=true;
        $scope.showCandidateprofile=false;


      });

    };

    $scope.showCandidateProfile=function(candidateId) {
     // alert("candidateId:" + candidateId);
      $http.get('http://localhost:3000/getCandidateProfile/' + candidateId).then(function (res) {
        console.log("candidateProfile");
        console.log(res);
        //changed here
          var canProfile=res.data;
          console.log("canProfile");
          console.log(canProfile);
        $scope.profileDisplay=[];
         for(var i in  canProfile) {
           var str = i +  ":" + canProfile[i];
          //  alert("pushing:" + str);
           $scope.profileDisplay.push(str);
         }
        //settings show flags
        $scope.showList=false;
        $scope.showDetails=false;
        $scope.showCandidateList=false;
        $scope.showCandidateprofile=true;

      });

    }
  });
