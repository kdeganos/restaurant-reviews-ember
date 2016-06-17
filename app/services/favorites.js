import Ember from 'ember';

export default Ember.Service.extend({
  restaurants: [],
  restaurantCount: 0,

  add(restaurant) {
    if(this.get('restaurants').indexOf(restaurant) === -1){

      this.get('restaurants').pushObject(restaurant);
      this.set('restaurantCount', this.get('restaurantCount') + 1);
    }
  },
  remove(restaurant) {
    this.get('restaurants').removeObject(restaurant);
    this.set('restaurantCount', this.get('restaurantCount') - 1);
  }
});
