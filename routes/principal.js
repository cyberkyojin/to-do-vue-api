const express = require("express");
const router = express.Router();

const mongoose = require("mongoose");
require("../models/task");
const Task = mongoose.model("task");

router.get("/", async (req, res) => {
	try {
		const tasks = await Task.find({});

		const response = {
			msg: "All tasks",
			tasks: tasks,
		};

		return res.status(200).send(response);
	} catch (err) {
		return res.status(500).send(err);
	}
});

router.post("/create", async (req, res) => {
	try {
		await new Task({ task: req.body.task }).save();

		const response = await {
			msg: "Task created",
			createdTask: req.body.task,
		};

		return await res.status(200).send(response);
	} catch (err) {
		return res.status(500).send(err);
	}
});

//temp

router.patch("/tf/:taskId/:trueOrFalse", async (req, res) => {
	await Task.findOneAndUpdate({_id: req.params.taskId}, {completed: req.params.trueOrFalse})
})

//

router.patch("/update/:taskId", async (req, res) => {
	try {
		const updatedTask = await Task.findOne({ _id: req.params.taskId});

		await Task.findOneAndUpdate(
			{ _id: req.params.taskId }, {task: req.body.taskE}
		);

		const response = {
			msg: "Task updated",
			updatedTask: updatedTask,
		};

		return res.status(200).send(response);
	} catch (err) {
		return res.status(500).send(err);
	}
});

router.delete("/delete/:taskId", async (req, res) => {
	try {
		const deletedTask = await Task.findOne({ _id: req.params.taskId });

		await Task.deleteOne({ _id: req.params.taskId });

		const response = {
			msg: "Task deleted",
			deletedTask: deletedTask,
		};

		return res.status(200).send(response);
	} catch (err) {
		return res.status(500).send(err);
	}
});

module.exports = router;
