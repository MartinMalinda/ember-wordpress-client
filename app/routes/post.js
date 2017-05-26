import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    const postId = params.id;
    return this.store.findRecord('post', postId);
  }
});
