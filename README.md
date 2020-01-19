# MEDIUM READER

## Table of contents
- [Introduction](#introduction)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [References](#references)

## Introduction
This is a Node.js API meant to consume Medium's API to retrieve a Medium user details and their list of articles.

## Prerequisites
Before running this app on your local machine, ensure you have the following setup already on your machine.
1. [Node.js](https://nodejs.org/en/download/package-manager/) - At least -v `10.16.0`. See below for instructions on how to set this up
2. Yarn - Install it with NPM if you're already have it: `sudo npm -g install yarn`
3. Setup Medium API. See below for more info
4. [NVM](https://gist.github.com/d2s/372b5943bce17b964a79)
5. [Ngrok](https://ngrok.com/) - create an account first, then download the CLI [here](https://ngrok.com/download).

**Using the correct version of Node for this project**

With [Node Version Manager](), NVM, it's possible to change the version of Node.js in your computer as your project(s) demand(s).

If you don't have a later version of Node than `-v 10.16.0`, then install it with NVM:
```sh
# install version 10.16.0
nvm install 10.16.0

# then inside this project, set it as default:
nvm use 10.16.0

# confirm this worked with:
nvm current
```

**Setting up App on Medium**

Ensure you have an account on [Medium](https://medium.com/) before starting up. Head over to the your Medium settings page and follow the following steps:

1. Click on `Integration Tokens` and enter a `description for your token` then click on `Get integration Token`. Copy that token and save it in a `.env` file in this project as `MEDIUM_ACCESS_TOKEN`.
2. Click on `Developers`, then `Manage Applications`. Click on `New application`. Enter a valid name and description and fill in Callback URL as `https://www.google.com/` for now. We'll update this starting the Dev server below under [Installation](#installation).


## Installation
After setting all the above tools locally, then follow these instructions carefully to get the application running on your PC.

1. ***Clone the repo***
```sh
# via ssh
git clone git@github.com:Harrisonkamau/medium-reader.git

# or via https
git clone https://github.com/Harrisonkamau/medium-reader.git
```
2. ***Install application dependencies***
```sh
yarn install
```

3. **Run Dev server**

Ensure you have `.env` file with the following ENV vars
```sh
# sample .env
MEDIUM_CLIENT_ID="YOUR_CLIENT_ID_FROM_MEDIUM"
MEDIUM_CLIENT_SECRET="YOUR_CLIENT_SECRET_FROM_MEDIUM"
MEDIUM_ACCESS_TOKEN="YOUR_CLIENT_SECRET_FROM_MEDIUM"
```

Start the server with: `yarn dev` and leave it running.

4. **Run Ngrok**

After the Node server starts up successfully above, a new terminal window or tab and run `ngrok http 4000`. This will generate a list of urls. Grab the one with a `https` and go back to [Medium Applications page](https://medium.com/me/applications) to update the application's Callback URL.

Check your terminal to see if there any logs from Medium. Happy coding!

**NOTE**

To see the `async/await` version of this API, switch to [develop](https://github.com/Harrisonkamau/medium-reader/tree/develop) branch.

## References
- [Medium Developers Page](https://github.com/Medium/medium-api-docs)
- [Node config](https://github.com/lorenwest/node-config)

## Contacts
- If you after following this documentation you still have trouble setting this project up, then feel free to ping me via [email](kamauharrison87@gmail.com) or reach me on [twitter](https://twitter.com/ChegeHarrison).


[Back to Top](#medium-reader)
