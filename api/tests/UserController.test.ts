import {beforeEach, describe, it} from "mocha";
import * as chai from 'chai';
import chaiHttp = require('chai-http');
chai.use(chaiHttp);


import { User } from "../src/entity/User";
import app from "../src/index"
import { Util } from "./test_util/util";

const Jukka = new User();
Jukka.email = "jukka@pekka.com"
Jukka.name = "Jukka"
Jukka.passhash = "jukkapekka123123"

const Pekka = new User();
Pekka.email = "Pukka@pekka.com"
Pekka.name = "Pekka"
Pekka.passhash = "jukksdfghgf123"

const Matti = new User();
Matti.email = "matti@pekka.com"
Matti.name = "Matti"
Matti.passhash = "jukk234567876543"

beforeEach(async function() {
    await Util.clear(User);
    await Util.createAll(User,[Jukka,Matti,Pekka]);
});

chai.use(chaiHttp);
chai.should();describe("Users", () => {
    describe("GET /", () => {

        //Test to get all students record
        it("should get all users", (done) => {
            chai.request(app).get('/api/user').end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('Array');
                done();
            });
         });

        it("should get a single user", (done) => {
            const id = 1;
            chai.request(app).get(`/api/user/${id}`).end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                done();
            });
        });
         
        // Test to get single student record
        it("should return nothing", (done) => {
            const id = 5;
            chai.request(app).get(`/apu/user/${id}`).end((err, res) => {
                res.should.have.status(404);
                done();
            });
        });
    });

    describe("POST /", () => {

        //Test to get all students record
        it("should create a user", (done) => {
            chai.request(app)
            .post('/api/user')
            .send({ name: 'asd', passhash: '12345678', email: 'jarimatti@hirvonen.com' })
            .end((err, res) => {
                res.should.have.status(201);
                done();
            });
         });

        it("should get a single user", (done) => {
            const id = 1;
            chai.request(app).get(`/api/user/${id}`).end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                done();
            });
        });
         
        // Test to get single student record
        it("should return nothing", (done) => {
            const id = 5;
            chai.request(app).get(`/apu/user/${id}`).end((err, res) => {
                res.should.have.status(404);
                done();
            });
        });
    });
});