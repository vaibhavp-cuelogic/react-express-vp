import { UserController } from "../../src/controllers/UserController";
import chai from "chai";
let assert = chai.assert;

describe("Functions for user controller=>",()=>{
    
    let userModel = {
        findOne : (userobj) => {
            return new Promise((resolve,reject)=>{
                if(userobj.email=="amanjuneja5@gmail.com" && userobj.password=="1234567"){
                    resolve({status:true,user:{email:"amanjuneja5@gmail.com"}});
                }else if(userobj.email == "amanjuneja5@gmail.com"){
                    resolve({user:{email:"amanjuneja5@gmail.com"}});
                }else if(userobj.password){
                    resolve({status:false,error:"Invalid credentials"});
                }else{
                    resolve("");
                }
                    
            });
        },
        save :  ()  =>  {
            return new Promise((resolve,reject)=>{
                resolve({first_name:"Ravi",last_name:"Ashwin",email:"rashwin@gmail.com"});
            })
        }
    };

    describe("User login functionality",()=>{
        it("login user with valid credentials",(done)=>{
            let userCtrl = new UserController(userModel);
            let userPromise = userCtrl.postLogin({body:{email : "amanjuneja5@gmail.com",password:"1234567"}});
            userPromise.then((data)=>{
                    assert.isObject(data);
                    assert.isObject(data.user);
                    assert.equal(data.status,true);
                    done(); 
                },done);
        });

        it("deny login user with invalid credentials",(done)=>{
            let userCtrl = new UserController(userModel);
            let userPromise = userCtrl.postLogin({body:{email : "amanjuneja@gmail.com",password:"1234567989"}});
            userPromise.then((data)=>{
                    assert.isObject(data);
                    assert.isString(data.error);
                    assert.equal(data.status,false);
                    done(); 
                },done);
        });
    });

    describe("User Profile lookup functionality based on email",()=>{
        it("list user details for valid email passed",(done)=>{
            let userCtrl = new UserController(userModel);
            let userPromise = userCtrl.getUserInfo({params:{email : "amanjuneja5@gmail.com"}});
            userPromise.then((data)=>{
                    assert.isObject(data);
                    assert.isObject(data.user);
                    assert.equal(data.status,true);
                    done(); 
                },done);
        });

        it("should not list user details for invalid email passed",(done)=>{
            let userCtrl = new UserController(userModel);
            let userPromise = userCtrl.getUserInfo({params:{email : "amanjunej@gmail.com"}});
            userPromise.then((data)=>{
                    assert.isObject(data);
                    assert.isString(data.error);
                    assert.equal(data.status,false);
                    done(); 
                },done);
        });
    });



    // describe("User SignUp functionality",()=>{
    //     it("SignUp user with valid data",(done)=>{
    //         let userCtrl = new UserController(userModel);
    //         let userPromise = userCtrl.postSignup({
    //             body:{
    //                 first_name : "Ravi",
    //                 last_name : "Ashwin",
    //                 email : "rashwin@gmail.com",
    //                 password:"12345"
    //             }
    //         });
    //         userPromise.then((data)=>{
    //                 assert.isObject(data);
    //                 assert.isObject(data.user);
    //                 assert.equal(data.status,true);
    //                 done(); 
    //             },done);
    //     })

        // it("deny SignUp user with invalid data",(done)=>{
        //     let userCtrl = new UserController(userModel);
        //     let userPromise = userCtrl.postLogin({body:{email : "amanjuneja5@gmail.com",password:"1234567989"}});
        //     userPromise.then((data)=>{
        //             assert.isObject(data);
        //             assert.isString(data.error);
        //             assert.equal(data.status,false);
        //             done(); 
        //         },done);
        // })
    //});
})