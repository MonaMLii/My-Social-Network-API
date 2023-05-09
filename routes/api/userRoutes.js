const router = require('express').Router();
const {
  getUsers,
  getSingleUser,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  removeFriend,
} = require('../../controllers/userController');

// /api/users
//router.get('/', getUsers)
//router.post("/", createUser)

router.route('/')
  .get(getUsers)
  .post(createUser);

// /api/users/:userId
router.route('/:userId').get(getSingleUser).delete(deleteUser).put(updateUser);


router.route('/:userId/friends/:friendId').delete(removeFriend).post(addFriend);


module.exports = router;
