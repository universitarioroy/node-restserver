require('./config/config');
const express = require ('express');
const app = express();
const bodyParser = require('body-parser');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));//midleware
 
// parse application/json
app.use(bodyParser.json());//midleware
 

app.get('/usuario',(req,res)=>{
    //res.send('hello world');html
    //json  
    res.json('get usuario');

})

app.post('/usuario',(req,res)=>{
    //res.send('hello world');html
    //json
    let body = req.body;  
   if(body.nombre===undefined){
        res.status(400).json({
                ok:false,    
                msg:'El nombre  es necesario'

        });
   }else{
        
        res.json({body});   
   }
    
})

app.delete('/usuario',(req,res)=>{
    //res.send('hello world');html
    //json  
    res.json('delete usuario');

})

app.put('/usuario/:id',(req,res)=>{
    //res.send('hello world');html
    //json  
    let id=req.params.id;
    res.json({
        id
    });

})
app.listen(process.env.PORT,()=>{
    console.log('Escuchando el puerto:',process.env.PORT);
});
