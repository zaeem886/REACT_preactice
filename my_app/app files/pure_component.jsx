// //example of a pure component that receives data via props and renders it

// function Recipe({ drinkers }) {
//   return (
//     <ol>    
//       <li>Boil {drinkers} cups of water.</li>
//       <li>Add {drinkers} spoons of tea and {0.5 * drinkers} spoons of spice.</li>
//       <li>Add {0.5 * drinkers} cups of milk to boil and sugar to taste.</li>
//     </ol>
//   );
// }


// export default function App() {
//   return (
//     <section>
//       <h1>Spiced Chai Recipe</h1>
//       <h2>For two</h2>
//       <Recipe drinkers={2} />
//       <h2>For a gathering</h2>
//       <Recipe drinkers={4} />
//     </section>
//   );
// }

//guest is a variable that is outside the component and is being modified by the component, this is not a pure component and can lead to unexpected behavior, as the value of guest will be shared across all instances of the Cup component and will be incremented every time a Cup component is rendered.

// let guest=0;

// function Cup(){

//     guest=guest+1;
//     return <p>Guest {guest}</p>;
// }

// export default function App() {
//   return (
//     <div>
//       <Cup />
//       <Cup />
//       <Cup />
//     </div>
//   );
// }
// we can fix this by passing the guest as a prop to the cup component 
//  let guest=0;

// function Cup({ guest }) {
//   return <h2>Tea cup for guest #{guest}</h2>;
// }

// export default function TeaSet() {
//     const cups=[];

//     for (let i=0;i<12;i++){

//         cups.push(<Cup key ={i} guest={i+1} />);
//     }
//   return cups
   
  
// }
// // you can change the varisble which was made inside the component but it will not affect the other instances of the component as they are not sharing the same variable.