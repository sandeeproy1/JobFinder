/**
 * Created by ratan_000 on 5/7/2016.
 */
/**
 * Created by ratan_000 on 5/6/2016.
 */
'use strict';
angular.module('clientApp')
  .controller('eremoveCtrl', function ($scope,$http) {


    // get call
    /*
     $http.get("wrongfilename.htm")
     .then(function(response) {
     //First function handles success
     $scope.content = response.data;
     }
     */
    $scope.window="eremove";

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

    //
    $scope.showList=true;

    $scope.fun1 = function (index){
      console.log("received index:" + index);
      alert("clicked:" +  index);
      $scope.showList=false;

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


    $scope.remove = function (index){
      console.log("****:" +index);
      var data= {jobId:$scope.JobDesc.JobId};
      //service call
      $scope.jobDescArray.splice(index,1); // removing manually
      $http.post("/deleteJobPost/"+$scope.JobDesc.JobId, data ).success(function(data, status) {

      });
      alert("deleted");
      $scope.showList=true;
    };

  });

