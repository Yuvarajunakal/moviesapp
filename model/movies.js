import mongoose from "mongoose";

const movieschema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    gener:{
        type:String,
        required:true
    },
    language:{
        type:String,
        required:true

    },
    rating:{
        type:String,
        required:true
    }
})

const Movie = mongoose.model("Movie",movieschema)

export default Movie;