const express = require("express");
const mentoriaSchema = require("../models/mentoria");

const router = express.Router();

// create mentoria
router.post("/mentoria", (req, res) => {
  const mentoria = mentoriaSchema(req.body);
  mentoria
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// get all mentoria
router.get("/mentoria", (req, res) => {
    mentoriaSchema
      .find()
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));
  });

  // get a mentoria
router.get("/mentoria/:id", (req, res) => {
    const { id } = req.params;
    mentoriaSchema
      .findById(id)
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));
  });

  // delete a mentor
router.delete("/mentoria/:id", (req, res) => {
    const { id } = req.params;
    mentoriaSchema
      .deleteOne({ _id: id })
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));
  });

  // update a mentor
router.put("/mentoria/:id", (req, res) => {
    const { id } = req.params;
    const { comentario, plan_estrategico, plan_accion } = req.body;
    mentoriaSchema
      .updateOne({ _id: id }, { $set: { comentario, plan_estrategico, plan_accion } })
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));
  });

module.exports = router;
