const dotenv = require("dotenv");
dotenv.config({ path: "./.env" });
const PORT = process.env.PORT || 4400;
const { DB_NAME } = require("./constants");
const { connectDB } = require("./db");
const { aa } = require("../mm.js");
console.log(aa);
console.log(process.env.MONGODB_URL, DB_NAME, PORT);
connectDB();

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
