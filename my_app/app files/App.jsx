// import { useState } from 'react';
// import reactLogo from './assets/react.svg';
// import viteLogo from '/vite.svg';
// import './App.css';

// const products = [
//   { title: 'Cabbage', id: 1 },
//   { title: 'Garlic', id: 2 },
//   { title: 'Apple', id: 3 },
// ];

// function ProductList() {
//   return (
//     <ul>
//       {products.map((product) => (
//         <li key={product.id}>{product.title}</li>
//       ))}
//     </ul>
//   );
// }

// function MyButton({ count, onClick }) {
//   return (
//     <button onClick={onClick}>
//       click me, count is {count}
//     </button>
//   );
// }

// function AboutPage() {
//   return (
//     <>
//       <h1>About</h1>
//       <p>
//         Hello there.<br />How do you do?
//       </p>
//     </>
//   );
// }

// const user = {
//   name: 'Hedy Lamarr',
//   imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
//   imageSize: 90,
// };

// // This is an example of conditional statement in React
// let isLoggedIn = false;

// function Greeting() {
//   if (isLoggedIn) {
//     return <h1>Welcome back!</h1>;
//   }
//   return <h1>Please sign up.</h1>;
// }

// export default function MyApp() {
//   const [count, setCount] = useState(0);

//   function handleClick() {
//     setCount(count + 1);
//   }

//   return (
//     <div>
//       <h1>welcome to my button</h1>
//       <MyButton count={count} onClick={handleClick} />
//       <MyButton count={count} onClick={handleClick} />

//       <h2>{user.name}</h2>
//       <img
//         className="avatar"
//         src={user.imageUrl}
//         alt={'Photo of ' + user.name}
//         style={{
//           width: user.imageSize,
//           height: user.imageSize,
//           borderRadius: '50%',
//         }}
//       />

//       <Greeting />
//       <ProductList />
//     </div>
//   );
// }



