import {beforeEach, describe, it} from "mocha";
import * as chai from 'chai';
import * as chaiHttp from 'chai-http';


import { User } from "../src/entity/User";
import { UserController } from "../src/controller/UserController";
import * as app from "../src/index"

import db from "./test_util/db";

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
});
  
describe('#find()', function() {
    it('responds with matching records', async function() {
        const users = await UserController.listAll( req , res );
        users.should.have.length(3);

    });
});
  

// Import the dependencies for testing

chai.use(chaiHttp);
chai.should();describe("Students", () => {
    describe("GET /", () => {

        //Test to get all students record
        it("should get all students record", (done) => {
             chai.request(app)
                 .get('/')
                 .end((err, res) => {
                     res.should.have.status(200);
                     res.body.should.be.a('object');
                     done();
                  });
         });

        // Test to get single student record
        it("should get a single student record", (done) => {
             const id = 1;
             chai.request(app)
                 .get(`/${id}`)
                 .end((err, res) => {
                     res.should.have.status(200);
                     res.body.should.be.a('object');
                     done();
                  });
         });
         
        // Test to get single student record
        it("should not get a single student record", (done) => {
             const id = 5;
             chai.request(app)
                 .get(`/${id}`)
                 .end((err, res) => {
                     res.should.have.status(404);
                     done();
                  });
         });
    });
});