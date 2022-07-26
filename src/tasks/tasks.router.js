const router = require('express').Router()
const httpTasks = require('./tasks.http')

router.route('/tasks')
    .get(httpTasks.getAll)
    .post(httpTasks.postTask)

router.route('/tasks/:id')
    .get(httpTasks.getById)
    .delete(httpTasks.deleteTasks)
    .put(httpTasks.updatedTasks)

module.exports = {
    router
}
