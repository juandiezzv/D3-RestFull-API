const mongoose = require("mongoose");

const carreraSchema = mongoose.Schema({
  informacion: {
    type: String,
    required: true,
  },
  descripcion:{
      type: String,
      required: true
  },
  habilidades:{
      type: String,
      required:true
  },
  grado:{
      type: String,
      required:true
  }
});

module.exports = mongoose.model('Carrera', carreraSchema);