const express = require("express");
const cors = require("cors");
const usersRoute = require("./routes/user.routes")

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

app.use("/users", usersRoute);


app.listen(port, () => {
    console.log(`Server is running on ${port}`)
})

app.all("*", (req, res) => {
    res.send("No route found");
})