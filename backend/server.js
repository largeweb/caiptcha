const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");
const app = express();
const port = 3001;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post("/submit-email", (req, res) => {
  const email = req.body.email;
  console.log(`Received email: ${email}`);

  // Read existing emails
  fs.readFile("emails.json", (err, data) => {
    if (err && err.code === "ENOENT") {
      // File not found, create file with the email
      fs.writeFile("emails.json", JSON.stringify([email]), (err) => {
        if (err) throw err;
        console.log("Email saved to file");
      });
    } else if (err) {
      throw err;
    } else {
      // File exists, append email
      let emails = JSON.parse(data);
      emails.push(email);
      fs.writeFile("emails.json", JSON.stringify(emails), (err) => {
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
