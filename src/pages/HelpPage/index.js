import { Outlet } from "react-router-dom";
import HelpMenu from "../../components/HelpMenu/HelpMenu";

function HelpPage() {
    return (
      <>
        <h1>HELP</h1>
        <p>This is a To-do application, it will help you organize your tasks,
            let you know which are compleated and remove the ones that you no
            longer need to keep track of
        </p>
        <Outlet />
        <HelpMenu />
      </>
    );
  }
  
  export default HelpPage;