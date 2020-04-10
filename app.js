const express = require("express");
const mongoose = require("mongoose");
const app = express();
if (process.env.NODE_ENV === "production") {
  app.use(express.static("hots/build"));
}
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost:27017/championsDB",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

mongoose.connection.on("connected", () => {
  console.log("Mongoose is connected !");
});
//q10wC5otdrTF8MLH

const championSchema = new mongoose.Schema({
  name: String,
  title: String,
  desc: String,
  imgURL: String,
  damage: String,
  utility: String,
  survivability: String,
  complexity: String,
  type: String,
  universe: String,
  secondForm: Boolean,
});

const Champion = mongoose.model("Champion", championSchema);

app.listen(process.env.PORT || 5000, () => {
  console.log("Server running on port 5000");
});

app.get("/champions", (req, res) => {
  Champion.find({}, (err, results) => {
    if (err) {
      console.log(err);
    } else {
      console.log("DATA SENT !");
      res.send(results);
    }
  });
});
