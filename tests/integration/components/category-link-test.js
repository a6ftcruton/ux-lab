import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('category-link', 'Integration | Component | category link', {
  integration: true
});

test('it renders capitalized category name', function(assert) {
  let category = "relax";
  
  this.set('category', category);
  this.render(hbs`{{category-link category=category}}`);

  console.log("text == ", this.$().text().trim());
  assert.equal(this.$().text().trim(), 'Relax');
});
