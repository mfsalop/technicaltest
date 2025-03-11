const request = require('supertest');
const baseUrl = 'https://api.argentinadatos.com';  // Base URL of the API

describe('API Test with Supertest - Holidays', () => {
  it('should return status 200 ', async () => {
    const year = 2025;  // You can change the year to get holidays for other years

    const response = await request(baseUrl)  // Use the base URL
      .get(`/v1/feriados/${year}`)  // Replace the year in the URL dynamically
      .redirects(10);  // Automatically follow up to 10 redirects

    // Check the status code after redirection
    console.log(response.status);  // To log the final status code
    console.log(response.headers.location);  // To log the redirect URL (if any)

    // Ensure we received a successful response (200 status)
    expect(response.status).toBe(200);  // Ensure the request was successful
  });
});
