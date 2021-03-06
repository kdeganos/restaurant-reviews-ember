import Ember from 'ember';

export default Ember.Component.extend({
  favorites: Ember.inject.service(),

  actions: {
    addToFavorites(restaurant) {
      this.get('favorites').add(restaurant);
    }
  }
});
