/**
 * Lo-Dash 3.0.0-pre (Custom Build) <https://lodash.com/>
 * Build: `lodash modern modularize exports="npm" -o ./`
 * Copyright 2012-2014 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.7.0 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2014 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <https://lodash.com/license>
 */
var createPad = require('lodash._createpad');

/**
 * Converts `value` to a string if it is not one. An empty string is
 * returned for `null` or `undefined` values.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */
function toString(value) {
  if (typeof value == 'string') {
    return value;
  }
  return value == null ? '' : (value + '');
}

/**
 * Pads `string` on the right side if it is shorter then the given padding
 * length. The `chars` string may be truncated if the number of padding
 * characters exceeds the padding length.
 *
 * @static
 * @memberOf _
 * @category String
 * @param {string} [string=''] The string to pad.
 * @param {number} [length=0] The padding length.
 * @param {string} [chars=' '] The string used as padding.
 * @returns {string} Returns the padded string.
 * @example
 *
 * _.padRight('abc', 6);
 * // => 'abc   '
 *
 * _.padRight('abc', 6, '_-');
 * // => 'abc_-_'
 *
 * _.padRight('abc', 3);
 * // => 'abc'
 */
function padRight(string, length, chars) {
  string = toString(string);
  return string ? (string + createPad(string, length, chars)) : string;
}

module.exports = padRight;
