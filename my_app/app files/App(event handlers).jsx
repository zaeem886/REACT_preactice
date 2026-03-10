import React, { useState } from "react";
import "./App.css";
// export default function Button(){

// // function handleClick(){
// //     alert("Button clicked!");
// // }
// // return (
// // <div className="div_main">
// //     <button className="button_main" onClick={handleClick}>Click me</button>
// // </div>
// // );
// // }

// return (
//     <button className="button_main" onClick={()=> alert ("button clicked!")}>Click me</button>
// );
// }

//pasing event hadlers as props

// function Button({ onClick, children }) {
//   return (
//     <button  onClick={onClick}>
//       {children}
//     </button>
//   );
// }

// function PlayButton({movieName}){

//     function handlePlay(){
//         alert(`Playing movie ${movieName}!`);
//     }

//     return (
//         <Button onClick={handlePlay}>
//             play "{movieName}"
//         </Button>
//     )
// }

// function UploadButton(){
// return(
//     <Button onClick={()=> alert("Uploading file...")}>
//         Upload file
//     </Button>
// )



// }

// export default function Toolbar() {
//   const [movieName, setMovieName] = useState("");

//   return (
//     <div>
//       <input
//         type="text"
//         placeholder="Enter movie name"
//         value={movieName}
//         onChange={(e) => setMovieName(e.target.value)}
//       />
//       <PlayButton movieName={movieName} />
//       <UploadButton />
//     </div>
//   );
// }

//custom event handlers names 
// on folowed by a capital letter is a convention

// export default function App() {
//   return (
//     <Toolbar
//       onPlayMovie={() => alert('Playing!')}
//       onUploadImage={() => alert('Uploading!')}
//     />
//   );
// }

// function Toolbar({ onPlayMovie, onUploadImage }) {
//   return (
//     <div>
//       <Button onClick={onPlayMovie}>
//         Play Movie
//       </Button>
//       <Button onClick={onUploadImage}>
//         Upload Image
//       </Button>
//     </div>
//   );
// }

// function Button({ onClick, children }) {
//   return (
//     <button onClick={onClick}>
//       {children}
//     </button>
//   );
// }


//stopping event propagation

function Button({ onClick, children }) {
  return (
    <button onClick={e => {
      e.stopPropagation();
      onClick();
    }}>
      {children}
    </button>
  );
}

export default function Toolbar() {
  return (
    <div className="Toolbar" onClick={() => {
      alert('You clicked on the toolbar!');
    }}>
      <Button onClick={() => alert('Playing!')}>
        Play Movie
      </Button>
      <Button onClick={() => alert('Uploading!')}>
        Upload Image
      </Button>
    </div>
  );
}
