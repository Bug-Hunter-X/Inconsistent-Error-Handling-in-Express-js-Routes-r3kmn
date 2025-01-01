const express = require('express');
const app = express();
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  // ... some database operation to fetch user data based on userId ...
  if (!userData) {
    return res.status(404).send('User not found'); // Correctly handles the case
  }
  res.send(userData); 
});
app.get('/users', (req, res) => {
  // ... some database operation to fetch all user data ...
  if (err) { // Missing error handling in this route
    console.error('Error fetching users:', err); // Logs error to the console
    return res.status(500).send('Server error'); // Sends 500 to the client
  }
  res.send(allUsersData); 
});
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});