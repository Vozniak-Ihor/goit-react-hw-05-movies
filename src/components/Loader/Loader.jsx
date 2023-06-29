import css from './Loader.module.css'
import { ProgressBar } from "react-loader-spinner"
const Loader = () => {
    return (
        <ProgressBar
        height="80"
        width='10%'
        ariaLabel="progress-bar-loading"
        wrapperStyle={{}}
        wrapperClass={css.Loader}
        borderColor = '#333'
        barColor = '#333'
      />
    )
}
export default Loader