const router = require('express').Router();
const {
  getThoughts,
  getSingleThought,
  createThought,
  deleteThought,
  createReaction,
  deleteReaction
} = require('../../controllers/thoughtController.js');

// /api/Thought
router.route('/').get(getThoughts).post(createThought);

// /api/Thought/:thoughtId
router
  .route('/:thoughtId')
  .get(getSingleThought)
  .put(createThought)
  .delete(deleteThought);

  router
  .route('/:thoughtId/reactions')
  .put(createReaction)
  .delete(deleteReaction)

module.exports = router;
