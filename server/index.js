const express = require("express");
const con =require('../server/database/index.js')
const path = require('path');
const app = express();
const port = 5000;
const cors =require ('cors');
app.use(cors());
app.use(express.json())
app.use(express.static(path.join(__dirname, '..', 'public')));
app.get("/api/cars",(req,res)=>{
   const cb=(err,results)=>{
   if(err) res.status(500).send(err)
   else res.json(results)
  }
  con.getAll(cb)
  })
  app.get("/api/cars/:name", (req, res) => {
    const name = req.params.name;
    console.log(name);
    const cb = (err, results) => {
      if (err) res.status(409).send(err);
    
      else res.status(200).json(results);
    };
    con.getOne(name, cb);
  });
  
 app.post("/api/cars",(req,res)=>{
    const cb=(err,results)=>{
        if(err) res.status(404).send(err)
        else res.status(201).json(results)
       }
       con.add(req.body,cb)
 }) 
 app.delete("/api/cars/:id",(req,res)=>{
    const cb=(err,results)=>{
        if(err) res.status(404).send(err)
        else res.status(204).json(results)
       }
    con.deleteCar(req.params.id,cb)})

    app.put("/api/cars/:id",(req,res)=>{
        console.log(req.body)
    const cb=(err,results)=>{
        if(err) res.status(404).send(err)
        else res.status(201).json(results)
       }
    con.edit(req.body,req.params.id,cb)})  


  app.listen(port, () => {
    console.log(`Express app listening on port http://localhost:${port}`);
  });
  


