import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    return this.store.findRecord('restaurant', params.restaurant_id);
  },
  actions: {
    destroyRestaurant(restaurant) {
      restaurant.destroyRecord();
      this.transitionTo('index');
    }
  }
});
