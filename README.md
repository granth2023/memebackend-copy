# mememaker_backend

This is the backend for the Meme Generator project, where users can choose from a third-party API of memes, add their own text, and save their customized memes as submissions. This README provides an overview of the backend files, including routes, models, and seed data.

## SEED

To populate the database with initial meme data, a createMemesJSON function is provided. This function retrieves memes from a third-party API and creates Meme documents in the database.


```

export const createMemesJSON = async () => {
  try {
    const response = await axios.get('https://api.imgflip.com/get_memes');
    const responseData = Array.from(response.data.data.memes);

    const seedData = responseData.map((object) => ({
      name: object.name,
      url: object.url,
      width: object.width,
      height: object.height,
      box_count: object.box_count,
      caption: object.caption
    }));

    await Meme.deleteMany({});
    const createdMemes = await Meme.create(seedData);
    console.log('Successfully created memes:', createdMemes);
    return createdMemes;
  } catch (error) {
    console.error('Error creating memes:', error);
    throw error;
  }
};

createMemesJSON();



```




### MODELS

```
const memeSchema = new mongoose.Schema({
  name: String,
  url: String,
  width: String,
  height: String,
  box_count: String,
  caption: String
});

```

```

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
  bottomTextStyles: Object
});



```

## Routes

### Memes

- `GET /memes`: Fetch all memes.
- `GET /memes/:id`: Fetch a meme by ID.
- `POST /memes`: Create a new meme.
- `PUT /memes/:id`: Update a meme by ID.
- `DELETE /memes/:id`: Delete a meme by ID.

### Submissions

- `GET /submissions`: Fetch all submissions.
- `GET /submissions/:id`: Fetch a submission by ID.
- `POST /submissions`: Create a new submission.
- `PUT /submissions/:id`: Update a submission by ID.
- `DELETE /submissions/:id`: Delete a submission by ID.

### Tech Used

* Node.js 
* Express.js
* MongoDB
* Mongoose
* Axios
* JavaScript
* npm
* Git
* GitHub
* Vercel 


### VERCEL

* memebackend-copy-git-vercel-granth2023.vercel.app

### Next Steps

* make front end fully responsive to second backend model
* include more pseudocode
* rewrite project

### References

* chatgpt
* Seed code lecture
* https://www.youtube.com/watch?v=-0exw-9YJBo