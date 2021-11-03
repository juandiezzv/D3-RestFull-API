const mongoose = require("mongoose");

const mentorSchema = mongoose.Schema({
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
  profesion:{
      type:String,
      required:true
  },
  email: {
    type: String,
    required: true

  },
  cargo:{
      type:String,
      required:true
  }
});

module.exports = mongoose.model('Mentor', mentorSchema);