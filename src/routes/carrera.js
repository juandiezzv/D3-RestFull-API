const express = require("express");
const carreraSchema = require("../models/carrera");

const router = express.Router();

// create carrera
router.post("/carrera", (req, res) => {
  const carrera = carreraSchema(req.body);
  carrera
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// get all carrera
router.get("/carrera", (req, res) => {
    carreraSchema
      .find()
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));
  });

  // get a mentorizado
router.get("/carrera/:id", (req, res) => {
    const { id } = req.params;
    carreraSchema
      .findById(id)
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));
  });

  // delete a carrera
router.delete("/carrera/:id", (req, res) => {
    const { id } = req.params;
    carreraSchema
      .deleteOne({ _id: id })
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));
  });

  // update a carrera
router.put("/carrera/:id", (req, res) => {
    const { id } = req.params;
    const { informacion, descripcion, habilidades, grado} = req.body;
    carreraSchema
      .updateOne({ _id: id }, { $set: { informacion,descripcion, habilidades, grado} })
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));
  });

module.exports = router;
