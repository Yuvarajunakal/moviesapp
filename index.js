import express from 'express';
import bodyparser from 'body-parser'
import mongoose  from 'mongoose';
import Movie from '../Backend/model/movies.js';
import cors from 'cors'


const app = express()

app.use(cors({
    origin:true
}))

app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended:true}))


await mongoose.connect("mongodb://0.0.0.0:27017/myDB",{useNewUrlParser:true, useUnifiedTopology:true}).then(()=>{
   console.log("connected to db")
})
.catch((err)=>{
    console.log(err)
})
app.get("/getmovies",(req,res)=>{
    Movie.find()
    .then((movie)=>{
        res.send(movie)
    })
    .catch((err)=>{
        console.log(err)
    })
})


    app.post("/movies", async (req,res)=>{
        try{
    const movie = await Movie.create({
        title:req.body.title,
        gener:req.body.gener,
        rating:req.body.rating,
        language:req.body.language
    })
}
catch(err){
    console.log(err)
}
    // console.log(movie)
    // res.send("movies added suucessfully")
 
// .then(()=>{
//     
// })
// .catch((err)=>{
//     console.log(err)
// })


})
app.put('/movie/:id',(req,res)=>{
    const id  =  req.params.id
    Movie.findByIdAndUpdate(id,{
        title:req.body.title,
        gener:req.body.gener,
        ratinf:req.body.rating,
        language:req.body.language
    })
    .then(()=>{
        console.log("updated")
    })
    .catch((err)=>{
        console.log(err)
    })
})
app.delete('/movie/:id',(req,res)=>{
    const id  =  req.params.id
    Movie.findByIdAndDelete(id)
  
    .then(()=>{
        console.log("yes yes")
    })
    .catch((err)=>{
        console.log(err)
    })
})

app.listen(4000,()=>{
    console.log("server running successfully")
})

