import React, { useEffect } from "react";
import { Grid } from "@material-ui/core";
import { Column } from "material-table";
import { Task } from "../../redux/TaskState";
import {  useDispatch } from "react-redux";
import { AddTaskAction, DeleteTaskAction, FetchTasksAction } from "../../redux/TaskActions";

import { MuiTable } from "../common";
import TaskSummary from "./TaskSummary";
import { useTasks } from "../../Hooks/useTasks";



const TaskComponent: React.FC<any> = () => {

    const { tasks, loading} = useTasks();

    useEffect(() => {
        dispatch(FetchTasksAction());
    }, [])

 
    const dispatch = useDispatch();

    const handleAddRow = (task: Task) => dispatch(AddTaskAction(task));

    const handleDeleteRow = (task: Task) => dispatch(DeleteTaskAction(task));

    return <Grid container spacing={2} style={{ margin: 10 }}>
        <Grid item xs={8}>
            <MuiTable
                isLoading={loading}
                title="Task Grid"
                columnHeaders={[...columnHeaders]}
                data={tasks}
                addRow={handleAddRow}
                deleteRow={handleDeleteRow}
            />
        </Grid>
        <TaskSummary />
    </Grid>
}
const columnHeaders: Array<Column<Task>> = [
    { title: 'Id', field: 'id', hidden: true },
    { title: 'Title', field: 'title' },
    { title: 'Description', field: 'description' },
    {
        title: 'Status',
        field: 'status',
        lookup: { Active: 'Active', New: 'New', Resolved: 'Resolved', Closed: 'Closed' },
    },
]

export default TaskComponent