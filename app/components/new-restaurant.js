import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    saveRestaurant() {
      var params = {
        name: this.get('name'),
        cuisine: this.get('cuisine'),
        image: this.get('image'),
        street: this.get('street'),
        city: this.get('city'),
        state: this.get('state'),
        zip: this.get('zip'),
      };
      this.sendAction('saveRestaurant', params);
      // this.set('name', "");
      // this.set('cuisine', "");
      // this.set('image', "");
      // this.set('street', "");
      // this.set('city', "");
      // this.set('state', "");
      // this.set('zip', "");
    }
  }
});
