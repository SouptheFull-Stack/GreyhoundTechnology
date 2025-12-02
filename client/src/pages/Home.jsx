// import { useState } from 'react';
import CardBody from "../components/BlogCard/CardBody";

export default function Home() {
     return (
          <div className="mx-140 flex flex-row flex-wrap gap-4 shrink-2 p-5">
               <CardBody />
               <CardBody />
               <CardBody />
          </div>
     )
}