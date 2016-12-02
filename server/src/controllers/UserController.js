import UserModel from "../models/User";

/** 
 *  User class with methods for user management
 */
export class UserController {

    /**
     * constructor to initialize the properties
     */
    constructor(userModel) {

        this.userModel = userModel;
    }

    /**
     * Method to login user and return user details object
     */
    postLogin = (req, res, next) => {
        return new Promise((resolve,reject)=>{
            this.userModel
                .findOne({ email: req.body.email, password: req.body.password })
                .then((user) => {
                    if (user) {
                        resolve(user);
                        res.json({ status: true, user })
                        next();
                    }else{
                        reject("Invalid credentials");
                        reject(res.json({ status: false, error:"Invalid credentials" }));
                        next();
                    }
                })
                .catch((error) =>{
                    next(error);
                });
        });
        
    }

    /**
     * Method to create new user if no other user with same email exist
     */
    postSignup = (req, res, next) => {
        return new Promise((resolve,reject) => {
            this.userModel
                .findOne({ email: req.body.email })
                .then((user) => {
                    let returnObj;
                    
                    if (user) {
                        returnObj = { status: false, error: "User already exists" }; 
                        resolve(returnObj);
                        res.json(returnObj);
                        next();
                    } else {
                        const newUser = new this.userModel(req.body);
                        newUser.save()
                            .then((user) => {
                                returnObj = { status: true, user };
                                resolve(returnObj);
                                res.json({ status: true, user });
                                next();
                            })
                            .catch((error)=>{
                                next(error);
                            });
                    }
                })
                .catch((error) =>{
                    next(error);
                });
        });
    }

    /**
     * Method to get user details based on porvided email address
     */
    getUserInfo = (req, res, next) => {
        return new Promise((resolve,reject) => {
            this.userModel
                .findOne({ email: req.params.email })
                .then((user) => {
                    let returnObj
                    if (user) {
                        returnObj = { status: true, user };
                        resolve(returnObj);
                        res.json(returnObj);
                        next();
                    }
                    returnObj = { status: false, error: "User does not exist" }
                    resolve(returnObj);
                    res.json(returnObj);
                    next();
                })
                .catch((error) => {
                    next(error);
                });
        })
        
    };

    /**
     * Method to update details of the user.
     */
    postUserInfo = (req, res, next) => {
        return new Promise((resolve,reject) => {
            this.userModel
                .findOneAndUpdate({ email: req.body.email }, req.body, { new: true })
                .then((user) => {
                    let returnObj
                    if (user) {
                        returnObj = { status: true, user };
                        resolve(returnObj); 
                        res.json(returnObj);
                        next();
                    }
                    resolve(returnObj);
                    res.json(returnObj);
                    next();
                })
                .catch((error)=>{
                    next(error);
                });
        })
        
    };


}

const userController = new UserController(UserModel);
export default userController;


