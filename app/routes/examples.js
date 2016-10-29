import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    console.log("examples model hook");
    console.log( "params ==>", params);
    return this.store.findAll('example');
  }
});
