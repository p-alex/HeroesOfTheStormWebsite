const express = require("express");
const mongoose = require("mongoose");
const champions = require("./routes/api/champions");
const path = require("path");
const app = express();
if (process.env.NODE_ENV === "production") {
  app.use(express.static("hots/build"));
}
mongoose
  .connect(
    "mongodb+srv://alex-daniel:test123@cluster0-q39go.mongodb.net/championsDB",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("MongoDB Connected !"))
  .catch((err) => console.log(err));

// mongoose.connection.on("connected", () => {
//   console.log("Mongoose is connected !");
// });
//q10wC5otdrTF8MLH
//mongodb+srv://alex-daniel:q10wC5otdrTF8MLH@championdb-q39go.mongodb.net/test?retryWrites=true&w=majority

app.listen(process.env.PORT || 5000, () => {
  console.log("Server started on port 5000");
});

//Use Routes

app.use("/api/champions", champions);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("hots/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "hots", "build", "index.html"));
  });
}

app.get("/champions", (req, res) => {
  Champion.find({}, (err, results) => {
    if (err) {
      console.log(err);
    } else {
      console.log("DATA SENT !");
      res.json(results);
    }
  });
});
