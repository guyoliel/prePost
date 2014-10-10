(function(){

    function ProfileFriendsCtrl(Friends,scope,stateParams,$ionicPopup) {

        this.friend = Friends.get(stateParams.profileId);
        this.friends = Friends.all();
        console.log(this.friends[0]);

        this.removeFriend = function (friendId) {
           var confirmPopup = $ionicPopup.confirm({
             title: 'Deleting Friend',
             template: 'Are you sure you want to delete this friend?'
           });
           confirmPopup.then(function(res) {
             if(res) {
               Friends.removeFriend(friendId);
             }
           });
        }
    }

        ProfileFriendsCtrl.$inject = ['Friends','$scope','$stateParams','$ionicPopup'];


    angular.module('prePost.profile')
        .controller('ProfileFriendsCtrl', ProfileFriendsCtrl);

}())
