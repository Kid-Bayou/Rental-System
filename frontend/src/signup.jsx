import { useState } from "react";
// import { userContext } from "./userContext";

export default function register() {
  const [name, setName] = useState('');
  const [email,setEmail]=useState('');
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
    <div 
    className="bg-blue-50 h-screen flex items-center"
    >
      <form className="w-64 mx-auto mb-12" onSubmit={register}>
        <input
          value={name}
          onChange={ev => seName(ev.target.value)}
          type="text"
          placeholder="enter your name"
        //   className="block w-full rounded-sm mb-2"
        /> 
        <br></br>
        <input
          value={password}
          onChange={ev => setPassword(ev.target.value)}
          type="password"
          placeholder="password"
        //   className="block w-full rounded-sm mb-2"
        />
                <br></br>
        <input
          value={email}
          onChange={ev => setEmail(ev.target.value)}
          type="password"
          placeholder="enter your password"
        //   className="block w-full rounded-sm mb-2"
        />
                <br></br>

        <button type="submit"  className="item-center"
        // className="bg-blue-500 text-white block w-full p-2"
        >Register</button>
        
      </form>
    </div>
  );
}
