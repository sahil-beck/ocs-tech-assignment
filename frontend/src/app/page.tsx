"use client";
import React, { useState } from "react";
import axios from "axios";
import { LOGIN_ROUTE } from "../utils/ApiRoutes.js";

const App = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = async () => {
    try {
      const { data } = await axios.post(LOGIN_ROUTE, { username, password });
      console.log(data);
    }
    catch (error) {
      console.log(error);
    }
  }
  return (
    <div className="flex h-screen w-screen justify-center items-center">
      <div className="flex flex-col h-64 w-96 bg-gray-100 rounded-lg drop-shadow-lg px-6 py-6 gap-2">
        <div className="flex flex-col gap-2">
          <text className="font-bold text-lg">Username</text>
          <input className="h-10 w-full px-3 outline-none text-sm rounded-md border-zinc-300 border-[1px]" type="text" value={username} onChange={(event) => setUsername(event.target.value)} />
        </div>
        <div className="flex flex-col gap-2">
          <text className="font-bold text-lg">Password</text>
          <input className="h-10 w-full px-3 outline-none text-sm rounded-md border-zinc-300 border-[1px]" type="text" value={password} onChange={(event) => setPassword(event.target.value)} />
        </div>
        <div>
          <button className="text-sm text-white bg-green-600 hover:bg-green-700 px-5 py-2 rounded-md drop-shadow-lg" onClick={handleLogin}>Sign In</button>
        </div>
      </div>
    </div>
  )
}

export default App;