const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");
const cors = require("cors"); // Import CORS module
const path = require("path");
const app = express();
const port = 3001;

app.use(cors()); // Enable CORS for all routes
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post("/api/submit-email", (req, res) => {
  const email = req.body.email;
  console.log(`Received email: ${email}`);

  const emails_path = path.join(__dirname, "../emails.json");

  // Read existing emails
  fs.readFile(emails_path, (err, data) => {
    if (err && err.code === "ENOENT") {
      fs.writeFile(emails_path, JSON.stringify([email]), (err) => {
        if (err) throw err;
        console.log("Email saved to file");
      });
    } else if (err) {
      throw err;
    } else {
      // File exists, append email
      let emails = JSON.parse(data);
      emails.push(email);
      fs.writeFile(emails_path, JSON.stringify(emails), (err) => {
        if (err) throw err;
        console.log("Email added to file");
      });
    }
  });

  res.send("Email received");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
