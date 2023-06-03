import mongoose from 'mongoose'

const submissionSchema = new mongoose.Schema({
  Meme: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Meme',
    required: false
  },
  dataCreated: String,
  bottomText: String,
  topText: String,
  topTextPosition: String,
  bottomTextPosition: String,
  topTextStyles: String,
  bottomTextStyles: String
});
const Submission = mongoose.model('Submission', submissionSchema);

export default Submission; 