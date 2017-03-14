/**
 * Created by ratan_000 on 5/7/2016.
 */
/**
 * Created by ratan_000 on 5/6/2016.
 */
'use strict';

angular.module('clientApp')
  .controller('candidateSrchCtrl', function ($scope,$http) {
    $scope.candidate={};

    $scope.searchCandidate = function(candidate) {
      console.log("kkkk");
      console.log(candidate);
      $http.post("/candidateSearch/", candidate ).success(function(data, status) {

      });
    };

  });

