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
  topTextPosition: Object,
  bottomTextPosition: Object,
  topTextStyles: Object,
  bottomTextStyles: Object
});
const Submission = mongoose.model('Submission', submissionSchema);

export default Submission; 