# Todo DevOps Demo

A small Todo REST API built to demonstrate the basic ideas behind DevOps, CI/CD, backend hosting, environment variables, and secret management.

The application itself is intentionally simple. The main purpose of this project is to show what happens to an application after a developer writes code and pushes it to GitHub.

## What This Project Demonstrates

- Node.js and Express REST API
- Git and GitHub for source control
- Continuous Integration with GitHub Actions
- Automated testing with Jest
- Continuous Deployment to Render
- Backend hosting
- Environment variable management
- Secret management with GitHub Secrets

## Tech Stack

- Node.js
- Express
- Jest
- Supertest
- GitHub
- GitHub Actions
- Render

## Project Structure

todo-devops-demo/
├── src/
│ ├── app.js
│ └── server.js
├── test/
│ └── app.test.js
├── .github/
│ └── workflows/
│ └── ci.yml
├── .env
├── .gitignore
├── package.json
└── README.md

## Running Locally

Clone the repository:

    git clone https://github.com/siraw21/todo-devops-demo.git
    cd todo-devops-demo

Install dependencies:

    npm install

Create a `.env` file:

    APP_NAME=Todo DevOps API
    PORT=3000
    API_SECRET=your-secret

Start the server:

    npm start

The API will be available at:

    http://localhost:3000

## API Endpoints

### Get Application Information

    GET /

Example response:

    {
      "message": "Todo DevOps API"
    }

### Get All Todos

    GET /todos

### Create a Todo

    POST /todos

Example request:

    {
      "title": "Learn DevOps"
    }

### Health Check

    GET /health

Example response:

    {
      "status": "OK"
    }

## Testing

Run the tests locally:

    npm test

The same tests are automatically executed by GitHub Actions when changes are pushed to the `main` branch or when a pull request targets `main`.

## CI/CD Pipeline

The project uses GitHub Actions for Continuous Integration and automated deployment to Render.

The general flow is:

    Developer
        |
        | git push
        v
      GitHub
        |
        v
    GitHub Actions
        |
        +--> Install dependencies
        |
        +--> Run tests
        |
        +--> Deploy
               |
               v
             Render
               |
               v
           Live API

### Continuous Integration

CI automatically checks whether new code works correctly.

The workflow:

1. Checks out the repository.
2. Sets up Node.js.
3. Installs dependencies.
4. Runs the tests.

If the tests fail, the deployment does not continue.

### Continuous Deployment

After the CI tests pass, the deployment job triggers a Render deployment.

This allows a successful change to move from:

    Code → Test → Deploy → Production

without manually deploying the application.

## Environment Variables

Application configuration is kept outside the source code.

For example:

    APP_NAME=Todo DevOps API
    PORT=3000

The application reads these values using:

    process.env.APP_NAME

This allows different environments to use different configuration without changing the source code.

For example:

    Local:
    APP_NAME=Todo DevOps API

    Production:
    APP_NAME=Todo API Production

## Secret Management

Sensitive values should not be committed to GitHub.

The `.env` file is excluded using `.gitignore`:

    .env

Deployment-related secrets, such as the Render Deploy Hook, are stored in GitHub Secrets.

The workflow accesses the secret using:

    ${{ secrets.RENDER_DEPLOY_HOOK }}

This keeps sensitive information out of the repository and source code.

## Why the Todo App Is So Simple

The Todo API is intentionally minimal.

The goal of this project is not to build a complete Todo application. It is to make the DevOps process easy to understand:

    Write code
        ↓
    Push to GitHub
        ↓
    Run automated tests
        ↓
    Deploy automatically
        ↓
    Run the backend in the cloud

The application is simply the vehicle used to demonstrate that process.

## Key Takeaways

### CI

Automatically verify code changes.

### CD

Automatically deliver validated code to the deployment environment.

### Environment Variables

Keep application configuration outside the source code.

### Secrets

Keep sensitive values protected instead of committing them to GitHub.

### Backend Hosting

Run the application on a remote server so it can be accessed through the internet.

---

This project was built as a simple practical demonstration of the DevOps workflow rather than as a production-ready Todo application.
