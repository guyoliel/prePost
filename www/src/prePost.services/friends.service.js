(function() {

  function Friends() {
    // Might use a resource here that returns a JSON array

    // Some fake testing data
    var friends = [
      { id: 0, name: 'Scruff McGruff',picture:'http://placekitten.com.s3.amazonaws.com/homepage-samples/200/286.jpg' },
      { id: 1, name: 'G.I. Joe',picture:'http://placekitten.com.s3.amazonaws.com/homepage-samples/96/139.jpg' },
      { id: 2, name: 'Miss Frizzle',picture:'http://placekitten.com.s3.amazonaws.com/homepage-samples/200/138.jpg' },
      { id: 3, name: 'Ash Ketchum',picture:'http://placekitten.com.s3.amazonaws.com/homepage-samples/408/287.jpg' }
    ];

    return {
      all: function() {
        return friends;
      },
      get: function(friendId) {
        // Simple index lookup
        return friends[friendId];
      }
    }
  }

  angular.module('prePost.services')
    .factory('Friends', Friends)

}())
