/**
 * Innit CoreData
 *
 */
import {Provide, Inject} from 'di';

export {JSCoreDataVersionNumber as version} from './CoreDataDefines';
export {JSAtomicStoreCacheNode} from './classes/JSAtomicStoreCacheNode';
export {JSManagedObject} from './classes/JSManagedObject';


export function CoreDataProvider(){

    function _doFoo(){
        console.log('foo!')
    }

    return {
        foo: 'bar',
        doFoo: _doFoo
    }

};

//
// /**
//  * @name JSEntityDescription
//  *
//  * @description An JSEntityDescription object describes an entity in Core Data.
//  * @class
//  *
//  */
// export class JSEntityDescription {}
//
//
// /**
//  * @name
//  *
//  * @description Instances of JSEntityMapping specify how to map an entity from a source to a destination managed object model.
//  * @class
//  *
//  */
// export class JSEntityMapping {}
//
//
//
// /**
//  * @name
//  *
//  * @description Instances of JSEntityMigrationPolicy customize the migration process for an entity mapping.
//  * @class
//  *
//  */
// export class JSEntityMigrationPolicy {}
//
//
//
// /**
//  * @name
//  *
//  * @description You use a fetched results controller to efficiently manage the results returned from a Core Data fetch request to provide data for a UITableView object.
//  * @class
//  *
//  */
// export class JSFetchedResultsController {}
//
//
//
// /**
//  * @name
//  *
//  * @description JSIncrementalStoreNode is a concrete export class to represent basic nodes in a Core Data incremental store.
//  * @class
//  *
//  */
// export class JSIncrementalStoreNode {}
//
//
//
// /**
//  * @name
//  *
//  * @description JSManagedObject is a generic export class that implements all the basic behavior required of a Core Data model object.
//  * @class
//  *
//  */
// export class JSManagedObject {
//     constructor(){
//         console.log('hello')
//     }
// }
//
//
//
// /**
//  * @name
//  *
//  * @description An instance of JSManagedObjectContext represents a single “object space” or scratch pad in an application.
//  * @class
//  *
//  */
 export class JSManagedObjectContext {};
//
//
//
// /**
//  * @name
//  *
//  * @description An JSManagedObjectID object is a compact, universal identifier for a managed object.
//  * @class
//  *
//  */
// export class JSManagedObjectID {}
//
//
//
// /**
//  * @name
//  *
//  * @description An JSManagedObjectModel object describes a schema—a collection of entities (data models) that you use in your application.
//  * @class
//  *
//  */
// export class JSManagedObjectModel {}
//
//
//
// /**
//  * @name
//  *
//  * @description Instances of JSMappingModel specify how to map from a source to a destination managed object model.
//  * @class
//  *
//  */
// export class JSMappingModel {}
//
//
// /**
//  * @name
//  *
//  * @description  A merge conflict encapsulates conflicts that occur when attempting to save changes in a managed object context.
//  * @class
//  *
//  */
// export class JSMergeConflict {}
//
// /**
//  * @name
//  *
//  * @description You use a merge policy object to resolve conflicts between the persistent store and in-memory versions of managed objects.
//  * @class
//  *
//  */
// export class JSMergePolicy {}
//
//
// /**
//  * @name
//  *
//  * @description Instances of JSMigrationManager perform a migration of data from one persistent store to another using a given mapping model.
//  * @class
//  *
//  */
// export class JSMigrationManager {}
//
//
// /**
//  * @name
//  *
//  * @description This export class is the abstract base export class for all Core Data persistent stores.
//  * @class
//  *
//  */
// export class JSPersistentStore {}
//
// /**
//  * @name
//  *
//  * @description JSAtomicStore is an abstract superexport class that you can subexport class to create a Core Data atomic store.
//  * @class
//  *
//  */
// export class JSAtomicStore {}
//
//
// /**
//  * @name
//  *
//  * @description JSIncrementalStore is an abstract superexport class defining the API through which Core Data communicates with a store.
//  * @class
//  *
//  */
// export class JSIncrementalStore {}
//
//
/**
 * @name
 *
 * @description Instances of JSPersistentStoreCoordinator associate persistent stores (by type) with a model (or more accurately, a configuration of a model) and serve to mediate between the persistent store or stores and the managed object context or contexts.
 * @class
 *
 */



