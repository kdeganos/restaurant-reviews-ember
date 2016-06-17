import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('restaurant-detail', {path: 'restaurant-detail/:restaurant_id'});
  this.route('view-favorites');
});

export default Router;
