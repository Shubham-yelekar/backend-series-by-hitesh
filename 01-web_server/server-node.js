// Import the 'http' module to create an HTTP server
const http = require("http");

// Define the hostname and port for the server
const hostname = "127.0.0.1"; // Localhost address
const port = 3000; // Port number where the server will listen

// Create an HTTP server
const server = http.createServer((request, response) => {
  // Check the URL of the incoming request
  if (request.url === "/") {
    // Handle the root route ('/') with a 200 status code and plain text response
    response.statusCode = 200;
    response.setHeader("Content-Type", "text/plain");
    response.end("home"); // Send 'home' as the response
  } else if (request.url === "/profile") {
    // Handle the '/profile' route with a 200 status code and plain text response
    response.statusCode = 200;
    response.setHeader("Content-Type", "text/plain");
    response.end("Your profile"); // Send 'Your profile' as the response
  } else {
    // Handle all other routes with a 404 status code and plain text response
    response.statusCode = 404;
    response.setHeader("Content-Type", "text/plain");
    response.end("404 not found"); // Send '404 not found' as the response
  }
});
// Start the server and listen on the specified hostname and port
server.listen(port, hostname, () => {
  // Log a message to the console when the server starts successfully
  console.log(`💻 server is listening at http://${hostname}:${port}`);
});
