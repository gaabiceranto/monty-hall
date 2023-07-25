import DoorModel from "@/model/door";

export function creatDoors(amount: number, select: number): DoorModel[] {
    
    return Array.from({ length: amount }, function (_,i)  {
    const number = i + 1;
    const haveAGift = number === select;
    return new DoorModel(number, haveAGift);
  });
}

export const updateDoors = (doors: DoorModel[], modifyDoor: DoorModel): DoorModel[] => {
  return doors.map((currentDoor) => {
    const likeAmodify = currentDoor.number === modifyDoor.number;
    
    if(likeAmodify){
        return modifyDoor
    } else {
        return modifyDoor.open ? currentDoor : currentDoor.unselect()
    }

  });
};
