import React from "react";
import { useParams } from "react-router-dom";

function Register() {
  const { id } = useParams();

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Register for Event {id}</h1>
      <form className="space-y-4">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
            required
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded-md"
        >
          Register
        </button>
      </form>
    </div>
  );
}

export default Register;
