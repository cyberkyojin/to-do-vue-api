const express = require("express");
const app = express();

const mongoose = require("mongoose");

const principal = require("./routes/principal");

const cors = require("cors");

app.use(cors());

mongoose
	.connect("mongodb connection", {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() => {
		console.log("mongoose connected");
	})
	.catch((err) => {
		console.log("mongoose not connected");
	});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/", principal);

app.listen(8069, () => console.log("server running... 8069"));
