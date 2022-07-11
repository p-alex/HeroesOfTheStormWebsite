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
    `mongodb+srv://alex-daniel:${process.env.MONGO_URI}@cluster0-q39go.mongodb.net/championsDB`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("MongoDB Connected !"))
  .catch((err) => console.log(err));

app.listen(process.env.PORT || 8000, () => {
  console.log("Server started on port 8000");
});

//Use Routes

app.use("/api/champions", champions);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("hots/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "hots", "build", "index.html"));
  });
}
