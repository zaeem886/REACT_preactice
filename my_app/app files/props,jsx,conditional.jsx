

// function Avatar(){
//     const avatarUrl = "https://i.imgur.com/7vQD0fPs.jpg";
//     const avatarAlt = "hedy lamarr";
//   return (
//     <img
//       className="avatar"
//       src={avatarUrl}
//       alt={avatarAlt}
//     />
//   );

// }



// export default function TodoList() {
//   return (
//     <>
//       <h1>Hedy Lamarr's Todos</h1>
//       <img 
//         src="https://i.imgur.com/yXOvdOSs.jpg" 
//         alt="Hedy Lamarr" 
//         className="photo" 
//       />
//       <Avatar />
//       <ul className='content'>
//         <li>Invent new traffic lights</li>
//         <li>Rehearse a movie scene</li>
//         <li>Improve the spectrum technology</li>
//       </ul>
//     </>
//   );
// }


// const today = new Date();

// function formatDate(date) {
//   return new Intl.DateTimeFormat(
//     'en-US',
//     { weekday: 'long' }
//   ).format(date);
// }

// export default function TodoList() {
//   return (
//     <h1>To Do List for {formatDate(today)}</h1>
//   );
// }

// export default function TodoList() {
//   return (
//   <ul style={
//   {
//     backgroundColor: 'black',
//     color: 'pink',
//     fontSize: '24px',
//     padding: '20px',    
//     margin: '20px',
//     borderRadius: '10px',
//     listStyleType: 'square',
//     fontFamily: 'Arial, sans-serif',
//     textAlign:'right'
//   }
// }>
//       <li>Improve the videophone</li>
//       <li>Prepare aeronautics lectures</li>
//       <li>Work on the alcohol-fuelled engine</li>
//     </ul>
//   );
// }
// const person = {
//   name: 'Gregorio Y. Zara',
//   theme: {
//     backgroundColor: 'black',
//     color: 'pink'
//   }
// };

// export default function TodoList() {
//   return (
//     <div style={person.theme}>
//       <h1>{person.name}'s Todos</h1>
//       <img
//         className="avatar"
//         src="https://i.imgur.com/7vQD0fPs.jpg"
//         alt="Gregorio Y. Zara"
//       />
//       <ul>
//         <li>Improve the videophone</li>
//         <li>Prepare aeronautics lectures</li>
//         <li>Work on the alcohol-fuelled engine</li>
//       </ul>
//     </div>
//   );
// }


// function Avatar({ person, size =100}) {
//   return (
//     <img
//       className="avatar"
//        src="https://i.imgur.com/1bX5QH6.jpg"
//       alt={person.name}
//       width={size}
//       height={size}
//     />
//   );
// }
// function Avatar(props) {
//   let  person=props.person;
//   let size=props.size;
//   return (
//     <img
//       className="avatar"
//        src="https://i.imgur.com/1bX5QH6.jpg"
//       alt={person.name}
//       width={size}
//       height={size}
//     />
//   );
// }


// function Profile(props) {
//   return (
//     <div className="card">
//       <Avatar {...props} />
//     </div>
//   );
// }
// import Avatar from './container/Avatar.jsx';


// function Card({ children }) {
//   return (
//     <div className="card">
//       {children}
//     </div>
//   );
// }

// export default function Profile() {
//   return (
//     <Card>
//       <text>Gregorio Y. Zara</text>
//     </Card>
//   );
// }
import './App.css';
import UserGreeting from './UserGreeting.jsx';
function App() {
  return(
<>
<UserGreeting isLoggedIn={false} username="zaeem"/>
</>


  );

}
export default App;