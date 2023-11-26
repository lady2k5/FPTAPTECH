import { IconContext } from "react-icons";  // Corrected import statement
import { FaCheckCircle } from "react-icons/fa";

export default function ValidIcon() {  // Renamed the component to ValidIcon
  return (
    <IconContext.Provider value={{ color: "forestgreen", size: "1.7rem" }}>
      <FaCheckCircle />
    </IconContext.Provider>
  );
}
