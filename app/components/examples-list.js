import Ember from 'ember';

export default Ember.Component.extend({
  examples: null,

  //loads the categories associated examples
  init() {
    this._super(...arguments);
    let category = this.get('category');
    let categoryExamples = this.get('store').query('example', {category: category.id});
    this.set('examples', categoryExamples);
  }
});
