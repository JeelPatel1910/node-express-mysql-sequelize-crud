const express = require("express");
const { home , createTodo, getTodos ,getTodo ,updateTodo, deleteTodo , deleteAll} = require('../controllers/todoControllers');
const router = express.Router();    

router.get("/", home);
router.post("/createTodo", createTodo);
router.get("/getTodos", getTodos);
router.get("/getTodo/:id", getTodo);
router.put("/updateTodo/:id", updateTodo);
router.delete("/deleteTodo/:id", deleteTodo);
router.delete("/deleteAll/", deleteAll);

module.exports = router;