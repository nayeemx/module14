"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

const page = () => {
  const [formValue, SetFormValue] = useState({
    password: "1234",
  });
  const router = useRouter();
  const inputChange = (name, value) => {
    SetFormValue((formValue) => ({
      ...formValue,
      [name]: value,
    }));
  };
  const Submit = async (e) => {
    e.preventDefault();
  };
  const handlechange = async () => {
    if (formValue.password.length === 0) {
      alert("Password Required");
    } else {
      const config = { method: "POST", body: JSON.stringify(formValue) };
      const response = await fetch("/api/verify", config);
      const json = await response.json();
      if (json["status"] === true) {
        router.replace("/dashboard");
      } else {
        alert(json["message"]);
      }
    }
  };
  return (
    <main className="bg-slate h-screen flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-md w-96">
        <label className="block text-center text-xl mb-4">
          Type Verification Code
        </label>
        <form onSubmit={Submit} className="space-y-4">
          <div className="flex flex-col">
            <input
              type="text"
              placeholder="Verification code"
              value={formValue.password}
              onChange={(e) => inputChange("password", e.target.value)}
              className="border border-gray-400 p-2 rounded-md focus:outline-none focus:border-blue-500 text-emerald-500"
            />
          </div>
          <button
            type="submit"
            onClick={handlechange}
            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
          >
            Submit
          </button>
        </form>
      </div>
    </main>
  );
};

export default page;
