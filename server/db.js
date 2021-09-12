const mongoose = require("mongoose");

module.exports = async () => {
    try {
        const connectionParams = {
            useNewUrlParser: true,
            useCreateIndex: true,
            useUnifiedTopology: true,
        };
        await mongoose.connect(
            "mongodb+srv://Testing:5tB9FlmMPgtxA9t7@cluster0.b03bz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
            connectionParams
        );
        console.log("Connected to database.");
    }
     catch (error) {
        console.log("Could not connect to database.", error);
    }
};
