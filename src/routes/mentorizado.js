const express = require("express");
const mentorizadoSchema = require("../models/mentorizado");

const router = express.Router();

// create mentorizado
router.post("/mentorizado", (req, res) => {
  const mentorizado = mentorizadoSchema(req.body);
  mentorizado
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// get all mentorizado
router.get("/mentorizado", (req, res) => {
    mentorizadoSchema
      .find()
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));
  });

  // get a mentorizado
router.get("/mentorizado/:id", (req, res) => {
    const { id } = req.params;
    mentorizadoSchema
      .findById(id)
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));
  });

  // delete a mentorizado
router.delete("/mentorizado/:id", (req, res) => {
    const { id } = req.params;
    mentorizadoSchema
      .deleteOne({ _id: id })
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));
  });

  // update a mentorizado
router.put("/mentorizado/:id", (req, res) => {
    const { id } = req.params;
    const { nombre, apellido, dni, codigo, email } = req.body;
    mentorizadoSchema
      .updateOne({ _id: id }, { $set: { nombre,apellido, dni, codigo, email } })
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));
  });

module.exports = router;
