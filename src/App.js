import React from 'react'
import TaskForm from './components/TaskForm';
import Control from './components/Control';
import TaskList from './components/TaskList';

// eslint-disable-next-line
class App extends React.Component {

   constructor(props) {
      super(props);
      this.state = {
         tasks: [],
         isDisplayForm: false,
         taskEditing: null
      }
   }

   componentDidMount() {
      if (localStorage && localStorage.getItem("tasks")) {
         var tasks = JSON.parse(localStorage.getItem("tasks"))

         this.setState({ tasks: tasks })
      }
   }

   onToggleButton = () => {
      this.setState({
         isDisplayForm: !this.state.isDisplayForm,
      })
   }

   onShowForm = () => {
      this.setState({
         isDisplayForm: true,
      })
   }

   onCloseForm = () => {
      this.setState({
         isDisplayForm: false,
      })
   }

   onSubmit = (data) => {
      var { tasks } = this.state
      if (data.id === '') {
         data.id = Math.round(Math.random() * 100)

         tasks.push(data)
      } else {
         var index = this.findIndex(data.id);
         tasks[index] = data;
      }

      this.setState({
         tasks: tasks,
         taskEditing: null,
      })

      localStorage.setItem('tasks', JSON.stringify(tasks))
   }

   onUpdateStatus = (id) => {
      var { tasks } = this.state
      //   console.log(tasks[1].status)
      var index = this.findIndex(id);
      if (index !== -1) {
         tasks[index].status = !tasks[index].status
         this.setState({
            task: tasks
         })
         localStorage.setItem("tasks", JSON.stringify(tasks))
      }
   }

   findIndex = (id) => {
      var { tasks } = this.state
      var results = -1
      tasks.forEach((task, index) => {
         if (task.id === id) {
            results = index
         }
      })
      return results
   }

   onDelete = (id) => {
      var { tasks } = this.state

      var index = this.findIndex(id);
      if (index !== -1) {
         tasks.splice(index, 1)

         this.setState({
            task: tasks
         })
         localStorage.setItem("tasks", JSON.stringify(tasks))
      }
      this.onCloseForm()
   }

   onUpdateTask = (id) => {
      var { tasks } = this.state

      var index = this.findIndex(id);
      var taskEdit = tasks[index]

      this.setState({
         taskEditing: taskEdit
      })
      this.onShowForm()

   }

   render() {

      var { tasks, isDisplayForm, taskEditing } = this.state // var tasks = this.state.tasks
      var elementsForm = isDisplayForm ? <TaskForm onCloseForm={this.onCloseForm} onSubmit={this.onSubmit} task={taskEditing} /> : '';
      return (
         // eslint-disable-next-line
         <div className="container">
            <div className="text-center">
               <h1>Quản Lý Công Việc</h1>
               <hr />
            </div>
            <div className="row">
               <div className={isDisplayForm ? 'col-xs-4 col-sm-4 col-md-4 col-lg-4' : ''}>
                  {elementsForm}
               </div>

               <div className={isDisplayForm ? 'col-xs-8 col-sm-8 col-md-8 col-lg-8' : 'col-xs-12 col-sm-12 col-md-12 col-lg-12'}>
                  <button type="button" className="btn btn-primary" onClick={this.onToggleButton}>
                     <span className="fa fa-plus mr-5" />Thêm Công Việc
                  </button>

                  <div className="row mt-15">
                     <Control />
                  </div>

                  <div className="row mt-15">
                     <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <TaskList tasks={tasks} onUpdate0={this.onUpdateStatus} onDeleteTask={this.onDelete} 
                              onUpdateTask={this.onUpdateTask} />
                     </div>
                  </div>
               </div>
            </div>
         </div>
      );
   }

}

export default App;
