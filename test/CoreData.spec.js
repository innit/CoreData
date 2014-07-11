module CoreData from '../src/CoreData';

import {use, inject} from '../node_modules/di/src/testing'

import {Injector} from '../node_modules/di/src/index'

import {MockCoreDataProvider} from './mocks/CoreDataMocks'

describe('CoreData module', function() {   var coreDataMod;

  beforeEach(function() {   coreDataMod = CoreData; });

  it('should import the framework successfully', function() {
  expect(coreDataMod).toBeDefined(); });

  it('should export a version number', function() {
  expect(coreDataMod.version).toBeDefined();
 }); });

describe('Core Data Headers', function() {   var coreDataMod;

  beforeEach(function() {   coreDataMod = CoreData; });

  it('should import the headers successfully', function() {
  expect(coreDataMod).toBeDefined(); }); });

describe('CoreDataProvider', function() {   var coreDataMod;   var injector;

  beforeEach(function() {   injector = new Injector([]); });

  it('should get the CoreDataProvider from the injector', function() {     var
  provider = injector.get(CoreData.CoreDataProvider);

      expect(provider.foo).toBe('bar');

  });

  it('should get the same CoreDataProvider from the injector twice', function() {
  var provider = injector.get(CoreData.CoreDataProvider);

      provider.foo = 'baz';

      var provider2 = injector.get(CoreData.CoreDataProvider);

      expect(provider2.foo).toBe('baz');

  }); });

describe('CoreDataProvider Mocking', function() {

  beforeEach(function() {
  use(MockCoreDataProvider).as(CoreData.CoreDataProvider)

  });

  it('should get the MockCoreDataProvider from the injector', function() {
  inject(CoreData.CoreDataProvider,function(provider){
  expect(provider.foo).toBe('mockfoo')         })         });

});
