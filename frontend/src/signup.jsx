import {react, useState } from "react";

// import { userContext } from "./userContext";

export default function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState(''); 
  
//    const[setUsername,setId]=useContext(userContext);

//   async function register(ev) {
//     ev.preventDefault(); // Prevent default form submission behavior
//     try {
//       const {data}= await axios.post('/register', { username, password });
//       // Optionally, you can handle successful registration here
//       console.log("Registration successful");
//     } catch (error) {
//       // Handle registration error here
//       console.error("Registration failed:", error);
//     }
//   }

  return (
    <div className="bg-blue-50 h-screen flex items-center">
      <form className="w-64 mx-auto mb-12" onSubmit={register}>
        <div className="mb-4">
          <label htmlFor="name" className="block mb-2">Name:</label>
          <input
            id="name"
            value={name}
            onChange={ev => setName(ev.target.value)}
            type="text"
            placeholder="Enter your name"
            className="block w-full rounded-sm"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block mb-2">Password:</label>
          <input
            id="password"
            value={password}
            onChange={ev => setPassword(ev.target.value)}
            type="password"
            placeholder="Enter your password"
            className="block w-full rounded-sm"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block mb-2">Email:</label>
          <input
            id="email"
            value={email}
            onChange={ev => setEmail(ev.target.value)}
            type="email"
            placeholder="Enter your email"
            className="block w-full rounded-sm"
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white block w-full p-2">Sign Up </button>
      </form>
    </div>
  );
}
