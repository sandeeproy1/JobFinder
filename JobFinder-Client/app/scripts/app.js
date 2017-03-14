'use strict';

/**
 * @ngdoc overview
 * @name clientApp
 * @description
 * # clientApp
 *
 * Main module of the application.
 */
angular
  .module('clientApp', [
    'ngResource',
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })

      .when('/profile', {
        templateUrl: 'views/profile.html',
        controller: 'profileCtrl'
      })

      .when('/Applications', {
        templateUrl: 'views/signUp.html',
        controller: 'signupCtrl'
    })
      .when('/second', {
        templateUrl: 'views/second226.html',
        controller: 'second226Ctrl'
      })

      .when('/search', {
        templateUrl: 'views/seekerSearch.html',
        controller: 'srcCtrl'
      })

      .when('/employer', {
        templateUrl: 'views/emain.html',
        controller: 'emainCtrl'
      })
      .when('/eRemove', {
        templateUrl: 'views/eRemove.html',
        controller: 'eremoveCtrl'
      })

      .when('/newjob', {
        templateUrl: 'views/newJob.html',
        controller: 'newJobCtrl'
      })

      .when('/eprofile',{
        templateUrl:'views/employerProfile.html',
        controller: 'empProfileCtrl'
      })

      .when('/esearch',{
        templateUrl:'views/candidateSearch.html',
        controller: 'candidateSrchCtrl'
      })

      .when('/login',{
        templateUrl:'views/login.html',
        controller: 'loginCtrl'
      })

      .otherwise({
        redirectTo: '/'
      });
  });
