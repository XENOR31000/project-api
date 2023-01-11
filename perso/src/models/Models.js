import mongoose from "mongoose";


const modelschema = new mongoose.Schema({
    name: {
      required: true,
      type: String,
    },
    model: {
      required: true,
      type: String,
    },
    variant: {
      required: true,
      type: String,
    },
    options: {
      required: true,
      type: String,
    },
  });
  
  const Models = mongoose.model("Models", modelschema);
  
  export default Models;