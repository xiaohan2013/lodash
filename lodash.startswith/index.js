/**
 * Lo-Dash 3.0.0-pre (Custom Build) <https://lodash.com/>
 * Build: `lodash modern modularize exports="npm" -o ./`
 * Copyright 2012-2014 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.7.0 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2014 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <https://lodash.com/license>
 */

/* Native method references for those with the same name as other `lodash` methods. */
var nativeMin = Math.min;

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
 * Checks if `string` starts with the given target string.
 *
 * @static
 * @memberOf _
 * @category String
 * @param {string} [string=''] The string to search.
 * @param {string} [target] The string to search for.
 * @param {number} [position=0] The position to search from.
 * @returns {boolean} Returns `true` if `string` starts with `target`, else `false`.
 * @example
 *
 * _.startsWith('abc', 'a');
 * // => true
 *
 * _.startsWith('abc', 'b');
 * // => false
 *
 * _.startsWith('abc', 'b', 1);
 * // => true
 */
function startsWith(string, target, position) {
  string = toString(string);
  position = position == null ? 0 : nativeMin(position < 0 ? 0 : (+position || 0), string.length);
  return string.lastIndexOf(target, position) == position;
}

module.exports = startsWith;
