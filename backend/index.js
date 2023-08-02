const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));



app.post("/authenticate", async (req, res) => {
  const { username } = req.body;
    try {
        const r = await axios.put("https://api.chatengine.io/users/",
            { username: username, secret: username, first_name: username },
            { headers: { "private-key": "7fa989fa-5c39-4081-ae2b-7e4dcd48f103" } }
        );
        return res.status(r.status).json(r.data);
    } catch (e) {
        return res.status(e.response).json(e.response);
    }
});

app.listen(3001);