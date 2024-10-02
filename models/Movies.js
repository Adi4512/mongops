import mongoose from "mongoose";

//define schemas

const movieSchema=new mongoose.Schema({
    name    : {type : String , required : true , trim:true},
    rating  : {type : Number , required : true, min:1 ,max:5},
    money   : {
        type     : mongoose.Decimal128,
        requried : true,
        validate : (v) => v >= 10
    },
    genre   : {type : Array},
    isActive : {type : Boolean},
    Comments : [
        {value:{type : String},published : {type : Date, default: Date.now}}
    ],
});

//creating Model

const MovieModel=new mongoose.model("Movie",movieSchema);  //"Movies" will be collection name and will be automatically converted to movies.

//inserting data

const createDoc= async ()=>{
    try {
        const m1= new MovieModel({
             name: "Scarface",
             rating : 5,
             money: 19000000,
             genre : ['action','crime','thriller'],
             isActive : true,
             Comments : [{value :'One of the best thriller movie i have seen'}]
         })
        const m2= new MovieModel({
             name: "God father - trilogy",
             rating : 5,
             money: 8900000,
             genre : ['action','crime','thriller','family','mafia'],
             isActive : true,
             Comments : [{value :'GOAT movie'}]
         })
        const m3= new MovieModel({
             name: "Enemy",
             rating : 3,
             money: 983213,
             genre : ['mystery','crime','thriller','philosophy'],
             isActive : true,
             Comments : [{value :'the ending is fucking awesome'}]
         })
        const m4= new MovieModel({
             name: "BeeKeeper",
             rating : 3,
             money: 1123000,
             genre : ['action','thriller','fight'],
             isActive : true,
             Comments : [{value :'fab,amazing,wow'}]
         })
        const m5= new MovieModel({
             name: "body Double",
             rating : 4,
             money: 1540000,
             genre : ['action','crime'],
             isActive : true,
             Comments : [{value :'wow'}]
         })
        const m6= new MovieModel({
             name: "tumbad",
             rating : 4,
             money: 1200000,
             genre : ['action','crime','thriller'],
             isActive : true,
             Comments : [{value :'best movie i have seen'}]
         })
       // const result=await MovieModel.insertMany([m2,m3,m4,m5,m6]);
        console.clear();
        const alldoc=await MovieModel.find();
        alldoc.map((m)=>{
            console.log(m.name)
        })
        

    } catch (error) {
        console.log(error);
    }
}



export {createDoc};