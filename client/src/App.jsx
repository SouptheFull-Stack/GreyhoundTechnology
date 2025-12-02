// import { useState } from 'react'
// import hero from '../public/Untitled.svg';
import { Outlet } from 'react-router-dom';
import './App.css';
// import circuits from "../public/circuits.svg";
// bg-[url(../../../public/Group.svg)]

export default function App() {

  return (
    <main className="w-full h-full bg-[url(../../../public/background.svg)] bg-no-repeat">
      <Outlet />
    </main >
  )
}

/* <img src={hero} className="logo react" alt="React logo" /> */