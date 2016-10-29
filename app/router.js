import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('categories', { path: '/' }, function() {
    this.route('category', { path: '/:id' }, function() {
      this.route('examples', function() {
        this.route('example', { path: '/:id' }, function() {
        });
      });
    });
  });
});

export default Router;
