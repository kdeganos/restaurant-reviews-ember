import Ember from 'ember';

export default Ember.Service.extend({
  googleMaps: window.google.maps,
  map:'',

  findMap(container, address) {
    var self = this;
    var geocoder = new window.google.maps.Geocoder();
    var coord;
    geocoder.geocode({'address': address}, function(results, status) {
      if (status === window.google.maps.GeocoderStatus.OK) {

        coord = results[0].geometry.location;
        var options = {
          center: coord,
          zoom: 15
        };
        self.set('map', new self.googleMaps.Map(container, options));
        self.get('map').setCenter(coord);
        var marker = new window.google.maps.Marker({
          map: self.get('map'),
          position: coord
        });
        return self.get('map');
      } else {
        alert("Geocode was not successful for the following reason: " + status);
      }      
    });
  }
});
