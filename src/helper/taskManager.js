const taskManager = (action, options) => {

    let TASKS = [
        {
            name: "Book Appointment",
            completed: false,
            created_at: 1639278346000,
            edited_at: 1639278346000,
            hidden: false,
        },
        {
            name: "Recharge Mobile",
            completed: false,
            created_at: 1639105546000,
            edited_at: 1639105546000,
            hidden: false,
        },
        {
            name: "Buy Groceries",
            completed: true,
            created_at: 1639451146000,
            edited_at: 1639451146000,
            hidden: false,
        },
    ];

    let tasks = TASKS; 
    if(!localStorage.getItem("tasks")){
        localStorage.setItem("tasks", JSON.stringify(TASKS));
    } else {
        tasks = JSON.parse(localStorage.getItem("tasks"));
    }


    switch(action){
        case "ADD_TASK": {
            tasks.push({
                name: options.name,
                completed: false,
                created_at: Date.now(),
                hidden: false,
                edited_at: Date.now(),
            })
            break;
        }
        case "EDIT_TASK": {
            tasks = tasks.map(task => {
                if(task.name === options.name){
                    task.name = options.newName
                    task.edited_at = Date.now();
                }
                return task;
            })
            break;
        }
        case "DELETE_TASK": {
            tasks = tasks.filter((task) => {
                return task.name !== options.name
            })
            break;
        }
        case "COMPLETE_TASK": {
            tasks = tasks.map((task) => {
                task.completed = task.name === options.name ? !task.completed : task.completed
                return task;
            })
            break;
        }
        case "SEARCH_TASK": {
            tasks = tasks && tasks.map(task => {
                let taskNameRegExp = options.searchValue ? new RegExp(options.searchValue, "ig") : undefined;
                let exists = taskNameRegExp?.test(task.name);
                task.hidden = exists ? true : false;
                return task;
            })
            break;
        }
        default: break;
    }

    localStorage.setItem("tasks", JSON.stringify(tasks))
    return JSON.stringify(tasks);
}





export default taskManager;