import express from 'express';

const app = express();
const PORT = 4000;

//Create a route that sends a response to the client
app.get('/', (req, res) => {
  res.send(data);
});



//creat a delete route that deletes EVERYTHNG
app.delete('/', (req, res) => {
    res.send('EVERYTHING DELETED');
    });


//create a put route that updates the data
app.put('/', (req, res) => {
    res.send('Data updated');
    }   );

    app.post('/', (req, res) => {
        res.send('Data updated');
        }   );










app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    });
