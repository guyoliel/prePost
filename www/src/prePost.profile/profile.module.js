(function() {

  function Config(stateProvider, urlRouterProvider) {
    stateProvider
      .state('app.profile', {
        url: '/profile',
        views: {
          'tab-profile': {
            templateUrl: 'src/prePost.profile/profile.html',
            controller: 'ProfileCtrl as profile'
          }
        }
      })
      .state('app.profile-detail', {
        url: '/profile/:profileId',
        views: {
          'tab-profile': {
            templateUrl: 'src/prePost.profile/profile-detail.html',
            controller: 'ProfileDetailCtrl'
          }
        }
      })

      .state('app.profile.gallery', {
          url: '/gallery',
          views: {
              'details': {
                  template: '<h1>Gallery</h1>',
                  controller: function($log, $scope) {
                  }
              }
          }
      })

      .state('app.profile.friends', {
          url: '/friends',
          views: {
              'details': {
                  templateUrl: 'src/prePost.profile/profile-details-friends.html',
                  controller: function($log, $scope) {
                      $log.debug('friends', $scope.friends);
                  }
              }
          }
      })

      .state('app.profile.settings', {
          url: '/settings',
          views: {
              'details': {
                  template: '<h1>Settings</h1>',
                  controller: function($log, $scope) {
                  }
              }
          }
      })
  }
    //injecting dependencies into the Config function
    Config.$inject = ['$stateProvider', '$urlRouterProvider'];

  angular.module('prePost.profile', [
    'prePost.services'
    ])
    .config(Config)

}())
