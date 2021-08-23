import React from 'react'

// eslint-disable-next-line
class TaskItem extends React.Component {

   onUpdate = () => {
      this.props.onUpdate1(this.props.item.id)
   }

   onDelete = () => {
      const id = this.props.item.id
      this.props.onDelete(id)
   }

   onUpdateTask = () => {
      const id = this.props.item.id
      this.props.onUpdateTask(id)
   }

   render() {

      var { item, index } = this.props;


      return (
         <tr>
            <td>{index + 1}</td>
            <td>{item.name}</td>
            <td className="text-center">
               <span className={item.status === true ? 'label label-success' : 'label label-danger'}
                  onClick={this.onUpdate}>
                  {item.status === true ? 'Kich Hoat' : 'An'}
               </span>
            </td>
            <td className="text-center">
               <button type="button" className="btn btn-warning">
                  <span className="fa fa-pencil mr-5" onClick={this.onUpdateTask}/>Sửa
               </button>
               &nbsp;
               <button type="button" className="btn btn-danger" onClick={this.onDelete}>
                  <span className="fa fa-trash mr-5" />Xóa
               </button>
            </td>
         </tr>
      );
   }

}

export default TaskItem;
