import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.findAll('restaurant');
  },
  actions: {
    saveRestaurant(params) {
      var newRestaurant = this.store.createRecord('restaurant', params);
      newRestaurant.save();
    }
  }
});
