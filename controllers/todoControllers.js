const db = require("../model")
const Todo = db.models.Todo;
exports.home = (req, res) =>{
    res.send("Hello ! Welcome")
};

// create Todos
exports.createTodo = async(req, res) => {
    try{
        const { title, tasks } = req.body;

        //to check all the details
        if(!title || !tasks){
            throw new Error("Title and Email are Required");
        }
        
        //Inserting into the Database
        const todo = await Todo.create({title,tasks });
        res.status(201).json({
            success: true,
            message: "Task created successfully",
            todo,
        });
    }catch (error){
        console.log(error);
    }
};

//get all the todos
exports.getTodos = async(req, res) =>{
    try{
        const todos = await Todo.findAll();
        if(todos !== null) {
        res.status(200).json({
            success: true,
            todos
        })}
        else {
          res.status(204).json({
            success:true,
            message: "no Data available"
          })
        }
    }
    catch(error){
        console.log(error);
        res.status(401).json({
            success: false,
            message: error.message,
        })
    }
}

//get a single todo
exports.getTodo = async(req, res) =>{
    try{
        const id = req.params.id;
        const todo = await Todo.findByPk(id);
        if(todo !== null) {
            res.status(200).json({
                success: true,
                todo
            })}
            else {
                res.status(204).json({
                  success:true,
                  message: "no Data available"
                })
              }
    }
    catch(error){
        console.log(error);
        res.status(401).json({
            success: false,
            message: error.message,
        })
    }
}

//update the todos
exports.updateTodo = async(req, res) => {
   const id = req.params.id;
     
     await Todo.update(req.body,{
        where: {id:id}
     })
    .then(num =>{
        if(num ==1){
            res.status(200).json({
                success: true,
                message: "Todos updated Successfully",
             });
        }
         else{
            res.status(200).json({
                success: true,
                message: "No data available",
             });
         }
    })
    .catch(error => {
       console.log(error);
       res.status(401).json({
         success: false,
         message: error.message,
       }) 
    });
}

//delete Todos
exports.deleteTodo = async(req, res) => {
    const id = req.params.id;
    try{
    await Todo.destroy({
       where: {id:id}
    });
    res.status(200).json({
       success: true,
       message: "Todos deleted Successfully",
    })
   }
   catch(error){
      console.log(error);
      res.status(401).json({
        success: false,
        message: error.message,
      })
   }
}

//delete Todos
exports.deleteAll = async(req, res) => {
    const id = req.params.id;
    try{
    await Todo.destroy({
        truncate: true
    });
    res.status(200).json({
       success: true,
       message: "Todos deleted Successfully",
    })
   }
   catch(error){
      console.log(error);
      res.status(401).json({
        success: false,
        message: error.message,
      })
   }
}