"use strict";
Object.defineProperties(exports, {
  JSCoreDataVersionNumber: {get: function() {
      return $__CoreDataDefines__.JSCoreDataVersionNumber;
    }},
  JSAtomicStoreCacheNode: {get: function() {
      return $__classes_47_JSAtomicStoreCacheNode__.JSAtomicStoreCacheNode;
    }},
  CoreDataProvider: {get: function() {
      return CoreDataProvider;
    }},
  JSManagedObjectContext: {get: function() {
      return JSManagedObjectContext;
    }},
  JSPersistentStoreCoordinator: {get: function() {
      return JSPersistentStoreCoordinator;
    }},
  __esModule: {value: true}
});
var $__0 = require('di'),
    Provide = $__0.Provide,
    Inject = $__0.Inject;
var $__CoreDataDefines__ = require('./CoreDataDefines');
var $__classes_47_JSAtomicStoreCacheNode__ = require('./classes/JSAtomicStoreCacheNode');
function CoreDataProvider() {
  function _doFoo() {
    console.log('foo!');
  }
  return {
    foo: 'bar',
    doFoo: _doFoo
  };
}
;
var JSManagedObjectContext = function JSManagedObjectContext() {};
($traceurRuntime.createClass)(JSManagedObjectContext, {}, {});
;
var JSPersistentStoreCoordinator = function JSPersistentStoreCoordinator($moc) {
  this.managedObjectContext = $moc;
};
($traceurRuntime.createClass)(JSPersistentStoreCoordinator, {}, {});
