import { Component } from '@angular/core';
import { ToDoList } from 'src/Models/Task';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TodoList';
  taskName: string = '';
  idForToDo: number;
  toDos: ToDoList[];

  ngOnInit(): void {
    this.toDos = [{
      id: 1,
      taskName: 'createDropdown',
    },
    {
      id: 2,
      taskName: 'CreateNavBar',
    },
    {
      id: 3,
      taskName: 'createDynamicSearch',
    },
    {
      id: 4,
      taskName: 'showAllUsers',
    }]
    // Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    // Add 'implements OnInit' to the class.
    this.idForToDo = 5;

  }


  /**
   * @param index
   * @param id 
   */
  deleteTask(index: number, id: number) {
    console.log('Delete', index)
    if (this.toDos.length > 0) {
      this.toDos = this.toDos.filter(item => item.id !== id);
    } else {
      alert('Please Add Task to the list')
    }
  }


  /**
   * Creating New Task
   */
  addNewTask() {
    if (this.taskName.trim().length === 0) {
      alert('Task Name Can\'t be Empty');
      return;
    }
    this.toDos.push({
      id: this.idForToDo,
      taskName: this.taskName
    })
    this.idForToDo++;
    this.taskName = '';
    console.log(this.toDos)
  }
}
