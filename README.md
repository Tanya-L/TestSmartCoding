
# Node Todo App

## Description

Check out the sample project at http://tapwash.com if you haven't already.

It is written in pure vanilla HTML and JS on the frontend, while using Node JS on the backend with mongoDB as the database to store the data.

**We want you to create something similiar that can:** 

* Display Todos
* Add Todos
* Delete Specific Todos
* Is pushed to a git repo so that we can download it

So basically, recreate that app.

**Bonus:** 

* Edit Todos
* Change the Todos to users or something else
* Style it to make it look nice

You really don't need to do any of the bonuses,
but if you're feeling confident, knock yourself out.

We have the basic skeleton of the app prepared for you in our repo.  
The task should be fairly straight forward and is expected to take
about 2-6 hours to complete.

## Git Info

Git is a version control system that is used to make it easier to
basically just work with code.  
It keeps track of changes to the code,
lets you edit, remove it etc.

It should not be confused with GitHub, since GitHub is just a service
which lets you host your code.  
Bitbucket, GitLab and GitHub are all three services that lets you host
your code, while Git is a tool you can use when interacting with them.

Installation: 
https://www.atlassian.com/git/tutorials/install-git

We'd recommend you to use the terminal for git it, in order 
to get comfy with it, unless of course you already are.

## mongoDB and Mongoose Info

mongoDB is a document oriented NoSQL database used to store data.  
Mongoose JS meanwhile is a modeler for JS to be used in order to set rules
for your mongoDB db in Node JS.

Local installation: 
https://docs.mongodb.com/manual/installation/

If you don't want to install mongoDB, we
strongly recommend setting up an account with mlab on: 
https://mlab.com/plans/

It is free and will save you a lot of time.
You can then connect directly to the db url from mlab.

You just need to create a Sandbox DB, copy the
connection URL and finally create a db user.
The url should look something like this: 

*mongodb://userX:pass123@ds1010101.mlab.com:101010/your-db-name*

## Node JS and Express JS info

Node JS is a JS runtime that is usually used to run a JS server/backend.  
So basically it lets us use JS as a server side language which is
convenient if you are used to JS on the frontend, and/or if you want
to have a JS stack where you have the same language between 
server, web and mobile.

Express JS is a framework to use with Node which helps you do
many of the common things you'd want in an easier way.  
If you are a beginner with Node, but just want to spin up a server 
and host a website, then Express is strongly recommended.

Here is a short tutorial (not necessary for this task) that teaches
you the basics of hosting a website using Node and Express:
https://www.tutorialspoint.com/expressjs/

Installation: 
https://nodejs.org/en/

Node uses NPM as a dependency manager.  
So basically you will always have a package.json file
that decides your dependencies.  
You can create it by running the below command:

```
npm init
```

NPM lets you use npm install in order to
add dependencies.

Check out the code in the project, and then
install the dependencies for it.

```
const express       = require('express')
const bodyParser    = require('body-parser')
const mongoose      = require('mongoose')
```

You can start your node server using commands like:
```
npm start
node start
```

Another cool way to do it is using nodemon.  
It is a dependency that lets you restart node
automatically every time you save a file on it.  
It makes things a lot easier if you need
to restart the server a lot to test things.

Servers like node can usually(probably always) 
read files and variables from the system.  
You can set the DB whatever way you want.  
But feel free to use nodes env variables,
as we have prepared for you.

```
const DB_URL    = process.env.DB_URL
```

You can set the process.env.DB_URL variable
on startup of node by running it together
with the starting command.  
You can also go even more advanced by having 
your custom start script inside packacke.json.  
But the first option should be just fine.

