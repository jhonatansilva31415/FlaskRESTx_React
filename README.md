# Distribute Systems - IFSC - Web Service Project

### How to run the code 

To run this app, you need to ensure that you have this installed on your system

- Docker

Annnnd, that's pretty much it, this is the magic of Docker, no dreadfull list of requirements :D

If you would like to use the magic that is behind the Makefile, it's good to use a Linux system

You can go and see all the commands in the Makefile if you like to skip ahead and try things on your own, the Makefile
is pretty much self explanatory, but, nontheless, if you preffer a more step 1, 2 approach, let's move on :D. 

---

## About the Tech 

### Backend 

- [Docker] As the container service to isolate the environment.
- [Flask RESTx] As the API layer
- [Postgre SQL] As the database layer
- [SQLAlchemy] As the "ORM" / model layer

### Frontend 

- [React] As the only start 


### Features

- Swagger - Import a CSV with products to the database
- Swagger - CRUD for the products
- Front to list, edit and search products 


# Getting Started

After installing docker, you pretty much need 3 steps to run the backend 

- Clone the repository
- Run  `make run-app`  in the root of the project, if on Linux, else `docker-compose up`

With this, the API should spin up, but you still need to create the tables for the database

Linux

`make local-createdb`

Windows

`docker-compose exec api python manage.py recreate_db`

You can now go to http://localhost:5000 and you should see the Swagger for the API.

If you experience any problems with postgres setup, you may need to clean up your system, sometimes it happens, mostly if you have other APIs that use the same name conventions. You can try `make stop` and `docker system prune`, it's a bit harsh, but it'll clean up your docker system. After that everything should run smoothly.

## Swagger
Now that you have access to the Swagger of the API, you'll have access to the following namespaces
- test
- data
- products

To upload data to the backend, you can use the data endpoint and upload the data.csv file

## Frontend 

For the frontend, a simple React interface was created, as the Swagger API already satisfied the requirement for a interface that has a list of all resources and has the hability to consume it, the React side of it, was built more towards visualization and searching. It would be a nice feature in the future to add ElasticSearch to make a more robust search engine, today it's only using Javascript basic functions to make a filter.

To run the frontend, go to the front folder, and as the API, run `make run-app`, and that's pretty much it, feel free to play around now.


---

## Good resources for learning 

### Flask RESTx

- https://flask-restx.readthedocs.io/en/latest/
  
#### Sanitization for uploads
- https://blog.miguelgrinberg.com/post/handling-file-uploads-with-flask

#### Fields in flask 
https://flask-restx.readthedocs.io/en/latest/_modules/flask_restx/fields.html?highlight=stringmixin#

#### HTTPS deploy Heroku
https://flask-dance.readthedocs.io/en/v0.13.0/proxies.html

### Docker

- https://docs.microsoft.com/en-us/visualstudio/docker/tutorials/docker-tutorial

### TDD

- https://cucumber.io/docs/gherkin/reference/
- https://medium.com/@mvwi/story-writing-with-gherkin-and-cucumber-1878124c284c