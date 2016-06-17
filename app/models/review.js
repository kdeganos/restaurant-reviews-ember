import DS from 'ember-data';
// import attr from 'ember-data/attr';
// import { belongsTo, hasMany } from 'ember-data/relationships';

export default DS.Model.extend({
  author: DS.attr(),
  body: DS.attr(),
  date: DS.attr(),
  rating: DS.attr(),
  restaurant: DS.belongsTo('restaurant', {async:true})
});