export class JSPersistentStoreCoordinator {
    @Inject(JSManagedObjectContext)
    constructor($moc){
        this.managedObjectContext = $moc;
    }
}
//
//
//
// /**
//  * @name
//  *
//  * @description An instance of JSPersistentStoreRequest describes criteria used to retrieve data from or save data to persistent stores.
//  * @class
//  *
//  */
// export class JSPersistentStoreRequest {}
//
//
// /**
//  * @name
//  *
//  * @description
//  * @class
//  *
//  */
// export class JSAsynchronousFetchRequest {}
//
//
// /**
//  * @name
//  *
//  * @description
//  * @class
//  *
//  */
// export class JSBatchUpdateRequest {}
//
//
// /**
//  * @name
//  *
//  * @description An instance of JSFetchRequest describes search criteria used to retrieve data from a persistent store.
//  * @class
//  *
//  */
// export class JSFetchRequest {}
//
//
// /**
//  * @name
//  *
//  * @description A save changes request encapsulates a collection of changes to be made by an object store in response to a save operation on a managed object context.
//  * @class
//  *
//  */
// export class JSSaveChangesRequest {}
//
//
// /**
//  * @name
//  *
//  * @description
//  * @class
//  *
//  */
// export class JSPersistentStoreResult {}
//
//
// /**
//  * @name
//  *
//  * @description
//  * @class
//  *
//  */
// export class JSBatchUpdateResult {}
//
//
// /**
//  * @name
//  *
//  * @description
//  * @class
//  *
//  */
// export class JSPersistentStoreAsynchronousResult {}
//
//
// /**
//  * @name
//  *
//  * @description
//  * @class
//  *
//  */
// export class JSAsynchronousFetchResult {}
//
//
// /**
//  * @name
//  *
//  * @description The JSPropertyDescription export class is used to define properties of an entity in a Core Data managed object model.
//
//  * @class
//  *
//  */
// export class JSPropertyDescription {}
//
//
// /**
//  * @name JSAttributeDescription
//  *
//  * @description The JSAttributeDescription export class is used to describe attributes of an entity described by an instance of JSEntityDescription.
//  * @class
//  *
//  */
// export class JSAttributeDescription {}
//
// /**
//  * @name JSExpressionDescription
//  *
//  * @description Instances of JSExpressionDescription objects represent a special property description type intended for use with the JSFetchRequest propertiesToFetch method.
//  * @class
//  *
//  */
// export class JSExpressionDescription {}
//
//
// /**
//  * @name JSFetchedPropertyDescription
//  *
//  * @description The JSFetchedPropertyDescription export class is used to define “fetched properties.
//  * @class
//  *
//  */
// export class JSFetchedPropertyDescription {}
//
// /**
//  * @name JSRelationshipDescription
//  *
//  * @description The JSRelationshipDescription export class is used to describe relationships of an entity in an JSEntityDescription object.
//  * @class
//  *
//  */
// export class JSRelationshipDescription {}
//
// /**
//  * @name JSPropertyMapping
//  *
//  * @description Instances of JSPropertyMapping specify in a mapping model how to map from a property in a source entity to a property in a destination entity.
//  * @class
//  *
//  */
// export class JSPropertyMapping {}
//
// /**
//  * @name JSExpression
//  *
//  * @description JSExpression is used to represent expressions in a predicate.
//  * @class
//  *
//  */
// export class JSExpression {}
//
// /**
//  * @name JSFetchRequestExpression
//  *
//  * @description Instances of JSFetchRequestExpression represent expressions which evaluate to the result of executing a fetch request on a managed object context.
//  * @class
//  *
//  */
// export class JSFetchRequestExpression {}
//
//
//
// // Protocols
// //
// // Protocol
// // Abstract
//
// /**
//  * @name JSFetchedResultsControllerDelegate
//  *
//  * @description An instance of JSFetchedResultsController uses methods in this protocol to notify its delegate that the controller’s fetch results have been changed due to an add, remove, move, or update operations.
//  * @class
//  *
//  */
// export class JSFetchedResultsControllerDelegate {}
//
//
// /**
//  * @name JSFetchedResultsSectionInfo
//  *
//  * @description This protocol defines the interface for section objects vended by an instance of JSFetchedResultsController.
//  * @class
//  *
//  */
// export class JSFetchedResultsSectionInfo {}
