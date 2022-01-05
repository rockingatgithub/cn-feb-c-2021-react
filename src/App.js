import React from "react";
import AddTask from "./Form";

class App extends React.Component{

  initTask = [ { name: 'work', date: '1'  }, { name: 'work2', date: '2'  }, { name: 'work3', date: '3'  }, { name: 'work4', date: '4'  }  ]

  constructor(){
    super();
    this.state = {
      tasks: this.initTask,
      currentTask: '',
      currentDate: '',
    }
  }

  addTaskField = (e) => {
    this.setState({currentTask: e.target.value})
  }


  addDateField = (e) => {
    this.setState({currentDate: e.target.value})
  }

  addTask = () => {

    let newTask = {
      name: this.state.currentTask,
      date: this.state.currentDate
    }

    this.setState({tasks: [...this.state.tasks, newTask]})

  }

  render() {

   return  <div>

      <ul>
      {this.state.tasks.map((task) => <li> <div>{task.name}</div>  <div>{task.date}</div>  </li>)}
      </ul>

    <h1>
      Add task
    </h1>

    {AddTask(this.state.currentDate, this.state.currentTask, this.addTask, this.addDateField, this.addTaskField)}

    </div>
  }


}

export default App;
