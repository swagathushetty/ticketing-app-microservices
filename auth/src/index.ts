import express from 'express'
import {json} from 'body-parser'
import { currentUserRouter } from './routes/current-user'
import { signoutRouter } from './routes/signout'
import { siginRouter } from './routes/signin'
import { signupRouter } from './routes/signup'
import { errorHandler } from './middlewares/error-handler'
const app=express()
app.use(json())

app.use(currentUserRouter)
app.use(signoutRouter)
app.use(siginRouter)
app.use(signupRouter)

app.use(errorHandler)

app.listen(3000,()=>{
    console.log('listening on port 3000')
})