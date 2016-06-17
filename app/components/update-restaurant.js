import Ember from 'ember';

export default Ember.Component.extend({
  updateRestaurantForm: false,
  actions: {
    updateRestaurantForm() {
      this.set('updateRestaurantForm', true);
    },
    updateRestaurant(restaurant) {
      var params = {
        name: this.get('name'),
        cuisine: this.get('cuisine'),
        image: this.get('image'),
        street: this.get('street'),
        city: this.get('city'),
        state: this.get('state'),
        zip: this.get('zip'),
      };
      this.set('updateRestaurantForm', false);
      this.sendAction('updateRestaurant', restaurant, params);
    }
  }
});
