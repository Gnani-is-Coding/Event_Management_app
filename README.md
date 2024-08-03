# Event_Management_App Documentation

This README provides an overview of the available endpoints for the Event API and a basic overview on Frontend.

## Backend deployed at 
  ``` https://event-management-app-4f0u.onrender.com ```

## To run this app locally, clone this repo and route to ./backend 
- "npm install" dependencies
-  Use the command "npm start" to start Node server locally at http://localhost:3000/

##  Authentication

Most endpoints require authentication. Include the JWT token in the `Authorization` header as a Bearer token.

## Endpoints

### User Management

#### Register User
- **URL:** `/auth/register`
- **Method:** POST
- **Description:** Register a new user
- **Body:**
  ```json
  {
    "name": "User Name",
    "email": "user@example.com",
    "password": "password"
  }
  ```

#### Login
- **URL:** `/auth/login`
- **Method:** POST
- **Description:** Authenticate a user and receive a JWT token
- **Body:**
  ```json
  {
    "email": "user@example.com",
    "password": "password"
  }
  ```

#### Logout
- **URL:** `/auth/logout`
- **Method:** POST
- **Description:** Log out the current user
- **Authentication:** Required
- **Body:**
  ```json
  {
    "sessionId": "session-id-here"
  }
  ```

#### Update User
- **URL:** `/user/`
- **Method:** PUT
- **Description:** Update user information
- **Authentication:** Required
- **Body:**
  ```json
  {
    "name": "Updated Name"
  }
  ```

### Event Management

#### Get All Events
- **URL:** `/events/`
- **Method:** GET
- **Description:** Retrieve all events
- **Authentication:** Required

#### Create Event
- **URL:** `/events/`
- **Method:** POST
- **Description:** Create a new event
- **Authentication:** Required
- **Body:**
  ```json
  {
    "title": "Event Title",
    "date": "Event Date",
    "location": "Event Location",
    "description": "Event Description"
  }
  ```

#### Update Event
- **URL:** `/events/:eventId`
- **Method:** PUT
- **Description:** Update an existing event
- **Authentication:** Required
- **Body:**
  ```json
  {
    "description": "Updated Event Description"
  }
  ```

### Session Management

#### Get All Sessions
- **URL:** `/sessions/`
- **Method:** GET
- **Description:** Retrieve all sessions for the authenticated user
- **Authentication:** Required

## Note

This API is deployed and running live at `https://event-management-app-4f0u.onrender.com/`. Make sure to wait for 60 seconds as the initial request takes time.


#Frontend 
Frontend is a basic react application

To run Frontend Locally, 
- **go to directory ./frontend
- install dependencies, npm install
  
```
  npm start
```
- **Will start app, locally in port 3000.

