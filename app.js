import express from 'express';

const app = express();
const PORT = 3000;

//Create a route that sends a response to the client
app.get('/', (req, res) => {
  res.send('Hello World');
});



//creat a delete route that deletes EVERYTHNG
app.delete('/', (req, res) => {
    res.send('EVERYTHING DELETED');
    });

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    });
