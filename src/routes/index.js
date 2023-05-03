const express = require('express');
const router = express.Router();
const team = require('../team.json');
const projects = require('../projects.json');
// import team from 'team.json'

// colocar las rutas aquí
router.get('/', (req, res) => {
    res.render("home");
});

router.get('/about-us', (req, res) => {
    res.render('about-us');
});

router.get('/team', (req, res) => {
    console.log(team);
    res.render("team", { team });
});

router.get('/team/:name', (req, res) => {
    const { name } = req.params;
    res.render("team-member", { name, message: "Hello world" });
});

// router.get('/', (req, res) => {
//     res.send("Bienvenidos a mi portafolio!");
// })

router.get('/projects', (req, res) => {
    res.render("projects", { projects });
})

router.get('/projects/:id', (req, res) => {
    let { id } = req.params;
    res.render(`project-detail`, { id });
})

router.get('/about-me', (req, res) => {
    res.render("about-me");
})


module.exports = router;
