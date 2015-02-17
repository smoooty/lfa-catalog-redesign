//These MVC frameworks are quite powerul, the javascript here is minimal

var myApplication = angular.module('myApp', []);

myApplication.controller("Catalog", function ($scope) {

    $scope.search = "";

    $scope.books = books;

    $scope.sortReverse = false;

    $scope.list = false;

    $scope.sortType = 'doc.name'; 

    for (var i = 0; i < books.length; i++) {

        books[i].color = ('#' + Math.floor(Math.random() * 16777215).toString(16));

    }

});
