

const Blog = () => {
    return (
        <div className=" w-3/4 mx-auto my-20 grid lg:grid-cols-2 gap-4">
            <div className="card w-96  bg-primary text-primary-content">
              <div className="card-body">
    <h2 className="card-title">Quize-1: What is an access token and refresh token? How do they work and where should we store them on the client-side?
</h2>
    <p>Answer: <br /> Access Token: An access token is a credential that is issued to a client application after successful authentication. It is used to access protected resources, such as APIs or web services. The access token typically has an expiration time, after which it is no longer valid. It is a short-lived token that provides temporary access to the requested resources.

When a client application wants to access a protected resource, it includes the access token in the request headers or as a query parameter. The server then verifies the access token to ensure the client has the necessary permissions to access the requested resource. If the access token is valid, the server processes the request and returns the requested data. <br />
<br />
Refresh Token: A refresh token is a long-lived token that is used to obtain a new access token when the current access token expires. It is typically issued alongside the access token during the authentication process. The refresh token is securely stored on the client-side, usually in a cookie or local storage.

When the access token expires, the client application sends a request to the authentication server with the refresh token. The server verifies the refresh token and, if valid, issues a new access token without requiring the user to re-authenticate. This process is called token refreshing. The refresh token itself usually has a longer expiration time compared to access tokens, and it is used to obtain new access tokens when needed. </p>
    
  </div>
</div>

<div className="card w-96 bg-primary text-primary-content">
              <div className="card-body">
    <h2 className="card-title">QUize-2: Compare SQL and NoSQL databases?</h2>
    <p>Answer: <br />
    SQL (Structured Query Language) and NoSQL (Not only SQL) are two different types of database systems that have distinct characteristics and use cases. Here is a comparison between SQL and NoSQL databases: <br />
 <br />
Data Model:
<br />
SQL: SQL databases use a structured data model based on tables with rows and columns. The data is organized into predefined schemas, and relationships between tables are established using foreign keys.

<br />
NoSQL: NoSQL databases use various data models, including key-value pairs, documents, column-family, and graphs. They provide flexibility by allowing schema-less designs, where each document or record can have different structures.
     </p>
   
  </div>
</div>
<div className="card w-96 bg-primary text-primary-content">
              <div className="card-body">
    <h2 className="card-title">Quize-3:What is express js? What is Nest JS? </h2>
    <p>Answer: <br />
    Express.js: Express.js is a minimalist and flexible web framework for Node.js. It provides a simple and straightforward way to build web applications and APIs. Express.js focuses on being unopinionated, giving developers freedom and flexibility to design their application structure and choose the middleware and libraries they prefer.

    <br />

    Nest.js: Nest.js is a progressive and opinionated framework for building scalable and maintainable server-side applications. It takes advantage of TypeScript is features and Object-Oriented Programming (OOP) principles to provide a structured and modular architecture. Nest.js is built on top of Express.js and adds additional abstractions and features to enhance the development experience.
     </p>

  </div>
</div>
<div className="card w-96 bg-primary text-primary-content">
              <div className="card-body">
    <h2 className="card-title">Quiz-4:  What is MongoDB aggregate and how does it work? </h2>
    <p>Answer:MongoDB is aggregation framework is a powerful feature that allows you to perform advanced data processing operations on collections of documents. It provides a way to query, analyze, and transform data within MongoDB.

The aggregation framework operates on the concept of a pipeline, which consists of multiple stages that are executed in sequence. Each stage takes input from the previous stage and produces output for the next stage. The stages can include operations such as filtering, grouping, sorting, projecting, and performing various calculations. </p>

  </div>
</div>
        </div>
    );
};

export default Blog;