const connection = require('../config/connection');
const { User, Thought, Reaction } = require('../models');


connection.on('error', (err) => err);

const userData = [
  {
    username: "mona123",
    email: "mona@gmail.com",
  },
  {
    username: "username1",
    email: "username1@gmail.com",
  },
  {
    username: "username2",
    email: "username2@gmail.com",
  },
  {
    username: "username3",
    email: "username3@gmail.com",
  },
  {
    username: "username4",
    email: "username4@gmail.com",
  },
  {
    username: "username5",
    email: "username5@gmail.com",
  },
]

connection.once('open', async () => {
  console.log('connected');

console.log(User);
  // Drop existing User
  await User.deleteMany({});

  // Drop existing Thought
  await Thought.deleteMany({});

  // Create empty array to hold the user
  const users = [];


  // Add user to the collection and await the results
  await User.collection.insertMany(userData);

  // Add courses to the collection and await the results
  await Thought.collection.insertOne({
    thoughtText: 'thought',
    username: "mona123",
  });

  // Log out the seed data to indicate what should appear in the database
  console.table(users);
  console.info('Seeding complete! 🌱');
  process.exit(0);
});
