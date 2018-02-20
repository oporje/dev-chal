
Code Flow
npm run start
1)	Starts with es6/app.js

Bootstrapping of the app is done in this file.

2)	Main/bootstrap.js
Bootstrap is responsible to create the controller object and call it.
3)	Controller/init
This is responsible for flow of the webapp.
First it calls the socket service connect method.
Then set and sort , get currency, create Fragment

Here I have used Map data structure so that we can update or push the data as per key.
Key being ‘name’ here.

4)	At view layer fragment is created for continuous updates to the rows and they are appended.
Table is sorted ascending Last bid change and remains sorted.

Unit testing
Unit testing is done using jasmine and karma.
I have covered few test cases and those can be run using

npm run tests
