import { test } from 'qunit';
import moduleForAcceptance from 'ember-wordpress-client/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | index');

test('visiting /', function(assert) {
    
  // server.createList('post', 3);

  visit('/');

  andThen(function() {
    assert.equal(currentURL(), '/');

    assert.equal(find('.ui.segment').length, 3, 'There are three models and three rendered posts');
    // assert.ok(find('ui.segment')[0].text().trim() !=== '', 'The posts are not empty');

    click(find('.ui.segment')[0]); // clicking the first article
  });

  andThen(() => {
    assert.equal(currentURL(), '/post/1');
  });
});
