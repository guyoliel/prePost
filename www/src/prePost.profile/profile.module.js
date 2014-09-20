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
      .state('app.profile-detail.friends', {
        url: '/friends',
        views: {
          'details': {
            templateUrl: 'src/prePost.profile/profile.friends/profile-details-friends.html',
            controller: 'ProfileFriendsCtrl as Friends'
          }
        }
      })
      .state('app.profile.gallery', {
          url: '/gallery',
          views: {
              'details': {
                  templateUrl: 'src/prePost.profile/profile.gallery/profile-details-gallery.html',
                  controller: 'ProfileGalleryCtrl as Gallery'
              }
          }
      })

      .state('app.profile.friends', {
          url: '/friends',
          views: {
              'details': {
                  templateUrl: 'src/prePost.profile/profile.friends/profile-details-friends.html',
                  controller: 'ProfileFriendsCtrl as Friends'
              }
          }
      })

      .state('app.profile.settings', {
          url: '/settings',
          views: {
              'details': {
                  templateUrl: 'src/prePost.profile/profile.settings/profile-details-settings.html',
                  controller: 'ProfileSettingsCtrl as Settings'
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
