import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";

import { useTasks } from "../../Hooks/useTasks";

export default () => {
    const { tasks } = useTasks();
  
    return <AppBar position="static">
        <Toolbar>
            <Typography variant="subtitle1">
                Total Records: {tasks.length}
            </Typography>
        </Toolbar>
    </AppBar>
}