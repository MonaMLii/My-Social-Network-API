const { Schema, model } = require('mongoose');
const dayjs = require('dayjs');

// Schema to create a reaction model
const reactionSchema = new Schema(
    {
        reactionId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId(),
        },
        reactionBody: {
            type: String,
            required: true,
            maxlength: 280,
        },
        username: {
            type: String,
            required: true,
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: (date) => dayjs(date).format('DD/MM/YYYY')
          },
    },
    {
        timestamps: true,
        toJSON: { getters: true, virtuals: true },
    }
);


module.exports = reactionSchema;