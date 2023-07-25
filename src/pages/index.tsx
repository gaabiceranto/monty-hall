import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import Gift from "../components/Gift";
import Door from "../components/Door";
import DoorModel from "../model/door";
import { useState } from "react";
import { creatDoors, updateDoors } from "@/functions/doors";

export default function Home() {
  const [doors, setDoors] = useState(creatDoors(3, 2));

  const renderDoors = () => {
    return doors.map((door) => {
      return <Door key={door.number} value={door} onChange={newDoor => setDoors(updateDoors(doors,newDoor))} />;
    });
  };

  return (
    <>
      <div style={{ display: "flex" }}>{renderDoors()}</div>
    </>
  );
}
