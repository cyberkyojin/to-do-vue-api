const mongoose = require("mongoose");

// let date = new Date();
// let formattedDate = ((date.getDate() )) + "/" + ((date.getMonth() + 1)) + "/" + date.getFullYear();

const Task = new mongoose.Schema({
	task: {
		type: String,
		required: true,
	},

	completed: {
		type: Boolean,
		default: "false",
	},

	date: {
		type: Date,
		default: Date.now(),
	},
});

mongoose.model("task", Task);
