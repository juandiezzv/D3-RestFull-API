const mongoose = require("mongoose");

const mentorizadoSchema = mongoose.Schema({
  nombre: {
    type: String,
    required: true,
  },
  apellido:{
      type: String,
      required: true
  },
  dni:{
      type: String,
      required:true
  },
  codigo:{
      type: String,
      required:true
  },
  email:{
      type: String,
      required: true
  }
});

module.exports = mongoose.model('Mentorizado', mentorizadoSchema);