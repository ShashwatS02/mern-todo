const router = require("express").Router();
let Todo = require("../models/todo.model");

// GET: Fetch all todos
router.route("/").get((req, res) => {
  Todo.find()
    .then((todos) => res.json(todos))
    .catch((err) => res.status(400).json("Error: " + err));
});

// POST: Add a new todo
router.route("/add").post((req, res) => {
  const task = req.body.task;
  const newTodo = new Todo({
    task,
  });

  newTodo
    .save()
    .then(() => res.json("Todo added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

// DELETE: Delete a todo by ID
router.route("/:id").delete((req, res) => {
  Todo.findByIdAndDelete(req.params.id)
    .then(() => res.json("Todo deleted."))
    .catch((err) => res.status(400).json("Error: " + err));
});

// PUT: Update a todo by ID (for toggling completion)
// This route was changed from '/update/:id' to '/:id' for consistency.
router.route("/:id").put((req, res) => {
  Todo.findById(req.params.id)
    .then((todo) => {
      if (!todo) {
        return res.status(404).json("Error: Todo not found");
      }
      todo.completed = !todo.completed; // Toggle the completed status

      todo
        .save()
        .then(() => res.json("Todo updated!"))
        .catch((err) => res.status(400).json("Error: " + err));
    })
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
