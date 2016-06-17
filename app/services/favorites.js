import Ember from 'ember';

export default Ember.Service.extend({
  restaurants: [],
  restaurantCount: 0,

  add(restaurant) {
    this.get('restaurants').pushObject(restaurant);
    this.set('restaurantCount', this.get('restaurantCount') + 1);
  }
});
