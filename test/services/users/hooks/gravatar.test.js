'use strict';

const assert = require('assert');
const gravatar = require('../../../../src/services/users/hooks/gravatar.js');

describe('users gravatar hook', () => {
  it('hook can be used', () => {
    const mockHook = {
      type: 'before',
      app: {},
      params: {},
      result: {},
      data: {}
    };
    
    gravatar()(mockHook);
    
    assert.ok(mockHook.gravatar);
  });
});
