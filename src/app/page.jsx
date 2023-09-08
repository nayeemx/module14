"use client";
import React from 'react'
import {useRouter} from "next/navigation";
import {useState} from "react";

const page = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
  };
  const Register = async () => {
    try {
      // send a post request to the api endpoint
      const response = await fetch("/api/email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(email), // convert the object to JSON
      });
      if (response.ok){
        // registration was successful, you can handle this accordingly
        router.replace("/VerifyPage");
        console.log("registration done");
      }
      else{
        //registration failed, handle error
        console.error("reg fail");
      }
    }catch(error){
      console.error("err during reg:", error);
    }
  };
  return (
    <main className="bg-slate h-screen flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-md w-96">
        <span className="block text-center text-xl mb-4">Please Register</span>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex flex-col">
            <label htmlFor="email" className="text-gray-700">
              Email:
            </label>
            <input
              type="email"
              id="email"
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border border-gray-400 p-2 rounded-md focus:outline-none focus:border-blue-500 text-emerald-500"
            />
          </div>
          <button
            type="submit"
            onClick={Register}
            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
          >
            Submit
          </button>
        </form>
      </div>
    </main>
  );
}

export default page;