import React, { useState } from 'react'; // Added React import
import Register from './signup'; // Renamed component to start with uppercase

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
       <p className='text-lg font-medium items-center'>sign up  </p>
       <Register /> {/* Fixed component name to start with uppercase */}
    </>
  );
}

export default App;
