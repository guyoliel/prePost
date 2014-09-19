(function() {
    //This file only represents the service that is required for the profile for now.
  function User() {

    // Some fake testing data,This will be updated when the model would apear on a server side.
    var user = {
        name: "Marty Mcfly",
        profilePicture: "http://upload.wikimedia.org/wikipedia/en/d/d8/Michael_J._Fox_as_Marty_McFly_in_Back_to_the_Future,_1985.jpg",
        BirthDate:"November 05,1955"
    };

    return {
        getUser: function() {
            return user;
            }
        };
    }

  angular.module('prePost.services')
    .factory('User', User)

}())
