"use client";
import React from "react";
import { useSession } from "next-auth/react";

export default function UpdateUser() {
  const { data, update } = useSession();

  const [name, setName] = React.useState("");

  return (
    <div>
      <input
        className='border-2'
        onChange={(e) => setName(e.target.value)}
        type='text'
        name=''
        id=''
      />
      <button
        className='
      cursor-pointer'
        onClick={() => update({ name })}
      >
        Submit
      </button>
      <h1> Session:{data?.user.name}</h1>
      <h2>stateName:{name}</h2>
    </div>
  );
}
