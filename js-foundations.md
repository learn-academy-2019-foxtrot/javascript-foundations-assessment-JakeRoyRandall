# ASSESSMENT 2: FOUNDATIONS OF JAVASCRIPT
## Interview Practice Questions

### Answer the following questions. First, without external resources. Challenge yourself to answer from memory. Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn.

1. Consider the function:

    var text = 'outside'
    function logIt(){
      console.log(text)
      var text = 'inside'
    }
    logIt()

  a. Look at this Javascript function and try to predict what the console show.
    Your answer:
      Nothing. Return undefined.

  b. Test the function. Explain why the function returned what it did.\
    Your answer:  
      The variable text declared outside of the function was not passed in as an argument to logIt() and/as the function did not specify a parameter. The variable declared inside the function was defined after the console log, so text was not available to be returned.

    Researched answer: above??

2. What is JSON?
    Your answer:
      JavaScript Object Notation (JSON) is a way to organize data and is a popular way to receive/ manipulate data via APIs.
    Researched answer:

      source: https://books.google.com/talktobooks/query?q=what%20is%20JSON&

      Java Script Object Notation (JSON) is a lightweight text-based open standard designed for human-readable data interchange, specified by Douglas Crockford (Afsari et al. 2017). JSON format is used for serializing and transmitting structured data.

          from Bituminous Mixtures and Pavements VII: Proceedings of the 7th International …
          by A.F. Nikolaides, E. Manthos
          CRC Press, 2019 ⦁ Science

      JSON is short for JavaScript object notation, and it is an open standard format that uses plain text to transmit data objects consisting of attribute-value pairs. It is the most common data format for asynchronous browser/sever communication and is essentially a replacement of XML (Extensible Markup Language)

          from Learning Apache Spark 2
          by Muhammad Asif Abbasi
          Packt Publishing, 2017 ⦁ Science

3. What does CRUD stand for?
    Your answer:
      Forgot
    Researched answer:
      Create Read Update Delete

4. What does are the 5 HTTP verbs?
    Your answer:
      I have no idea
    Researched answer:
      source: https://www.restapitutorial.com/lessons/httpmethods.html
      GET
          Use GET requests to retrieve resource representation/information only – and not to modify it in any way. As GET requests do not change the state of the resource, these are said to be safe methods. Additionally, GET APIs should be idempotent, which means that making multiple identical requests must produce the same result every time until another API (POST or PUT) has changed the state of the resource on the server.

          If the Request-URI refers to a data-producing process, it is the produced data which shall be returned as the entity in the response and not the source text of the process, unless that text happens to be the output of the process.

          For any given HTTP GET API, if the resource is found on the server then it must return HTTP response code 200 (OK) – along with response body which is usually either XML or JSON content (due to their platform independent nature).

          In case resource is NOT found on server then it must return HTTP response code 404 (NOT FOUND). Similarly, if it is determined that GET request itself is not correctly formed then server will return HTTP response code 400 (BAD REQUEST)
      POST
        Use POST APIs to create new subordinate resources, e.g. a file is subordinate to a directory containing it or a row is subordinate to a database table. Talking strictly in terms of REST, POST methods are used to create a new resource into the collection of resources.

        Ideally, if a resource has been created on the origin server, the response SHOULD be HTTP response code 201 (Created) and contain an entity which describes the status of the request and refers to the new resource, and a Location header.

        Many times, the action performed by the POST method might not result in a resource that can be identified by a URI. In this case, either HTTP response code 200 (OK) or 204 (No Content) is the appropriate response status.

        Responses to this method are not cacheable, unless the response includes appropriate Cache-Control or Expires header fields.

        Please note that POST is neither safe nor idempotent and invoking two identical POST requests will result in two different resources containing the same information (except resource ids).
      PUT
        Use PUT APIs primarily to update existing resource (if the resource does not exist then API may decide to create a new resource or not). If a new resource has been created by the PUT API, the origin server MUST inform the user agent via the HTTP response code 201 (Created) response and if an existing resource is modified, either the 200 (OK) or 204 (No Content) response codes SHOULD be sent to indicate successful completion of the request.

        If the request passes through a cache and the Request-URI identifies one or more currently cached entities, those entries SHOULD be treated as stale. Responses to this method are not cacheable.
      DELETE
        As the name applies, DELETE APIs are used to delete resources (identified by the Request-URI).

        A successful response of DELETE requests SHOULD be HTTP response code 200 (OK) if the response includes an entity describing the status, 202 (Accepted) if the action has been queued, or 204 (No Content) if the action has been performed but the response does not include an entity.

        DELETE operations are idempotent. If you DELETE a resource, it’s removed from the collection of resource. Repeatedly calling DELETE API on that resource will not change the outcome – however calling DELETE on a resource a second time will return a 404 (NOT FOUND) since it was already removed. Some may argue that it makes DELETE method non-idempotent. It’s a matter of discussion and personal opinion.

        If the request passes through a cache and the Request-URI identifies one or more currently cached entities, those entries SHOULD be treated as stale. Responses to this method are not cacheable.
      PATCH
        HTTP PATCH requests are to make partial update on a resource. If you see PUT requests also modify a resource entity so to make more clear – PATCH method is the correct choice for partially updating an existing resource and PUT should only be used if you’re replacing a resource in its entirety.

5. What is a higher-order function?
    Your answer:
      It's a function that takes another function as an argument.
    Researched answer:
      source: https://www.sitepoint.com/higher-order-functions-javascript/

      One of the characteristics of JavaScript that makes it well-suited for functional programming is the fact that it can accept higher-order functions. A higher-order function is a function that can take another function as an argument, or that returns a function as a result

6. STRETCH: What is a closure, what is it good for and how do you recognize one?

    Your answer:
      No idea.

    Researched answer:
      https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures

      A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). In other words, a closure gives you access to an outer function’s scope from an inner function. In JavaScript, closures are created every time a function is created, at function creation time.

7. STRETCH: What is an API?

    Your answer:
      An API is an Application Programming Interface. It is used for connecting different applications together. It is often used for getting data from an external source into your application.

    Researched answer:
      https://books.google.com/talktobooks/query?q=what%20is%20an%20API&    

      API (Application Programming Interface) is a software that enables two applications to communicate to each other. API sends the request to the server and retrieves the response back. API helps in developing a computer program, by giving all the basic building blocks that can be combined by the programmer.

      from Handbook of Research on Machine and Deep Learning Applications for Cyber …
      by Ganapathi, Padmavathi, Shanmugapriya, D.
      IGI Global, 2019 ⦁ Science

### Additional Feedback Questions.

1. Do you have a suggestion for a Check In question?

    Your answer:  
        a. For what accomplishment are you most proud?
        b. If you were an animal, what animal would you be?
        c. What is your secret skill?
        d. If you could have dinner with anyone in the world, who would it be?                  

2. What was your favorite topic this week?

    Your answer: I enjoyed learning about react and how to utilize javaScript to manipulate the DOM.

3. What was your "A-ha!" moment this week?

    Your answer: Realizing that working with others and communicating effectively is just as challenging as the concepts.
