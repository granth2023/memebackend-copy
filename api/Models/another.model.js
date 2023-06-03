import mongoose from 'mongoose'

const submissionSchema = new mongoose.Schema({
    Meme: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Meme',
        required: false
      },
    dataCreated: string,
    bottomText: string,
    topText: string,
    topTextPosition: topTextPosition,
    bottomTextPosition: bottomTextPosition
  })

const Submission = mongoose.model('Submission', submissionSchema);

export default Submission; 