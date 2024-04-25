import { useState ,useContext} from "react";
// import axios from "axios"; // Don't forget to import axios
// import { userContext } from "./userContext";

export default function login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState(''); 


  return (
    <div 
    // className="bg-blue-50 h-screen flex items-center" 
    >
      <form 
    //   className="w-64 mx-auto mb-12" 
      onSubmit={login}>
        <input
          value={username}
          onChange={ev => setEmail(ev.target.value)}
          type="text"
          placeholder="enter your email "
        //   className="block w-full rounded-sm mb-2"
        />
        <input
          value={password}
          onChange={ev => setPassword(ev.target.value)}
          type="password"
          placeholder="password"
        //   className="block w-full rounded-sm mb-2"
        />
        <button type="submit"
        //  className="bg-blue-500 text-white block w-full p-2"
         >
            Login 
        </button>
      </form>
    </div>
  );
}
