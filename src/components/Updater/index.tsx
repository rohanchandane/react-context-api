import { useContext } from "react";
import AppContext from "../../context/AppContext";

function Updater() {
    const appContext = useContext(AppContext);
    function handleUpdate(event: any) {
        appContext?.updateTitle(event.target.value);
    }
  return (
    <div>
      <input type="text" placeholder="Enter new name" onChange={handleUpdate}/>
    </div>
  );
}
export default Updater;