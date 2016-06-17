import Ember from 'ember';

export default Ember.Component.extend({
  favorites: Ember.inject.service(),

  ratingStatus: '',
  ratingStatusObserver: function() {
      var ratingCount = 0;
      var totalRatings = this.get('restaurant.reviews.length');

      this.get('restaurant.reviews').then((reviews) => {
          reviews.forEach((review) => {
            ratingCount += parseInt(review.get('rating'));
          });
          var avg = ratingCount / totalRatings;
          this.set('ratingStatus', avg);
      });
}.observes('restaurant.reviews.[]').on('init'),

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
    },
    saveReview(params){
      this.sendAction('saveReview', params);
    }
  }
});
