const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
const port = 3000;
// Enable CORS for all routes
app.use(cors());
// Enable JSON parsing for incoming requests
app.use(express.json());

// Proxy endpoint
app.post("/proxy", async (req, res) => {
  try {
    const { message } = req.body;

    // Forward the request to the Salesforce API
    const response = await axios.post(
      "https://wavedev01-dev-ed.my.salesforce-sites.com/exam/services/apexrest/HelloWorld",
      {
        message,
      },
      {
        headers: {
          "Content-Type": "application/json;charset=UTF-8",
        },
      }
    );
    console.log(res);
    // Send the response back to the client
    res.json(response.data);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "An error occurred" });
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
