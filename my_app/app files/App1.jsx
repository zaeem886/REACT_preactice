import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import'./App.css';




import  {Profile} from './container/Gallery.jsx';

import  Gallery from './container/Gallery.jsx';


export default function App() {
  return (
 <>
    <Gallery/>
    <Profile/>
    </>
  );
}
