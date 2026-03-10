import List from "./List.jsx";
import './App.css';

function App() {

    const friuts=[{id:1,name: 'apple',calories: 95},
     {id:2,name: 'banana',calories: 105},
      {id:3,name: 'orange',calories: 62}];

          const vegetables=[{id:4,name: 'carrot',calories: 41},
     {id:5,name: 'broccoli',calories: 55},
      {id:6,name: 'spinach',calories: 23}];

  return (
    <div>
        {friuts.length>0 ? <List items={friuts} category="fruits" /> : null}    
        {vegetables.length>0 ? <List items={vegetables}  /> : null}
    </div>
  );
}

export default App; 