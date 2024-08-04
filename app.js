import express from 'express';
import helmet from 'helmet';

const app = express();
const PORT = 4000;

//Create a route that sends a response to the client
app.get('/', (req, res) => {
  res.send(data);
});



//creat a delete route that deletes data
app.delete('/', (req, res)=>{
    res.send(data)
})



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
