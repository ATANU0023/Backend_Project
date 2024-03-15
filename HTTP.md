## HTTP

### what are HTTP headers?
- Metadata,      key-value sent along wiht request & response.

### works of Headers?
- caching
- authentication
- manage-state


previously it used x-prefix now a days its became depricated.

* Request Headers -  from client
* Response Headers - from server
* Representaion Headers - encoding / compression
* Payload Headers - data.


## Common Headers :
- Accept : application /json
- User-agent
- Authentication
- Content-Type
- Cookie
- Cache-control

# cors

- Access-Control-Allow-Origin
- Access-Control-Allow-Credintial
- Access-Control-Allow-Method

# Security

- Cross-Origin-Emvedders-Policy
- Cross-Origin-Opener-Policy
- Cross-Security-Policy
- X-XSS-Protection

# HTTP methods

Basic set of operation that can be used to interact with server.
- ```GET``` : retrieve a resource
- ```HEAD``` : no message body(response headers only)
- ```OPTIONS``` : what options are available
- ```TRACE``` : loopback test(get some data).
-  ```DELETE``` : remove a data
- ```PUT``` : replace a resourse
- ```POST``` : interact with resourse (mostly add)
- ```PATCH``` : change part of a resource


## HTTP status code
| Range | status |
|-------|--------|
| 100 -199 | informational |
| 200 -299 | success |
| 300 - 399 | redirection |
| 400 - 499 | client error |
| 500 - 599 | server error |

- 100  continue
- 102  processing
- 200  ok
- 201  created
- 202  accepted
- 307  temporary redirected
- 308  permanent redirect
- 400  bad request
- 401 unauthorized
- 402 payment required
- 404 not fixed
- 500 internal server error
- 504 gateway timeout 


