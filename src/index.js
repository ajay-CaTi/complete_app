const dotenv = require("dotenv");
dotenv.config({ path: "./.env" });
const PORT = process.env.PORT || 4400;
const { connectDB } = require("./db");
const { app } = require("./app.js");
console.log(PORT);

// DB function call
connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is listen on port: ${PORT}`);
    });
    app.on("error", (error) => {
      console.log("our app is not able to talk to db", error);
      throw error;
    }); // listners listen on many events | may be our apps wont able to talk
  })
  .catch((error) => {
    console.log("Error occured", error);
  });

// (async () => {
//   try {
//     await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);
//     app.on("error", (error) => {
//       console.log("our app is not able to talk to db", error);
//       throw error;
//     }); // listners listen on many events | may be our apps wont able to talk
//     app.listen(PORT, () => {
//       console.log("app listen on port", PORT);
//     });
//   } catch (error) {
//     console.log("ERROR", error);
//     throw error;
//   }
// })();
