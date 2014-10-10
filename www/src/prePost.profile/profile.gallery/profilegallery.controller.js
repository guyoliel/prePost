(function(){

    function ProfileGalleryCtrl(Gallery,$ionicModal,$scope) {
        this.gallery = Gallery.all();

          $ionicModal.fromTemplateUrl('src/prePost.profile/profile.gallery/galleryModal.html', {
              scope: $scope,
              animation: 'slide-in-up'
                  }).then(function(modal) {
                      $scope.modal = modal;
                  });
                  $scope.openModal = function() {
                    $scope.modal.show();
                  };
                  $scope.closeModal = function() {
                    $scope.modal.hide();
                  };
                  $scope.modalSelected = function (imageId) {
                    $scope.image = Gallery.getImage(imageId);
                    $scope.modal.show();
                  }
                  $scope.$on('$destroy', function() {
                      $scope.modal.remove();
                  });

    }

        ProfileGalleryCtrl.$inject = ['Gallery','$ionicModal','$scope'];


    angular.module('prePost.profile')
        .controller('ProfileGalleryCtrl', ProfileGalleryCtrl);

}())
