const mongoose = require("mongoose");
const mongooseAggregate = require("mongoose-aggregate-paginate-v2");
const videoSchema = new mongoose.Schema(
  {
    videoFile: {
      type: String, // cloudinary
      required: true,
    },
    thumbnail: {
      type: String, // cloudinary
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    views: {
      type: Number,
      dafault: 0,
    },
    isPublished: {
      type: Boolean,
      dafault: 1,
    },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    duration: {
      type: Number, // cloudinary
      required: true,
    },
  },
  { timestamps: true }
);

videoSchema.plugin(mongooseAggregate);

const Video = mongoose.model("Video", videoSchema);
module.exports = { Video };
