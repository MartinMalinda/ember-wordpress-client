import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('post', {path: '/post/:id'});
  this.route('page', {path: '/page/:slug'});
});

export default Router;
