import assert from 'assert';

import isTrue from './';

describe('isTrue', () => {
  it('should return true if the value is true', () => {
    assert(isTrue(true));
    assert(isTrue(1));
    assert(isTrue('foo'));
  });

  it('should return false if the value is false', () => {
    assert(!isTrue(false));
    assert(!isTrue(0));
  })
});
