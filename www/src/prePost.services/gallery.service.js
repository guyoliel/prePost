(function() {

  function Gallery() {
    // Might use a resource here that returns a JSON array

    // Some fake testing data
    var gallery = [
      { id: 0, url:'http://placekitten.com.s3.amazonaws.com/homepage-samples/200/286.jpg'},
      { id: 1, url:'http://placekitten.com.s3.amazonaws.com/homepage-samples/96/139.jpg'},
      { id: 2, url:'http://placekitten.com.s3.amazonaws.com/homepage-samples/200/138.jpg'},
      { id: 3, url:'http://placekitten.com.s3.amazonaws.com/homepage-samples/408/287.jpg'},
      { id: 4, url:'http://placekitten.com/g/200/200'},
      { id: 5, url:'http://placekitten.com/g/200/250'},
      { id: 6, url:'http://placekitten.com/g/250/250'}
    ];

    return {
      all: function() {
        return gallery;
        },
      getImage: function (imageId) {
        for( i=gallery.length-1; i>=0; i--) {
            if( gallery[i].id == imageId)
                return gallery[i];
            }
        }
    }
  }

  angular.module('prePost.services')
    .factory('Gallery', Gallery)

}())
