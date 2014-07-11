/**
 * @class JSManagedObject
 *
 * @description JSManagedObject is a generic class that implements all the basic behavior required of a Core Data model object.
 * It is not possible to use instances of direct subclasses of Object (or any other class not inheriting from JSManagedObject) with a managed object context.
 * You may create custom subclasses of JSManagedObject, although this is not always required. If no custom logic is needed, a complete object graph can be formed with JSManagedObject instances.
 * A managed object is associated with an entity description (an instance of JSEntityDescription) that provides metadata about the object (including the name of the entity that the object represents and the names of its attributes and relationships) and with a managed object context that tracks changes to the object graph.
 * It is important that a managed object is properly configured for use with Core Data. If you instantiate a managed object directly, you must call the designated initializer (initWithEntity:insertIntoManagedObjectContext:).
 *
 */

export class JSManagedObject {
    
}
