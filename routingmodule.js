var app = angular.module('app', ['ngRoute']);
    app.config(function ($routeProvider) {

        // configure the routes
        $routeProvider
            .when('/', {
            // route for the home page
            templateUrl: 'PageViews/home.html',
            controller: 'homeController'
            })
            .when('/about', {
            // route for the about page
            templateUrl: 'PageViews/about.html',
            controller: 'aboutController'
            })
            .when('/contact', {
            // route for the contact page
            templateUrl: 'PageViews/contact.html',
            controller: 'contactController'
            })
            .when('/contact/:subject', {
            // route to contact page with subject param
            templateUrl: 'pageViews/contact.html',
            controller: 'contactController'
            })
            .otherwise({
            // when all else fails
            templateUrl: 'PageViews/routeNotFound.html',
            controller: 'notFoundController'
            });
    });

    app.controller('homeController', function ($scope) {
        $scope.message = 'Welcome to my home page! I don\'t even like it';
    });
    app.controller('aboutController', function ($scope) {
        $scope.message = 'Find out more about me.';
    });
    app.controller('contactController', function ($scope, $routeParams) {
        var subject = '';
        if ($routeParams ['subject'] == "learn") {
            subject = 'I want to learn more about your services';
        } else if ($routeParams ['subject'] == "quote") {
            subject = 'I would like to get a free quote';
        }
        $scope.subject = subject;
        $scope.message = 'Contact us!';
    });
    app.controller('notFoundController', function ($scope) {
        $scope.message = 'There seems to be a problem finding the page you wanted';
    });
