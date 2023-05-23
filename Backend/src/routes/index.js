// const { Router, json } = require("express");
// const router = Router();

// const User = require("../models/user")

// const jwt = require("jsonwebtoken")

// router.get("/", (req, res) => res.send ("hola mundo"))

// router.post("/registro", async (req, res)=> {
//     const { usuario, email, password } = req.body;
//     const newUser = new User({usuario, email, password})
//     await newUser.save();

//     const token = jwt.sign({ _id: newUser._id }, "secretkey")
//     res.status(200).json({token})
// });

// router.post("/ingreso", async (req, res)=>{
//     const { email, password } = req.body;
//     const user = await User.findOne({ email })
//     if(!user) return res.status(401).send("El correo no existe");
//     if(user.password !== password) return res.status(401).send("Contraseña incorrecta");

//     const token = jwt.sign({ _id: user._id }, "secretkey");
//     return res.status(200).json({token});
// });

// router.get("/tasks", (req, res) =>{
//     res.json([
//         {
//             _id: 1,
//             name: "tarea 1",
//             description: "hola",
//             date: "2023-05-11T01:17:02.199+00:00"
//         },
//         {
//             _id: 2,
//             name: "tarea 2",
//             description: "hola",
//             date: "2023-05-11T01:17:02.199+00:00"
//         },
//         {
//             _id: 3,
//             name: "tarea 3",
//             description: "hola",
//             date: "2023-05-11T01:17:02.199+00:00"
//         }
//     ])
// })

// router.get("/private", verifyToken, (req, res) =>{
//     res.json([
//         {
//             _id: 1,
//             name: "tarea 1",
//             description: "hola",
//             date: "2023-05-11T01:17:02.199+00:00"
//         },
//         {
//             _id: 2,
//             name: "tarea 2",
//             description: "hola",
//             date: "2023-05-11T01:17:02.199+00:00"
//         },
//         {
//             _id: 3,
//             name: "tarea 3",
//             description: "hola",
//             date: "2023-05-11T01:17:02.199+00:00"
//         }
//     ])
// })

// router.get("/profile", verifyToken, (req, res) =>{
//     res.send(req.userId);
// })

// module.exports = router;

// function verifyToken(req, res, next){
//     if(!req.headers.authorization){
//         return res.status(401).send("Acceso correcto");
//     }
//     const token = req.headers.authorization.split(" ")[1]
//     if(token === "null"){
//         return res.status(401).send("Acceso denegado");
//     }

//     const payload = jwt.verify(token, "secretkey")
//     req.userId = payload._id;
//     next();
    

// }


















// const express = require('express');
// const router = express.Router();

// const passport = require('passport');


// router.get('/', (req, res, next) => {
//     res.render('index');
// });

// router.get('/registro', (req, res, next) => {
//     res.render('registro');
// });

// function isAuthenticated(req, res, next) {
//     if(req.isAuthenticated()){
//         return next();
//     }
//     res.redirect('/');
// }

// router.post('/registro', passport.authenticate('local-registro',{
//     successRedirect: '/perfil',
//     failureRedirect: '/registro',
//     passReqToCallback: true
// }));

// router.get('/ingreso', (req, res, next) => {
//     res.render('ingreso');
// });

// router.post('/ingreso', passport.authenticate('local-ingreso',{
//     successRedirect: '/perfil',
//     failureRedirect: '/ingreso',
//     passReqToCallback: true
// }));

// // router.get('/logout', (req, res, next) => {
// //     req.logout(() => {
// //         res.redirect('/ingreso');
// //     });
// // });

// router.use((req, res, next) => {
//     isAuthenticated(req, res, next);
//     next();
// });

// router.get('/perfil', (req, res, next) => {
//     res.render('perfil');
// });



// module.exports = router;

