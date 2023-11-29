import React, { useState } from 'react';
import { generateRandomId } from '../util/Utils';

const SignUp = () => {
 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
 
  const handleSignUp = () => {
   
    console.log('Email:', email);
    console.log('Password:', password);

    const obj = {
        id:generateRandomId(),
        email: email,
        password: password
    }
    UserService.register(obj).then((res)=>{
        console.log(res)
    })
  };

  return (
    <div className="max-w-md mx-auto my-10 p-6 bg-white rounded-md shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Sign Up</h2>
      <form>
        
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Email:
          </label>
          <input
            type="email"
            className="w-full p-2 border rounded-md"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Password:
          </label>
          <input
            type="password"
            className="w-full p-2 border rounded-md"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button
          type="button"
          className="bg-green-500 text-white p-2 rounded-md hover:bg-green-600"
          onClick={handleSignUp}
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignUp;
