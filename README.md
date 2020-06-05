# Apollo-server

  

# What is GraphQL ? 

* GraphQL is a query language for APIs and a runtime for fulfilling those queries with your existing data. GraphQL provides a complete and understandable description of the data in your API, gives clients the power to ask for exactly what they need and nothing more, makes it easier to evolve APIs over time, and enables powerful developer tools

* A GraphQL service is created by defining types and fields on those types, then providing functions for each field on each type


# Difference between GraphQL and Rest


* A REST API is an architectural concept for network-based software. GraphQL, on the other hand, is a query language, a specification, and a set of tools that operates over a single endpoint using HTTP. In addition, over the last few years, REST has been used to make new APIs, while the focus of GraphQL has been to optimize for performance and flexibility.

  

* When using a REST API to fetch information, you’ll always get back a complete dataset. For example, if you wanted to request information from two objects, you’d need to perform two REST API requests. The advantage of REST APIs is its simplicity—you have one endpoint that does one task, so it’s easy to understand and manipulate. In other words, if you have X endpoint, it provides X data.
Conversely, if you wanted to gather some information from a specific endpoint, you couldn’t limit the fields that the REST API returns; you’ll always get a complete data set. This phenomenon is referred to as over fetching. GraphQL uses its query language to tailor the request to exactly what you need, from multiple objects down to specific fields within each entity. GraphQL would take X endpoint, and it can do a lot with that information, but you have to tell it what you want first.

* In essence, GraphQL is extremely powerful, once you know how to use it. Because you are only fetching the data that you require, you limit the amount of processing required. As you begin to look at automation, these savings really start to add up.

  

# Write down about Schema and Resolvers

  
**Schema**
 
 * The GraphQL schema is at the center of every GraphQL server. It defines the server's API, allowing clients to know which operations can be performed by the server. The schema is written using the GraphQL schema language (also called schema definition language, SDL). With it, you can define object types and fields to represent data that can be retrieved from the API as well as root types that define the group of operations that the API allows.
The root types are the query type, mutation type, and subscription type, which are the three types of operations you can run request from a GraphQL server. The query type is compulsory for any GraphQL schema, while the other two are optional. While we can define custom types in the schema, the GraphQL specification also defines a set of built-in scalar types. They are Int, Float, Boolean, String, and ID.

  

**Resolver** 
* Our API is able to run two query operations: one to retrieve an array of books and another to retrieve a book based on its id. The next step for us is to define how these queries get resolved so that the right fields are returned to the client.
* Those are the four  arguments that every resolver function receives. They are described as:

 1. root
*  This argument is sometimes called parent. It contains the result of the previously executed resolver in the call chain. For example, if we call the book query, it'll start executing from the root field book in the Query root type. After that, it'll execute the resolvers in the Book type to get values for those fields. In the code above, I named the first argument for the resolvers of the fields in Book as parent. The value for the argument will be the Book object received from the parent resolver. This is why we're calling parent.title, for example, to return value for that field.

2. args  
*  These are the arguments provided to the field in the GraphQL query. Following our example, this will be the id argument for the book query book(id: Int!): Book.

3. context
* This is an object that every resolver can read from or write to. You can keep objects that give access to database or that contain information from the HTTP request headers here. Unlike the root and args parameters, their values vary based on what level in the execution chain the resolver is called from. The context object is the same across resolvers, and you can write contextual information to it as needed. We will use this argument in the next post, so stay tuned!.

  

4. info
* Taking definition from here, it holds field-specific information relevant to the current query as well as the schema details. To learn more about it, you can read this excellent post on the subject.