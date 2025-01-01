const express = require('express');
const app = express();
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  // ... some database operation to fetch user data based on userId ...
  if (!userData) {
    return res.status(404).send('User not found');
  }
  res.send(userData);
});
app.get('/users', async (req, res) => {
  try {
    // ... some database operation to fetch all user data ...
    res.send(allUsersData);
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).send('Failed to fetch users');
  }
});
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});