const userRouter = require("express").Router();
const userController = require("../controllers/user.controller");
const { findUser } = require("../middlewares/findUser.mw");
const { imageUpload } = require("../utils/imageUpload");


// const upload = multer({ dest: 'uploads/' })

userRouter
  .route("/")
  .post(imageUpload.single("avatar"), userController.createUser)
  .get(userController.findUsers);

userRouter
  .route("/:userId")
  .get(userController.findUser)
  .put(imageUpload.single("avatar"), findUser, userController.updateUser)
  .delete(findUser, userController.deleteUser);

// userRouter.route('/:email').get(userController.getUser);

module.exports = userRouter;
