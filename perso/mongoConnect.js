import mongoose from "mongoose";

// on kill le process si on a un event error
mongoose.connection.on("error", () => {
  console.log("erreur du process");
  process.exit(1);
});

// on définit les options de connexion + on se connecte
const connectMongo = async () => {
  //on définit les options de connexion
  const options = {
    socketTimeoutMS: 10000,
    serverSelectionTimeoutMs: 5000,
  };
  // on se connecte
  await mongoose.connect(process.env.MONGO_URL, options).catch((err) => {
    //on log l'err
    console.log(err);
  });
};

export default connectMongo;
