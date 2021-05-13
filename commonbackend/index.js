const express = require('express')

// import mongoDb configuration file //
//const connectDB = require('./mongoDb')//

const app = express();
app.use(express.json())
//To connect mongo db  databases//
    // connectDB();//

app.get('/', (req,res)=> res.send('API Running'));

//Define routes
app.use('/api/users',require('./routes/api/users') )
app.use('/api/auth',require('./routes/api/auth') )
app.use('/api/posts',require('./routes/api/post') )
app.use('/api/profile',require('./routes/api/profile') )
const PORT = process.env.PORT || 5000;

app.listen(PORT, ()=> console.log(`Server started on port ${PORT}`))