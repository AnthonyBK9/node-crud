const express = require('express');
const tasksRouter = require('./tasks/tasks.router').router

const app = express();
app.use(express.json());

// const tasksBD = [
//     {
//         id: 1,
//         name: 'Estudiar NodeJS',
//         description: 'Repasar los temas aprendidos'
//     }
// ]

// app.use('/api/v1/tasks', reuter)
app.use('/api/v1',tasksRouter)
// app.get('/tasks',(req, res) => {
//     res.status(200).json(tasksBD);
// })

// app.get('/tasks/:id',(req, res) => {
//     const tasksID = Number(req.params.id);
//     const filteredTasks = tasksBD.filter(tasks => tasks.id === tasksID);

//     if (filteredTasks.length > 0) {
//         res.status(200).json(filteredTasks[0]);
//     } else {
//         res.status(400).json({message: 'Invalid ID tasks'});
//     }
// })

// app.post('/tasks',(req, res) => {
//     const data = req.body
//     if (tasksBD.length === 0) {
//         const newTask = { 
//             id: 1,
//             ...data
//         }
//         tasksBD.push(newTask);
//     } else {
//         const newTask = { 
//             id: tasksBD[tasksBD.length - 1].id + 1,
//             ...data
//         }
//         tasksBD.push(newTask);
//     }
//     res.status(201).json(tasksBD);
// })

// app.delete('/tasks/:id', (req, res) => {
//     const tasksID = Number(req.params.id);
//     const index = tasksBD.findIndex(tasks => tasks.id === tasksID);

//     if (index !== -1) {
//         tasksBD.splice(index, 1)
//         res.status(204).json()
//     }
//     res.status(400).json({message: 'Invalid task ID'})
// })

// app.put('/tasks/:id', (req, res) => {
//     const tasksID = Number(req.params.id);
//     const data = req.body
//     const index = tasksBD.findIndex(tasks => tasks.id === tasksID);

//     if (index === -1) {
//         res.status(400).json({message: 'Invalid ID'})
//     }
//     if (data.name && data.description) {
//         tasksBD[index] = {
//             id,
//             name: data.name,
//             description: data.description
//         } 
//         res.status(201).json
//     } else {
//         res.status(400).json({message: 'Missing data'})
//     }
// })

app.listen(8000, () => {
    console.log('server started at port 8000');
})