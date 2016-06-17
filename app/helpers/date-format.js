import Ember from 'ember';

export function dateFormat(params/*, hash*/) {
  var date = moment(params[0]).format("dddd, MMMM Do YYYY, h:mm:ss a");
  return date;
}

export default Ember.Helper.helper(dateFormat);
