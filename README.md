README
# technicaltest
Hi there, I’m Mafe, and this is my solution to the technical test. Below is the information you need to run the test on your side.

Prerequisites

Before getting started, make sure you have the following installed:

Node.js (>= v14)
Steps to Run the Test

1. Clone the Repository
First, clone the repository to your local machine:

git clone https://github.com/mfsalop/technicaltest.git

2. Install Dependencies
Install the required dependencies. You can cross-reference these with the package.json file:

cypress (>= v14.1.0)
cypress-mochawesome-reporter (>= v3.8.2)
supertest (>= v7.0.0)
dotenv (>= v16.4.7)

3. Verify Cypress installation
To ensure Cypress is installed correctly, you can run the following command:
npx cypress open

4. Run Cypress in headless mode (CI-friendly)
You can run Cypress tests in the terminal (headless mode) by running:
npx cypress run

5. Open report
At the end of the testing a report will be generate, open the report locating the file in your project directory. 


