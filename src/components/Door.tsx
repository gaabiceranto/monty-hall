import styles from "./../styles/Door.module.css"
import DoorModel from "../model/porta";

interface DoorProps{
    door:DoorModel
}

export default function Door(props:DoorProps) {
    const {door} = props
  const select = door.select ? styles.select : ''
  return (
    <div className={styles.area}>
      <div className={`${styles.frame} ${select}`}>
        <div className={styles.door}>
          <div className={styles.number}>{door.number}</div>
          <div className={styles.door_handle}></div>
        </div>
      </div>
      <div className={styles.floor}></div>
    </div>
  );
}