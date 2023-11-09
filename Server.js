 const express = require('express');
 const cors = require('cors');

 const appRoute = require('./routes/routes.js')

 const app = express();
 const PORT = process.env.PORT || 5000;
app.use(cors({origin:true}))
 app.use(express.json());

 //routes
 app.use(`/`, appRoute)

 app.listen(PORT, () =>{
    console.log(`Server is running on http://localhost:${PORT} `)
 })