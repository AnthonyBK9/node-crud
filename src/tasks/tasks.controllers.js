const tasksDB = [
    { 
        id: 1,
        tasks: "Aprender NodeJS",
        description: "Repasar los temas vistos en clase e investigar por cuenta propia",
        status: true,
    },{
        id: 2,
        tasks: "Aprendiendo React",
        description: "Buscar cursos o libros",
        status: true,
    }

];

const getAllTasks = () => {
    return tasksDB;
}

const getTaskById = (id) => {
    const data = tasksDB.filter(task => task.id === id)
    return data[0];
}

const createTask = (tasksObj) => {
    if (tasksDB.lenght === 0) {
        const newTask = {
            id: 1,
            name: "Aprender React",
            description: "Estudiar para ser Desarrollador Front End",
            status: true
        }
        tasksDB.push(newTask);
        return newTask;
    }
    const newTask = {
        id: tasksDB[tasksDB.length - 1].id + 1,
        name: tasksObj.name,
        description: tasksObj.description,
        status: tasksObj.status,
    }
    tasksDB.push(newTask);
    return newTask;
}

const deleteTask = (id) => {
    const index = tasksDB.findIndex( tasks => tasks.id === id);
    if (index !== -1) {
        tasksDB.splice(index, 1);
        return true;
    }
    return false;
}

const updateTask = (id,data) => {
    const index = tasksDB.findIndex( tasks => tasks.id === id);
    if (index !== -1) {
        tasksDB[index] = data
    } else {
        createTask(data);
        return tasksDB.at(-1)
    }
}

module.exports = {
    getAllTasks,
    getTaskById,
    createTask,
    deleteTask,
    updateTask,
}