import React, {useState} from "react";

const taskManager = (action, options) => {

    let tasks = JSON.parse(localStorage.getItem("tasks"));

    switch(action){
        case "ADD_TASK": {
            tasks.push({
                name: options.name,
                completed: false,
                created_at: Date.now()
            })
            break;
        }
        case "EDIT_TASK": {
            const allTasks = document.querySelectorAll(".all-tasks");
            allTasks.forEach(task => {
                console.log(task.textContent)
            })
            const myTask = tasks.filter((task, index) => {
                console.log(task, options)
                if(task.name === allTasks[index].name){
                    
                } 
            })
            // console.log(myTask)
            break;
        }
        case "DELETE_TASK": {
            tasks = tasks.filter((task) => {
                return task.name !== options.name
            })
            break;
        }
        case "COMPLETE_TASK": {
            break;
        }
        default: break;
    }

    localStorage.setItem("tasks", JSON.stringify(tasks))
    return JSON.stringify(tasks);
}





export default taskManager;