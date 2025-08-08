const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const User = require('./models/User');
const app = express();
const PORT = 3000;
const blogRoutes = require('./routes/blogRoutes')
const userRoutes = require("./routes/userRoutes")
app.use(cors());
app.use(bodyParser.json());





const mongoURI = "mongodb://localhost:27017/Blog-App-Databases"


    mongoose.connect(mongoURI);
    const db = mongoose.connection;
    let con = false;

    db.on('error',(err)=>{
        console.log("mongoose erorr: ", err)
    })

    db.once('open',()=>{
      console.log('Mongo DB Connected using Moongoose');
      con = true;

      app.use("/api",blogRoutes);
      app.use("/api",blogRoutes);
      app.use("/api/user", userRoutes);

      app.listen(PORT, () => {
        console.log(`Server running at http://localhost:${PORT}`);
      });

    }) 




app.get('/api/hello', (req, res) => {
  const response = {
    message: 'Hello from Node.js backend!'
  }
  
    response.message = "Mongo Db Connected using moongose"

  res.json(response);
});


app.post("/api/hello", async (req,res)=>{
  const {action,data} = req.body;
  console.log(req.body);
  try{
    switch(action){
      case 'read': {
         const username = data.username;
         const password = data.password;
        const user = await User.findOne({username});
     // const alluser = await User.find();
      if(!user){
        return res.status(401).json({message: "Invalid Naam hai bidu"})
      }

      if(user.password !== password){
        return res.status(401).json({message: "Invalid Password"})
      }

      return res.status(200).json({message: "Login Successfull"})
    }

    case 'create':{
      const newuser = new User({
          firstname: data.firstname,
          lastname: data.lastname,
          gender: data.gender,
          dob: data.dob,
          address: data.address,
          username: data.username,
          email: data.email,
          password: data.password,
      })
      await newuser.save()
      return res.status(201).json({ message: 'User created' });
    }
    }
  }catch(err){
      console,log("Erroe in conseole",err)
      res.status(500).json({error: "Something Went Wrong"})
  }

})





