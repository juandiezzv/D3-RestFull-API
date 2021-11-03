const mongoose = require("mongoose");

const mentoriaSchema = mongoose.Schema({
  comentario: {
    type: String,
    required: true,
  },
  plan_estrategico:{
      type: String,
      required: true
  },
  plan_accion:{
      type: String,
      required:true
  }
});

module.exports = mongoose.model('Mentoria', mentoriaSchema);