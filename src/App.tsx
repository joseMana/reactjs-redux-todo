import React, { Fragment } from 'react';
import { Header } from './component/layout';
import TaskComponent from './component/Task/Task';


function App() {
  return (
    <Fragment>
      <Header/>
      <TaskComponent />
    </Fragment>
  );
}

export default App;
