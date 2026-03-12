// import { useState } from 'react';

// export default function Form() {
//   const [answer, setAnswer] = useState('');
//   const [error, setError] = useState(null);
//   const [status, setStatus] = useState('typing');

//   if (status === 'success') {
//     return <h1>That's right!</h1>
//   }

//   async function handleSubmit(e) {
//     e.preventDefault();
//     setStatus('submitting');
//     try {
//       await submitForm(answer);
//       setStatus('success');
//     } catch (err) {
//       setStatus('typing');
//       setError(err);
//     }
//   }

//   function handleTextareaChange(e) {
//     setAnswer(e.target.value);
//   }

//   return (
//     <>
//       <h2>City quiz</h2>
//       <p>
//         In which city is there a billboard that turns air into drinkable water?
//       </p>
//       <form onSubmit={handleSubmit}>
//         <textarea
//           value={answer}
//           onChange={handleTextareaChange}
//           disabled={status === 'submitting'}
//         />
//         <br />
//         <button disabled={
//           answer.length === 0 ||
//           status === 'submitting'
//         }>
//           Submit
//         </button>
//         {error !== null &&
//           <p className="Error">
//             {error.message}
//           </p>
//         }
//       </form>
//     </>
//   );
// }

// function submitForm(answer) {
//   // Pretend it's hitting the network.
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       let shouldError = answer.toLowerCase() !== 'lima'
//       if (shouldError) {
//         reject(new Error('Good guess but a wrong answer. Try again!'));
//       } else {
//         resolve();
//       }
//     }, 1500);
//   });
// // }
// import './App.css';
// import { useState } from 'react';

// function MyComponent () {
// const [cars,setCars]=useState([]);
// const [carYear,setCarYear]=useState(new Date().getFullYear());
// const [carMake,setCarMake]=useState('');
// const [carModel,setCarModel]=useState('');


// function handleAddCar(){
//   const year = Number(carYear);
//   const currentYear = new Date().getFullYear();

//   if(year < 1886 || year > currentYear){
//     alert("Please enter a valid year between 1886 and the current year.");
//     return;
//   }
//   if (carModel.trim() === '') {
//     alert("Please enter  model of the car.");
//     return;
//   }
//   if(carMake.trim() === ''){
//     alert("Please enter make of the car.");
//     return;
//   }
//   const newCar = {
//     year: carYear,
//     make: carMake,
//     model: carModel
//   };

//   setCars(c => [...c, newCar]);

//   setCarYear(new Date().getFullYear());
//   setCarMake('');
//   setCarModel('');
// }
// function handleRemoveCar(index){

//   setCars(c=>c.filter((_,i)=> i!=index));


// }
// function handleCarYearChange(e){
//   setCarYear(e.target.value);


  
// }
// function handleCarMakeChange(e){
  
// setCarMake(e.target.value);
// }
// function handleCarModelChange(e){
  
// setCarModel(e.target.value);  
// }


// return(<div>

// <h2>Car List</h2>

// <ul>
//   {
//     cars.map((car,index) => 
//       <li  className="car-item" key={index} onClick={() => handleRemoveCar(index)}>
//         {car.year} {car.make} {car.model}
//       </li>
//     )
//   }

// </ul>


// <input type="number" value={carYear} onChange={handleCarYearChange} /><br />
// <input type="text" value={carMake} onChange={handleCarMakeChange} placeholder='Enter car make' /><br />
// <input type="text" value={carModel} onChange={handleCarModelChange} placeholder='enter car model' /><br /><br /> 
// <button onClick={handleAddCar}>Add Car</button>

// </div>)


// }

// export default MyComponent;


