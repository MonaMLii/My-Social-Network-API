const router = require('express').Router();
const {
  getUsers,
  getSingleUser,
  createUser,
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

// /api/users/:studentId
router.route('/:userId').get(getSingleUser).delete(deleteUser);

// /api/users/:studentId/assignments
router.route('/:userId/friends/:friendId').post(addFriend).delete(removeFriend);


module.exports = router;
