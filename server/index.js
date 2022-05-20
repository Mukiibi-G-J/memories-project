import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import router from './routes/posts.js';

const app = express();
//! limit of the files in 30mb
app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));

const CONNECTION_URL =
  'mongodb+srv://admin:mukiibi@cluster0.fi0gk.mongodb.net/?retryWrites=true&w=majority';
app.use(cors());
app.use('/posts', router);
const PORT = process.env.PORT || 5000;

mongoose
  .connect(CONNECTION_URL, {
    //? this  makes limits the errors
    useNewUrlParser: true,
    //? this  makes limits the errors
    useUnifiedTopology: true,
  })
  //? the listen function takes in port and callback
  .then(() => app.listen(PORT, () => console.log(`Server running : ${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));

//? this  makes limits the errors

// mongoose.set('useFindAndModify', false);
