import React, { useState, useEffect } from "react";
import { Task, TaskState } from "../redux/TaskState";
import { useSelector } from "react-redux";

export interface UseTasksHook {
    tasks: Array<Task>,
    loading: boolean | undefined
} 
export const useTasks = () : UseTasksHook => {
    
    let {tasks, loading} = useSelector<TaskState>(state=> state) as TaskState;
 
    return {
        tasks,
        loading
    }
}