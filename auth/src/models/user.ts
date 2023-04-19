import mongoose, { mongo } from "mongoose";

// an interface that describes the properties req to create new user

interface userAttrs {
    email: string,
    password:string
}

interface UserModel extends mongoose.Model<any> {
    build(attrs:userAttrs): any
}

const userSchema = new mongoose.Schema({
    email :{
        type: String,
        required: true
    },
    password :{
        type: String,
        required: true
    }
})

userSchema.statics.build =(attrs:userAttrs) =>{
    return new User(attrs)
}


const User = mongoose.model<any,UserModel>('User',userSchema)



export {User}