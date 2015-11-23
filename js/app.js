var app = angular.module("Portfolio", ['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'templates/bio.html',
        controller: 'BioController'
      })
      .when('/projects', {
        templateUrl: 'templates/projects.html',
        controller: 'ProjectsController'
      })
      .when('/project', {
        templateUrl: 'templates/project.html',
        controller: 'ProjectController'
      })
      .when('/resume', {
        templateUrl: 'templates/resume.html',
        controller: 'ResumeController'
      });
});
