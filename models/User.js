const { Schema, model } = require('mongoose');

// Schema to create a user model
const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      validate: {
          validator: function(v) {
            return /[\w.]+@\w+\.(net|com)/.test(v);
          },
          message: email => `${email.value} is not a valid email!`
      }
    },
    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Thought',
      },
    ],
    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: 'user',
      },
    ],
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

userSchema
  .virtual('friendCount')
  .get(function () {
    return this.friends.length;
  })
const User = model('user', userSchema);

module.exports = User;
