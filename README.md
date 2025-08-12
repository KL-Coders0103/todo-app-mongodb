# 📝 todo-app-mongodb

A robust full-stack web application for managing your tasks with priorities, built with Node.js, Express.js, and MongoDB.

## Table of Contents

- [📖 Table of Contents](#-table-of-contents)
- [💡 Project Overview](#-project-overview)
- [✨ Key Features](#-key-features)
- [🛠️ Technology Stack](#-technology-stack)
- [🚀 Quick Start](#-quick-start)
- [⚙️ Installation & Setup](#-installation-setup)
  - [1. Environment Variables](#1-environment-variables)
  - [2. Database Setup](#2-database-setup)
  - [3. Troubleshooting Common Issues](#3-troubleshooting-common-issues)
- [🎬 Usage Examples](#-usage-examples)
  - [1. Viewing All Tasks (Home Page)](#1-viewing-all-tasks-home-page-)
  - [2. Creating a New Task](#2-creating-a-new-task)
  - [3. Editing an Existing Task](#3-editing-an-existing-task)
  - [4. Deleting a Task](#4-deleting-a-task)
- [🔗 API Documentation](#-api-documentation)
  - [1. Get All Tasks](#1-get-all-tasks)
  - [2. Add New Task](#2-add-new-task)
  - [3. Edit Existing Task](#3-edit-existing-task)
  - [4. Delete Task](#4-delete-task)
- [📂 Project Structure](#-project-structure)
- [🔒 Configuration](#-configuration)
  - [Environment Variables](#environment-variables)
  - [Configuration File (`.env`)](#configuration-file-env-)
- [🧪 Testing](#-testing)

![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-blue?style=for-the-badge)
![EJS](https://img.shields.io/badge/EJS-blue?style=for-the-badge)
![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)
![Mongoose](https://img.shields.io/badge/Mongoose-blue?style=for-the-badge)
![HTML5](https://img.shields.io/badge/HTML5-blue?style=for-the-badge)
![CSS3](https://img.shields.io/badge/CSS3-blue?style=for-the-badge)
![dotenv](https://img.shields.io/badge/dotenv-blue?style=for-the-badge)
![CSS](https://img.shields.io/badge/CSS-blue?style=for-the-badge)

[![GitHub stars](https://img.shields.io/github/stars/todo-app-mongodb?style=social)](https://github.com/todo-app-mongodb/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/todo-app-mongodb?style=social)](https://github.com/todo-app-mongodb/network/members)
[![License: Not specified](https://img.shields.io/badge/License-Not%20specified-lightgrey.svg)](LICENSE)

---

## 📖 Table of Contents

*   [💡 Project Overview](#-project-overview)
*   [✨ Key Features](#-key-features)
*   [🛠️ Technology Stack](#️-technology-stack)
*   [🚀 Quick Start](#-quick-start)
*   [⚙️ Installation & Setup](#️-installation--setup)
*   [🎬 Usage Examples](#-usage-examples)
*   [🔗 API Documentation](#-api-documentation)
*   [📂 Project Structure](#-project-structure)
*   [🔒 Configuration](#-configuration)
*   [🧪 Testing](#-testing)
*   [☁️ Deployment](#️-deployment)
*   [⚡ Performance & Optimization](#-performance--optimization)
*   [🛡️ Security](#️-security)
*   [🐛 Troubleshooting](#-troubleshooting)
*   [📜 License & Acknowledgments](#-license--acknowledgments)
*   [🤝 Support & Community](#-support--community)

---

## 💡 Project Overview

The `todo-app-mongodb` is a practical, full-stack web application designed for efficient personal task management. It empowers users to effortlessly add, view, edit, and delete tasks, each with an assignable priority level: `low`, `medium`, or `high`. This application leverages the power of server-side rendering using EJS templates for a traditional web experience and ensures all your task data is persistently stored in a MongoDB database.

**Problem Solved:**
This project addresses the common need for a straightforward, persistent, and accessible way to manage daily tasks without relying on complex, feature-heavy applications. It provides a foundational solution for personal productivity.

**Target Audience & Use Cases:**
*   **Individuals:** Perfect for anyone seeking a simple, self-hosted web-based tool for personal task management. Keep track of your daily to-dos with clear priorities.
*   **Developers & Learners:** An excellent, practical, and self-contained full-stack example for those learning or solidifying their understanding of Node.js, Express.js, MongoDB, and EJS. It demonstrates a complete CRUD (Create, Read, Update, Delete) workflow with server-side rendering.

**Why it's Useful/Unique:**
This application stands out as a clear example of a traditional server-rendered web application. It showcases a robust backend built with Node.js and Express, connected to a NoSQL database (MongoDB) via Mongoose, and dynamically presenting data using EJS templates. Its simplicity makes it an ideal starting point for understanding full-stack web development fundamentals without the added complexity of client-side frameworks.

---

## ✨ Key Features

The `todo-app-mongodb` provides a comprehensive set of features to manage your tasks effectively:

*   **➕ Create Tasks:** Easily add new tasks with a descriptive title and assign a priority level (`low`, `medium`, `high`) to organize your workload.
*   **👁️ View All Tasks:** See all your existing tasks neatly displayed, sorted by their creation date with the newest tasks appearing first.
*   **✏️ Edit Existing Tasks:** Modify the title or priority of any task directly from the interface, ensuring your task list stays up-to-date.
*   **🗑️ Delete Tasks:** Remove completed or unwanted tasks with a client-side confirmation prompt, preventing accidental deletions.
*   **✅ Server-Side Validation:** Ensures data integrity by preventing tasks from being created or updated with empty titles.
*   **☁️ Persistent Data Storage:** All task data is reliably stored in a MongoDB database, ensuring your tasks are safe and accessible across sessions.
*   **🚀 Dynamic Rendering:** Utilizes EJS templates for efficient server-side rendering, providing a fast initial page load experience.
*   **📱 Basic Responsive UI:** Designed with a basic responsive structure (implied by CSS structure) to offer a usable experience across different screen sizes.

---

## 🛠️ Technology Stack

This project leverages a modern and efficient technology stack to deliver a robust full-stack web application:

*   **Backend Runtime:**
    *   ![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white): A JavaScript runtime built on Chrome's V8 JavaScript engine, chosen for its asynchronous, event-driven architecture, making it ideal for building scalable network applications.
*   **Web Framework:**
    *   ![Express.js](https://img.shields.io/badge/Express.js-blue?style=for-the-badge): A minimalist and flexible Node.js web application framework that provides a robust set of features for web and mobile applications. It simplifies routing, middleware integration, and API endpoint creation.
*   **Templating Engine:**
    *   ![EJS](https://img.shields.io/badge/EJS-blue?style=for-the-badge): (Embedded JavaScript) A simple templating language that lets you generate HTML markup with plain JavaScript. It's used here for server-side rendering, allowing dynamic content to be injected directly into HTML views before being sent to the client.
*   **Database:**
    *   ![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white): A popular NoSQL document database. Its flexible schema design is perfect for rapidly evolving data models like a ToDo list.
*   **Object Data Modeling (ODM):**
    *   ![Mongoose](https://img.shields.io/badge/Mongoose-blue?style=for-the-badge): An elegant MongoDB object modeling tool for Node.js. Mongoose makes it easy to define schemas, validate data, build queries, and manage relationships with MongoDB.
*   **Frontend:**
    *   ![HTML5](https://img.shields.io/badge/HTML5-blue?style=for-the-badge): The standard markup language for creating web pages and web applications.
    *   ![CSS3](https://img.shields.io/badge/CSS3-blue?style=for-the-badge): A stylesheet language used for describing the presentation of a document written in HTML. Provides styling for the user interface.
*   **Environment Variables:**
    *   ![dotenv](https://img.shields.io/badge/dotenv-blue?style=for-the-badge): A zero-dependency module that loads environment variables from a `.env` file into `process.env`. Essential for securely managing sensitive information like database connection strings.

**Code Architecture:**
The application adheres to a clear **Model-View-Controller (MVC)-like** architectural pattern, characteristic of many Express.js projects:

*   `index.js`: The main entry point. It initializes the Express application, establishes the MongoDB connection via Mongoose, and configures global middleware (body parsing, static file serving, EJS setup).
*   `routes/todos.js`: Acts as the **Controller** layer. It defines API endpoints for all CRUD operations on tasks, interacting directly with the `Task` model.
*   `models/Task.js`: Represents the **Model** layer. This file defines the Mongoose schema for tasks, enforcing data structure and validation rules for documents stored in MongoDB.
*   `views/`: Contains EJS templates (the **View** layer) for server-side rendering of dynamic HTML pages. This includes `index.ejs` for the main ToDo list and `partials/` for reusable components.
*   `public/`: Stores static assets like `css/style.css` which are served directly to the client.

This separation of concerns makes the codebase maintainable, scalable, and easy to understand for developers.

---

## 🚀 Quick Start

Get the `todo-app-mongodb` up and running on your local machine in minutes!

**Prerequisites:**

Before you begin, ensure you have the following installed:

*   **Node.js:** (LTS version recommended) [Download & Install](https://nodejs.org/en/download/)
*   **npm:** (Node Package Manager) Comes bundled with Node.js.
*   **A running MongoDB instance:**
    *   You can set up a local MongoDB server.
    *   **Recommended:** Use a cloud-hosted solution like [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) for ease of setup and persistent storage.

**Steps:**

1.  **Clone the repository:**
    ```bash
    git clone 
    ```
    (Replace `` with the actual URL of this GitHub repository.)

2.  **Navigate into the project directory:**
    ```bash
    cd todo-app-mongodb
    ```

3.  **Install project dependencies:**
    ```bash
    npm install
    ```

4.  **Create a `.env` file:**
    In the root directory of your project, create a new file named `.env`.

5.  **Add your MongoDB connection URI:**
    Open the `.env` file and add your MongoDB connection string in the following format. This string typically starts with `mongodb+srv://` for Atlas or `mongodb://` for local instances.
    ```
    MONGO_URI='YOUR_MONGODB_CONNECTION_STRING'
    ```
    *Example from MongoDB Atlas:* `MONGO_URI='mongodb+srv://:@cluster0.abcde.mongodb.net/todoapp?retryWrites=true&w=majority'`

6.  **Start the application:**
    ```bash
    npm start
    ```

7.  **Access the application:**
    Open your web browser and navigate to:
    ```
    http://localhost:5000
    ```
    You should now see the ToDo application running!

---

## ⚙️ Installation & Setup

This section provides more detailed instructions for setting up the `todo-app-mongodb` project.

### 1. Environment Variables

The application relies on environment variables for sensitive configuration, primarily your MongoDB connection string.

*   **`MONGO_URI`**: This is the full connection string required to connect to your MongoDB database.
    *   **Purpose:** Securely connect your application to your MongoDB instance without hardcoding credentials in your source code.
    *   **Example `.env` file:**
        ```dotenv
        # .env
        MONGO_URI='mongodb+srv://your_username:your_password@your_cluster_name.mongodb.net/todo_app_db?retryWrites=true&w=majority'
        ```
    *   **Where to get it:**
        *   **MongoDB Atlas:** Log in to your Atlas account, navigate to your cluster, click "Connect", select "Connect your application", choose Node.js driver, and copy the provided connection string. Remember to replace `` and `` with your actual database user credentials.
        *   **Local MongoDB:** If running locally, it might be `mongodb://localhost:27017/todo_app_db`.

### 2. Database Setup

The application automatically handles database schema creation (collections and indexes) via Mongoose when it connects to MongoDB for the first time. You do not need to manually create any collections. Ensure your MongoDB instance is accessible from where you are running the application.

### 3. Troubleshooting Common Issues

*   **`Error: MongooseServerSelectionError: connect ECONNREFUSED`**:
    *   **Cause:** The application cannot connect to your MongoDB instance.
    *   **Solution:**
        *   Double-check your `MONGO_URI` in the `.env` file. Ensure it's correct, including username, password, and cluster address.
        *   If using MongoDB Atlas, ensure your IP address is whitelisted in your Atlas project's Network Access settings.
        *   If running a local MongoDB, ensure your MongoDB service is running.
*   **`Error: Cannot find module '...'` or similar dependency errors**:
    *   **Cause:** Project dependencies were not installed correctly.
    *   **Solution:** Navigate to the project root and run `npm install` again.
*   **Application not accessible at `http://localhost:5000`**:
    *   **Cause:** The server might not be running, or another process is using port 5000.
    *   **Solution:** Check your terminal for any error messages after `npm start`. If the port is in use, you might see an `EADDRINUSE` error. You can change the port in `index.js` if needed (e.g., `app.listen(process.env.PORT || 3000)`).

---

## 🎬 Usage Examples

The `todo-app-mongodb` provides a straightforward user interface for managing your tasks. Here's how you can interact with the application:

### 1. Viewing All Tasks (Home Page)

Upon starting the application and navigating to `http://localhost:5000`, you will see the main ToDo list page. This page displays all existing tasks, sorted by their creation date (newest first).

**Conceptual EJS Snippet (from `views/index.ejs`):**

```ejs

     0) { %>
        
            ">
                
                ()
                
                    " class="edit-btn">Edit
                    " method="POST" onsubmit="return confirm('Are you sure you want to delete this task?');">
                        Delete
                    
                
            
        
    
        No tasks yet! Add one above.
    

```
*Expected Output:* A list of tasks, each showing its title, priority, and "Edit" / "Delete" buttons.

### 2. Creating a New Task

To add a new task, use the input field and priority dropdown on the main page.

1.  Enter your task title in the input box.
2.  Select a priority (`Low`, `Medium`, `High`) from the dropdown.
3.  Click the "Add Task" button.

The application will validate the title (must not be empty) and then add the task to the database, redirecting you back to the home page to see your new task.

**Conceptual Express Route (from `routes/todos.js`):**

```javascript
// routes/todos.js (simplified POST /add)
router.post('/add', async (req, res) => {
    const { title, priority } = req.body;

    if (!title || title.trim() === '') {
        // Simple error handling, redirect back with a message (not implemented in analysis, but common)
        return res.redirect('/'); // Or render page with error
    }

    try {
        const newTask = new Task({ title, priority });
        await newTask.save();
        res.redirect('/'); // Redirect to home page to see the new task
    } catch (err) {
        console.error(err);
        res.status(500).send('Error adding task.');
    }
});
```

### 3. Editing an Existing Task

To modify a task, click the "Edit" button next to the task you wish to change.

1.  Clicking "Edit" will likely take you to a dedicated edit page (e.g., `/edit/:id`) or open an inline edit form.
2.  Update the task title and/or priority.
3.  Submit the changes.

The application will update the task in the database and redirect you back to the main list.

**Conceptual Express Route (from `routes/todos.js`):**

```javascript
// routes/todos.js (simplified POST /edit/:id)
router.post('/edit/:id', async (req, res) => {
    const { id } = req.params;
    const { title, priority } = req.body;

    if (!title || title.trim() === '') {
        return res.redirect(`/edit/${id}`); // Or render edit page with error
    }

    try {
        await Task.findByIdAndUpdate(id, { title, priority }, { new: true, runValidators: true });
        res.redirect('/'); // Redirect to home page
    } catch (err) {
        console.error(err);
        res.status(500).send('Error updating task.');
    }
});
```

### 4. Deleting a Task

To remove a task, click the "Delete" button next to it.

1.  A client-side confirmation prompt (e.g., "Are you sure you want to delete this task?") will appear.
2.  Confirm the deletion.

The task will be removed from the database and the list.

**Conceptual Express Route (from `routes/todos.js`):**

```javascript
// routes/todos.js (simplified POST /delete/:id)
router.post('/delete/:id', async (req, res) => {
    const { id } = req.params;

    try {
        await Task.findByIdAndDelete(id);
        res.redirect('/'); // Redirect to home page
    } catch (err) {
        console.error(err);
        res.status(500).send('Error deleting task.');
    }
});
```

---

## 🔗 API Documentation

This application exposes a set of RESTful API endpoints primarily for its own server-side rendering, but they can be understood as core functionalities. All endpoints handle task management (CRUD operations).

**Base URL:** `http://localhost:5000` (or your deployed URL)

### 1. Get All Tasks

*   **Endpoint:** `/`
*   **Method:** `GET`
*   **Description:** Renders the main ToDo list page, fetching all tasks from the database.
*   **Request:** No parameters.
*   **Response:** Renders `views/index.ejs` with an array of task objects.
    ```html
    
    
    
    ...
    
        My ToDo List
        ...
        
            
                Buy groceries
                (Low)
                ...
            
            
                Finish project report
                (High)
                ...
            
            
        
    
    
    ```

### 2. Add New Task

*   **Endpoint:** `/add`
*   **Method:** `POST`
*   **Description:** Creates a new task in the database based on form submission.
*   **Request Body (Form Data):**
    *   `title` (String, required): The title of the new task.
    *   `priority` (String, required): The priority level (`Low`, `Medium`, or `High`).
*   **Response:**
    *   `302 Redirect`: On successful creation, redirects to `/`.
    *   `500 Internal Server Error`: If there's a database error.
    *   (Implicit validation) If `title` is empty, it redirects back to `/` without creating the task.

### 3. Edit Existing Task

*   **Endpoint:** `/edit/:id`
*   **Method:** `POST`
*   **Description:** Updates an existing task's title and/or priority.
*   **URL Parameters:**
    *   `id` (String, required): The MongoDB `_id` of the task to be updated.
*   **Request Body (Form Data):**
    *   `title` (String, required): The new title for the task.
    *   `priority` (String, required): The new priority level.
*   **Response:**
    *   `302 Redirect`: On successful update, redirects to `/`.
    *   `500 Internal Server Error`: If the task is not found or a database error occurs.
    *   (Implicit validation) If `title` is empty, it redirects back to `/edit/:id` without updating.

### 4. Delete Task

*   **Endpoint:** `/delete/:id`
*   **Method:** `POST`
*   **Description:** Deletes a task from the database.
*   **URL Parameters:**
    *   `id` (String, required): The MongoDB `_id` of the task to be deleted.
*   **Request:** No request body.
*   **Response:**
    *   `302 Redirect`: On successful deletion, redirects to `/`.
    *   `500 Internal Server Error`: If the task is not found or a database error occurs.

---

## 📂 Project Structure

The `todo-app-mongodb` project adheres to a clear and logical directory structure for enhanced clarity and maintainability:

```
todo-app-mongodb/
├── .env                  # Environment variables (e.g., MONGO_URI)
├── .gitignore            # Specifies intentionally untracked files to ignore
├── index.js              # Main application entry point (Express app, DB connection)
├── package.json          # Project metadata and dependency list
├── package-lock.json     # Records the exact versions of dependencies
├── README.md             # This comprehensive guide
├── models/
│   └── Task.js           # Mongoose schema definition for the Task model
├── public/
│   └── css/
│       └── style.css     # Stylesheets for the user interface
├── routes/
│   └── todos.js          # Defines all API routes for ToDo CRUD operations
└── views/
    ├── index.ejs         # EJS template for the main ToDo list page
    └── partials/
        ├── footer.ejs    # Reusable EJS partial for the page footer
        └── header.ejs    # Reusable EJS partial for the page header
```

**Key Files and Their Purposes:**

*   `index.js`: This is the heart of the application. It's responsible for setting up the Express server, connecting to MongoDB using Mongoose, configuring middleware (like `body-parser` and `express.static`), and defining the main routes.
*   `models/Task.js`: Defines the structure and validation rules for a "Task" document in the MongoDB database using Mongoose schemas. This ensures data consistency.
*   `public/css/style.css`: Contains all the CSS rules that style the appearance of the ToDo application, from layout to component styling.
*   `routes/todos.js`: Centralizes all the backend logic for handling HTTP requests related to tasks (adding, viewing, editing, deleting). It acts as the controller, processing requests and interacting with the `Task` model.
*   `views/`: Houses the EJS (Embedded JavaScript) template files. These files are rendered on the server to generate dynamic HTML content that is then sent to the client's browser. `index.ejs` is the primary view, and `partials/` contain reusable snippets like headers and footers to promote code reusability.

---

## 🔒 Configuration

The `todo-app-mongodb` project primarily uses environment variables for its configuration, managed by the `dotenv` package. This approach ensures that sensitive information is kept out of the source code and can be easily managed across different deployment environments.

### Environment Variables

The following environment variable is crucial for the application's operation:

*   **`MONGO_URI`**
    *   **Description:** The full connection string required to establish a connection to your MongoDB database instance. This string includes the protocol, authentication credentials (username and password), the cluster/host address, and optionally the database name and connection options.
    *   **Example Value:** `mongodb+srv://user:password@cluster.mongodb.net/todoapp?retryWrites=true&w=majority`
    *   **Usage:** The application reads this variable from the `.env` file (in development) or from the environment (in production) to connect to MongoDB.

### Configuration File (`.env`)

During local development, you will create a `.env` file in the root directory of your project to store these variables.

**Example `.env` content:**

```dotenv
# .env
# MongoDB Connection URI
# Replace , , and  with your actual MongoDB Atlas credentials
MONGO_URI='mongodb+srv://:@.mongodb.net/todo_app_db?retryWrites=true&w=majority'
```

**Security Considerations for Configuration:**

*   **Never commit your `.env` file to version control (Git)!** The `.gitignore` file is already configured to ignore `.env` to prevent accidental commits of sensitive data.
*   **Use strong, unique passwords** for your database users.
*   **Restrict database user permissions** to only what the application needs (e.g., read/write on the `todo_app_db` database).
*   **For production deployments**, configure environment variables directly on your hosting platform (e.g., Render.com, Heroku, AWS Elastic Beanstalk) rather than relying on a `.env` file. This is more secure and scalable.

---

## 🧪 Testing

This project currently **does not include any automated tests**.

*   **Has Tests:** No
*   **Testing Frameworks:** None

**Future Considerations:**
For a production-ready application, implementing a testing strategy is highly recommended. You might consider:
*   **Unit Tests:** Using frameworks like `Mocha` or `Jest` to test individual functions, models (e.g., `models/Task.js` schema validation), and utility functions.
*   **Integration Tests:** Testing the interaction between different