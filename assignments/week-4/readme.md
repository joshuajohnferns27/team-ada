# Week 4 

Date : 12.Sep.2022 to 16.Sep.2022


## Implement the Quotes Backend  App using NestJS

Refer to the PDF file with the instructions for Quotes Application. 
- Create a REST Application using NestJS
- Database : PostgresSQL
- Database Client: PgAdmin
- Use the Docker compose file to connect to Database and Database client. file name `docker-compose.yml

### Tasks to be completed 
- CRUD Operations for Quotes Entity
- Read API endpoing for Authors


## CRUD Operations for Quotes 

-  **post**   /quotes 

``` json
{
  "author": "Ivo Costa",
  "quote":"To be or not to be, it's upto you! ",
  "tags": "life-goals",
}
```

- **get** /quotes

``` json
[
    {
        "likes": 126,
        "dislikes": 1,
        "isActive": true,
        "_id": "616815ef04b3cd0015fb797f",
        "quote": "To be or not to be, it's upto you! ",
        "author": "Ivo Costa",
        "tags": "life;",
        "__v": 0
    },
    {
        "likes": 73,
        "dislikes": 3,
        "isActive": true,
        "_id": "620613e47030d40015ae6639",
        "quote": "India is the only country wherein the total number of engineers exceeds the number of vehicles on the road",
        "author": "Nipun Varma",
        "__v": 0
    }
    ]
```

- **get** /quotes/:id

``` json 
{
        "likes": 126,
        "dilikes": 1,
        "isActive": true,
        "_id": "616815ef04b3cd0015fb797f",
        "quote": "To be or not to be, it's upto you!                           ",
        "author": "Ivo Costa",
        "tags": "life;",
        "__v": 0
    }
```


## Teams :

### Team Ada

 -  Mayur Naik
 - Omkar
 -  Vaibhav Kamat
 -  Joshua fernandes
- Nirzar Panvelkar


 ### Team BASIC

 - Siddhant Desai
- Aliyaj Ahemad
- Germano D'Costa
-  Athena Rodrigues
- Lachlan Da Silva



