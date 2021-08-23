import React from 'react'
import TaskItem from './TaskItem'

// eslint-disable-next-line
class TaskList extends React.Component {
   render() {

      var { tasks } = this.props // var tasks = this.props.tasks
      var elements = tasks.map((task, index) => {
         return (
            <TaskItem key={index} index={index} item={task} onUpdate1={this.props.onUpdate0} onDelete={this.props.onDeleteTask}
               onUpdateTask={this.props.onUpdateTask}
            />
         )
      })

      return (
         <>
         <div>&nbsp;</div>
         <table className="table table-bordered table-hover">
            <thead>
               <tr>
                  <th className="text-center">STT</th>
                  <th className="text-center">Tên</th>
                  <th className="text-center">Trạng Thái</th>
                  <th className="text-center">Hành Động</th>
               </tr>
            </thead>
            <tbody>
               <tr>
                  <td />
                  <td>
                     <input type="text" className="form-control" />
                  </td>
                  <td>
                     <select className="form-control">
                        <option value={-1}>Tất Cả</option>
                        <option value={0}>Ẩn</option>
                        <option value={1}>Kích Hoạt</option>
                     </select>
                  </td>
                  <td />
               </tr>
              {elements}
            </tbody>
         </table>
         </>
      );
   }

}

export default TaskList;
