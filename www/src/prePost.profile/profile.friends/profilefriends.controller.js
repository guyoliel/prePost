(function(){

    function ProfileFriendsCtrl(Friends,scope,stateParams) {

        this.friend = Friends.get(stateParams.profileId);
        this.friends = Friends.all();
        console.log(this.friends[0]);

        this.removeFriend = function (friendId) {
            Friends.removeFriend(friendId);
        }
    }

        ProfileFriendsCtrl.$inject = ['Friends','$scope','$stateParams'];


    angular.module('prePost.profile')
        .controller('ProfileFriendsCtrl', ProfileFriendsCtrl);

}())
