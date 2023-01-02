import express from 'express'
import {json} from 'body-parser'

const app=express()
app.use(json())

console.log('entered API........')
app.get('/api/users/currentusers',(req,res)=>{
    console.log('hit the api')
    res.send('Hi there')
})
app.listen(3000,()=>{
    console.log('listening on port 3000')
})