(function(){

    function ProfileFriendsCtrl(Friends,scope,stateParams) {
        
        this.friend = Friends.get(stateParams.profileId);
        this.friends = Friends.all();

        this.removeFriend = function (friendId) {
            Friends.removeFriend(friendId);
            scope.$apply();
        }
    }

        ProfileFriendsCtrl.$inject = ['Friends','$scope','$stateParams'];


    angular.module('prePost.profile')
        .controller('ProfileFriendsCtrl', ProfileFriendsCtrl);

}())
