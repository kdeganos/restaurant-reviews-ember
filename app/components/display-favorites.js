import Ember from 'ember';

export default Ember.Component.extend({
  favorites: Ember.inject.service(),
  actions: {
    removeFavorite(restaurant) {
      this.get('favorites').remove(restaurant);
    }
  }
});
