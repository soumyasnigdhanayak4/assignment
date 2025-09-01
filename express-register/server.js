
const express = require("express");
const app = express();


app.use(express.json());

app.get("/", (req, res) => {
  res.send("soumya is intelligent");
});



app.post("/register", (req, res) => {
  const { name, email, password } = req.body;


  if (!name || !email || !password) {
    return res.status(400).json({ error: "All fields are required." });
  }

  if (!email.includes("@") || !email.includes(".")) {
    return res.status(400).json({ error: "Invalid email format." });
  }

  if (password.length < 8) {
    return res.status(400).json({ error: "Password must be at least 8 characters long." });
  }


  console.log("New Registration:", { name, email, password });

  return res.json({ message: "Registration successful!" });
});


const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
