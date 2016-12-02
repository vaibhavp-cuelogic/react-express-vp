import UserModel from "../../src/models/User";
import chai from "chai";
let assert = chai.assert;

describe("User Schema",()=>{
    it("should have first name",(done)=>{
            let user = new UserModel();
            user.validate((err)=>{
                assert.property(err.errors,'first_name');
                done();        
            })
    })
    it("should have last name",(done)=>{
            let user = new UserModel();
            user.validate((err)=>{
                assert.property(err.errors,'last_name');
                done();        
            })
    })
    it("should have email",(done)=>{
            let user = new UserModel();
            user.validate((err)=>{
                assert.property(err.errors,'email');
                done();        
            })
    })
    it("should have password",(done)=>{
            let user = new UserModel();
            user.validate((err)=>{
                assert.property(err.errors,'password');
                done();        
            })
    })
})



