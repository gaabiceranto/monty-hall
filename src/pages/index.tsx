import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import Gift from '../components/Gift'
import Door from '../components/Door'
import DoorModel from '../model/door'
import { useState } from 'react'


export default function Home() {
  const [p1,setP1] = useState(new DoorModel(1))
  const [text,setText] = useState("...")

  return (
    <>
     <div style={{display:"flex", flexDirection:"column"}}>

       <Door value={p1} onChange={newDoor => setP1(newDoor)} />
       
     </div>
    </>
  )
}