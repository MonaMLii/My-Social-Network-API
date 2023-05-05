const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction');
const dayjs = require('dayjs');

// Schema to create thought model
const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      minLength: 1,
      maxLength: 280,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (date) => dayjs(date).format('DD/MM/YYYY')
    },
    username: {
      type: String,
      required: true,
    },

    reactions: [reactionSchema]
    
  },
  {
    timestamps: true,
    toJSON: { getters: true, virtuals: true },
  }
);

thoughtSchema
.virtual('reactionCount')
.get(function () {
  return this.reactions.length;
})




const Thought = model('thought', thoughtSchema);
module.exports = Thought;
