!function(){"use strict";angular.module("indiceSaturacion",["ui.router","homeController"]).config(["$stateProvider","$urlRouterProvider",function($stateProvider,$urlRouterProvider){$stateProvider.state("home",{url:"/",templateUrl:"./public/views/home.html",controller:"homeController",controllerAs:"home"}),$urlRouterProvider.otherwise("/")}]),document.documentElement.addEventListener("touchstart",function(event){event.touches.length>1&&event.preventDefault()},!1)}();