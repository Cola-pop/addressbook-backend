# Address Book Mini-Project

This project was made by Hrag Harabetian.

## GitHub repositories

[Frontend](https://github.com/Cola-pop/addressbook-frontend) repository.

[Backend](https://github.com/Cola-pop/addressbook-backend) repository.

## Available Scripts

In the project directory, you can run:

### `npm start`

Make sure you install dependencies first using:

### `npm i`

Runs the app in the development mode.

## Note

The database has been created on the MongoDB Atlas (for free), in order to avoid local DB issues. In case the need arises to use a local one, simply configure the environment variable (in .env which is kept outside .gitignore) and replace it with the link to your local DB; default is as follows:

### `mongodb://localhost:27017/AddressBook`

The server's port can also be configured as it is stored in the .env file.

**Note that by changing the server's port, you'll also have to change it in the frontend configuration, specifically in the constants file.**
