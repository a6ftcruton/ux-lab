import categoryFixtures from './fixtures/categories';

export default function() {
  this.get('/categories', function() {
    return categoryFixtures;
  });
}
