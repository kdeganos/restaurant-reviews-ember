import Ember from 'ember';

export default Ember.Component.extend({
  favorites: Ember.inject.service(),

  actions: {
    addToFavorites(restaurant) {
      this.get('favorites').add(restaurant);
    },
    destroyRestaurant(restaurant) {
      if (confirm('Are you sure you want to delete this restaurant?')) {
      this.sendAction('destroyRestaurant', restaurant);
      }
    },
    updateRestaurant(restaurant, params) {
      this.sendAction('updateRestaurant', restaurant, params);
    }
  }
});
