const express = require("express");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");

const { default: mongoose } = require("mongoose");
const User = require("./models/User");
const bcrypt = require("bcrypt");
const saltRounds = 10;
require("dotenv").config();

const multer = require("multer");
const uploadMiddleware = multer({ dest: "uploads/" });
const fs = require("fs");

const app = express();
app.use(cookieParser());
app.use(
  cors({
    credentials: true,
    origin: "http://localhost:3000",
  })
);
app.use(express.json());
app.use("/uploads", express.static(__dirname + "/uploads"));

app.post("/register", async (req, res) => {
  const { firstName, lastName, email, phone, password } = req.body;
  console.log(firstName);

  try {
    const salt = bcrypt.genSaltSync(saltRounds);
    const hash = bcrypt.hashSync(password, salt);
    const userDoc = await User.create({
      firstName,
      lastName,
      email,
      phone,
      password: hash,
    });
    res.json(userDoc);
  } catch (e) {
    console.log(e);
    res.status(200).json("Cannot create user");
  }
});

const secretKey = "ourlittlesecret";

app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const userDoc = await User.findOne({ email });
  const correct = bcrypt.compareSync(password, userDoc.password); // true
  if (correct) {
    const token = jwt.sign(
      {
        firstName: userDoc.firstName,
        lastName: userDoc.lastName,
        id: userDoc._id,
        email: userDoc.email,
      },
      secretKey
    );
    try {
      res.cookie("token", token).json(userDoc);
      console.log("SASAS", req.cookies);
    } catch (e) {
      console.log(e);
    }
  } else {
    res.status(400).json("incorrect information");
  }
});

app.get("/getUser", async (req, res) => {
  const { token } = req.cookies;
  if (token) {
    const tt = jwt.verify(token, secretKey);
    const userDoc = await User.findById(tt.id);
    res.json(userDoc);
  }
});

// app.put("/edit", uploadMiddleware.single("file"), async (req, res) => {
//   let newPath = null;
//   if (req.file) {
//     const { originalname, path } = req.file;
//     const parts = originalname.split(".");
//     const ext = parts[parts.length - 1];
//     newPath = path + "." + ext;
//     fs.renameSync(path, newPath);
//   }

//   const { token } = req.cookies;
//   jwt.verify(token, secret, {}, async (err, info) => {
//     if (err) throw err;
//     const { id, title, summary, content } = req.body;
//     const postDoc = await Post.findById(id);
//     const isAuthor = JSON.stringify(postDoc.author) === JSON.stringify(info.id);
//     if (!isAuthor) {
//       return res.status(400).json("you are not the author");
//     }
//     await postDoc.update({
//       title,
//       summary,
//       content,
//       cover: newPath ? newPath : postDoc.cover,
//     });

//     res.json(postDoc);
//   });
// });

app.put("/edit", uploadMiddleware.single("file"), async (req, res) => {
  const { token } = req.cookies;

  const tt = jwt.verify(token, secretKey);
  const em = tt.email;
  const {
    firstName,
    lastName,
    about,
    linkedIn,
    github,
    facebook,
    twitter,
    instagram,
    website,
    education,
    work,
    intrests,
    password,
    pic,
  } = req.body;

  if (password) {
    console.log(password);
    const salt = bcrypt.genSaltSync(saltRounds);
    const hash = bcrypt.hashSync(password, salt);

    const doc = await User.findOneAndUpdate(
      { email: em },
      {
        about: about,
        firstName: firstName,
        lastName: lastName,
        linkedIn: linkedIn,
        password: hash,
        github: github,
        facebook: facebook,
        twitter: twitter,
        instagram: instagram,
        website: website,
        education: education,
        work: work,
        intrests: intrests,
      }
    );
    res.json(doc);
  } else {
    console.log(firstName, lastName);
    const doc = await User.findOneAndUpdate(
      { email: em },
      {
        about: about,

        firstName: firstName,
        lastName: lastName,
        linkedIn: linkedIn,
        github: github,
        facebook: facebook,
        twitter: twitter,
        instagram: instagram,
        website: website,
        education: education,
        work: work,
        intrests: intrests,
      }
    );
    res.json(doc);
  }
  //   console.log(doc);
});

app.post("/pass", async (req, res) => {
  const { password } = req.body;
  console.log(req.body);
  const { token } = req.cookies;
  const tt = jwt.verify(token, secretKey);
  const userDoc = await User.findById(tt.id);
  console.log(userDoc);
  const correct = bcrypt.compareSync(password, userDoc.password); // true
  if (correct) {
    res.status(200).json("yes");
  } else {
    res.status(500).json("no");
  }
});

app.listen(4000, () => {
  mongoose.connect(process.env.MONGO_URI).catch((e) => console.log(err));
  console.log("server is running");
});
