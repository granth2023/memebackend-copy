
import express from 'express'
import mongoose from 'mongoose'
import routes from './Routes/firstRoutes.js'
// Database and data
import db from './DB/connection.js'
import cors from 'cors'

// import {submissionsData} from '../mememaker_backend/DB/newfirstseed.js'
// import {createMemesJSON} from './DB/newfirstseed.js'
app.use(cors())

const app = express()

const port = 2000
//comment 
//2nd comment

//import datas from '../mememaker_backend/Data/datas.json' assert {type: 'json'}


// db.on('connected', async () => {
//   console.log(`Connected to MongoDB ${db.name} at ${db.host}:${db.port}`);
// createMemesJSON()
// .then((response) => {
//   console.log('Memes created successfully:', response);
// })
  // submissionsData()
  //       .then((response)=> {
  //         console.log('Submissions created successfully: ', response)
  //       })
    
// })

//why does the folder come up as tests and datas? also why on compass. 
//need routes, controllers, second model, then i need all front end. 

app.use(express.json());

// Routes
app.use('/api', routes);

// app.listen(port, () => {
//     console.log(`Server is listening on port ${port}`);
//   });


export default app 