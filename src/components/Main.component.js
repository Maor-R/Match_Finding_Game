import { ImHappy, ImSad } from "react-icons/im";
import { GrCheckmark } from "react-icons/gr";
import { HiOutlineX } from "react-icons/hi";
import { NUM_ANIMALS } from "../constants/index";

import "../index.css";
function Main({ nextImg, sumCorrectAnswer, sumInCorrectAnswer }) {
  return (
    < >
      <div className="im-sad">
        <ImSad  className="fill" />
        
      <p className="incorrect">{sumInCorrectAnswer}</p>
      </div>
      <div className="im-happy">
        <ImHappy className="fill" />
        <p className="correct">{sumCorrectAnswer}</p>

      </div>

      <button
        className="btn x"
        onClick={() => {
          if (sumCorrectAnswer + sumInCorrectAnswer <= NUM_ANIMALS-1) {
            nextImg(false);
          }
        }}
      >
        <HiOutlineX />
      </button>
      <button
        className="btn check-mark"
        onClick={() => {
          if (sumCorrectAnswer + sumInCorrectAnswer <= NUM_ANIMALS-1) {
            nextImg(true);
          }
        }}
      >
        <GrCheckmark />
      </button>
      {/* <label></label> */}
    </>
  );
}

export default Main;
