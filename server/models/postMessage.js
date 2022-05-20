import mongoose from 'mongoose';

//? creating a schemma that takes in an object

const postSchema = mongoose.Schema({
  title: String,
  message: String,
  creator: String,
  tags: [String],
  selectedFile: String,
  likeCount: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

//? turning the schemea into model

var PostMessage = mongoose.model('PostMessage', postSchema);

export default PostMessage;
