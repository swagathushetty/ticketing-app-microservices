import { MongoMemoryServer } from 'mongodb-memory-server'
import mongoose from 'mongoose'
import { app } from '../app'

let mongo:any
beforeAll(async()=>{
  process.env.JWT_KEY ='asdsad'
     mongo = await MongoMemoryServer.create();
    const mongoUri = mongo.getUri();

    await mongoose.connect(mongoUri, {});
})


beforeEach(async()=>{
    const collections = await mongoose.connection.db.collections()

    for(let collection of collections){
        await collection.deleteMany()
    }
})


afterAll(async () => {
    await mongoose.connection.close(); // This first
    await mongo.stop(); // Then this
  });