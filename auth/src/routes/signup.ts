import express,{Request,Response} from 'express'
import { body } from 'express-validator'
const router=express.Router()

router.post('/api/users/signup',[
    body('email').isEmail()
    .withMessage('email must be valid'),
    body('password')
    .trim()
    .isLength({min:4,max:20})
    .withMessage('password must be between 4 and 20 chars')
],(req:Request,res:Response)=>{
    const {email ,password}=req.body
    res.send('hi there')
})

export  {router as signupRouter}