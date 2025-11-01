import {ImSpinner2} from "react-icons/im";
import s from './MiniSpinner.module.scss'
const MiniSpinner = ({big = false}:{big?: boolean}) => {

  return (
      <span><ImSpinner2 className={big ? s.bigSvg : s.svg }/></span>
  );
};

export default MiniSpinner;

