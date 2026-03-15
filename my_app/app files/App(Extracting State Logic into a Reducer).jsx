//extracting state logic into a reducer



//-----------------------------------------step one----------------------
//dispatch(action) → sends information about what happened.
// The object passed to dispatch is called an action

// function handleAddTask(text) {
//   setTasks([
//     ...tasks,
//     {
//       id: nextId++,
//       text: text,
//       done: false,
//     },
//   ]);
// }

// function handleChangeTask(task) {
//   setTasks(
//     tasks.map((t) => {
//       if (t.id === task.id) {
//         return task;
//       } else {
//         return t;
//       }
//     })
//   );
// }

// function handleDeleteTask(taskId) {
//   setTasks(tasks.filter((t) => t.id !== taskId));
// }

//The object you pass to dispatch is called an “action”:
// function handleDeleteTask(taskId) {
//   dispatch(
//     // "action" object:
//     {
//       type: 'deleted',
//       id: taskId,
//     }
//   );
// }



//----------------step two---------------------------//

// A reducer function is where you will put your state logic. It takes two arguments, the current state and the action object, and it returns the next state:

// function yourReducer(state, action) {
//   // return next state for React to set
// }

// React will set the state to what you return from the reducer.

// To move your state setting logic from your event handlers to a reducer function in this example, you will:

//     Declare the current state (tasks) as the first argument.
//     Declare the action object as the second argument.
//     Return the next state from the reducer (which React will set the state to).

//you can use if else but convention is to use switch statement cause its easier to read and understand that you are checking the type of action and doing something based on that. Also, it makes it easier to add new action types in the future without having to change the existing codee.



// function tasksReducer(tasks, action) {
//   switch (action.type) {
//     case 'added': {
//       return [
//         ...tasks,
//         {
//           id: action.id,
//           text: action.text,
//           done: false,
//         },
//       ];
//     }
//     case 'changed': {
//       return tasks.map((t) => {
//         if (t.id === action.task.id) {
//           return action.task;
//         } else {
//           return t;
//         }
//       });
//     }
//     case 'deleted': {
//       return tasks.filter((t) => t.id !== action.id);
//     }
//     default: {
//       throw Error('Unknown action: ' + action.type);
//     }
//   }
// }


//wrapping each case block into the { and } curly braces is recommended so that variables declared inside of different cases don’t clash with each other. Also, a case should usually end with a return. If you forget to return, the code will “fall through” to the next case, which can lead to mistakes!

//----------------step three---------------------------//
//Step 3: Use the reducer from your component

// Finally, you need to hook up the tasksReducer to your component. Import the useReducer Hook from React and call it at the top of your component. It takes two arguments: the reducer function and the initial state. It returns an array with two values: the current state and the dispatch function.


// import { useReducer } from 'react';
// import AddTask from './AddTask.js';
// import TaskList from './TaskList.js';

// export default function TaskApp() {
//   const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);

//   function handleAddTask(text) {
//     dispatch({
//       type: 'added',
//       id: nextId++,
//       text: text,
//     });
//   }

//   function handleChangeTask(task) {
//     dispatch({
//       type: 'changed',
//       task: task,
//     });
//   }

//   function handleDeleteTask(taskId) {
//     dispatch({
//       type: 'deleted',
//       id: taskId,
//     });
//   }

//   return (
//     <>
//       <h1>Prague itinerary</h1>
//       <AddTask onAddTask={handleAddTask} />
//       <TaskList
//         tasks={tasks}
//         onChangeTask={handleChangeTask}
//         onDeleteTask={handleDeleteTask}
//       />
//     </>
//   );
// }

// function tasksReducer(tasks, action) {
//   switch (action.type) {
//     case 'added': {
//       return [
//         ...tasks,
//         {
//           id: action.id,
//           text: action.text,
//           done: false,
//         },
//       ];
//     }
//     case 'changed': {
//       return tasks.map((t) => {
//         if (t.id === action.task.id) {
//           return action.task;
//         } else {
//           return t;
//         }
//       });
//     }
//     case 'deleted': {
//       return tasks.filter((t) => t.id !== action.id);
//     }
//     default: {
//       throw Error('Unknown action: ' + action.type);
//     }
//   }
// }

// let nextId = 3;
// const initialTasks = [
//   {id: 0, text: 'Visit Kafka Museum', done: true},
//   {id: 1, text: 'Watch a puppet show', done: false},
//   {id: 2, text: 'Lennon Wall pic', done: false},
// ];



// Writing concise reducers with Immer

// Just like with updating objects and arrays in regular state, you can use the Immer library to make reducers more concise. Here, useImmerReducer lets you mutate the state with push or arr[i] = assignment:

// import { useImmerReducer } from 'use-immer';
// import AddTask from './AddTask.js';
// import TaskList from './TaskList.js';

// function tasksReducer(draft, action) {
//   switch (action.type) {
//     case 'added': {
//       draft.push({
//         id: action.id,
//         text: action.text,
//         done: false,
//       });
//       break;
//     }
//     case 'changed': {
//       const index = draft.findIndex((t) => t.id === action.task.id);
//       draft[index] = action.task;
//       break;
//     }
//     case 'deleted': {
//       return draft.filter((t) => t.id !== action.id);
//     }
//     default: {
//       throw Error('Unknown action: ' + action.type);
//     }
//   }
// }

// export default function TaskApp() {
//   const [tasks, dispatch] = useImmerReducer(tasksReducer, initialTasks);

//   function handleAddTask(text) {
//     dispatch({
//       type: 'added',
//       id: nextId++,
//       text: text,
//     });
//   }

//   function handleChangeTask(task) {
//     dispatch({
//       type: 'changed',
//       task: task,
//     });
//   }

//   function handleDeleteTask(taskId) {
//     dispatch({
//       type: 'deleted',
//       id: taskId,
//     });
//   }

//   return (
//     <>
//       <h1>Prague itinerary</h1>
//       <AddTask onAddTask={handleAddTask} />
//       <TaskList
//         tasks={tasks}
//         onChangeTask={handleChangeTask}
//         onDeleteTask={handleDeleteTask}
//       />
//     </>
//   );
// }

// let nextId = 3;
// const initialTasks = [
//   {id: 0, text: 'Visit Kafka Museum', done: true},
//   {id: 1, text: 'Watch a puppet show', done: false},
//   {id: 2, text: 'Lennon Wall pic', done: false},
// ];

// Reducers must be pure, so they shouldn’t mutate state. But Immer provides you with a special draft object which is safe to mutate. Under the hood, Immer will create a copy of your state with the changes you made to the draft. This is why reducers managed by useImmerReducer can mutate their first argument and don’t need to return state.


