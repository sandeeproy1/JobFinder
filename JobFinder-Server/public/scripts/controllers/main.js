'use strict';
angular.module('clientApp')
  .controller('MainCtrl', function ($scope,$http) {

    // api call
    //$http.post("/applyJob",data ).success(function(data, status) {
    //});
    //
    $scope.window="main";
    $scope.jobs= [
      {
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
      },
      {
        "JobId":135919,
        "CompanyName":"OFFICE OF COLLECTIVE BARGAININ2",
        "JobCategoryDesc":"Intern",
        "NoOfPositions":1,
        "JobTitle":"COLLEGE AIDE - CLERICAL2",
        "WorkLocation":"100 Gold Street",
        "WorkUnitDesc":"Admin - Clerical",
        "JobDescription":"The Office of Collective Bargaining (OCB) is an independent",
        "MinQualRequirements":"For Assignment Level I:  Matriculation",
        "PreferredSkills":"Excellent interpersonal communication skills",
        "AdditionalInfo":null,
        "PostingDate":"10-09-14 0:00",
        "PostingUntil":"11-09-14 0:00",
        "Salary":55576
      },
      {
        "JobId":135920,
        "CompanyName":"OFFICE OF COLLECTIVE BARGAININ3",
        "JobCategoryDesc":"Intern",
        "NoOfPositions":1,
        "JobTitle":"COLLEGE AIDE - CLERICAL3",
        "WorkLocation":"100 Gold Street",
        "WorkUnitDesc":"Admin - Clerical",
        "JobDescription":"The Office of Collective Bargaining (OCB) is an independent",
        "MinQualRequirements":"For Assignment Level I:  Matriculation",
        "PreferredSkills":"Excellent interpersonal communication skills",
        "AdditionalInfo":null,
        "PostingDate":"10-09-14 0:00",
        "PostingUntil":"11-09-14 0:00",
        "Salary":55576
      },
      {
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
    },
    {
      "JobId":135919,
      "CompanyName":"OFFICE OF COLLECTIVE BARGAININ2",
      "JobCategoryDesc":"Intern",
      "NoOfPositions":1,
      "JobTitle":"COLLEGE AIDE - CLERICAL2",
      "WorkLocation":"100 Gold Street",
      "WorkUnitDesc":"Admin - Clerical",
      "JobDescription":"The Office of Collective Bargaining (OCB) is an independent",
      "MinQualRequirements":"For Assignment Level I:  Matriculation",
      "PreferredSkills":"Excellent interpersonal communication skills",
      "AdditionalInfo":null,
      "PostingDate":"10-09-14 0:00",
      "PostingUntil":"11-09-14 0:00",
      "Salary":55576
    },
    {
      "JobId":135920,
      "CompanyName":"OFFICE OF COLLECTIVE BARGAININ3",
      "JobCategoryDesc":"Intern",
      "NoOfPositions":1,
      "JobTitle":"COLLEGE AIDE - CLERICAL3",
      "WorkLocation":"100 Gold Street",
      "WorkUnitDesc":"Admin - Clerical",
      "JobDescription":"The Office of Collective Bargaining (OCB) is an independent",
      "MinQualRequirements":"For Assignment Level I:  Matriculation",
      "PreferredSkills":"Excellent interpersonal communication skills",
      "AdditionalInfo":null,
      "PostingDate":"10-09-14 0:00",
      "PostingUntil":"11-09-14 0:00",
      "Salary":55576
    },
      {
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
      },
      {
        "JobId":135919,
        "CompanyName":"OFFICE OF COLLECTIVE BARGAININ2",
        "JobCategoryDesc":"Intern",
        "NoOfPositions":1,
        "JobTitle":"COLLEGE AIDE - CLERICAL2",
        "WorkLocation":"100 Gold Street",
        "WorkUnitDesc":"Admin - Clerical",
        "JobDescription":"The Office of Collective Bargaining (OCB) is an independent",
        "MinQualRequirements":"For Assignment Level I:  Matriculation",
        "PreferredSkills":"Excellent interpersonal communication skills",
        "AdditionalInfo":null,
        "PostingDate":"10-09-14 0:00",
        "PostingUntil":"11-09-14 0:00",
        "Salary":55576
      },
      {
        "JobId":135920,
        "CompanyName":"OFFICE OF COLLECTIVE BARGAININ3",
        "JobCategoryDesc":"Intern",
        "NoOfPositions":1,
        "JobTitle":"COLLEGE AIDE - CLERICAL3",
        "WorkLocation":"100 Gold Street",
        "WorkUnitDesc":"Admin - Clerical",
        "JobDescription":"The Office of Collective Bargaining (OCB) is an independent",
        "MinQualRequirements":"For Assignment Level I:  Matriculation",
        "PreferredSkills":"Excellent interpersonal communication skills",
        "AdditionalInfo":null,
        "PostingDate":"10-09-14 0:00",
        "PostingUntil":"11-09-14 0:00",
        "Salary":55576
      },
      {
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
      },
      {
        "JobId":135919,
        "CompanyName":"OFFICE OF COLLECTIVE BARGAININ2",
        "JobCategoryDesc":"Intern",
        "NoOfPositions":1,
        "JobTitle":"COLLEGE AIDE - CLERICAL2",
        "WorkLocation":"100 Gold Street",
        "WorkUnitDesc":"Admin - Clerical",
        "JobDescription":"The Office of Collective Bargaining (OCB) is an independent",
        "MinQualRequirements":"For Assignment Level I:  Matriculation",
        "PreferredSkills":"Excellent interpersonal communication skills",
        "AdditionalInfo":null,
        "PostingDate":"10-09-14 0:00",
        "PostingUntil":"11-09-14 0:00",
        "Salary":55576
      },
      {
        "JobId":135920,
        "CompanyName":"OFFICE OF COLLECTIVE BARGAININ3",
        "JobCategoryDesc":"Intern",
        "NoOfPositions":1,
        "JobTitle":"COLLEGE AIDE - CLERICAL3",
        "WorkLocation":"100 Gold Street",
        "WorkUnitDesc":"Admin - Clerical",
        "JobDescription":"The Office of Collective Bargaining (OCB) is an independent",
        "MinQualRequirements":"For Assignment Level I:  Matriculation",
        "PreferredSkills":"Excellent interpersonal communication skills",
        "AdditionalInfo":null,
        "PostingDate":"10-09-14 0:00",
        "PostingUntil":"11-09-14 0:00",
        "Salary":55576
      },
      {
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
      },
      {
        "JobId":135919,
        "CompanyName":"OFFICE OF COLLECTIVE BARGAININ2",
        "JobCategoryDesc":"Intern",
        "NoOfPositions":1,
        "JobTitle":"COLLEGE AIDE - CLERICAL2",
        "WorkLocation":"100 Gold Street",
        "WorkUnitDesc":"Admin - Clerical",
        "JobDescription":"The Office of Collective Bargaining (OCB) is an independent",
        "MinQualRequirements":"For Assignment Level I:  Matriculation",
        "PreferredSkills":"Excellent interpersonal communication skills",
        "AdditionalInfo":null,
        "PostingDate":"10-09-14 0:00",
        "PostingUntil":"11-09-14 0:00",
        "Salary":55576
      },
      {
        "JobId":135920,
        "CompanyName":"OFFICE OF COLLECTIVE BARGAININ3",
        "JobCategoryDesc":"Intern",
        "NoOfPositions":1,
        "JobTitle":"COLLEGE AIDE - CLERICAL3",
        "WorkLocation":"100 Gold Street",
        "WorkUnitDesc":"Admin - Clerical",
        "JobDescription":"The Office of Collective Bargaining (OCB) is an independent",
        "MinQualRequirements":"For Assignment Level I:  Matriculation",
        "PreferredSkills":"Excellent interpersonal communication skills",
        "AdditionalInfo":null,
        "PostingDate":"10-09-14 0:00",
        "PostingUntil":"11-09-14 0:00",
        "Salary":55576
      },
      {
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
      },
      {
        "JobId":135919,
        "CompanyName":"OFFICE OF COLLECTIVE BARGAININ2",
        "JobCategoryDesc":"Intern",
        "NoOfPositions":1,
        "JobTitle":"COLLEGE AIDE - CLERICAL2",
        "WorkLocation":"100 Gold Street",
        "WorkUnitDesc":"Admin - Clerical",
        "JobDescription":"The Office of Collective Bargaining (OCB) is an independent",
        "MinQualRequirements":"For Assignment Level I:  Matriculation",
        "PreferredSkills":"Excellent interpersonal communication skills",
        "AdditionalInfo":null,
        "PostingDate":"10-09-14 0:00",
        "PostingUntil":"11-09-14 0:00",
        "Salary":55576
      },
      {
        "JobId":135920,
        "CompanyName":"OFFICE OF COLLECTIVE BARGAININ3",
        "JobCategoryDesc":"Intern",
        "NoOfPositions":1,
        "JobTitle":"COLLEGE AIDE - CLERICAL3",
        "WorkLocation":"100 Gold Street",
        "WorkUnitDesc":"Admin - Clerical",
        "JobDescription":"The Office of Collective Bargaining (OCB) is an independent",
        "MinQualRequirements":"For Assignment Level I:  Matriculation",
        "PreferredSkills":"Excellent interpersonal communication skills",
        "AdditionalInfo":null,
        "PostingDate":"10-09-14 0:00",
        "PostingUntil":"11-09-14 0:00",
        "Salary":55576
      }
    ];
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
      var data= {jobId:$scope.JobDesc.JobId};
      //service call
      $http.post("/applyJob",data ).success(function(data, status) {

      });
      alert("applied");
      $scope.showList=true;


      //service call
    };

  });
