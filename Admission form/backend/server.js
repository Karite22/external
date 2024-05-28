// backend/server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/admissions', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const enquirySchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  course: String,
  message: String,
});

const Enquiry = mongoose.model('Enquiry', enquirySchema);

app.post('/api/enquiries', async (req, res) => {
  try {
    const enquiry = new Enquiry(req.body);
    await enquiry.save();
    res.status(201).send('Enquiry saved');
  } catch (error) {
    res.status(400).send('Error saving enquiry');
  }
});

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});
