(function() {

  function Friends() {
    // Might use a resource here that returns a JSON array

    // Some fake testing data
    var friends = [
      { id: 0, name: 'Scruff McGruff',picture:'http://placekitten.com.s3.amazonaws.com/homepage-samples/200/286.jpg',birthDate:'February 23,1998' },
      { id: 1, name: 'G.I. Joe',picture:'http://placekitten.com.s3.amazonaws.com/homepage-samples/96/139.jpg',birthDate:'May 1,1998' },
      { id: 2, name: 'Miss Frizzle',picture:'http://placekitten.com.s3.amazonaws.com/homepage-samples/200/138.jpg',birthDate:'October 11,1997' },
      { id: 3, name: 'Ash Ketchum',picture:'http://placekitten.com.s3.amazonaws.com/homepage-samples/408/287.jpg',birthDate:'July 22,1998' }
    ];

    return {
      all: function() {
        return friends;
      },
      get: function(friendId) {
        // Simple index lookup
        return friends[friendId];
      },
      removeFriend: function(friendId) {
        friends.splice(friendId,1);
        console.log(friends);
      }
    }
  }

  angular.module('prePost.services')
    .factory('Friends', Friends)

}())
