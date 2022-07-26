const { getAllTasks, getTaskById, createTask, deleteTask, updateTask } = require('./tasks.controllers.js');

const getAll = (req, res) => {
    const data = getAllTasks();
    res.status(200).json({ 
        data
    })
}

const getById = (req, res) => {
    const id = Number(req.params.id);
    if (id) {
        const data = getTaskById(id);
        if (data.id) {
            res.status(200).json(data);
        }else{
            res.status(400).json({message: 'Invalid ID'})
        }
    }else {
        res.status(400).json({message: 'ID is not a number'})
    }
}

const postTask = (req, res) => {
    const data = req.body;
    if (data) {
        const value = createTask(data);
        res.status(201).json(value);
    } else {
        res.status(400).json({ message: 'Try with another ID' })
    }
}

const deleteTasks = (req, res) => {
    const id = Number(req.params.id);
    if (typeof id === 'number') {
        const deleted = deleteTask(id);
        if (deleted) {
            res.status(204).json
        } else {
            res.status(400).json({message: 'Invalid ID'})
        }
    } else {
        res.status(400).json({message: 'Invalid ID'})
    }
}

const updatedTasks = (req, res) => {
    const id = Number(req.params.id);
    const data = req.body;
    if (id) {
        updateTask(id,data);
        res.status(200).json(userDB);
    }
    else {
        res.status(400).json({ message: "Missing data" });
    }   
}

module.exports = {
    getAll,
    getById,
    postTask,
    deleteTasks,
    updatedTasks
}
