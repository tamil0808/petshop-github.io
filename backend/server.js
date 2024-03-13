const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const UserModel = require('./models/User');
const ProductModel = require('./models/Product');

const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.json());
app.use(cors());

mongoose.connect('mongodb+srv://root:root@cluster0.lalevla.mongodb.net/your_database', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Failed to connect to MongoDB', err));

app.get('/products', async (req, res) => {
  try {
    const products = await ProductModel.find();
    res.send(products);
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
});


app.post('/cart/add', async (req, res) => {
 
});

app.post('/cart/remove', async (req, res) => {
 
});

app.post('/signup', async (req, res) => {
  const { username, email, password } = req.body;
  const user = new UserModel({ username, email, password });
  try {
    await user.save();
    res.send("User signed up successfully");
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
