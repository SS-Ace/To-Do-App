const tasks = require("./routes/tasks");
const connection = require("./db");
const cors = require("cors");
const express = require("express");
const app = express();

connection();
app.use(express.json());
app.use(cors());
app.use("/api/tasks", tasks);
if(process.env.NODE_ENV === "production"){
    app.use(express.static(path.join("client/build")));
    app.get("*",(req, res)=>{
        res.sendFile(path.resolve(_dirname, "../client", "build", "index.html"));
    });
}
const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listening on port ${port}...`));

