import DS from 'ember-data';
// import attr from 'ember-data/attr';
// import { belongsTo, hasMany } from 'ember-data/relationships';

export default DS.Model.extend({
  name: DS.attr(),
  street: DS.attr(),
  city: DS.attr(),
  state: DS.attr(),
  zip: DS.attr(),
  cuisine: DS.attr(),
  image: DS.attr(),
  reviews: DS.hasMany('review', {async: true})
});
