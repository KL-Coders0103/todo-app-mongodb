const express = require('express');
const router = express.Router();
const Task = require('../models/Task');

router.get('/', async (req, res) => {
    const tasks = await Task.find().sort({ createdAt: -1 });
    res.render('index', { tasks, alert: null });
});

router.post('/add', async (req, res) => {
    const { title, priority } = req.body;
    if(!title || title.trim() === '') {
        const tasks = await Task.find().sort({ createdAt: -1 });
        return res.render('index', { tasks, alert: 'Title is required.' });
    }
    await Task.create({ title: title.trim(), priority });
    res.redirect('/');
});

router.post('/edit/:id', async (req, res) => {
    const { title, priority } = req.body;
    if(!title || title.trim() === '') {
        return res.redirect('/?alert=Title is required.');
    }
    await Task.findByIdAndUpdate(req.params.id, { title: title.trim(), priority });
    res.redirect('/');
});

router.post('/delete/:id', async (req, res) => {
    await Task.findByIdAndDelete(req.params.id);
    res.redirect('/');
});

module.exports = router;