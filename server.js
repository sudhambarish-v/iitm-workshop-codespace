// Import the express module
const express = require('express');

// Create an instance of the express app
const app = express();

// Define a simple GET route
app.get('/data', (req, res) => {
  // Return some JSON data when the /data route is accessed
  res.json({
    message: 'Hello, this is your data!',
    data: {
      id: 1,
      name: 'Sample Data',
      description: 'This is just an example.'
    }
  });
});

// Define a port to listen on
const port = 3000;

// Start the server and listen for incoming requests
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
