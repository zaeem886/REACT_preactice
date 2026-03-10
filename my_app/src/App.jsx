import { useState } from 'react';

// let nextId = 0;
//bad practce to mutate state directly, it will not trigger a re-render
// export default function List() {
//   const [name, setName] = useState('');
//   const [artists, setArtists] = useState([]);

//   return (
//     <>
//       <h1>Inspiring sculptors:</h1>
//       <input
//         value={name}
//         onChange={e => setName(e.target.value)}
//       />
//       <button onClick={() => {
//         artists.push({
//           id: nextId++,
//           name: name,
//         });
//       }}>Add</button>
//       <ul>
//         {artists.map(artist => (
//           <li key={artist.id}>{artist.name}</li>
//         ))}
//       </ul>
//     </>
//   );
// }



//instead of mutating the state directly, we should create a new array with the new artist and set it as the new state
//adding in list and rendering the list with the new item at the top of the list

// let nextId = 0;


// export default function List() {
//   const [name, setName] = useState('');
//   const [artists, setArtists] = useState([]);
//   const addArtist = () => {
//  setArtists([
//   { id: nextId++, name: name },
//   ...artists // Put old items at the end
// ]);
//     setName('');
//   };

//   const handleKeyDown = (e) => {
//     if (e.key === 'Enter') {
//       addArtist();
//     }
//   };

//   return (
//     <>
//       <h1>Inspiring sculptors:</h1>
//       <input
//         value={name}
//         onChange={e => setName(e.target.value)}
//         onKeyDown={handleKeyDown}
//       />
//       <button onClick={addArtist}>Add</button>
//       <ul>
//         {artists.map(artist => (
//           <li key={artist.id}>{artist.name}</li>
//         ))}
//       </ul>
//     </>
//   );
// }

//removing from an array using filter method


// let initialArtists = [
//   { id: 0, name: 'Marta Colvin Andrade' },
//   { id: 1, name: 'Lamidi Olonade Fakeye'},
//   { id: 2, name: 'Louise Nevelson'},
// ];

// export default function List() {
//   const [artists, setArtists] = useState(
//     initialArtists
//   );

//   return (
//     <>
//       <h1>Inspiring sculptors:</h1>
//       <ul>
//         {artists.map(artist => (
//           <li key={artist.id}>
//             {artist.name}{' '}
//             <button onClick={() => {

//               setArtists(
//                 artists.filter(a =>
//                   a.id !== artist.id,

//                 )
//               );

//             }}>
//               Delete
//             </button>
//           </li>
//         ))}
//       </ul>
//     </>
//   );
// }


//updating an item in an array using map method



// let initialShapes = [
//   { id: 0, type: 'circle', x: 50, y: 100 },
//   { id: 1, type: 'square', x: 150, y: 100 },
//   { id: 2, type: 'circle', x: 250, y: 100 },
// ];

// export default function ShapeEditor() {
//   const [shapes, setShapes] = useState(
//     initialShapes
//   );

//   function handleClick() {
//     const nextShapes = shapes.map(shape => {
//       if (shape.type === 'square') {
//         // No change
//         return shape;
//       } else {
//         // Return a new circle 50px below
//         return {
//           ...shape,
//           y: shape.y + 50,
//         };
//       }
//     });
//     // Re-render with the new array
//     setShapes(nextShapes);
//   }

//   return (
//     <>
//       <button onClick={handleClick}>
//         Move circles down!
//       </button>
//       {shapes.map(shape => (
//         <div
//           key={shape.id}
//           style={{
//           background: 'purple',
//           position: 'absolute',
//           left: shape.x,
//           top: shape.y,
//           borderRadius:
//             shape.type === 'circle'
//               ? '50%' : '',
//           width: 20,
//           height: 20,
//         }} />
//       ))}
//     </>
//   );
// }


//replacing an item in an array using map method


// let initialCounters = [
//   0, 0, 0
// ];

// export default function CounterList() {
//   const [counters, setCounters] = useState(
//     initialCounters
//   );

//   function handleIncrementClick(index) {
//     const nextCounters = counters.map((c, i) => {
//       if (i === index) {
//         // Increment the clicked counter
//         return c + 1;
//       } else {
//         // The rest haven't changed
//         return c;
//       }
//     });
//     setCounters(nextCounters);
//   }

//   return (
//     <ul>
//       {counters.map((counter, i) => (
//         <li key={i}>
//           {counter}
//           <button onClick={() => {
//             handleIncrementClick(i);
//           }}>+1</button>
//         </li>
//       ))}
//     </ul>
//   );
// }

//inserting an item in an array using slice method


// let nextId = 3;
// const initialArtists = [
//   { id: 0, name: 'Marta Colvin Andrade' },
//   { id: 1, name: 'Lamidi Olonade Fakeye'},
//   { id: 2, name: 'Louise Nevelson'},
// ];

// export default function List() {
//   const [name, setName] = useState('');
//   const [artists, setArtists] = useState(
//     initialArtists
//   );

//   function handleClick() {
//     const insertAt = 1; // Could be any index
//     const nextArtists = [
//       // Items before the insertion point:
//       ...artists.slice(0, insertAt),
//       // New item:
//       { id: nextId++, name: name },
//       // Items after the insertion point:
//       ...artists.slice(insertAt)
//     ];
//     setArtists(nextArtists);
//     setName('');
//   }

//   return (
//     <>
//       <h1>Inspiring sculptors:</h1>
//       <input
//         value={name}
//         onChange={e => setName(e.target.value)}
//       />
//       <button onClick={handleClick}>
//         Insert
//       </button>
//       <ul>
//         {artists.map(artist => (
//           <li key={artist.id}>{artist.name}</li>
//         ))}
//       </ul>
//     </>
//   );
// }


//reversing an array without mutating the original array using slice and reverse method


// const initialList = [
//   { id: 0, title: 'Big Bellies' },
//   { id: 1, title: 'Lunar Landscape' },
//   { id: 2, title: 'Terracotta Army' },
// ];

// export default function List() {
//   const [list, setList] = useState(initialList);

//   function handleClick() {
//     const nextList = [...list];
//     nextList.reverse();
//     setList(nextList);
//   }

//   return (
//     <>
//       <button onClick={handleClick}>
//         Reverse
//       </button>
//       <ul>
//         {list.map(artwork => (
//           <li key={artwork.id}>{artwork.title}</li>
//         ))}
//       </ul>
//     </>
//   );
// }

