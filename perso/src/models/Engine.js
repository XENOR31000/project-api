import mongoose from "mongoose";


const enginemodelschema = new mongoose.Schema({
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
    turbo: {
      required: true,
      type: Boolean,
    },
    horsepower: {
      required: true,
      type: String, 
    },
    
  });
  
  const Engine = mongoose.model("Engine", enginemodelschema);
  
  export default Engine;