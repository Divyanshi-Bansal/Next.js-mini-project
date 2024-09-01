import React from 'react'

const ToDo = () => {

    type TODO = {
        toDoId: number,
        toDoTitle: string,
        toDoCategory: string,
        toDoComplete: boolean
    }

    const toDoList: TODO[] = [
        {
            toDoId: 1,
            toDoTitle: "Get up",
            toDoCategory: "daily routine",
            toDoComplete: true
        },
        {
            toDoId: 2,
            toDoTitle: "Get ready",
            toDoCategory: "daily routine",
            toDoComplete: true
        },
        {
            toDoId: 3,
            toDoTitle: "Go to work",
            toDoCategory: "daily routine",
            toDoComplete: true
        }
    ];

    const TODOLIST_STYLE = {
      "tableHead" : {
        display:"flex",
        border:"1px solid black"
      }
    }

  return (
    <div>
      <div className='flex flex-col'>
        <h1>ToDo List</h1>
          <table border={1} cellPadding={5}>
            <thead >
              <th>Id</th>
              <th>Title</th>
              <th>Category</th>
              <th>Complete</th>
            </thead>
            <tbody>
              {
                toDoList.map((todo, index) =>
                  <tr>
                    <td>{todo.toDoId}</td>
                    <td>{todo.toDoTitle}</td>
                    <td>{todo.toDoCategory}</td>
                    <td>{todo.toDoComplete}</td>
                  </tr>
                )
              }
            </tbody>
          </table>
      </div>
    </div>
  )
}

export default ToDo
