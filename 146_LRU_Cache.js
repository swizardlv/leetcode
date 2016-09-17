/*

Design and implement a data structure for Least Recently Used (LRU) cache. It should support the following operations: get and set.

get(key) - Get the value (will always be positive) of the key if the key exists in the cache, otherwise return -1.
set(key, value) - Set or insert the value if the key is not already present. When the cache reached its capacity, it should invalidate the least recently used item before inserting a new item.
 */

/**
 * @constructor
 */
var LRUCache = function(capacity) {
    this.capacity = capacity;
    this.cache = {};
    this.cacheCount = 0;
    this.index = 0;
};

/**
 * @param {number} key
 * @returns {number}
 */
LRUCache.prototype.get = function(key) {
    // console.table(this.cache);
    if (this.cache[key]) {
        this.cache[key].last_index = ++this.index;
  //      console.log(this.cache[key].value);
        return this.cache[key].value;
    } else {
  //      console.log(-1);
        return -1;
    }
};

/**
 * @param {number} key
 * @param {number} value
 * @returns {void}
 */
LRUCache.prototype.set = function(key, value) {
    if (this.cache[key]) {
        this.cache[key].value = value;
        this.cache[key].last_index = ++this.index;
    } else {
        if (this.cacheCount == this.capacity) {
            //find the least frequency used one
            var lastindex = this.index+1;
            var lastkey;
            for (var _key in this.cache) {
                if (this.cache.hasOwnProperty(_key) && this.cache[_key]) {
                    var _index = this.cache[_key].last_index
                    if (lastindex > _index) {
                        lastkey = _key;
                        lastindex = _index;
                    }
                }
            }
            this.cache[lastkey] = undefined;
            this.cacheCount--;

        }
        this.cache[key] = {
            "value": value,
            "last_index": ++this.index
        };
        // console.table(this.cache);
        this.cacheCount++;

    }
};
