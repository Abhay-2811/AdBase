require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Campaign = require('./models/Campaign');

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());

// Connect to MongoDB
const dbUri = process.env.MONGO_URI;
mongoose.connect(dbUri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error(err));

// Create a new campaign
app.post('/campaigns', async (req, res) => {
    const { campaignId, adClicks, aggregatedZkProof } = req.body;
    try {
        const campaign = new Campaign({ campaignId, adClicks, aggregatedZkProof });
        await campaign.save();
        res.status(201).send(campaign);
    } catch (error) {
        res.status(400).send(error);
    }
});

// Get all campaigns
app.get('/campaigns', async (req, res) => {
    try {
        const campaigns = await Campaign.find();
        res.send(campaigns);
    } catch (error) {
        res.status(500).send(error);
    }
});

// Get a specific campaign by ID
app.get('/campaigns/:id', async (req, res) => {
    const { id } = req.params;

    try {
        const campaign = await Campaign.findById(id);
        if (!campaign) {
            return res.status(404).send();
        }
        res.send(campaign);
    } catch (error) {
        res.status(500).send(error);
    }
});

// Update ad clicks and aggregated zk-proof
app.patch('/campaigns/:id', async (req, res) => {
    const { id } = req.params;
    const updates = req.body;

    try {
        const campaign = await Campaign.findByIdAndUpdate(id, updates, { new: true, runValidators: true });
        if (!campaign) {
            return res.status(404).send();
        }
        res.send(campaign);
    } catch (error) {
        res.status(400).send(error);
    }
});

app.post('/campaigns/:id/adclick', async (req, res) => {
    const { id } = req.params;

    try {
        const campaign = await Campaign.findByIdAndUpdate(id, { $inc: { adClicks: 1 } }, { new: true });
        if (!campaign) {
            return res.status(404).send();
        }
        res.send(campaign);
    } catch (error) {
        res.status(400).send(error);
    }
});

app.get('/randomAd', async (req, res) => {
    try {
        
    } catch (error) {
        res.status(400).send(error);
    }
})


app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
