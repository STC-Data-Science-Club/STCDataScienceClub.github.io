import React from "react"
import styled from "styled-components"
import NavAside from "../components/NavAside"
import ReactMarkdown from "react-markdown"
import api_diagram from "../images/api_diagram.png"
import api_file_strcture from "../images/api_file_strcture.png"

const report = `
<h1 style="text-align: center;">Authentication REST API</h1>

Godwin Bime, Jonathan Koerber
 Affiliation (Team: 2, CS 504 Software Engineering, MSCS, School of Technology and Computing, and City University of Seattle)

[bimegodwin@cityuniversity.edu](mailto:bimegodwin@cityuniversity.edu), [koerberjonathan@cityuniversity.edu](mailto:koerberjonathan@cityuniversity.edu)

**Overview RESTFull Authentication System**

Given the task of building a Restful API authentication system using the Flask framework and storing data in a MySQL database, we are attempting to develop an application using current best practices leaving room for future extensibility. Throughout development, we aim to follow best practices, adhere to coding standards, and prioritize security measures to safeguard user data. As this is part of a multi-part project, we are developing with the end goal in mind and are building the project in such a way that we can extend the project. In addition, it is essential to note that this project is developed more as a learning tool rather than to use it as an authentication system that will go into deployment.

The basic functionality that we are trying to achieve at this stage is to allow users to send an HTTP request with a username and password to our Flask application. The application will check if the input is valid and then query the database to see if the username and password match. If the username and password match, send a response with the result. In addition to authenticating a user, the application can add a new user, update a user, and delete users using HTTP requests.

In addition to using the technologies listed above, we will use Docker to containerize the application. Using Postman to send HTTP requests to the application is headless and only accepts requests with data in the requests body. To test our application we are using Pytest.

**Containers**

We chose as a team to use Docker to containerize the application to help with the development process. Containerizing will make setting up our local development environment more reliable. We also hope this will make the application easier to manage changes to the project structure and update dependencies. In the file docker-compose.yml, the three containers that make up the authentication system are defined. First, the Flask application is built using the python:3.10.11-slim image. The container is built from a Docker file because it needs some automation to install the requirements and start the application. Then we set up the database using the mysql:8.0 image and the volume /storage for the database storage and final use the admirer image to manage our database.

**Flask API**

In our Flask application, many of the decisions needed to build such an application were already defined in the assignment. The application must handle HTTP requests to perform the CRUD actions of adding, updating, removing, and authenticating. Also, in the assignment description, we learned we would use a MySql database of users records. In keeping with our class work we used the ORM SQLAlchemy to handle connecting with the database. At this point, we constructed the diagram in figure 1 to represent our application visually.

 ![API Diagram]({api_diagram}) ![API File Structure](/images/api_file_strcture.png)



We could start building the application now that we understood what we were making. Figure 2 displays the file structure. In the root directory are the files to create the containers described in the preceding section and the Python file, app, which serves as the entry point of the Flask application. We grouped the code for the API logic in the "./api" directory.

In the context of this assignment, the following directory of not is users with two files utils and routes. In utils, we have some helper functions for validating data. In routes, the entry points of the application are defined. We used Flask's Blueprint module to bind these routes to the app so all routes have a '@users.routes()' decorator. We have five routes in total. The first, ('/'), simply displays all data from the database. Next, we have the ('/login'), which accepts the get request with username and password in the request body, which will return a 200 code if the user is authenticated. The rest of the CRUD operations are with ('/users'), which accepts a POST request to add users and one that accepts a PUT request to update. To delete, we have the route ('users'/\<name\>) that uses the HTTP verb DELETE.

We tried to use the same methods that we used in our class we used a different method to access our SQLALchemy object. The examples that we have seen so far have just been making one call to the database. In our application we are making several calls to the database. Through out this application, we are dealing with user data. To make this easier, e created a data model class User that we connect with SQLAlchemy. This makes the code in the routes more straightforward as we can use User.query.filter\_py() to query the database for any of the fields in the class.

**MySQL Database**

While choosing MySQL for this project was not a choice we could make as it was in the project assignment. It is overkill as a data storage solution for the size data set we are working with. It is a great product that integrates into Flask very well, using MySQL.connecter or ORM SQLAlchemy. In the first iteration of this project, we used SQLAlchemy for this implementation, taking advantage of its create\_engine and text methods. With the create\_engine method, we created a temporary connection with our database and sent a query to perform CRUD operations. The test method ensures that all inputs sent to the database will be interpreted as text. Along with our validation helper methods, SQLAchemy's test method helped to preserve the integrity of the database. While this method did create correct results at the same time eliminating the potential of SQL injection, we chose to refactor the application to allow for testing and future extensibility.

![](src/images/user_model.png)_User Model_

Two major changes were made to the application that primarily affect the way the application connects to the database. The first change was moving details such as the database URI into a secret file, so it is easy to change remove it from our git repository. While we still are using SQLAlcemy we now create our instance of SQLAlchemy object in the that we can now pass to different modules in the application. This is the second change that has affected the database. We extend SQLAlchemy Model by defining the User class that though which we now make our query. Above is you can see the our model class that defines the columns in the database and allow for us to protect the database from integrity errors with the use of SQLAchemy.

**Admirer**

The first iteration of this application, we will use Admirer to manage our MySQL application. It will be an excellent fit for the project because web-based database management will allow us to interact with the database. It is also convenient to deploy it with docker-compose, allowing us to connect with our database from a web browser. In the README.md file in the project, we have outlined the steps needed to initialize the database. The steps need to run to build the database.

Now that we have changed the way we interact with the database. As noted above, we directly interact with the database through SQLAchcemy now; we are no longer storing users' passwords in plain text, as we will explain in the next section but storing hashes. At this point in the project, Adminer is no longer used to add user data to tables. Now it will be used if we need to rebuild the project and support future development.

**Security**

We wanted to look at the entire application from a security standpoint and focus on low-hanging issues that would raise the app's security. Upon reviewing the app, we found that in our earlier iteration that the way was handling our database calls were allowing SQL injection attack. Because we were using hard-coded URI's would make it difficult to extend in the future. In addition, we were storing passwords in plain text, which could prove very bad, particularly with the combination of the SQL injection. After our review, we knew we wanted to refactor how we interacted with the database and abstract the application's secrets simultaneously, making the application more adaptable to future changes. We also saw that our system was a single point of failure and wanted to implement multi-factor authentication through a test message.

For this assignment, the security requirement mostly had to do with SQL injection, so this became an apparent first issue to tackle. In class, we used Object Relational Mapping of the Python library SQLAlchemy to treat all augments from HTTP requests as text. Here we decided to take our solution one step further. We knew that we would need to write a test and wanted to leave the door open to extend the application's functionality in the future. We created a class that extended the SQLAlchemy class Model. We moved the decoration to the URI for the database location and the database credentials into a secret .env file hiding this sensitive data form or git repository. Then, we created a file called config.py to create a config object. Here, we pull our secrets from the .env file and add them as constants to the config object. Next, in api/\_\_init\_\_.py, we define the method create\_app that takes a config object and from which it initializes the flask app object and SQLAlchemy object. The config object abstracts the implementation details, and we can now override the base class to configure the application for different environments, such as testing or staging.

Now that we have abstracted the database details and can import the SQLAlchemy database instance throughout our application, we can abstract implementation details of the database tables by creating our class User by extending the SQLAlchemy class Model. In our file data\_model.py, we define our User class and specify class attributes that or of type SQLAlchemy.Column simultaneously gives them behaviors such as auto-incrementing the id column and enforcing that the username is unique. In addition, by allowing a better interface to interact with the database, we can now accomplish some of our security conserve. Our requirement to prevent SQL injections is now handled by each of our columns explicitly being defined as a type string. We also have defined with a decorator the field property, password, to be set using a setter that hashes password value and stores the hashed password.

To add one more level of security, we implemented multi-factor authentication, which sends a random pin to a user's phone number employing the service Twillio. Using the sms channel, we could send a message without knowing the token, then again use the service to check the pin. We implemented this in the file api/users/mfa.py so that we can refactor the implementation of both request\_verification\_token and check\_verification\_token to use a different service.

**Code Readability and Linting**

Now that we have a running application that meets the assignment's needs, we want to ensure that our code follows the calisthenics guidelines for Python. As languages go, Python is not a terrible language to lint because you need to use white space to scope code blocks. We used two tools: the Python formatter Black and PyLint. Black took care of all the special formatting, which also improved readability. Enabled PyLint and began work on addressing the errors. Any time I've enabled PyLint in a project, it always turns the project into an error Christmas, but this was a working application, and we had errors in just a few categories doc strings, imports, and catch statements that were not explicit.

Addressing the doc string is an important, not a difficult task. It concerns reviewing the code base and writing descriptive statements for a given object. We saw it as an excellent time to review the code base and ensure everything was necessary. On this note, I found that in our conftest file, we had written different functions that all returned different versions of a test client. I addressed this error by refactoring the test and deleting the redundant function. I am not used to writing to this standard, so doc strings were missing throughout the application. Each file, class, function, and method in the end needed and got a doc string.

In addition to doc strings, there were lint errors in our imports. We had some unused imports which needed to be deleted, and then in a few cases, we declared the import in the wrong order. Both were easy fixes. The final error we experienced was in the api/users/mfa.py where we wrapped an API call to send a text message as part of our MFA feature where we used Exception in our catch statement. PyLint viewed this as a base exception which we replaced with twilloio.base.exceptions.TwillioException which is more explisit. It turned out to be a better solution as there is a lot of good debugging information in the in the exception.

**Unit testing and Integration testing**

![](src/images/unit_test.png) ![](src/images/testing_file_structure.png)

_Unit and Integration Testing. Testing file structure_

To test our application, we created a combination of unit and integration tests to ensure that the application runs as expected. In the applications root directory, we created a new directory called tests in which we have the directory unit and integration to hold our test types. In all our tests, we tried to use a naming convention that began with the keyword test followed by the action we are testing to make future debugging as easy as possible. Following the recommendation in the Flask documentation on testing (_Testing Flask Applications — Flask Documentation (2.2.x)_, n.d.), it recommends using pytest, so we chose this method. While Pytest is based on the Python module, Unittest offers some usability advantages that will make our test easier to run, most notably using Pytest's fixtures (_Python Testing with pytest_, n.d.).

The feature of Pytest is the ability to create fixtures that can make the required resources to test our application in isolation(_Pytest: Helps You Write Better Programs — Pytest Documentation_, n.d.). To accomplish this, we created the file confest.py, in which we define all the data and, most importantly, create an instance of our application with a dummy database. Because we had refactored our application, we can create a flask\_app instance by passing a TestingConfig object to the create\_app function that returns a flask\_app instance, then instantiating the SQLAlchemy instance. In the TestingConfig object, the database URI is overridden to create an SQLite instance, allowing us to test the application in isolation.

In our unit test directory, we are testing the individual functions, which divided into there files test\_data\_model.py, test\_mfa.py, and test\_utill.py, which directly correspond to the files where the functions that we are testing are defined. We use Pytest fixtures in these cases to pass input data and expected results to each function. To reuse as many tests as possible, we use the pytest.mark.parametrize decorator to allow the same test to run multiple times with different arguments. When we came to test the function of data\_model.py and utils.py, we needed to change how the test was configured. The positive results were the same, but we want to ensure errors are raised when incorrect data is passed. ValueErrors in the case of unitls.py and IntegretyError in data\_model.py. To allow the function to raise errors and have the test return positive, add the decorator @pytest.mark.xfail. In the integration directory, our end-to-end tests employ the same method as the unit test, making parameterized HTTP calls to the client fixture and ensuring that the application returns the expected results. As noted in the security section, we are now using MFA to check user's identity on login. On these tests, we use unit test.mock.patch to catch calls before they exit the system.

**Conclusion and Next Steps**

There are three areas that we plan to focus on. The first is implementing a token-based authentication system when users perform CRUD operations on their data. We would like to implement JSON Web Token to accomplish this. We would also like to implement HTTPS using SSL/TSL certificate to encrypt the application communication with the client. This would also require us to use NGINX to forward the request to the application. Finally, we want to create a CI/CD deployment pipeline for the application using GitHub action. Implementing these changes, we would make the application.

**Reference**

_7. Creating a RESTful API: Flask_. (n.d.). Retrieved April 19, 2023, from [https://learning.oreilly.com/library/view/software-engineering-for/9781484266229/html/501322\_1\_En\_7\_Chapter.xhtml](https://learning.oreilly.com/library/view/software-engineering-for/9781484266229/html/501322_1_En_7_Chapter.xhtml)

_Add Two-Factor Authentication to a Python Flask Application with Twilio Verify_. (n.d.). Twilio Blog. Retrieved May 25, 2023, from [https://www.twilio.com/blog/add-two-factor-authentication-to-a-python-flask-application-with-twilio-verify](https://www.twilio.com/blog/add-two-factor-authentication-to-a-python-flask-application-with-twilio-verify)

TotallyNotChase. (n.d.). _flask-unittest: Unit testing flask applications made easy!_ (0.1.3) [Python; OS Independent]. Retrieved May 27, 2023, from [https://github.com/TotallyNotChase/flask-unittest](https://github.com/TotallyNotChase/flask-unittest)

Grinberg, M. (n.d.). _RESTful Authentication with Flask_. Retrieved May 30, 2023, from http://blog.miguelgrinberg.com/post/restful-authentication-with-flask

_Testing Flask Applications—Flask Documentation (1.1.x)_. (n.d.). Retrieved May 27, 2023, from [https://flask.palletsprojects.com/en/1.1.x/testing/](https://flask.palletsprojects.com/en/1.1.x/testing/)
`

const ColumnWrapper = styled.div`
    display: flex;
    flex-direction: row;
`;
const Column  = styled.div`
    flex: 1;
    padding: 16px;
    margin: 8ps;
`;
const MainColumn = styled.div`
    flex: 3;
    width: 66%;
    padding: 16px;
`;
const CS_504_report = () => (
    <ColumnWrapper> 
    <Column>
    <NavAside/>
    </Column>
  <MainColumn>
    <ReactMarkdown>
    {report}
    </ReactMarkdown>
  </MainColumn>
  </ColumnWrapper>
);

export default CS_504_report;