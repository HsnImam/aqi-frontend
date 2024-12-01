# React Frontend Setup

This guide will help you set up and run the React frontend locally.

## Prerequisites

Before running the project, make sure you have the following installed on your local machine:

- **Node.js** (version >= 14.x)
- **npm** (Node package manager, comes with Node.js)

## Clone the Repository

Clone the React project repository to your local machine:

```bash
git clone https://github.com/your-repository/aqi-frontend.git
cd aqi-frontend
```
## Install Dependencies
Once you have cloned the repository, you need to install the required dependencies. Run the following command:

```bash
npm install
```

This will install all the necessary dependencies listed in the package.json file.

## Set Up Environment Variables
If your React app requires environment-specific variables (e.g., API keys, base URLs), you should create a .env file.

Copy the .env.sample file to create your .env file:

```bash
cp .env.sample .env
```

## Run the Application
To run the application locally in development mode, use the following command:
```bash
npm start
```

This will start the React development server, and the application will be available at:
```
http://localhost:3000
```
The development server will automatically reload when you make changes to the code.