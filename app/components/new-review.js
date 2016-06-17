import Ember from 'ember';

export default Ember.Component.extend({
  addNewReview: false,
  actions: {
    reviewFormShow() {
      this.set("addNewReview", true);
    },
    saveReview() {
      var params = {
        author: this.get('author'),
        body: this.get('body'),
        rating: this.get('rating'),
        restaurant: this.get('restaurant'),
        date: moment().format()
      };
      this.set('addNewReview', false);
      this.sendAction('saveReview', params);
    }
  }
});
