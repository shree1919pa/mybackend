import mongoose from "mongoose";

const videoSchema = new mongoose.Schema(
  {
    title: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    trim: true,
  },
  url: {
    type: String,
    required: true,
  },
  thumbnail: {
    type: String, // URL or path to thumbnail image
  },
  duration: {
    type: Number, // Duration in seconds
  },
  uploadedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  views: {
    type: Number,
    default: 0,
  },
  tags: {
    type: [String],
  },
    
  },
  { timestamps: true } // adds createdAt & updatedAt automatically
);

const Video = mongoose.model("Video", VideoSchema);

export default Video;
