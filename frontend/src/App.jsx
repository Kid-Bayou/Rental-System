import React, { useState } from 'react'; // Added React import
import Signup from './signup'; // Renamed component to start with uppercase

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
        <Route path='path' component={component}/>
        
       <p className='text-lg font-medium items-center'>sign up  </p>
       <Signup />
    </>
  );
}

export default App;
