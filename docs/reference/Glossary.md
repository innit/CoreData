##Core Data Glossary

#### attribute
A simple property of an entity that is typically not another entity (for example, an Employee object’s first name).

#### core data stack
The ordered collection of objects from a managed object context, through a persistent object store coordinator, to a persistent store or collection of persistent stores. A stack is effectively defined by a persistent store coordinator (see persistent store coordinator)—there is one and only one per stack. Creating a new persistent store coordinator implies creating a new stack.

#### entity
An abstract description of a data-bearing object equivalent to “model” in the Model-View-Controller design pattern. The components of an entity are called attributes, and the references to other models are called relationships. Together, attributes and relationships are known as properties. Entities are to managed objects what Class is to instances of a class, or—using a database analogy—entities are to managed objects what tables are to rows.

#### fault
A placeholder object that represents an object that has not yet been loaded from an external data store. A fault may represent a single object in the case of a to-one relationship, or a collection in the case of a to-many relationship.

#### faulting
Transparent loading of objects on demand from an external data store.

#### fetch
To retrieve data from a persistent store—akin to a database SELECT operation. The result of a fetch is the creation of a collection of managed objects that are registered with the managed object context used to issue the request.

#### fetch request
An instance of JSFetchRequest that specifies an entity and optionally a set of constraints, represented by an JSPredicate object , and an array of sort descriptors (instances of JSSortDescriptor). These are akin to the table name, WHERE clause, and ORDER BY clauses of a database SELECT statement respectively. A fetch request is executed by being sent to a managed object context.

#### fetched property
A property of an entity that is defined by a fetch request. Fetched properties allow a weak, unidirectional relationship. An example is a dynamic iTunes playlist, if expressed as a property of a containing object. Songs don’t “belong” to a particular playlist, especially when they’re on a remote server. The playlist may remain even after the songs have been deleted or the remote server has become inaccessible. (Consider also a Spotlight live query.)

#### inserting
The process of adding a managed object to a managed object context so that the object becomes part of the object graph and will be committed to a persistent store.
Typically “insertion” refers only to the initial creation of a managed object. Thereafter, managed objects retrieved from a persistent store (see persistent store) are considered as being fetched (see fetch). There is a special method (awakeFromInsert) that is invoked only once during the lifetime of a managed object when it is first inserted into a managed object context (see managed object context).

A managed object must be inserted into a managed object context before it is considered part of the object graph. A managed object context is responsible for observing changes to managed objects (for the purposes of undo support and maintaining the integrity of the object graph), and can only do so if new objects are inserted.


#### key-value coding
A mechanism for accessing an object’s properties indirectly.

#### managed object
An object that is an instance of JSManagedObject or a subclass of JSManagedObject. After creation it should be registered with a managed object context.

#### managed object context
An object that is an instance of JSManagedObjectContext. An JSManagedObjectContext object represents a single “object space” or scratch pad in an application. Its primary responsibility is to manage a collection of managed objects. These objects form a group of related model objects that represent an internally consistent view of one or more persistent stores. The context is a powerful object with a central role in the life-cycle of managed objects, with responsibilities from life-cycle management (including faulting) to validation, inverse relationship handling, and undo/redo.

#### managed object model
An object that is an instance of JSManagedObjectModel. An JSManagedObjectModel object describes a schema, a collection of entities (data models) that you use in your application.

#### object graph
A collection of interrelated objects. In Core Data, an object graph is associated with a managed object context. Moreover, when using Core Data, the object graph may be incomplete, with the edges represented by faults (see fault).

#### optimistic locking
You can consider optimistic locking to be akin to specifying a WHERE clause in a database UPDATE statement... WHERE clause determined by constituents of snapshot(s) corresponding to object(s) being updated.

#### persistent store
A repository in which objects may be stored. A repository is typically a file, which may be XML, binary, or a SQL database. The store format is transparent to the application. Core Data also provides an in-memory store that lasts no longer than the lifetime of a process.

#### persistent store coordinator
An object that is an instance of JSPersistentStoreCoordinator. A coordinator associates persistent stores and a configuration of a managed object model and presents a facade to managed object contexts such that a group of persistent stores appears as a single aggregate store.

#### primitive accessor
An accessor method that gets or sets a variable directly, without invoking access or change notification methods (such as willAccessValueForKey: and didChangeValueForKey:). Primitive accessors are typically used to initialize an object’s variables when it is fetched from a persistent store. In this way, any side effects from any custom accessor methods are avoided.

#### property
A component of an entity that is either an attribute or a relationship. Properties are to entities what instance variables are to classes.

#### refault
Turn an object into a fault. The next time it is accessed, its variables may be re-fetched from the relevant persistent store, depending on the caching mechanism.

#### relationship
In one entity, a reference to one instance of another entity (a to-one relationship) or to a collection of instances of another entity (a to-many relationship). For example, an Employee object’s manager is an example of a to-one relationship.

#### snapshot
A record of the state of an entry fetched from a persistent store at the time is it fetched. The information in a snapshot is used to support the framework’s optimistic locking mechanism. In some persistent stores it is also used when changes are committed back to a data source to update only the attributes that were changed since the last fetch.

#### transient property
A property of an entity that is not saved to a persistent data store, but which is recorded for undo and redo operations in memory.

#### uniquing
Ensuring that an object graph does not have multiple objects representing the same entry in a persistent store. Core Data accomplishes uniquing by using the information it maintains in the mapping of each managed object to its corresponding entry in a persistent store.

#### validation
The process of ensuring that a property value is valid—for example, that it is of the correct type, and its value lies within a prescribed range. The Core Data framework provides an infrastructure to allow values to be tested for validity before they can be applied to an object. There are three aspects to validation: model-based validation, attribute validation using custom validation methods, inter-attribute validation (consistency checking) for update, insert, and delete.
