let tasks = [];
module.exports = {
getAll: () => tasks,
add: (task) => tasks.push(task),
delete: (index) => tasks.splice(index, 1)
};