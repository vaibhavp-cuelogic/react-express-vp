import userController from "../controllers/UserController";

/**
 * Function to create the routes for the app
 */
export default (app) => {

    app.post("/api/signin", userController.postLogin);

    app.post("/api/signup", userController.postSignup);

    app.get("/api/user/:email", userController.getUserInfo);

    app.post("/api/user", userController.postUserInfo);
};