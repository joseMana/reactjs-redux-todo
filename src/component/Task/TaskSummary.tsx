import  React from "react";
import { Grid, makeStyles } from "@material-ui/core";
import { MuiSummaryCard } from "../common";
import { TaskStatus } from "./TaskStatus";
import { useTasks } from "../../Hooks/useTasks";

const useStyles = makeStyles({
  
    CardRoot: {
        display: "flex",
        flexDirection: "column",
    }
});

export default () => {
    const classes = useStyles();
    const { tasks } = useTasks();

     return <Grid item xs={4} className={classes.CardRoot}>
     <MuiSummaryCard
         title="New"
         style={{ backgroundColor: "gray" }}
         total={tasks.filter(p=>p.status === TaskStatus.New).length}
     />

     <MuiSummaryCard
         title="Active"
         style={{ backgroundColor: "green" }}
         total={tasks.filter(p=>p.status === TaskStatus.Active).length}
     />

     <MuiSummaryCard
         title="Resolved"
         style={{ backgroundColor: "yellow" }}
         total={tasks.filter(p=>p.status === TaskStatus.Resolved).length}
     />

     <MuiSummaryCard
         title="Closed"
         style={{ backgroundColor: "purple" }}
         total={tasks.filter(p=>p.status === TaskStatus.Closed).length}
     />
 </Grid>
}