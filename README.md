# Set Up Your Express.js Project

- Ensure you have Node.js and npm (Node Package Manager) installed on your system. You can download and install them from the official website if you haven't already: [Node.js Downloads.](https://nodejs.org/en/download)

- Create a new directory for your Express.js project or navigate to an existing one in your terminal.

- Inside your project directory, initialize a new Node.js project by running:

```bash
npm init -y
```

This command will create a `package.json` file with default values.

## Install Express.js as a dependency for your project by running:

```bash
npm install express --save
```

This command installs Express.js and adds it to your project's dependencies.

## Define the dev Script

In your package.json file, you need to define the dev script, which specifies how to start your Express.js application with the development server. Open your `package.json` file and add the following code:

```json
"scripts": {
  "dev": "nodemon your-app.js"
}
```

Replace your-app.js with the actual name of your Express application's main JavaScript file (e.g., app.js or server.js).

## Install Nodemon (if not already installed)

Nodemon is a utility that monitors changes to your Node.js application and automatically restarts the server when files are modified. To install Nodemon, run:

```bash
npm install nodemon
```

This command installs Nodemon as a development dependency and adds it to your project's `package.json` under the devDependencies section.

## Start Your Express.js Application

To start your Express.js application using the npm run dev command, run the following in your terminal:

```bash
npm run dev
```

This command will start your Express.js application with Nodemon, and it will automatically restart the server whenever you make changes to your code, making it easier to develop and debug your application.

Now, you should be able to access your Express.js application in your web browser at the specified address (e.g., http://localhost:3000 if you haven't configured a different port).

# MongoDB Installation and Usage Guide

This guide will walk you through the installation of MongoDB, connecting to it using the MongoDB shell, and installing MongoDB Compass for easy database management.

## Step 1: Install MongoDB

To install MongoDB, follow these steps:

- Download the MongoDB `.deb` file for your system.
- Open your terminal and run the following command, replacing `<.deb file name>` with the actual name of the `.deb` file you downloaded:

  ```bash
  sudo dpkg -i <.deb file name>
  ```

## Step 2: Check MongoDB Status

To check the status of the MongoDB service, use the following command:

```bash
sudo systemctl status mongod
```

## Step 3: Connect to MongoDB Shell

To connect to MongoDB using the MongoDB shell, follow these steps:

- Open your terminal.
- Enter the following command to start the MongoDB shell:

```bash
mongosh
```

## Step 4: Interacting with MongoDB Shell

Once connected to the MongoDB shell, you can perform various database operations:

- To switch to another database, use:

```bash
use mydb
```

- To create a new collection (similar to a table in SQL) in the current database, use:

```bash
db.createCollection("Students")
```

- To insert data into a collection, use a command like:

```bash
To insert data into a collection, use a command like:
```

## Step 5: Install MongoDB Compass

MongoDB Compass is a GUI tool for managing MongoDB databases. To install it, follow these steps:

Download the MongoDB Compass `.deb` file for your system.

Open your terminal and run the following command, replacing `<mongodb-compass-file.deb>` with the actual name of the .deb file you downloaded:

```bash
sudo dpkg -i <mongodb-compass-file.deb>
```

That's it! You've successfully installed MongoDB, connected to it via the shell, and installed MongoDB Compass for easy database management.

For more information and advanced MongoDB features, refer to the [official MongoDB documentation.](https://www.mongodb.com/docs/)

# [Link to Postman Documentation](https://documenter.getpostman.com/view/17136337/2s9YJaYj18)
# country
