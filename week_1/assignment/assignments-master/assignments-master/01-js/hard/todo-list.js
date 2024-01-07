/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {
  constructor(){
    this.arr=[];
  }
  add(todo){
    this.arr.push(todo);
  }
  remove(indexOfTodo){
    let jj=this.arr.filter(function(item,index){
      if(index!==indexOfTodo){
        return item;
      }
    });
    this.arr=jj;
  }
  update(index, updatedTodo){
    this.arr[index]=updatedTodo;
  }
  getAll(){
    return this.arr;
  }
  get(indexOfTodo){
    return this.arr[indexOfTodo];
  }
  clear(){
    this.arr=[];
  }

}

//testing
let jj =new Todo();
jj.add("make money");
jj.add("fighting");
jj.update(0,'make andha paisa');
console.log(jj.get(0));

module.exports = Todo;
