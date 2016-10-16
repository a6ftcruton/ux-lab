import Ember from 'ember';

export default Ember.Component.extend({
  displayName: Ember.computed('category', function() {
    let category = this.get('category');
    console.log("category ", category);
    if(!!category && typeof category === "string") {
      return category.capitalize();
    }
  })
});
