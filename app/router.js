import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('categories', { path: '/' });
  this.route('input');
  this.route('navigation');
  this.route('social');
});

export default Router;
