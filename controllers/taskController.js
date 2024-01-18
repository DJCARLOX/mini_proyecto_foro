const express = require('express');
const router = express.Router();
const taskModel = require('../models/taskModel');

router.get('/', (req, res) => {
    res.render('formulario');
    });

router.post('/formulario', (req, res) => {
    const login = req.body.login;
    const passwd = req.body.passwd;

    if (login === 'carlos' && passwd === '1234') {
        res.redirect('/index');
    } else {
        res.redirect('/');
    }
});

router.get('/index', (req, res) => {
const tasks = taskModel.getAll();
res.render('index', { tasks });
});

router.get('/add', (req, res) => {
res.render('add');
});

router.post('/add', (req, res) => {
taskModel.add(req.body.task);
res.redirect('/index');
});

router.get('/delete/:id', (req, res) => {
taskModel.delete(req.params.id);
res.redirect('/index');
});

module.exports = router;