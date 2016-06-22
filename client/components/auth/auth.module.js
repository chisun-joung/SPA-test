'use strict';

angular.module('spatestApp.auth', ['spatestApp.constants', 'spatestApp.util', 'ngCookies',
    'ui.router'
  ])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
