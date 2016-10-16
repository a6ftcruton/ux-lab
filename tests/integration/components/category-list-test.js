import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('category-list', 'Integration | Component | category list', {
  integration: true
});

test('it renders', function(assert) {
  let description = "displays each passed-in category";
  let categories  = ["abc", "def", "ghi"];

  this.set("categories", categories);
  this.render(hbs`{{category-list categories=categories}}`);

  let $text = this.$().text().trim().toLowerCase();

  assert.ok($text.indexOf(categories[0]) >= 0, description);
  assert.ok($text.indexOf(categories[1]) >= 1, description);
  assert.ok($text.indexOf(categories[2]) >= 2, description);
});
