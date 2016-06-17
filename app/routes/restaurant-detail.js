import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    return this.store.findRecord('restaurant', params.restaurant_id);
  },
  actions: {
    destroyRestaurant(restaurant) {
      restaurant.destroyRecord();
      this.transitionTo('index');
    },
    updateRestaurant(restaurant, params) {
      Object.keys(params).forEach(function(key) {
        if(params[key]!==undefined) {
          restaurant.set(key, params[key]);
        }
      });
      restaurant.save();
    },
    saveReview(params) {
      var newReview = this.store.createRecord('review', params);
      var restaurant = params.restaurant;
      restaurant.get('reviews').addObject(newReview);
      newReview.save().then(function() {
        return restaurant.save();
      });
    }
  }
});
