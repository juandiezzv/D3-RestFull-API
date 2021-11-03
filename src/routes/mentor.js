const express = require("express");
const mentorSchema = require("../models/mentor");

const router = express.Router();

// create mentores
router.post("/mentors", (req, res) => {
  const mentor = mentorSchema(req.body);
  mentor
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// get all mentors
router.get("/mentors", (req, res) => {
    mentorSchema
      .find()
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));
  });

  // get a mentors
router.get("/mentor/:id", (req, res) => {
    const { id } = req.params;
    mentorSchema
      .findById(id)
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));
  });

  // delete a mentor
router.delete("/mentor/:id", (req, res) => {
    const { id } = req.params;
    mentorSchema
      .deleteOne({ _id: id })
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));
  });

  // update a mentor
router.put("/mentor/:id", (req, res) => {
    const { id } = req.params;
    const { nombre, apellido,dni,profesion, email,cargo } = req.body;
    mentorSchema
      .updateOne({ _id: id }, { $set: { nombre, apellido, dni, profesion, email,cargo } })
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));
  });

module.exports = router;
