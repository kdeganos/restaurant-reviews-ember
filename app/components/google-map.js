import Ember from 'ember';

export default Ember.Component.extend({
  map: Ember.inject.service('google-map'),
  fullAddress: Ember.computed('restaurant.street', 'restaurant.city', 'restaurant.state', 'restaurant.zip', function() {
    return this.get('restaurant.street') + ', ' + this.get('restaurant.city') + ', ' + this.get('restaurant.state') + ' ' + this.get('restaurant.zip');
  }),
  actions: {
     showMap(restaurant) {
       var container = this.$('.map-display')[0];
      //  var coord = this.get('map').center(this.get('fullAddress'));
      //  console.log(this.get('map').center(this.get('fullAddress')));
      //  var options = {
      //    center: coord,
      //    zoom: 15
      //  };
       this.get('map').findMap(container, this.get('fullAddress'));
     }
   }
});
