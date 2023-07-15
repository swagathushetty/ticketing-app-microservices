import request from "supertest";
import { app } from "../../app";

it('returns a 201 on successful signup',async ()=>{
    return request(app)
        .post('/api/users/signup')
        .send({
            email:'test@test.com',
            password:"password"
        })
        .expect(201)
})


it('returns a 400 wih invalid email',async ()=>{
    return request(app)
        .post('/api/users/signup')
        .send({
            email:'1',
            password:"2123"
        })
        .expect(400)
})

it('returns a 400 wih missing email and password',async ()=>{
    return request(app)
        .post('/api/users/signup')
        .send({
            email:'',
            password:""
        })
        .expect(400)
})


it('disallows duplicate emails',async ()=>{
    const response = request(app)
        .post('/api/users/signup')
        .send({
            email: 'test@test.com,',
            password: 'password'
        })
        .expect(201);

  return request(app)
        .post('/api/users/signup')
        .send({
            email: 'test@test.com,',
            password: 'password'
        })
        .expect(400)
})



it('sets a cookie after successful signup',async ()=>{
    const response =  request(app)
        .post('/api/users/signup')
        .send({
            email:'test@gmail.com',
            password:"password"
        })
        .expect(201)

    expect(response.get('Set-Cookie'))
})