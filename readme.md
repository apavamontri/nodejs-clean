# Node.js + Express.js + Clean Architecture

This is the spike code to architect node.js, express.js using clean architecture.

## Architecture Overview
This project's architecture is based on Uncle Bob's [The Clean Architecture.][1] Please at least skim through his blog
as you will have a better understanding of how it works.

We are separated this application into 4 different layers
  1. Domains (highest)
  2. Use cases
  3. Interfaces
  4. Infrastructure (lowest)

The gist of it is a separation of concerns. Outer layer (lower) can reference (or know) the inner (highest) layer, however, the inner layers __can not__ know about outer layer. We accomplished this by using [Dependency Injection][2] and [Interface][3] during the object creation.

```
domains ---> user cases ---> interfaces ---> infrastructure
```
[1]: https://8thlight.com/blog/uncle-bob/2012/08/13/the-clean-architecture.html
[2]: https://martinfowler.com/articles/injection.html
[3]: https://gobyexample.com/interfaces
