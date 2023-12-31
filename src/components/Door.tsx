import styles from "./../styles/Door.module.css"
import DoorModel from "../model/door";

interface DoorProps{
    value:DoorModel
    onChange: (newDoor: DoorModel) => void
    
}

export default function Door(props:DoorProps) {
  const door = props.value
  const select = door.select && !door.open ? styles.select : ''

  const changeSelection = (e: any) => props.onChange(door.changeSelection());
  const open = (e: any) => {
    e.stopPropagation()
    props.onChange(door.toOpen());
  }

  function renderDoor(){
    return(
      <div className={styles.door}>
          <div className={styles.number}>{door.number}</div>
          <div className={styles.door_handle} onClick={open}></div>
        </div>
    )
  }
  

  return (
    <div className={styles.area} onClick={changeSelection}>
      <div className={`${styles.frame} ${select}`}>
      {door.open ? false : renderDoor()}
      </div>
      <div className={styles.floor}></div>
    </div>
  );
}