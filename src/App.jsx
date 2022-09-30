import React, { useEffect, useState } from "react";
import axios from "axios";
import UserCard from "./components/UserCard";
export default function App(){

  //state
  const [ users, setUsers]=useState([]) //kosong ajananti pakai API

  //component dimount
  useEffect(()=>{

    //hit api json placeholder
    axios.get("https://jsonplaceholder.typicode.com/users")
    .then((res)=>{
      console.info(res.data)
      setUsers(res.data)
    })
    .catch((err)=>{
      console.error(err)
    })
  }, [])

  return (
    <div>
      <h1>Hello App</h1>
      {users.map((item)=>{
        return (
          <UserCard 
            name={item.name}
            email={item.email}
            phone={item.phone}
            key={item.id} 
          />
        )
      })}
    </div>
  )
}
