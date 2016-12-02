/**
 * @copyright Leonard Techel, 2016
 * @license MIT
 */
import 'babel-polyfill';

/**
 * Tells us if a value is true or not
 *
 * @param {bool} value Thing you want to be proven
 * @returns {bool} If it is true or not
 */
function isTrue(value) {
  return !!value;
}

export default isTrue;
