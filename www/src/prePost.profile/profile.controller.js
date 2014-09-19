(function() {

  function ProfileCtrl(log, Friends, stateParams, scope, User) {
    var _this = this;
    log.debug('ProfileCtrl!!!!');
    scope.friends = Friends.all();
    this.user = User.getUser();
    log.debug(scope.friends);
    log.debug(this.user);
  }

    ProfileCtrl.$inject = ['$log', 'Friends', '$stateParams', '$scope', 'User'];

  angular.module('prePost.profile')
    .controller('ProfileCtrl', ProfileCtrl);

}())
